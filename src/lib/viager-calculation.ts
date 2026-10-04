import mortalityData from "./data/viager-mortality.json";

export type ViagerSeller = {
  age: number;
  sex: "H" | "F";
};

export type ViagerInputs = {
  propertyValue: number;
  occupation: "occupe" | "libre";
  sellers: Array<ViagerSeller>;
  discountRate: number;
  rentalRate: number;
  bouquetShare: number;
};

export type ViagerResult = {
  occupiedValue: number;
  occupationDiscount: number;
  bouquet: number;
  monthlyAnnuity: number;
  annuityFactor: number;
  remainingCapital: number;
};

export const VIAGER_MORTALITY_ATTRIBUTION = mortalityData.attribution;

const mortality: Record<ViagerSeller["sex"], Record<string, number>> =
  mortalityData.tables;

function requireRate(value: number, maximum: number, label: string): void {
  if (!Number.isFinite(value) || value < 0 || value > maximum) {
    throw new RangeError(`${label} doit être compris entre 0 et ${maximum}.`);
  }
}

function survivalProbability(seller: ViagerSeller, years: number): number {
  const attainedAge = seller.age + years;
  if (attainedAge > mortalityData.maxAge) return 0;

  const initialSurvivors = mortality[seller.sex][seller.age];
  const futureSurvivors = mortality[seller.sex][attainedAge];
  if (
    !Number.isFinite(initialSurvivors) ||
    initialSurvivors <= 0 ||
    !Number.isFinite(futureSurvivors) ||
    futureSurvivors < 0
  ) {
    throw new Error("La table de survie est indisponible pour cet âge.");
  }

  return futureSurvivors / initialSurvivors;
}

/**
 * Approximation économique reprise du simulateur Auguste : annuité annuelle
 * à terme d'avance, tronquée après 104 ans. Pour deux vendeurs, la rente
 * court jusqu'au dernier survivant, sous une hypothèse d'indépendance.
 * Les montants restent non arrondis ; leur présentation appartient à l'UI.
 */
export function calculateViager(input: ViagerInputs): ViagerResult {
  if (!input || !Number.isFinite(input.propertyValue) || input.propertyValue <= 0) {
    throw new RangeError("La valeur du bien doit être un montant positif.");
  }
  if (input.occupation !== "occupe" && input.occupation !== "libre") {
    throw new RangeError("Choisissez un viager occupé ou libre.");
  }
  if (
    !Array.isArray(input.sellers) ||
    input.sellers.length < 1 ||
    input.sellers.length > 2
  ) {
    throw new RangeError("Renseignez un ou deux vendeurs.");
  }
  for (const seller of input.sellers) {
    if (!seller || !Number.isInteger(seller.age) || seller.age < 50 || seller.age > 100) {
      throw new RangeError("L'âge de chaque vendeur doit être un entier de 50 à 100 ans.");
    }
    if (seller.sex !== "H" && seller.sex !== "F") {
      throw new RangeError("Renseignez H ou F pour chaque vendeur.");
    }
  }
  requireRate(input.discountRate, 0.1, "Le taux d'actualisation");
  requireRate(input.rentalRate, 0.1, "Le taux locatif");
  requireRate(input.bouquetShare, 1, "La part du bouquet");

  const lastYear = mortalityData.maxAge - Math.min(...input.sellers.map(({ age }) => age));
  const discountFactor = 1 / (1 + input.discountRate);
  let annuityFactor = 0;
  for (let year = 0; year <= lastYear; year += 1) {
    const firstSurvival = survivalProbability(input.sellers[0], year);
    const secondSeller = input.sellers[1];
    const survival = secondSeller
      ? 1 - (1 - firstSurvival) * (1 - survivalProbability(secondSeller, year))
      : firstSurvival;
    annuityFactor += survival * discountFactor ** year;
  }

  const occupationDiscount = input.occupation === "occupe"
    ? input.propertyValue * (input.rentalRate * annuityFactor)
    : 0;
  const occupiedValue = input.propertyValue - occupationDiscount;
  if (!Number.isFinite(occupiedValue) || occupiedValue <= 0) {
    throw new RangeError(
      "La décote d'occupation atteint la valeur du bien. Revoyez le taux locatif ou la situation des vendeurs.",
    );
  }

  const bouquet = occupiedValue * input.bouquetShare;
  const remainingCapital = occupiedValue - bouquet;
  const monthlyAnnuity = remainingCapital / annuityFactor / 12;

  return {
    occupiedValue,
    occupationDiscount,
    bouquet,
    monthlyAnnuity,
    annuityFactor,
    remainingCapital,
  };
}
