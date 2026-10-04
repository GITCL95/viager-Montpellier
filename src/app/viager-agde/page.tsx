import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import { SectionButton } from "@/components/SectionButton";
import { SellerWatermark } from "@/components/SellerWatermark";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, agency, breadcrumbJsonLd, faqJsonLd, realEstateAgentJsonLd } from "@/lib/seo";

const PATH = "/viager-agde";
const TITLE = "Viager à Agde : vendre ou acheter avec Patrimoine Cardinal";
const DESCRIPTION = `Viager à Agde : maison, appartement ou résidence secondaire. Étudiez votre logement et ses conditions de vente avec Patrimoine Cardinal au ${agency.telephoneDisplay}.`;
const SHARE_IMAGE = "/images/hero-background-montpellier.webp";

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
    images: [{ url: absoluteUrl(SHARE_IMAGE), alt: "Illustration architecturale décorative" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [absoluteUrl(SHARE_IMAGE)] },
};

const sectors = [
  {
    name: "Agde historique",
    landmark: "Le cœur de ville et ses ruelles",
    text: "Dans le centre ancien, décrivez l'accès à l'immeuble, les escaliers et l'étage du logement. L'état du bâtiment, la surface et les travaux réalisés ou à prévoir complètent l'étude de votre adresse.",
    source: "https://www.capdagde.com/fr/agde-la-perle-noire/",
  },
  {
    name: "Le Grau d'Agde",
    landmark: "Le secteur de l'embouchure de l'Hérault",
    text: "Pour une maison ou un appartement au Grau, précisez la rue, l'accès, les extérieurs et le stationnement. Le dossier décrit le logement lui-même, son entretien et les dépendances comprises dans la vente.",
    source: "https://www.capdagde.com/fr/le-grau-dagde/",
  },
  {
    name: "Le Cap d'Agde",
    landmark: "La station et ses différents quartiers",
    text: "Indiquez le quartier, la résidence éventuelle et le lot concerné. Pour un bien en copropriété, examinez les accès, les charges, les équipements communs et les travaux, en distinguant logement et annexes.",
    source: "https://www.capdagde.com/fr/le-cap-dagde/",
  },
];

const uses = [
  {
    title: "Vous y vivez toute l'année",
    text: "L'étude commence par votre souhait de continuer à habiter le logement et par les bénéficiaires du droit conservé. Accessibilité, entretien et dépenses doivent rester compatibles avec votre quotidien à Agde.",
  },
  {
    title: "Vous y séjournez ponctuellement",
    text: "Pour une résidence secondaire, précisez les périodes d'utilisation et ce que vous souhaitez conserver après la vente. Le droit inscrit dans l'acte détermine vos possibilités d'occupation ; le seul usage actuel ne suffit pas.",
  },
  {
    title: "Le logement est déjà loué",
    text: "Présentez le bail ou les engagements locatifs existants, l'usage du bien et votre projet. Le notaire examine leur articulation avec la vente et les droits envisagés avant de fixer les conditions de disponibilité du logement.",
  },
];

const steps = [
  {
    title: "Décrire le bien et son usage",
    text: "Adresse à Agde, au Grau ou au Cap, type de logement, surface et occupation actuelle. Nous partons de votre situation et de ce que vous souhaitez préparer : vente ou acquisition.",
  },
  {
    title: "Réunir un dossier immobilier précis",
    text: "Titre, diagnostics, travaux et, si nécessaire, pièces de copropriété ou bail. Ces éléments permettent d'étudier le logement et d'expliquer les hypothèses de bouquet, de rente et d'occupation.",
  },
  {
    title: "Comprendre les engagements",
    text: "Paiements, droits conservés, charges et conséquences d'un départ se précisent avec le notaire. Vous examinez les conditions écrites de la vente avant de vous engager.",
  },
];

