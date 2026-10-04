import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import { SectionButton } from "@/components/SectionButton";
import { SellerWatermark } from "@/components/SellerWatermark";
import { absoluteUrl, agency, breadcrumbJsonLd, faqJsonLd, realEstateAgentJsonLd } from "@/lib/seo";

const PATH = "/viager-nimes";
const TITLE = "Viager Nîmes : quartiers et étude de votre logement";
const DESCRIPTION = `Viager à Nîmes : quartiers, étude de votre logement, bouquet et rente. Parlons de votre projet avec Patrimoine Cardinal au ${agency.telephoneDisplay}.`;
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
    images: [{ url: absoluteUrl(SHARE_IMAGE), alt: "Illustration architecturale d'un projet en viager" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [absoluteUrl(SHARE_IMAGE)] },
};

const neighborhoods = [
  { name: "Écusson", description: "Pour votre logement dans l'Écusson, précisez l'étage, l'accès, l'état intérieur et les documents de copropriété s'il y en a." },
  { name: "Jean-Jaurès", description: "L'adresse exacte, la surface, les annexes et le stationnement éventuel permettent de décrire votre bien dans le secteur Jean-Jaurès." },
  { name: "Richelieu", description: "Dans Richelieu, l'étude part de votre logement : disposition des pièces, exposition, entretien et travaux envisagés." },
  { name: "Carmes-Couronne", description: "Pour un projet dans le secteur des Carmes, réunissez les informations sur le bien et, en copropriété, les charges et les travaux votés." },
  { name: "Saint-Césaire", description: "Maison ou appartement à Saint-Césaire : décrivez la surface, les extérieurs et les conditions d'accès propres à votre adresse." },
  { name: "Courbessac", description: "À Courbessac, les dépendances, les extérieurs éventuels et leur entretien complètent les informations sur votre logement." },
];

const factors = [
  { label: "Le logement", title: "Décrire le bien à son adresse", description: "La surface, l'état, les annexes, les accès et les travaux comptent avec la localisation. Le nom du quartier ne suffit pas à établir une valeur." },
  { label: "Votre occupation", title: "Préparer la suite dans le logement", description: "Rester chez vous ou libérer le bien : votre souhait guide les droits à examiner. La situation de votre conjoint fait aussi partie de l'étude." },
  { label: "Les paiements", title: "Expliquer bouquet et rente", description: "La valeur immobilière, l'âge du ou des vendeurs et les droits conservés participent à l'étude. Capital au départ et revenus dans le temps se regardent ensemble." },
];

const preparation = [
  { title: "Votre adresse et vos priorités", text: "Indiquez le quartier nîmois, le type de logement, sa surface et votre souhait d'occupation. Vous pouvez commencer par un échange, même si votre projet n'est pas encore arrêté.", note: "Le point de départ de votre demande" },
  { title: "Les pièces déjà disponibles", text: "Si vous les avez, préparez titre de propriété, plans, diagnostics et documents de copropriété. Ils complètent la description du bien et permettent de préciser les points à vérifier.", note: "Des documents à réunir progressivement" },
  { title: "Les conditions avant la signature", text: "Le notaire explique les droits, les paiements, les charges et les dispositions pour vos proches. Les engagements retenus sont formalisés avant votre décision de signer.", note: "Un acte adapté à votre situation" },
];

const faqs = [
  {
    question: "Mon quartier de Nîmes n'est pas cité : puis-je faire étudier mon bien ?",
    answer: "Oui. Les quartiers présentés servent de repères et ne constituent pas une liste exhaustive. Indiquez l'adresse de votre logement à Nîmes, sa surface, son état et votre projet : l'étude se prépare à partir du bien lui-même.",
  },
  {
    question: "Quelles informations donner pour un appartement dans l'Écusson ?",
    answer: "Commencez par l'adresse, la surface, l'étage et les conditions d'accès. Ajoutez l'état du logement, les annexes et les travaux que vous connaissez. Les informations de copropriété, si le bien en dépend, permettront ensuite de compléter le dossier.",
  },
  {
    question: "Comment préparer une demande pour une maison à Saint-Césaire ou Courbessac ?",
    answer: "Décrivez les surfaces du logement et du terrain, les dépendances, les accès et l'entretien réalisé. Précisez aussi votre souhait de rester ou de partir. Ces éléments aident à préparer l'échange sans attribuer un prix automatique au quartier.",
  },
  {
    question: "Puis-je envisager de rester dans mon logement à Nîmes ?",
    answer: "Ce souhait peut être étudié avec un droit d'occupation conservé. Le notaire en précise la nature, les bénéficiaires et les conditions dans l'acte. La situation de votre conjoint et les conséquences d'un éventuel départ sont à examiner avant de vous engager.",
  },
  {
    question: "Le montant du bouquet dépend-il seulement du quartier ?",
    answer: "Non. La valeur du logement, la situation du ou des vendeurs et les droits conservés doivent être étudiés ensemble. Le bouquet est facultatif et se négocie avec la rente. Aucun montant ne peut être déduit du seul nom d'un quartier de Nîmes.",
  },
];

