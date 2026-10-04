import Image from "next/image";
import Link from "next/link";
import type { FaqItem } from "@/lib/seo";
import { Icon } from "./Icon";
import { FormulaArchitecture, FormulaIllustration } from "./FormulaIllustrations";
import { SectorCompass, SectorIcon } from "./SectorIcons";

const formulas = [
  {
    illustration: "occupied",
    title: "Viager occupé",
    summary: "Continuer à vivre chez soi",
    description:
      "Le vendeur conserve un droit d'occupation défini dans l'acte. L'acquéreur prépare un investissement avec une disponibilité différée du logement.",
    href: "/viager-occupe-montpellier",
    label: "Comprendre le viager occupé",
    highlight: "Occupation conservée",
  },
  {
    illustration: "free",
    title: "Viager libre",
    summary: "Un logement disponible dès la vente",
    description:
      "L'acquéreur peut occuper ou louer le logement dès la signature. Le paiement comprend une rente, avec ou sans bouquet selon l'accord.",
    href: "/viager-libre-montpellier",
    label: "Comprendre le viager libre",
    highlight: "Disponibilité immédiate",
  },
  {
    illustration: "term",
    title: "Vente à terme",
    summary: "Un paiement sur une durée définie",
    description:
      "Le prix est réglé selon un calendrier fixé au contrat. Les conditions d'occupation et les échéances sont déterminées avant la signature.",
    href: "/vente-a-terme-montpellier",
    label: "Découvrir la vente à terme",
    highlight: "Échéances fixées au contrat",
  },
] as const;

const sectors = [
  {
    href: "/viager-herault",
    label: "Viager dans l'Hérault",
    description: "Montpellier, sa métropole et le département.",
  },
  {
    href: "/viager-sete",
    label: "Viager à Sète",
    description: "Le littoral et le bassin de Thau.",
  },
  {
    href: "/viager-nimes",
    label: "Viager à Nîmes",
    description: "Nîmes et les communes du Gard.",
  },
  {
    href: "/viager-beziers",
    label: "Viager à Béziers",
    description: "Béziers et le Biterrois.",
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "Peut-on rester chez soi après une vente en viager ?",
    answer:
      "Oui, avec un viager occupé. Le droit conservé par le vendeur et ses modalités sont précisés dans l'acte notarié. Le choix dépend de votre projet et de vos besoins.",
  },
  {
    question: "Comment est préparée mon estimation ?",
    answer:
      "Nous étudions votre logement, son emplacement, l'âge du ou des vendeurs et l'occupation envisagée. Cette étude permet de présenter une proposition de bouquet et de rente. L'estimation est gratuite et sans engagement.",
  },
  {
    question: "Quel est le rôle du notaire dans un viager ?",
    answer:
      "Le notaire établit l'acte de vente et précise les droits d'occupation, les paiements, la répartition des charges et les garanties convenues. Il explique les conséquences du contrat aux parties.",
  },
  {
    question: "Que se passe-t-il en cas d'impayé de rente ?",
    answer:
      "Les recours dépendent des garanties prévues dans l'acte et de leur mise en œuvre. Une clause résolutoire peut permettre de demander la résolution de la vente ; la reprise du bien et le sort des sommes versées dépendent des clauses et des démarches nécessaires. Contactez votre notaire dès le premier impayé.",
  },
  {
    question: "Dans quels secteurs intervenez-vous ?",
    answer:
      "Nous accompagnons les projets à Montpellier et dans sa métropole, dans l'Hérault ainsi que dans le Gard. Nos pages Sète, Béziers et Nîmes présentent ces secteurs.",
  },
];