const faqs = [
  {
    question: "Étudiez-vous les projets au Cap d'Agde et au Grau d'Agde ?",
    answer: "Vous pouvez nous présenter un logement situé à Agde, au Cap d'Agde ou au Grau d'Agde. Précisez l'adresse, le quartier ou la résidence et le type de bien. Ces repères permettent de préparer une étude propre au logement concerné, sans appliquer une valeur unique à toute la commune.",
  },
  {
    question: "Puis-je vendre ma résidence secondaire et continuer à y séjourner ?",
    answer: "Un projet peut prévoir la conservation d'un droit sur le logement. Il faut préciser vos besoins et ses bénéficiaires avec le notaire. Le droit d'usage et d'habitation réserve un usage personnel ; l'usufruit permet aussi de louer et de percevoir les loyers. Les conditions retenues dans l'acte encadrent vos possibilités d'utilisation après la vente.",
  },
  {
    question: "Que préparer si mon appartement au Cap d'Agde est en copropriété ?",
    answer: "Identifiez le lot et ses annexes, notamment un parking ou une cave s'ils sont compris dans le projet. Réunissez les diagnostics, la surface et les documents de copropriété disponibles : règlement, charges, procès-verbaux d'assemblée et informations sur les travaux. Le conseiller et le notaire précisent les pièces utiles selon le dossier.",
  },
  {
    question: "Mon logement à Agde est loué : faut-il le signaler dès le départ ?",
    answer: "Oui. La location fait partie de la situation du bien à examiner. Communiquez le bail ou les engagements existants et expliquez les droits que vous souhaitez conserver. La vente ne permet pas de présumer une libération du logement ; la disponibilité et les obligations sont à vérifier avec le notaire.",
  },
  {
    question: "Quels éléments comptent pour une maison au Grau d'Agde ?",
    answer: "L'étude porte sur l'adresse, la surface, l'état de la maison, le terrain et les dépendances. Précisez aussi les accès, les travaux et l'occupation actuelle. La localisation au Grau est un repère ; les caractéristiques du bien et la situation du ou des vendeurs servent à préparer les conditions du viager.",
  },
  {
    question: "Comment préparer un achat en viager à Agde ?",
    answer: "Définissez votre secteur, le type de logement et l'usage recherché, puis examinez le capital initial, votre capacité à payer une rente, les charges et les travaux. La disponibilité du bien dépend des droits d'occupation prévus. Le total d'une rente viagère reste incertain puisqu'il dépend de la durée de vie de ses bénéficiaires.",
  },
];

