"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "./Icon";
import { SectionButton } from "./SectionButton";
import { calculateViager, type ViagerInputs } from "@/lib/viager-calculation";

const money = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const inputClass = "min-h-12 min-w-0 w-full rounded-lg border border-border bg-white px-3 py-2 text-base font-normal text-secondary focus:outline-2 focus:outline-offset-2 focus:outline-primary";
const buttonClass = "inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const labels = ["Le bien", "Les vendeurs", "Votre simulation"];

export function ViagerSimulator() {
  const [step, setStep] = useState(0);
  const [propertyValue, setPropertyValue] = useState("");
  const [occupation, setOccupation] = useState<"occupe" | "libre">("occupe");
  const [sellerCount, setSellerCount] = useState(1);
  const [sellers, setSellers] = useState([{ age: "", sex: "F" as "H" | "F" }, { age: "", sex: "H" as "H" | "F" }]);
  const [discountRate, setDiscountRate] = useState("3");
  const [rentalRate, setRentalRate] = useState("4");
  const [bouquetShare, setBouquetShare] = useState(30);
  const [calculation, setCalculation] = useState<ViagerInputs | null>(null);
  const [error, setError] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(step);

  useEffect(() => {
    if (previousStep.current !== step) titleRef.current?.focus();
    previousStep.current = step;
  }, [step]);

  function updateSeller(index: number, key: "age" | "sex", value: string) {
    setSellers(previous => previous.map((seller, i) => i === index ? { ...seller, [key]: value } : seller));
    setError("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (step === 0) { setStep(1); return; }
    try {
      const inputs: ViagerInputs = {
        propertyValue: Number(propertyValue), occupation,
        sellers: sellers.slice(0, sellerCount).map(seller => ({ age: Number(seller.age), sex: seller.sex })),
        discountRate: Number(discountRate) / 100, rentalRate: Number(rentalRate) / 100, bouquetShare: 0.3,
      };
      calculateViager(inputs);
      setCalculation(inputs);
      setBouquetShare(30);
      setStep(2);
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Vérifiez les informations de votre simulation."); }
  }

  const result = step === 2 && calculation ? calculateViager({ ...calculation, bouquetShare: bouquetShare / 100 }) : null;

  return (
    <div id="simulateur-viager" className="min-w-0 scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-white text-secondary">
      <div className="px-6 pt-6 sm:px-7 sm:pt-7">
        <ol aria-label="Étapes de la simulation" className="flex gap-4 border-b border-border pb-5 text-[11px] sm:gap-6">
          {labels.map((label, index) => <li key={label} aria-current={step === index ? "step" : undefined} className={step === index ? "font-semibold text-secondary" : "text-text"}><span className={`mr-1.5 ${step >= index ? "text-primary" : "text-muted"}`}>0{index + 1}</span>{label}</li>)}
        </ol>
        <h2 ref={titleRef} tabIndex={-1} className="mt-6 text-2xl font-semibold leading-tight tracking-tight outline-none">
          {step === 0 ? "Donnons une base à votre projet." : step === 1 ? "Qui vend le logement ?" : "Bouquet et rente, à votre rythme."}
        </h2>
      </div>

      {step < 2 ? (
        <form onSubmit={submit} onInvalid={event => { (event.target as HTMLElement).closest("details")?.setAttribute("open", ""); }} className="px-6 pb-6 sm:px-7 sm:pb-7">
          {step === 0 ? (
            <div className="mt-6 space-y-6">
              <fieldset>
                <legend className="text-xs font-medium">Après la vente, le logement sera…</legend>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {([{ value: "occupe", title: "Occupé", note: "Le vendeur reste" }, { value: "libre", title: "Libre", note: "Le bien est disponible" }] as const).map(item => (
                    <label key={item.value} className={`relative flex cursor-pointer flex-col rounded-lg border px-4 py-3 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary ${occupation === item.value ? "border-secondary bg-[#f0f5f7]" : "border-border"}`}>
                      <input className="absolute right-3 top-4 accent-primary" type="radio" name="occupation" value={item.value} checked={occupation === item.value} onChange={() => setOccupation(item.value)} />
                      <span className="pr-5 text-sm font-semibold">{item.title}</span><span className="mt-1 text-xs leading-relaxed text-text">{item.note}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="grid gap-2 text-xs font-medium">
                Valeur estimée du bien libre (€)
                <input required type="number" inputMode="decimal" min="1" step="any" value={propertyValue} onChange={event => setPropertyValue(event.target.value)} placeholder="Ex. 300 000" aria-describedby="value-help" className={inputClass} />
              </label>
              <p id="value-help" className="text-xs leading-[1.8] text-text">Le prix que pourrait avoir votre logement sans occupation. Vous ne le connaissez pas ? <SectionButton sectionId="demande-estimation" className="rounded-sm font-medium text-secondary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-primary">Faites-le évaluer avec un conseiller.</SectionButton></p>
            </div>
          ) : (
            <div className="mt-6 space-y-5">
              <fieldset>
                <legend className="text-xs font-medium">Nombre de bénéficiaires de la rente</legend>
                <div className="mt-2 flex gap-5 text-sm">
                  {[1, 2].map(count => <label key={count} className="flex cursor-pointer items-center gap-2"><input type="radio" name="seller-count" value={count} checked={sellerCount === count} onChange={() => setSellerCount(count)} className="h-4 w-4 accent-primary" />{count === 1 ? "Une personne" : "Deux personnes"}</label>)}
                </div>
              </fieldset>
              {sellers.slice(0, sellerCount).map((seller, index) => (
                <fieldset key={index}>
                  <legend className="mb-2 text-xs text-text">{sellerCount === 1 ? "Le vendeur" : `Personne ${index + 1}`}</legend>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="grid gap-2 text-xs font-medium">Âge{sellerCount === 2 ? ` · personne ${index + 1}` : ""}<input required type="number" inputMode="numeric" min="50" max="100" step="1" value={seller.age} onChange={event => updateSeller(index, "age", event.target.value)} placeholder="Ex. 75" className={inputClass} /></label>
                    <label className="grid gap-2 text-xs font-medium">Sexe{sellerCount === 2 ? ` · personne ${index + 1}` : ""}<select value={seller.sex} onChange={event => updateSeller(index, "sex", event.target.value)} className={inputClass}><option value="F">Femme</option><option value="H">Homme</option></select></label>
                  </div>
                </fieldset>
              ))}
              <p className="text-xs leading-relaxed text-text">De 50 à 100 ans. Pour deux personnes, le calcul retient le dernier survivant.</p>
              <details className="border-t border-border pt-4">
                <summary className="cursor-pointer text-xs font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-primary">Les hypothèses de calcul</summary>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <label className="grid gap-2 text-xs font-medium">Actualisation annuelle (%)<input required type="number" min="0" max="10" step="0.1" value={discountRate} onChange={event => setDiscountRate(event.target.value)} className={inputClass} /></label>
                  <label className="grid gap-2 text-xs font-medium">Valeur locative annuelle (%)<input required type="number" min="0" max="10" step="0.1" value={rentalRate} onChange={event => setRentalRate(event.target.value)} className={inputClass} /></label>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-text">Hypothèses initiales : 3 % d&apos;actualisation et 4 % de valeur locative. La seconde sert uniquement au calcul de l&apos;occupation. Elles restent à adapter au bien et au contrat.</p>
              </details>
            </div>
          )}
          {error ? <p role="alert" className="mt-4 text-sm leading-relaxed text-red-700">{error}</p> : null}
          <div className="mt-6 flex items-center gap-4">
            {step === 1 ? <button type="button" onClick={() => { setStep(0); setError(""); }} className="min-h-12 rounded-sm text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-primary">Retour</button> : null}
            <button type="submit" className={`${buttonClass} flex-1`}>{step === 0 ? "Continuer" : "Voir ma simulation"}<Icon name="arrowRight" className="h-4 w-4" /></button>
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-text">Simulation indicative · Aucun contact demandé pour calculer.</p>
        </form>
      ) : result && calculation ? (
        <div className="px-6 pb-6 sm:px-7 sm:pb-7">
          <p className="mt-3 text-xs leading-relaxed text-text">{money.format(calculation.propertyValue)} · Viager {calculation.occupation === "occupe" ? "occupé" : "libre"} · {calculation.sellers.map(seller => `${seller.age} ans`).join(" et ")}</p>
          <div aria-live="polite" aria-atomic="true" className="mt-6 grid gap-4 rounded-xl bg-[#f0f5f7] p-4 sm:grid-cols-2 sm:p-5">
            <div><p className="text-xs text-text">Bouquet à la signature</p><p className="mt-2 text-2xl font-semibold tracking-tight sm:text-[28px]">{money.format(result.bouquet)}</p></div>
            <div className="border-t border-secondary/15 pt-4 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0"><p className="text-xs text-text">Rente mensuelle initiale</p><p className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-[28px]">{money.format(result.monthlyAnnuity)}</p></div>
          </div>
          <label htmlFor="bouquet-share" className="mt-6 flex items-center justify-between gap-3 text-sm font-medium"><span>Ajuster la part du bouquet</span><span className="text-primary">{bouquetShare} %</span></label>
          <input id="bouquet-share" type="range" min="0" max="100" step="1" value={bouquetShare} onChange={event => setBouquetShare(Number(event.target.value))} aria-valuetext={`${bouquetShare} pour cent de la base de calcul`} className="mt-3 min-h-8 w-full cursor-pointer accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" />
          <div className="flex justify-between text-[11px] text-text"><span>Plus de rente</span><span>Plus de capital</span></div>
          <p className="mt-3 text-xs leading-relaxed text-text">Le point de départ à 30 % sert à comparer les répartitions. Le bouquet se négocie et peut être nul.</p>
          <details className="mt-5 border-t border-border pt-4">
            <summary className="cursor-pointer text-xs font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-primary">Comprendre ces montants</summary>
            <dl className="mt-4 space-y-2 text-xs">
              <div className="flex justify-between gap-3"><dt>Valeur du bien libre</dt><dd>{money.format(calculation.propertyValue)}</dd></div>
              <div className="flex justify-between gap-3"><dt>Décote d&apos;occupation simulée</dt><dd>{money.format(result.occupationDiscount)}</dd></div>
              <div className="flex justify-between gap-3"><dt>Base de calcul après occupation</dt><dd>{money.format(result.occupiedValue)}</dd></div>
              <div className="flex justify-between gap-3"><dt>Capital converti en rente</dt><dd>{money.format(result.remainingCapital)}</dd></div>
            </dl>
            <p className="mt-4 text-xs leading-[1.8] text-text">Actualisation : {calculation.discountRate * 100} % · Valeur locative : {calculation.rentalRate * 100} %. Annuité actuarielle : {result.annuityFactor.toFixed(2)}. La durée réelle du paiement dépend de la vie du ou des vendeurs. Calcul hors frais, charges et indexation future.</p>
          </details>
          <p className="mt-5 text-xs leading-[1.8] text-text">Ces montants donnent un ordre de grandeur à partir de vos informations. L&apos;évaluation du bien et les droits conservés doivent être précisés avant une proposition de vente.</p>
          <SectionButton sectionId="demande-estimation" className={`${buttonClass} mt-5 w-full`}>Faire étudier mon projet<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
          <button type="button" onClick={() => { setCalculation(null); setStep(0); }} className="mt-4 min-h-8 rounded-sm text-xs underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-primary">Modifier les informations</button>
        </div>
      ) : null}
    </div>
  );
}