export function HomeFormulas() {
  return (
    <section
      id="formules"
      aria-labelledby="formulas-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#062f40] bg-[radial-gradient(ellipse_at_top_left,#0b3b4d_0%,transparent_65%)] py-14 text-white lg:py-16"
    >
      <FormulaArchitecture className="pointer-events-none absolute -right-12 -top-6 -z-10 h-64 w-64 text-[#8db1c3]/40 sm:h-80 sm:w-80 lg:-right-6" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
          <div>
            <span className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-primary" />
              Les formules
            </span>
            <h2 id="formulas-heading" className="mt-4 max-w-2xl text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl xl:text-5xl">
              Quelle formule correspond{" "}
              <br className="hidden sm:block" />
              à votre projet ?
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#b6cfdd] lg:pt-6 lg:text-lg">
            L&apos;occupation du logement et la durée du paiement sont deux
            critères essentiels pour choisir.
          </p>
        </div>
        <ul className="mt-8 divide-y divide-[#88b0c4]/45 lg:mt-10">
          {formulas.map((formula, index) => (
            <li key={formula.href}>
              <Link
                href={formula.href}
                aria-label={formula.label}
                className="group grid grid-cols-[72px_minmax(0,1fr)_48px] items-center gap-x-4 gap-y-5 py-7 transition-colors hover:bg-white/[0.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:grid-cols-[88px_minmax(0,1fr)_56px] lg:grid-cols-[120px_152px_minmax(0,0.9fr)_minmax(0,1.25fr)_64px] lg:gap-x-6 lg:py-7 xl:grid-cols-[130px_170px_minmax(0,0.9fr)_minmax(0,1.25fr)_72px] xl:gap-x-8"
              >
                <span
                  aria-hidden="true"
                  className="col-start-1 row-start-1 select-none text-[64px] font-bold leading-none tracking-[-0.07em] text-transparent sm:text-[76px] lg:border-r lg:border-[#88b0c4]/50 lg:py-2 lg:pr-6 lg:text-[96px] xl:text-[104px]"
                  style={{ WebkitTextStroke: "1px #7ba2b7" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <FormulaIllustration
                  kind={formula.illustration}
                  className="col-start-2 row-start-1 mx-auto h-auto w-28 max-w-full text-white sm:w-40 lg:w-full"
                />
                <div className="col-span-3 row-start-2 min-w-0 lg:col-span-1 lg:col-start-3 lg:row-start-1">
                  <h3 className="text-2xl font-bold leading-tight text-white xl:text-[32px]">
                    {formula.title}
                  </h3>
                  <p className="mt-2 text-lg leading-snug text-[#92b4c8] xl:text-xl">
                    {formula.summary}
                  </p>
                </div>
                <div className="col-span-3 row-start-3 min-w-0 lg:col-span-1 lg:col-start-4 lg:row-start-1 lg:border-l lg:border-[#88b0c4]/50 lg:pl-6 xl:pl-8">
                  <p className="text-base leading-relaxed text-[#b6cfdd]">
                    {formula.description}
                  </p>
                  <p className="mt-3 text-base font-semibold text-primary">
                    {formula.highlight}
                  </p>
                </div>
                <span aria-hidden="true" className="col-start-3 row-start-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-colors group-hover:bg-primary-dark sm:h-14 sm:w-14 lg:col-start-5 lg:h-16 lg:w-16 xl:h-[72px] xl:w-[72px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 sm:h-8 sm:w-8 xl:h-10 xl:w-10" focusable="false">
                    <path d="M6 18 18 6M6 6h12v12" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeSectors() {
  const sectorIcons = ["herault", "sete", "nimes", "beziers"] as const;

  return (
    <section
      id="secteurs"
      aria-labelledby="sectors-heading"
      className="scroll-mt-24 bg-[#f7f7f5] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <div>
            <span className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary sm:text-sm">
              <span aria-hidden="true" className="h-1 w-8 rounded-full bg-primary" />
              Une présence locale
            </span>
            <h2
              id="sectors-heading"
              className="mt-4 max-w-2xl text-3xl font-bold leading-[1.12] tracking-tight text-secondary sm:text-4xl xl:text-5xl"
            >
              Montpellier et nos{" "}
              <br className="hidden sm:block" />
              secteurs d&apos;intervention
            </h2>
          </div>
          <div className="max-w-xl lg:pb-1">
            <p className="text-base leading-relaxed text-text sm:text-lg">
              De l&apos;Écusson à Port Marianne, nous vous accompagnons à
              Montpellier, dans sa métropole et dans la région.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-base">
              Castelnau-le-Lez · Lattes · Juvignac
              <br />
              Pérols · Saint-Jean-de-Védas
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-9 max-w-[1536px] px-4 lg:mt-11 lg:px-6">
        <div className="relative h-[280px] overflow-hidden rounded-2xl bg-secondary/10 sm:h-[360px] lg:h-[420px]">
          <Image
            src="/images/montpellier-panorama.webp"
            alt="Vue illustrative de Montpellier, de son architecture et de sa région"
            fill
            loading="lazy"
            sizes="(min-width: 1536px) 1488px, (min-width: 1024px) calc(100vw - 48px), calc(100vw - 32px)"
            className="object-cover object-center"
          />
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-xs font-semibold text-white shadow-sm sm:left-7 sm:top-7 sm:gap-3 sm:px-5 sm:text-sm">
            <Icon name="mapPin" className="h-5 w-5 shrink-0 text-primary" />
            Montpellier &amp; sa région
          </div>
          <div className="absolute right-3 top-16 sm:right-6 sm:top-5">
            <SectorCompass />
          </div>
        </div>
      </div>

      <div className="relative mx-auto -mt-14 max-w-[1360px] px-6 sm:-mt-16 lg:-mt-20 lg:px-10">
        <ul className="grid overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_-16px_rgba(14,47,62,0.25)] sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => (
            <li
              key={sector.href}
              className={`relative min-w-0 first:before:absolute first:before:left-6 first:before:top-3 first:before:h-1 first:before:w-10 first:before:rounded-full first:before:bg-primary ${index < 3 ? "border-b border-border" : ""} ${
                index % 2 === 0 ? "sm:border-r" : ""
              } ${index === 2 ? "sm:border-b-0" : ""} lg:border-b-0 ${
                index < 3 ? "lg:border-r" : ""
              }`}
            >
              <Link
                href={sector.href}
                aria-label={`Découvrir ${sector.label}`}
                className="group flex h-full items-start gap-4 px-5 py-7 transition-colors hover:bg-bg-gray/60 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none sm:flex-col sm:gap-4 sm:px-7 lg:px-6 xl:flex-row"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-1 sm:h-14 sm:w-14 ${
                    index === 0
                      ? "bg-primary/[0.07] text-primary ring-primary/20"
                      : "bg-secondary/[0.04] text-secondary ring-secondary/10"
                  }`}
                >
                  <SectorIcon kind={sectorIcons[index]} />
                </span>
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="text-lg font-bold leading-snug text-secondary">
                    {sector.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text sm:min-h-[52px] sm:text-base">
                    {sector.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline">
                    Découvrir
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeUnderstanding() {
  return (
    <section id="comprendre" className="scroll-mt-24 bg-bg-gray py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Les repères essentiels
        </span>
        <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
          Le viager à Montpellier, comment ça marche ?
        </h2>
        <div className="mt-9 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5 leading-relaxed text-text">
            <p>
              Le viager est une vente immobilière dont le prix peut être payé
              en partie à la signature, sous forme de bouquet, puis par une
              rente versée pendant la vie du vendeur. Le montant dépend
              notamment de la valeur du bien, de l&apos;âge du ou des vendeurs
              et du droit d&apos;occupation conservé.
            </p>
            <p>
              Le coût total pour l&apos;acquéreur dépend de la durée de
              versement de la rente. Avant de signer, il faut examiner le
              financement, les charges et les conditions prévues dans
              l&apos;acte.
            </p>
            <Link
              href="/estimation-viager-montpellier"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
            >
              Comprendre le calcul de votre estimation
              <Icon name="arrowRight" className="h-4 w-4 shrink-0" />
            </Link>
          </div>
          <div className="rounded-3xl bg-secondary p-7 text-white sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-primary">
              <Icon name="shield" className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-xl font-bold">
              Le rôle du notaire dans une vente en viager à Montpellier
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              La vente est signée par acte notarié. Le notaire précise les
              droits de chacun, la répartition des charges, l&apos;indexation
              éventuelle de la rente et les garanties de paiement.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Une clause résolutoire peut prévoir la résolution de la vente en
              cas d&apos;impayé. Son application et le sort des sommes déjà
              versées dépendent des clauses de l&apos;acte et des démarches
              nécessaires. Nous préparons votre dossier en lien avec le notaire.
            </p>
            <a
              href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Les règles du viager sur Service-Public.fr
              <Icon name="arrowRight" className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
