import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { SectionButton } from "@/components/SectionButton";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import { SellerWatermark } from "@/components/SellerWatermark";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, agency, breadcrumbJsonLd, faqJsonLd, realEstateAgentJsonLd } from "@/lib/seo";

const PATH = "/viager-beziers";
const TITLE = "Viager Béziers : votre bien, votre quartier, votre projet";
const DESCRIPTION = `Viager Béziers : votre logement, votre quartier, votre projet. Étude du bien et accompagnement par Patrimoine Cardinal. Appelez le ${agency.telephoneDisplay}.`;
const SHARE_IMAGE = "/images/project-sell.webp";

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
    images: [{ url: absoluteUrl(SHARE_IMAGE), alt: "Illustration d'un projet de vie et de vente immobilière" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [absoluteUrl(SHARE_IMAGE)] },
};

const districts = [
  {
    name: "Font-Neuve",
    description: "Pour votre maison ou votre appartement, précisez la surface, les espaces extérieurs et les travaux réalisés. L'étude part des caractéristiques de votre adresse.",
    focus: "Surface et état du logement",
  },
  {
    name: "Champ de Mars",
    description: "L'étage, la présence d'un ascenseur et l'accès à l'entrée font partie des points à examiner, notamment si vous souhaitez continuer à vivre dans le logement.",
    focus: "Accès et usage quotidien",
  },
  {
    name: "Garibaldi-Gambetta-Gare",
    description: "Orientation, luminosité, isolation et environnement immédiat : les qualités du logement se lisent à l'échelle de la rue et de l'immeuble, lors de son étude.",
    focus: "Rue et environnement du bien",
  },
  {
    name: "Croix de Poumeyrac-Cure",
    description: "Si votre bien dispose d'un jardin, d'un garage ou de dépendances, indiquez leur usage et leur état. Ces éléments sont examinés avec le logement principal.",
    focus: "Extérieurs et annexes",
  },
  {
    name: "Béziers-Devèze-Méditerranée",
    description: "Pour un appartement en copropriété, les charges, les derniers procès-verbaux et les travaux votés complètent l'étude de l'intérieur du logement.",
    focus: "Immeuble et copropriété",
  },
  {
    name: "Bagnols, Pechs et Bonaval",
    description: "Pour une maison, le terrain, la toiture et l'entretien du bâti sont à documenter. Pour un appartement, précisez les équipements et les parties communes.",
    focus: "Bâti et entretien",
  },
];

const propertyFactors = [
  {
    title: "L'adresse et l'accès",
    description: "Quartier, rue, étage, ascenseur et accès au logement : l'emplacement est étudié avec les conditions concrètes de vie dans le bien.",
  },
  {
    title: "Le logement et ses annexes",
    description: "Surface, distribution, lumière, extérieur, stationnement et état : les caractéristiques observées permettent de préparer l'évaluation immobilière.",
  },
  {
    title: "Les charges et les travaux",
    description: "Diagnostics, entretien du bâti et documents de copropriété éclairent les dépenses à prévoir. Les travaux sont examinés à partir de votre dossier.",
  },
];

const preparationSteps = [
  {
    title: "Situer précisément le bien",
    description: "Indiquez l'adresse à Béziers, le quartier, le type de logement et sa surface. Ajoutez votre souhait de rester dans les lieux ou de préparer un départ.",
    note: "Adresse · logement · projet de vie",
  },
  {
    title: "Réunir les éléments immobiliers",
    description: "Titre de propriété, diagnostics, travaux réalisés et documents de copropriété permettent d'étudier le bien. Le premier échange peut avoir lieu avant que le dossier soit complet.",
    note: "État · annexes · charges · travaux",
  },
  {
    title: "Préparer les conditions de la vente",
    description: "La valeur du bien, l'occupation souhaitée et votre situation servent à préparer l'étude du bouquet et de la rente. Le notaire formalise les engagements dans l'acte.",
    note: "Montants · droits conservés · acte notarié",
  },
];

const faqs = [
  {
    question: "Quels quartiers de Béziers peuvent faire l'objet d'une étude ?",
    answer: "Vous pouvez nous présenter un logement à Font-Neuve, Champ de Mars, Garibaldi-Gambetta-Gare, Croix de Poumeyrac-Cure, Béziers-Devèze-Méditerranée ou Bagnols, Pechs et Bonaval. Ces repères ne limitent pas l'étude à quelques secteurs : indiquez votre adresse dans Béziers pour préciser votre projet.",
  },
  {
    question: "Comment étudier un appartement en viager à Béziers ?",
    answer: "L'étude examine votre adresse, la surface, l'étage, l'ascenseur, l'état et les espaces extérieurs. Les charges, les travaux votés et les documents de copropriété complètent ces éléments. Deux appartements du même quartier peuvent nécessiter des évaluations différentes.",
  },
  {
    question: "Puis-je vendre mon logement à Béziers en continuant à l'habiter ?",
    answer: "Vous pouvez envisager de conserver un droit d'occupation dans la vente. Le notaire précise ce droit, ses bénéficiaires et ses conditions. Votre souhait de rester dans le logement doit être indiqué dès le premier échange, avec la situation de votre conjoint si elle est concernée.",
  },
  {
    question: "Existe-t-il un bouquet ou une rente identiques pour tous les biens à Béziers ?",
    answer: "Non. La valeur du logement, l'âge des bénéficiaires, les droits conservés et le montant du bouquet participent à l'étude. Le bouquet est facultatif et se discute avec la rente. Les montants doivent être expliqués à partir de votre bien et de votre situation.",
  },
  {
    question: "Quels éléments transmettre pour commencer mon projet à Béziers ?",
    answer: "Pour un premier échange, indiquez le quartier ou l'adresse, le type de logement, sa surface approximative et votre souhait d'occupation. Si vous les avez, ajoutez les diagnostics, les informations sur les travaux et les documents de copropriété. Vous pouvez commencer sans avoir réuni toutes les pièces.",
  },
];