const container = "mx-auto max-w-[1200px] px-6 lg:px-10";
const heading = "text-3xl font-semibold leading-[1.2] tracking-tight text-secondary sm:text-4xl";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.16em] text-text";
const action = "inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function ViagerAgdePage() {
  return (
    <>
      <JsonLd data={[
        realEstateAgentJsonLd({ path: PATH, areaServed: "Agde", description: DESCRIPTION }),
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Viager Hérault", path: "/viager-herault" }, { name: "Viager Agde", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <section aria-labelledby="agde-heading" className="relative isolate overflow-hidden bg-secondary">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-80">
            <Image src={SHARE_IMAGE} alt="" fill preload sizes="100vw" className="object-cover object-[65%_center] lg:object-center" />
          </div>
          <div className={`${container} pb-12 pt-6 lg:pb-16 lg:pt-7`}>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[11px] text-white/65">
              <Link href="/" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link>
              <span aria-hidden="true" className="text-white/35">/</span>
              <Link href="/viager-herault" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Viager Hérault</Link>
              <span aria-hidden="true" className="text-white/35">/</span>
              <span aria-current="page">Viager Agde</span>
            </nav>
            <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16 xl:gap-24">
              <div className="min-w-0 lg:pt-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70"><span className="mr-3 text-primary">—</span>Votre logement, votre usage, votre projet</p>
                <h1 id="agde-heading" className="mt-5 text-[38px] font-semibold leading-[1.13] tracking-tight text-white sm:text-5xl xl:text-[54px]">Viager<br /><span className="font-serif font-normal italic">à Agde.</span></h1>
                <p className="mt-6 max-w-lg text-base leading-[1.8] text-white/80 sm:text-lg">Votre résidence à l&apos;année, un pied-à-terre au Cap ou une maison au Grau : votre projet commence par le bien et son usage réel. Patrimoine Cardinal vous accompagne pour préparer une vente ou un achat en viager à Agde.</p>
                <div className="mt-8 flex items-start gap-4 border-t border-white/20 pt-6">
                  <Icon name="key" className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <p className="max-w-sm text-sm leading-[1.8] text-white/75">Souhaitez-vous y vivre, y revenir pour vos séjours ou vendre un bien déjà loué ? L&apos;occupation se précise avant les conditions de la vente.</p>
                </div>
                <SectionButton sectionId="secteurs-agde" className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-semibold text-white underline decoration-primary/60 underline-offset-8 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Situer mon logement à Agde<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              </div>
              <div id="projet-viager-agde" className="min-w-0 scroll-mt-28">
                <MiniLeadForm appearance="hero" title="Parlons de votre projet à Agde" description="Un premier échange sur votre logement, son occupation ou vos critères d'achat dans la commune." subject="Projet viager — Agde" submitLabel="Être rappelé" />
                <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/70">Vous préférez appeler ? <a href={`tel:${agency.telephone}`} className="rounded-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{agency.telephoneDisplay}</a></p>
              </div>
            </div>
          </div>
        </section>

        <section id="secteurs-agde" aria-labelledby="agde-sectors-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
          <div className={container}>
            <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
              <div>
                <p className={eyebrow}><span className="mr-3 text-primary">01</span>Des repères dans la commune</p>
                <h2 id="agde-sectors-heading" className={`mt-5 ${heading}`}>Agde, le Grau, le Cap.<br /><span className="font-serif font-normal italic">Puis votre adresse.</span></h2>
              </div>
              <p className="max-w-lg text-base leading-[1.8] text-text">Ces trois secteurs permettent de situer un projet dans la commune. L&apos;étude de votre viager repose ensuite sur le logement précis et ses documents.</p>
            </div>
            <div className="mt-10 grid gap-9 lg:mt-12 lg:grid-cols-3 lg:gap-10">
              {sectors.map((sector, index) => (
                <article key={sector.name} className="border-t border-border pt-6">
                  <span aria-hidden="true" className="text-xs font-medium text-primary">0{index + 1}</span>
                  <h3 className="mt-3 text-2xl font-semibold leading-snug text-secondary">{sector.name}</h3>
                  <p className="mt-3 text-xs font-medium leading-relaxed text-secondary">{sector.landmark}</p>
                  <p className="mt-4 text-sm leading-[1.8] text-text">{sector.text}</p>
                  <a href={sector.source} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-sm text-xs text-text underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Repère de l&apos;office de tourisme<Icon name="arrowRight" className="h-3.5 w-3.5" /></a>
                </article>
              ))}
            </div>
            <p className="mt-7 text-sm leading-[1.8] text-text">Pour un logement situé ailleurs dans le département, retrouvez nos <Link href="/viager-herault" className="rounded-sm underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">secteurs de viager dans l&apos;Hérault</Link>.</p>
          </div>
        </section>

        <section aria-labelledby="agde-use-heading" className="bg-[#f3f6f7] py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">02</span>Comprendre l&apos;occupation du bien</p>
              <h2 id="agde-use-heading" className={`mt-5 ${heading}`}>Une adresse à Agde.<br />Quel usage aujourd&apos;hui,<br /><span className="font-serif font-normal italic">et après la vente ?</span></h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">L&apos;évaluation immobilière ne suffit pas à définir un viager. Les droits conservés et la situation du ou des vendeurs sont étudiés avec la valeur du logement pour préparer bouquet et rente.</p>
              <SectionButton sectionId="projet-viager-agde" className={`${action} mt-7`}>Faire étudier mon projet à Agde<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
            </div>
            <div>
              <dl className="divide-y divide-secondary/15 border-t border-secondary/15">
                {uses.map(use => (
                  <div key={use.title} className="py-6">
                    <dt className="text-xl font-semibold text-secondary">{use.title}</dt>
                    <dd className="mt-3 text-sm leading-[1.8] text-text sm:text-base">{use.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 border-l-2 border-primary pl-5 text-sm leading-[1.8] text-text">Maison : terrain, dépendances et entretien. Appartement : lot, accès et copropriété. Dans les deux cas, les charges et les travaux se précisent selon les droits retenus et l&apos;acte de vente.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="agde-steps-heading" className="relative isolate overflow-hidden bg-secondary py-16 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-32 -z-10 w-[620px] max-w-none text-white opacity-[0.09] lg:-right-12 lg:w-[760px]"><SellerWatermark className="h-auto w-full" /></div>
          <div className={container}>
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65"><span className="mr-3 text-primary">03</span>Préparer votre viager à Agde</p>
                <h2 id="agde-steps-heading" className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl">Du logement que vous connaissez<br />aux conditions que vous comprenez.</h2>
              </div>
              <p className="max-w-sm text-base leading-[1.8] text-white/75">Le premier échange précise votre projet. Le dossier immobilier et les droits à prévoir permettent de préparer la suite.</p>
            </div>
            <ol className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-10">
              {steps.map((step, index) => (
                <li key={step.title} className="relative border-t border-white/20 pt-7">
                  <span aria-hidden="true" className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-primary">0{index + 1}</span>
                  <h3 className="mt-3 max-w-xs text-xl font-semibold leading-snug text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-white/75">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="agde-faq-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">04</span>Vos questions sur le viager à Agde</p>
              <h2 id="agde-faq-heading" className={`mt-5 ${heading}`}>Séjours, occupation,<br />copropriété :<br /><span className="font-serif font-normal italic">précisons votre projet.</span></h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Quelques points à éclaircir pour votre logement à Agde, au Grau ou au Cap, avant de choisir les conditions d&apos;une vente ou d&apos;un achat.</p>
              <SectionButton sectionId="projet-viager-agde" className={`${action} mt-7`}>Parler de mon projet à Agde<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              <a href={`tel:${agency.telephone}`} className="mt-5 flex min-h-11 w-fit items-center gap-2 rounded-sm text-sm font-medium text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Icon name="phone" className="h-4 w-4 text-primary" />{agency.telephoneDisplay}</a>
            </div>
            <div>
              <div className="border-t border-border">
                {faqs.map(item => (
                  <details key={item.question} name="agde-questions" className="group border-b border-border">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-medium leading-relaxed text-secondary sm:text-lg">{item.question}</h3>
                      <span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-primary"><span className="absolute inset-x-0 top-1/2 h-px bg-current" /><span className="absolute inset-y-0 left-1/2 w-px bg-current group-open:hidden" /></span>
                    </summary>
                    <p className="max-w-xl pb-6 pr-6 text-sm leading-[1.9] text-text sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
              <p className="mt-6 text-xs leading-[1.8] text-text">Repères officiels : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className="rounded-sm underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">la vente en viager</a>, <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F934" className="rounded-sm underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">l&apos;usufruit</a> et <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F37190" className="rounded-sm underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">les documents de copropriété</a> sur Service Public.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
