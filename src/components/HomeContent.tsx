import Link from "next/link";
import type { FaqItem } from "@/lib/seo";
import { Icon } from "./Icon";

const formulas = [
  {
    icon: "user",
    title: "Viager occupé",
    summary: "Continuer à vivre chez soi",
    description:
      "Le vendeur conserve un droit d'occupation défini dans l'acte. L'acquéreur prépare un investissement avec une disponibilité différée du logement.",
    href: "/viager-occupe-montpellier",
    label: "Comprendre le viager occupé",
  },
  {
    icon: "key",
    title: "Viager libre",
    summary: "Un logement disponible dès la vente",
    description:
      "L'acquéreur peut occuper ou louer le logement dès la signature. Le paiement comprend une rente, avec ou sans bouquet selon l'accord.",
    href: "/viager-libre-montpellier",
    label: "Comprendre le viager libre",
  },
  {
    icon: "clock",
    title: "Vente à terme",
    summary: "Un paiement sur une durée définie",
    description:
      "Le prix est réglé selon un calendrier fixé au contrat. Les conditions d'occupation et les échéances sont déterminées avant la signature.",
    href: "/vente-a-terme-montpellier",
    label: "Découvrir la vente à terme",
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
    <section id="formules" className="scroll-mt-24 bg-bg-gray py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Les formules
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            Quelle formule correspond à votre projet ?
          </h2>
          <p className="mt-4 leading-relaxed text-text">
            L&apos;occupation du logement et la durée du paiement sont deux
            critères essentiels pour choisir.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {formulas.map((formula) => (
            <Link
              key={formula.href}
              href={formula.href}
              className="group flex flex-col rounded-3xl bg-white p-7 ring-1 ring-border transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon name={formula.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-secondary">
                {formula.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-secondary/80">
                {formula.summary}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text">
                {formula.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline">
                {formula.label}
                <Icon name="arrowRight" className="h-4 w-4 shrink-0" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeSectors() {
  return (
    <section id="secteurs" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          Une présence locale
        </span>
        <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
          Montpellier et nos secteurs d&apos;intervention
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-text">
          De l&apos;Écusson à Port Marianne, des Beaux-Arts aux communes de la
          métropole, chaque emplacement demande une évaluation précise. Nous
          accompagnons également vos projets à Castelnau-le-Lez, Lattes,
          Juvignac, Pérols, Saint-Jean-de-Védas et dans la région.
        </p>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <Link
              key={sector.href}
              href={sector.href}
              className="group flex flex-col rounded-3xl bg-bg-gray p-6 ring-1 ring-border transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon name="mapPin" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-secondary">
                {sector.label}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text">
                {sector.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline">
                Découvrir ce secteur
                <Icon name="arrowRight" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
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