const container = "mx-auto max-w-[1200px] px-6 lg:px-10";
const heading = "text-3xl font-semibold leading-[1.2] tracking-tight text-secondary sm:text-4xl";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.16em] text-text";
const actionClass = "inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function ViagerBeziersPage() {
  return (
    <>
      <JsonLd data={[
        realEstateAgentJsonLd({ path: PATH, areaServed: "Béziers", description: DESCRIPTION }),
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Viager Béziers", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <section aria-labelledby="beziers-heading" className="relative isolate overflow-hidden bg-secondary">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-48 -z-10 w-[900px] max-w-none text-white opacity-[0.08] lg:-bottom-24 lg:-right-16 lg:w-[1100px]">
            <SellerWatermark className="h-auto w-full" />
          </div>
          <div className={`${container} pb-12 pt-6 lg:pb-16 lg:pt-7`}>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[11px] text-white/65">
              <Link href="/" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link>
              <span aria-hidden="true" className="text-white/35">/</span>
              <span aria-current="page">Viager Béziers</span>
            </nav>
            <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16 xl:gap-24">
              <div className="min-w-0 lg:pt-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70"><span className="mr-3 text-primary">—</span>Votre adresse, votre projet</p>
                <h1 id="beziers-heading" className="mt-5 text-[38px] font-semibold leading-[1.13] tracking-tight text-white sm:text-5xl xl:text-[54px]">Viager<br /><span className="font-serif font-normal italic">à Béziers.</span></h1>
                <p className="mt-6 max-w-lg text-base leading-[1.8] text-white/80 sm:text-lg">Préparer la vente de votre logement commence par ce qui le rend unique : son quartier, son état et la vie que vous souhaitez y conserver. Patrimoine Cardinal étudie votre projet de viager à Béziers.</p>
                <div className="mt-8 flex items-start gap-4 border-t border-white/20 pt-6">
                  <Icon name="mapPin" className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <p className="max-w-sm text-sm leading-[1.8] text-white/75">Font-Neuve, Champ de Mars, Garibaldi-Gambetta-Gare… L&apos;étude porte sur votre adresse et les caractéristiques de votre bien.</p>
                </div>
                <SectionButton sectionId="beziers-districts" className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-medium text-white underline decoration-primary/60 underline-offset-8 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Situer mon logement dans Béziers<Icon name="arrowRight" className="h-4 w-4 text-primary" /></SectionButton>
              </div>
              <div id="projet-viager-beziers" className="min-w-0 scroll-mt-28">
                <MiniLeadForm appearance="hero" title="Un projet en viager à Béziers ?" description="Parlons de votre logement, de son quartier et de votre souhait de rester ou de partir." subject="Projet viager — Béziers" submitLabel="Être rappelé" />
                <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/70">Vous préférez appeler ? <a href={`tel:${agency.telephone}`} className="rounded-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{agency.telephoneDisplay}</a></p>
              </div>
            </div>
          </div>
        </section>

        <section id="beziers-districts" aria-labelledby="beziers-districts-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
          <div className={container}>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-20">
              <div>
                <p className={eyebrow}><span className="mr-3 text-primary">01</span>Les quartiers de Béziers</p>
                <h2 id="beziers-districts-heading" className={`mt-5 ${heading}`}>Un quartier comme repère.<br /><span className="font-serif font-normal italic">Votre logement au centre.</span></h2>
              </div>
              <p className="max-w-lg text-base leading-[1.8] text-text">Le nom du quartier situe le projet. L&apos;adresse, l&apos;immeuble et les qualités du logement permettent ensuite de préparer son étude immobilière.</p>
            </div>
            <div className="mt-10 grid gap-x-12 lg:mt-12 lg:grid-cols-2 lg:gap-x-20">
              {districts.map((district, index) => (
                <article key={district.name} className="border-t border-border py-7">
                  <p className="flex items-center gap-3 text-xs text-text"><span aria-hidden="true" className="text-primary">0{index + 1}</span>{district.focus}</p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-secondary sm:text-2xl">{district.name}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-[1.8] text-text">{district.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-3 border-t border-border pt-5 text-xs leading-[1.8] text-text">Ces secteurs sont répertoriés dans <a href="https://www.ville-beziers.fr/annuaires/quartiers" className="rounded-sm underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">l&apos;annuaire des quartiers de la Ville de Béziers</a>. Pour un logement situé dans un autre quartier de la ville, précisez simplement votre adresse lors du premier échange.</p>
          </div>
        </section>

        <section aria-labelledby="beziers-study-heading" className="bg-bg-gray py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">02</span>L&apos;étude de votre bien</p>
              <h2 id="beziers-study-heading" className={`mt-5 ${heading}`}>Une valeur immobilière<br />à établir à votre adresse.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Une maison et un appartement à Béziers ne s&apos;étudient pas de la même façon. Les caractéristiques de votre logement et les pièces du dossier guident l&apos;évaluation.</p>
              <figure className="mt-7">
                <div className="relative aspect-[1.7/1] overflow-hidden rounded-lg">
                  <Image src={SHARE_IMAGE} alt="Un couple échange dans son jardin" fill sizes="(min-width: 1024px) 420px, calc(100vw - 48px)" className="object-cover object-[center_35%]" />
                </div>
                <figcaption className="mt-3 text-xs leading-relaxed text-text">Illustration : prendre le temps de préparer votre projet de vie.</figcaption>
              </figure>
            </div>
            <div>
              <div className="divide-y divide-border border-t border-border">
                {propertyFactors.map(factor => (
                  <article key={factor.title} className="py-6">
                    <h3 className="text-xl font-semibold text-secondary">{factor.title}</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-text">{factor.description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-[#dce9ee] bg-[#f0f5f7] px-6 py-7 sm:px-8">
                <h3 className="text-lg font-semibold text-secondary">De votre logement aux conditions du viager</h3>
                <p className="mt-3 text-sm leading-[1.8] text-text">La valeur immobilière est un point de départ. Votre âge, les droits d&apos;occupation conservés et le capital souhaité participent ensuite à l&apos;étude du bouquet et de la rente. Les hypothèses doivent être expliquées pour votre situation.</p>
              </div>
              <SectionButton sectionId="projet-viager-beziers" className={`mt-7 ${actionClass}`}>Faire étudier mon bien à Béziers<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
            </div>
          </div>
        </section>

        <section aria-labelledby="beziers-prepare-heading" className="relative isolate overflow-hidden bg-secondary py-16 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -right-32 -z-10 w-[680px] max-w-none text-white opacity-[0.07] lg:-right-12 lg:w-[780px]">
            <SellerWatermark className="h-auto w-full" />
          </div>
          <div className={container}>
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65"><span className="mr-3 text-primary">03</span>Préparer votre dossier</p>
                <h2 id="beziers-prepare-heading" className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl">Un projet à Béziers.<br />Des éléments à rassembler.</h2>
              </div>
              <p className="max-w-sm text-base leading-[1.8] text-white/75">Vous pouvez commencer par décrire votre logement et ce que vous souhaitez pour la suite, avant de réunir toutes les pièces.</p>
            </div>
            <ol className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-10">
              {preparationSteps.map((step, index) => (
                <li key={step.title} className="relative border-t border-white/20 pt-7">
                  <span aria-hidden="true" className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-primary">0{index + 1}</span>
                  <h3 className="mt-3 max-w-xs text-xl font-semibold leading-snug text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-white/75">{step.description}</p>
                  <p className="mt-5 text-xs leading-relaxed text-white/85">{step.note}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="beziers-faq-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">04</span>Vos questions sur le projet</p>
              <h2 id="beziers-faq-heading" className={`mt-5 ${heading}`}>Préparer votre viager<br /><span className="font-serif font-normal italic">à Béziers.</span></h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Quartier, état du logement, occupation souhaitée et pièces à préparer : un premier échange permet de préciser les points à étudier.</p>
              <SectionButton sectionId="projet-viager-beziers" className={`mt-7 ${actionClass}`}>Parler de mon logement<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              <a href={`tel:${agency.telephone}`} className="mt-5 flex min-h-11 w-fit items-center gap-2 rounded-sm text-sm font-medium text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Icon name="phone" className="h-4 w-4 text-primary" />{agency.telephoneDisplay}</a>
            </div>
            <div>
              <div className="border-t border-border">
                {faqs.map(item => (
                  <details key={item.question} name="beziers-questions" className="group border-b border-border">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-medium leading-relaxed text-secondary sm:text-lg">{item.question}</h3>
                      <span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-primary"><span className="absolute inset-x-0 top-1/2 h-px bg-current" /><span className="absolute inset-y-0 left-1/2 w-px bg-current group-open:hidden" /></span>
                    </summary>
                    <p className="max-w-xl pb-6 pr-6 text-sm leading-[1.9] text-text sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
              <p className="mt-6 text-xs leading-[1.8] text-text">Pour les règles de la vente, consultez <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className="rounded-sm underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">les explications de Service Public sur le viager</a>. Les conditions de votre acte sont à préciser avec le notaire.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