const container = "mx-auto max-w-[1200px] px-6 lg:px-10";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.16em] text-text";
const heading = "text-3xl font-semibold leading-[1.2] tracking-tight text-secondary sm:text-4xl";
const sourceLink = "rounded-sm underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const buttonClass = "inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function ViagerNimesPage() {
  return (
    <>
      <JsonLd data={[
        realEstateAgentJsonLd({ path: PATH, areaServed: "Nîmes", description: DESCRIPTION }),
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Viager Nîmes", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <section aria-labelledby="nimes-heading" className="relative isolate overflow-hidden bg-secondary">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-80">
            <Image src={SHARE_IMAGE} alt="" fill preload sizes="100vw" className="object-cover object-[65%_center] lg:object-center" />
          </div>
          <div className={`${container} pb-12 pt-6 lg:pb-16 lg:pt-7`}>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[11px] text-white/65">
              <Link href="/" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link>
              <span aria-hidden="true" className="text-white/35">/</span>
              <span aria-current="page">Viager Nîmes</span>
            </nav>
            <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16 xl:gap-24">
              <div className="min-w-0 lg:pt-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70"><span className="mr-3 text-primary">—</span>Votre logement à Nîmes</p>
                <h1 id="nimes-heading" className="mt-5 text-[38px] font-semibold leading-[1.13] tracking-tight text-white sm:text-5xl xl:text-[54px]">Viager<br /><span className="font-serif font-normal italic">à Nîmes.</span></h1>
                <p className="mt-6 max-w-lg text-base leading-[1.8] text-white/80 sm:text-lg">Votre adresse, votre quartier, la vie que vous souhaitez préparer. Patrimoine Cardinal étudie votre projet de viager à Nîmes à partir de votre logement et de votre situation.</p>
                <div className="mt-8 flex items-start gap-4 border-t border-white/20 pt-6">
                  <Icon name="mapPin" className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <p className="max-w-sm text-sm leading-[1.8] text-white/75">De l&apos;Écusson à Saint-Césaire ou Courbessac, l&apos;étude tient compte du bien à son adresse, de son état et de vos souhaits d&apos;occupation.</p>
                </div>
                <p className="mt-7 max-w-sm text-sm leading-[1.8] text-white/70">Vous souhaitez vendre votre logement ou préparer une acquisition à Nîmes ? Un premier échange permet de préciser les éléments de votre demande.</p>
              </div>
              <div id="projet-nimes" className="min-w-0 scroll-mt-28">
                <MiniLeadForm appearance="hero" title="Votre projet à Nîmes" description="Parlons de votre logement, de votre quartier et de ce que vous souhaitez préparer." subject="Demande — Viager Nîmes" submitLabel="Être rappelé" />
                <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/70">Vous préférez appeler ? <a href={`tel:${agency.telephone}`} className="rounded-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{agency.telephoneDisplay}</a></p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="nimes-neighborhoods-heading" className="bg-white py-16 lg:py-24">
          <div className={container}>
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
              <div>
                <p className={eyebrow}><span className="mr-3 text-primary">01</span>Les quartiers nîmois</p>
                <h2 id="nimes-neighborhoods-heading" className={`mt-5 ${heading}`}>Votre quartier est un repère.<br /><span className="font-serif font-normal italic">Votre logement reste unique.</span></h2>
              </div>
              <p className="max-w-lg text-base leading-[1.8] text-text">Ces quartiers de Nîmes permettent de situer votre demande. Les critères ci-dessous sont des points à examiner pour votre bien, sans préjuger de sa valeur.</p>
            </div>
            <ul className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
              {neighborhoods.map((neighborhood, index) => (
                <li key={neighborhood.name} className="border-t border-border py-7">
                  <p aria-hidden="true" className="text-xs font-medium text-primary">0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold text-secondary">{neighborhood.name}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-text">{neighborhood.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col items-start gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
              <p className="max-w-xl text-sm leading-[1.8] text-text">Votre quartier n&apos;apparaît pas ici ? Indiquez simplement votre adresse à Nîmes lors du premier échange.</p>
              <SectionButton sectionId="projet-nimes" className={`${buttonClass} shrink-0`}>Faire étudier mon bien<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
            </div>
            <p className="mt-5 text-xs leading-[1.8] text-text">Repères de localisation : <a href="https://www.nimes.fr/mon-quotidien/vie-associative-et-de-quartiers/les-conseils-de-quartiers" className={sourceLink}>les quartiers présentés par la Ville de Nîmes</a>.</p>
          </div>
        </section>

        <section aria-labelledby="nimes-study-heading" className="bg-[#f3f6f7] py-16 lg:py-24">
          <div className={container}>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20">
              <div>
                <p className={eyebrow}><span className="mr-3 text-primary">02</span>Une étude à partir du bien</p>
                <h2 id="nimes-study-heading" className={`mt-5 ${heading}`}>Une adresse à Nîmes.<br />Une situation à comprendre.</h2>
              </div>
              <div>
                <p className="text-base leading-[1.8] text-text">L&apos;étude de votre projet rassemble les caractéristiques immobilières et vos objectifs. Elle doit expliquer ce qui relève de la valeur du bien, des droits conservés et des conditions de paiement.</p>
                <p className="mt-4 text-sm leading-[1.8] text-text">Ni un quartier ni une surface ne suffisent à donner un bouquet ou une rente. Les montants envisagés s&apos;examinent avec leurs hypothèses et les clauses à préparer.</p>
              </div>
            </div>
            <ol className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
              {factors.map((factor, index) => (
                <li key={factor.title} className="border-t border-secondary/20 pt-6">
                  <p className="text-xs text-text"><span aria-hidden="true" className="mr-3 text-primary">0{index + 1}</span>{factor.label}</p>
                  <h3 className="mt-4 text-xl font-semibold text-secondary">{factor.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-text">{factor.description}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-3xl border-t border-secondary/15 pt-6 text-sm leading-[1.8] text-text">La rente est versée selon les conditions de l&apos;acte ; sa durée dépend de la vie du ou des bénéficiaires. Les charges, les travaux et une éventuelle indexation doivent être examinés avec le notaire.</p>
          </div>
        </section>

        <section aria-labelledby="nimes-preparation-heading" className="relative isolate overflow-hidden bg-secondary py-16 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-32 -z-10 w-[620px] max-w-none text-white opacity-[0.09] lg:-right-12 lg:w-[760px]"><SellerWatermark className="h-auto w-full" /></div>
          <div className={container}>
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65"><span className="mr-3 text-primary">03</span>Préparer votre dossier nîmois</p>
                <h2 id="nimes-preparation-heading" className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl">Commencer avec l&apos;essentiel.<br />Préciser au fil de l&apos;étude.</h2>
              </div>
              <p className="max-w-sm text-base leading-[1.8] text-white/75">Vous pouvez nous contacter avant d&apos;avoir réuni toutes les pièces de votre logement à Nîmes.</p>
            </div>
            <ol className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-10">
              {preparation.map((item, index) => (
                <li key={item.title} className="relative border-t border-white/20 pt-7">
                  <span aria-hidden="true" className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-primary">0{index + 1}</span>
                  <h3 className="mt-3 max-w-xs text-xl font-semibold leading-snug text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-white/75">{item.text}</p>
                  <p className="mt-5 text-xs text-white/85">{item.note}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="nimes-faq-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">04</span>Vos questions à Nîmes</p>
              <h2 id="nimes-faq-heading" className={`mt-5 ${heading}`}>Un projet de viager,<br /><span className="font-serif font-normal italic">à votre adresse.</span></h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Quartier, documents, occupation : ces premiers repères permettent de préparer une demande adaptée à votre logement nîmois.</p>
              <SectionButton sectionId="projet-nimes" className={`mt-7 ${buttonClass}`}>Parler de mon projet à Nîmes<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              <a href={`tel:${agency.telephone}`} className="mt-5 flex w-fit items-center gap-2 rounded-sm text-sm font-medium text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Icon name="phone" className="h-4 w-4 text-primary" />{agency.telephoneDisplay}</a>
            </div>
            <div>
              <div className="border-t border-border">
                {faqs.map(item => (
                  <details key={item.question} name="nimes-questions" className="group border-b border-border">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-medium leading-relaxed text-secondary sm:text-lg">{item.question}</h3>
                      <span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-primary"><span className="absolute inset-x-0 top-1/2 h-px bg-current" /><span className="absolute inset-y-0 left-1/2 w-px bg-current group-open:hidden" /></span>
                    </summary>
                    <p className="max-w-xl pb-6 pr-6 text-sm leading-[1.9] text-text sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
              <p className="mt-6 text-xs leading-[1.8] text-text">Repères sur le contrat : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className={sourceLink}>les règles de la vente en viager sur Service Public</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
