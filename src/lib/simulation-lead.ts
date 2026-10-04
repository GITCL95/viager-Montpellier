import { calculateViager, type ViagerInputs } from "./viager-calculation";

const FORM_ENDPOINT = "https://formspree.io/f/xgogavvr";

export type SimulationLeadInputs = {
  email: string;
  phone: string;
  calculation: ViagerInputs;
};

export async function submitSimulationLead({
  email,
  phone,
  calculation,
}: SimulationLeadInputs): Promise<void> {
  const trimmedEmail = typeof email === "string" ? email.trim() : "";
  const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    throw new Error("Renseignez une adresse e-mail valide.");
  }
  const phoneDigits = trimmedPhone.replace(/\D/g, "");
  if (
    !/^\+?[\d ()\u00a0.-]+$/.test(trimmedPhone) ||
    phoneDigits.length < 8 ||
    phoneDigits.length > 15
  ) {
    throw new Error("Renseignez un numéro de téléphone valide, de 8 à 15 chiffres.");
  }

  const result = calculateViager(calculation);
  const money = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  });
  const percentage = new Intl.NumberFormat("fr-FR", {
    style: "percent",
    maximumFractionDigits: 2,
  });
  const sellersSummary = calculation.sellers
    .map(({ age, sex }, index) => `Vendeur ${index + 1} : ${age} ans (${sex})`)
    .join("\n");
  const summary = [
    `Valeur du bien : ${money.format(calculation.propertyValue)}`,
    `Formule : viager ${calculation.occupation === "occupe" ? "occupé" : "libre"}`,
    sellersSummary,
    `Taux d'actualisation : ${percentage.format(calculation.discountRate)}`,
    `Taux locatif : ${percentage.format(calculation.rentalRate)}`,
    `Part du bouquet : ${percentage.format(calculation.bouquetShare)}`,
    `Valeur après décote : ${money.format(result.occupiedValue)}`,
    `Décote d'occupation : ${money.format(result.occupationDiscount)}`,
    `Bouquet indicatif : ${money.format(result.bouquet)}`,
    `Rente mensuelle indicative : ${money.format(result.monthlyAnnuity)}`,
  ].join("\n");

  const data = new FormData();
  data.set("_subject", "Simulation viager — Montpellier");
  data.set("request_type", "simulation");
  data.set("email", trimmedEmail);
  data.set("phone", trimmedPhone);
  data.set("source", typeof window !== "undefined" ? window.location.href : "");
  data.set("property_value", String(calculation.propertyValue));
  data.set("occupation", calculation.occupation);
  data.set("seller_count", String(calculation.sellers.length));
  data.set("sellers", JSON.stringify(calculation.sellers));
  data.set("discount_rate", String(calculation.discountRate));
  data.set("rental_rate", String(calculation.rentalRate));
  data.set("bouquet_share", String(calculation.bouquetShare));
  data.set("occupied_value", String(result.occupiedValue));
  data.set("occupation_discount", String(result.occupationDiscount));
  data.set("bouquet", String(result.bouquet));
  data.set("monthly_annuity", String(result.monthlyAnnuity));
  data.set("remaining_capital", String(result.remainingCapital));
  data.set("annuity_factor", String(result.annuityFactor));
  data.set("summary", summary);

  let response: Response;
  try {
    response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(20_000),
    });
  } catch {
    throw new Error("Impossible d'envoyer votre simulation. Vérifiez votre connexion et réessayez.");
  }
  if (!response.ok) {
    throw new Error("L'envoi de votre simulation a échoué. Réessayez ou contactez notre équipe.");
  }
}
