import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { Icon, type IconName } from "@/components/Icon";
import { FormulaIllustration } from "@/components/FormulaIllustrations";
import { SectionButton } from "@/components/SectionButton";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, agency, breadcrumbJsonLd, faqJsonLd, realEstateAgentJsonLd } from "@/lib/seo";

const PATH = "/vendre-en-viager-montpellier";
const TITLE = "Vendre en viager à Montpellier : étapes et accompagnement";
const DESCRIPTION =
  `Vendre en viager à Montpellier avec Patrimoine Cardinal : estimation gratuite, choix de la formule et accompagnement. Appelez le ${agency.telephoneDisplay}.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl(PATH),
    type: "website",
    locale: "fr_FR",
    siteName: agency.name,
    images: [{ url: absoluteUrl("/images/project-sell.webp"), alt: "Préparer une vente en viager à Montpellier" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [absoluteUrl("/images/project-sell.webp")] },
};

const faqs = [
  {
    question: "Puis-je vendre en viager et continuer à vivre dans mon logement ?",
    answer:
      "Oui, un viager occupé permet de conserver les droits prévus au contrat. Un droit d'usage et d'habitation ne donne pas les mêmes possibilités qu'un usufruit : le choix doit être expliqué et formalisé avec le notaire.",
  },
  {
    question: "Le bouquet est-il obligatoire ?",
    answer:
      "Non. Cette partie du prix payée à la signature est librement négociée. Son montant et la rente doivent être étudiés ensemble, selon la valeur du logement, l'occupation et la situation des vendeurs.",
  },
  {
    question: "Quels documents faut-il préparer ?",
    answer:
      "Commencez par le titre de propriété, les informations de surface, les diagnostics disponibles et, en copropriété, les charges et documents de l'immeuble. Le conseiller et le notaire préciseront les pièces nécessaires selon votre logement et votre situation.",
  },
  {
    question: "Quelles protections prévoir si la rente n'est pas payée ?",
    answer:
      "Le notaire étudie les garanties et les clauses adaptées, notamment une clause résolutoire. Leurs effets et leur mise en œuvre dépendent de l'acte : il faut les examiner avant la signature et vérifier la capacité de paiement de l'acquéreur.",
  },
];

const options = [
  { title: "Viager occupé", situation: "Rester dans votre logement", image: "/images/project-sell.webp", description: "Votre priorité est de conserver votre cadre de vie. Étudiez les droits d'occupation, la protection du conjoint et les conditions d'un éventuel départ.", href: "/viager-occupe-montpellier", label: "Étudier le viager occupé" },
  { title: "Viager libre", situation: "Libérer le logement", image: "/images/project-buy.webp", description: "Vous prévoyez un déménagement ou vendez un logement déjà vacant. Comparez les modalités d'une vente sans occupation conservée.", href: "/viager-libre-montpellier", label: "Comprendre le viager libre" },
  { title: "Vente à terme", situation: "Fixer la durée des paiements", image: null, description: "Vous recherchez un paiement échelonné sur une durée convenue. La vente à terme mérite une comparaison avec la rente viagère.", href: "/vente-a-terme-montpellier", label: "Découvrir la vente à terme" },
];

const steps: { title: string; description: string; icon: IconName }[] = [
  { title: "Évaluer et comparer", description: "Nous étudions votre logement et vos objectifs pour comparer les conditions envisageables. La valeur immobilière et le choix d'occupation servent de base à l'estimation.", icon: "calculator" },
  { title: "Préparer la vente", description: "Le dossier décrit le bien et les conditions proposées. Avec votre accord, l'agence accompagne la recherche d'un acquéreur et l'examen de son projet de paiement.", icon: "search" },
  { title: "Formaliser chez le notaire", description: "Les parties précisent prix, rente, occupation et garanties. Le notaire prépare l'acte et explique les conséquences des clauses avant votre engagement.", icon: "shield" },
];

const documents = [
  { title: "Votre propriété", description: "Titre de propriété, identité des propriétaires et situation éventuelle d'indivision." },
  { title: "Votre logement", description: "Surface, plans disponibles, travaux réalisés et particularités du logement." },
  { title: "Les diagnostics", description: "Diagnostics immobiliers à vérifier et à compléter selon le bien." },
  { title: "La copropriété", description: "Règlement, charges, procès-verbaux et informations sur les travaux." },
];

const buttonClass = "inline-flex min-h-14 items-center justify-center gap-4 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none sm:text-base";

export default function VendreEnViagerMontpellierPage() {
  return (
    <>
      <JsonLd data={[
        realEstateAgentJsonLd({ path: PATH, areaServed: "Montpellier", description: DESCRIPTION }),
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Vendre en viager à Montpellier", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <section aria-labelledby="seller-heading" className="relative isolate overflow-hidden bg-secondary">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <Image src="/images/hero-background-montpellier.webp" alt="" fill sizes="100vw" preload className="object-cover object-[65%_center] lg:object-center" />
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-12 pt-7 lg:px-10 lg:pb-16 lg:pt-9">
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-xs text-white/65">
              <Link href="/" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Accueil</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Vendre en viager à Montpellier</span>
            </nav>
            <div className="mt-8 grid gap-9 lg:mt-10 lg:grid-cols-[1.2fr_0.95fr] lg:items-center lg:gap-12 xl:gap-20">
              <div className="min-w-0">
                <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
                  <span aria-hidden="true" className="h-0.5 w-8 bg-primary" />Votre parcours vendeur
                </span>
                <h1 id="seller-heading" className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[60px]">
                  Vendre votre bien<br className="hidden sm:block" /> en viager<br className="hidden sm:block" /> à Montpellier<span className="text-primary">.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Compléter vos revenus, disposer d&apos;un capital ou organiser un changement de logement : nous vous aidons à préparer votre vente et à examiner les conditions qui comptent pour vous.
                </p>
                <ul className="mt-7 space-y-3 border-t border-white/20 pt-6 text-sm text-white/90 sm:text-base">
                  {["Une estimation gratuite et sans engagement", "Les formules expliquées selon votre situation", "Un accompagnement jusqu'à la signature"].map(point => (
                    <li key={point} className="flex items-start gap-3"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{point}</li>
                  ))}
                </ul>
                <a href={`tel:${agency.telephone}`} className="mt-8 inline-flex items-center gap-3 rounded-sm text-2xl font-bold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-3xl">
                  <Icon name="phone" className="h-6 w-6 shrink-0 text-primary" />{agency.telephoneDisplay}
                </a>
              </div>
              <div id="projet-vendeur" className="min-w-0 scroll-mt-28">
                <MiniLeadForm appearance="hero" title="Parlons de votre vente" description="Laissez vos coordonnées : un conseiller vous recontacte pour préparer votre projet de vente en viager." subject="Projet vendeur — Viager Montpellier" submitLabel="Parlons de mon projet" />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="seller-options-heading" className="bg-[#f7f7f5] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">Choisir votre parcours</p>
                <h2 id="seller-options-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-secondary sm:text-4xl lg:text-5xl">Votre situation,<br />votre formule.</h2>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-text sm:text-lg">Avant de parler de prix, précisez vos besoins : continuer à habiter le bien, protéger votre conjoint, recevoir un capital ou privilégier des revenus réguliers. Ces choix orientent l&apos;étude.</p>
            </div>
            <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-3">
              {options.map((option, index) => (
                <Link key={option.href} href={option.href} className={`group flex flex-col overflow-hidden rounded-3xl shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none ${option.image ? "bg-white ring-1 ring-border/50" : "bg-secondary text-white"}`}>
                  <div className="relative aspect-[8/5] overflow-hidden">
                    {option.image ? <Image src={option.image} alt="" fill sizes="(min-width: 1280px) 384px, (min-width: 1024px) calc((100vw - 128px) / 3), calc(100vw - 48px)" className="object-cover" /> : <div className="absolute inset-x-14 bottom-4 top-14 text-white/80"><FormulaIllustration kind="term" className="h-full w-full" /></div>}
                    <span className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-semibold ${option.image ? "bg-white text-secondary" : "border border-white/60 text-white"}`}>0{index + 1} — {option.situation}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className={`text-2xl font-bold tracking-tight ${option.image ? "text-secondary" : "text-white"}`}>{option.title}</h3>
                    <p className={`mt-3 flex-1 text-base leading-relaxed ${option.image ? "text-text" : "text-white/75"}`}>{option.description}</p>
                    <span className={`mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors ${option.image ? "border border-secondary text-secondary group-hover:bg-secondary group-hover:text-white" : "bg-primary text-white group-hover:bg-primary-dark"}`}>
                      {option.label}<Icon name="arrowRight" className="h-5 w-5 shrink-0" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="seller-steps-heading" className="bg-[#0b3545] py-16 text-white lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm"><span aria-hidden="true" className="h-0.5 w-8 bg-primary" />Les étapes de la vente</p>
            <h2 id="seller-steps-heading" className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Une décision préparée,<br />puis un contrat précis.</h2>
            <ol className="mt-10 divide-y divide-white/25">
              {steps.map((step, index) => (
                <li key={step.title} className="grid gap-5 py-7 sm:grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr_1.3fr] lg:items-center lg:gap-9 lg:py-9">
                  <span aria-hidden="true" className="select-none text-6xl font-bold leading-none tracking-tight text-transparent lg:text-7xl" style={{ WebkitTextStroke: "1px #8db1c3" }}>0{index + 1}</span>
                  <div className="flex items-center gap-4"><Icon name={step.icon} className="h-8 w-8 shrink-0 text-primary" /><h3 className="text-xl font-bold tracking-tight sm:text-2xl">{step.title}</h3></div>
                  <p className="text-base leading-relaxed text-white/75 sm:col-start-2 lg:col-start-auto lg:border-l lg:border-white/25 lg:pl-9">{step.description}</p>
                </li>
              ))}
            </ol>
            <p className="mt-7 max-w-4xl border-t border-white/25 pt-7 text-sm leading-relaxed text-white/65">
              Le bouquet est facultatif et librement fixé. La rente reste
              liée à la durée de vie du ou des bénéficiaires ; il faut donc
              comprendre l&apos;aléa et les garanties. Les{" "}
              <a href="https://paris.notaires.fr/fr/actualites/le-mot-du-mois-le-bouquet" className="font-semibold text-primary underline underline-offset-4">Notaires du Grand Paris expliquent le bouquet</a>{" "}
              et les{" "}
              <a href="https://paris.notaires.fr/fr/actualites/la-vente-en-viager-une-source-de-revenus-manier-avec-precaution" className="font-semibold text-primary underline underline-offset-4">précautions à prendre avant une vente</a>.
            </p>
          </div>
        </section>

        <section aria-labelledby="seller-documents-heading" className="bg-white py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10">
            <div className="overflow-hidden rounded-3xl bg-secondary">
              <div className="relative aspect-[6/5]"><Image src="/images/agency-montpellier.webp" alt="" fill sizes="(min-width: 1280px) 576px, (min-width: 1024px) calc((100vw - 136px) / 2), calc(100vw - 48px)" className="object-cover" /></div>
              <div className="flex items-center gap-4 px-6 py-6 sm:px-8"><Icon name="key" className="h-9 w-9 shrink-0 text-primary" /><p className="text-lg font-semibold leading-snug text-white sm:text-xl">Votre vente se prépare<br />à votre rythme.</p></div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">Votre dossier</p>
              <h2 id="seller-documents-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-secondary sm:text-4xl lg:text-5xl">Les informations<br />à rassembler.</h2>
              <ul className="mt-7 grid gap-x-7 sm:grid-cols-2">
                {documents.map((document, index) => (
                  <li key={document.title} className="border-t border-border py-5"><span className="text-xs font-semibold text-primary">0{index + 1}</span><h3 className="mt-2 text-lg font-bold tracking-tight text-secondary">{document.title}</h3><p className="mt-2 text-sm leading-relaxed text-text">{document.description}</p></li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-text">
                La liste dépend de la situation du logement. Consultez les règles de{" "}
                <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F10798" className="font-semibold text-primary underline underline-offset-4">Service Public sur les diagnostics de vente</a>{" "}
                et la{" "}
                <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2604" className="font-semibold text-primary underline underline-offset-4">vente d&apos;un logement en copropriété</a>.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="seller-notary-heading" className="bg-[#f7f7f5] py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">Un projet qui vous ressemble</p>
              <h2 id="seller-notary-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-secondary sm:text-4xl lg:text-5xl">En parler avec vos proches et votre notaire.</h2>
              <Link href="/estimation-viager-montpellier" className={`mt-7 ${buttonClass}`}>Faire estimer mon bien<Icon name="arrowRight" className="h-5 w-5 shrink-0" /></Link>
            </div>
            <div className="border-t border-border pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="text-base leading-relaxed text-text sm:text-lg">
                Une vente modifie votre patrimoine. Si vous le souhaitez,
                associez vos proches aux échanges et exposez vos priorités
                au notaire : protection du conjoint, droit d&apos;occupation,
                départ du logement et conséquences successorales.
              </p>
              <p className="mt-5 text-base leading-relaxed text-text sm:text-lg">
                Demandez également une explication écrite des paiements,
                de leur éventuelle indexation, des charges et des recours
                en cas d&apos;impayés. Les dispositions retenues doivent
                correspondre à votre situation, au-delà du seul montant
                annoncé de la rente.
              </p>
            </div>
          </div>
        </section>

        <Faq id="seller-faq" accordionName="seller-faq" title={<>Questions avant<br />de vendre<br />en viager<span className="text-primary">.</span></>} description="Quelques repères pour préparer votre vente. Votre situation mérite un échange personnalisé avec notre équipe." items={faqs} />
        <section aria-labelledby="seller-contact-heading" className="bg-[#0b3545] py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">Un premier échange</p>
              <h2 id="seller-contact-heading" className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">Préparons votre<br />projet de vente<span className="text-primary">.</span></h2>
            </div>
            <div>
              <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">Vous pouvez nous contacter avant d&apos;avoir choisi votre formule. Nous commencerons par votre logement, votre souhait d&apos;occupation et les questions auxquelles vous souhaitez répondre.</p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <SectionButton sectionId="projet-vendeur" className={buttonClass}>Être rappelé par un conseiller<Icon name="arrowRight" className="h-5 w-5 shrink-0" /></SectionButton>
                <a href={`tel:${agency.telephone}`} className="inline-flex items-center gap-2 rounded-sm text-lg font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><Icon name="phone" className="h-5 w-5 text-primary" />{agency.telephoneDisplay}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
