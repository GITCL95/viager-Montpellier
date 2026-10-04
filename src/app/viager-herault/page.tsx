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

const PATH = "/viager-herault";
const TITLE = "Viager Hérault (34) : vendre et acheter dans le département";
const DESCRIPTION = `Viager dans l'Hérault (34) : une étude adaptée à votre commune, votre logement et votre projet. Contactez Patrimoine Cardinal au ${agency.telephoneDisplay}.`;
const SHARE_IMAGE = "/images/hero-background-montpellier.webp";

export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: PATH },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: absoluteUrl(PATH), type: "website",
    locale: "fr_FR", siteName: agency.name,
    images: [{ url: absoluteUrl(SHARE_IMAGE), alt: "Viager dans l'Hérault — illustration architecturale" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [absoluteUrl(SHARE_IMAGE)] },
};

const territories = [
  { name: "Montpellier et sa métropole", places: "Montpellier · Castelnau-le-Lez · Lattes", text: "La commune et l'adresse précises permettent de situer le logement. L'étage, l'ascenseur, l'extérieur et les charges complètent l'étude.", href: "/", link: "Viager à Montpellier" },
  { name: "Sète et le bassin de Thau", places: "Sète · Frontignan · Balaruc-les-Bains", text: "L'usage du bien, son accès et son environnement sont examinés avec vous. Une vue ou la proximité de l'eau ne suffisent pas à déterminer sa valeur.", href: "/viager-sete", link: "Viager à Sète" },
  { name: "Béziers et le Biterrois", places: "Béziers · Sérignan · Valras-Plage", text: "Appartement en copropriété ou maison : l'état du bâtiment, les travaux et les dépendances permettent de préciser les caractéristiques à retenir.", href: "/viager-beziers", link: "Viager à Béziers" },
  { name: "Agde et le littoral agathois", places: "Agde · Vias · Marseillan", text: "Résidence principale ou autre logement, occupation actuelle, copropriété et entretien : ces éléments sont réunis avant de préparer les conditions du viager.", href: "/viager-agde", link: "Viager à Agde" },
  { name: "Le littoral à l'est du département", places: "Palavas-les-Flots · Mauguio-Carnon · La Grande-Motte", text: "L'adresse, les espaces extérieurs, l'accessibilité et les dépenses du logement sont étudiés ensemble, selon votre projet de vente ou d'acquisition.", href: "/viager-palavas-les-flots", link: "Viager à Palavas-les-Flots" },
  { name: "Les communes de l'intérieur", places: "Lunel · Clermont-l'Hérault · Lodève", text: "La situation du bien, le terrain éventuel et l'état du bâti sont précisés à l'échelle de la commune. Votre projet reste le point de départ de l'échange." },
];

const studyItems = [
  { title: "La commune et le logement", text: "Nous partons de l'adresse, de la surface, de l'état et des caractéristiques du bien dans l'Hérault. Les références immobilières doivent être pertinentes pour son secteur." },
  { title: "L'occupation envisagée", text: "Souhaitez-vous continuer à habiter le logement ou le mettre à disposition ? Les droits conservés influencent l'étude ; leurs conditions sont précisées dans l'acte." },
  { title: "Les paiements et les dépenses", text: "Bouquet éventuel, rente, charges et travaux se regardent ensemble. Le total d'une rente viagère dépend de la durée de vie de ses bénéficiaires et reste incertain." },
];

const steps = [
  { title: "Situer votre bien dans le 34", text: "Vous nous indiquez la commune, l'adresse et la situation du logement. Nous précisons avec vous les informations à réunir pour commencer l'étude." },
  { title: "Préparer une proposition expliquée", text: "Les caractéristiques du logement et votre projet permettent d'étudier la valeur, l'occupation et les paiements. Les hypothèses sont présentées avant votre décision." },
  { title: "Préciser les engagements avec le notaire", text: "L'acte formalise les droits de chacun, les paiements et les charges. Les garanties et les conséquences d'un départ ou d'un impayé sont à comprendre avant de signer." },
];

const faqs = [
  { question: "Dans quelles communes de l'Hérault puis-je faire étudier mon projet ?", answer: "Indiquez-nous la commune du bien dans le département 34 : sur le littoral, dans une ville ou dans une commune de l'intérieur. Nous commençons par sa localisation et votre projet pour préciser les informations nécessaires et organiser la suite de l'échange." },
  { question: "Existe-t-il un prix du viager valable pour tout l'Hérault ?", answer: "Non. Une moyenne départementale ne suffit pas à estimer un logement. Sa commune, son adresse, son état, ses caractéristiques et les droits d'occupation éventuels doivent être examinés. Le bouquet et la rente sont ensuite étudiés avec la situation du ou des vendeurs." },
  { question: "Peut-on étudier une maison comme un appartement dans le 34 ?", answer: "Oui, le projet peut concerner une maison ou un appartement. Pour une maison, précisez notamment le terrain et les dépendances ; pour un appartement, l'étage, l'accès et la copropriété. L'étude doit porter sur le bien concerné et ses documents disponibles." },
  { question: "Puis-je conserver l'occupation de mon logement ?", answer: "Un droit d'occupation peut être conservé dans une vente en viager. Sa nature, ses bénéficiaires et ses conditions sont définis dans l'acte notarié. Le choix doit correspondre à votre situation et être intégré à l'étude du logement dans l'Hérault." },
  { question: "Quels éléments préparer pour une première étude ?", answer: "La commune et l'adresse du bien, sa surface, son type, son état et son occupation actuelle permettent de commencer. Réunissez aussi les documents disponibles : titre de propriété, diagnostics et, le cas échéant, documents de copropriété. Le conseiller précise les pièces utiles à votre dossier." },
  { question: "Comment commencer un projet de viager dans l'Hérault ?", answer: "Laissez votre nom, votre téléphone et votre e-mail dans le formulaire. Lors du premier échange, précisez la commune du bien et votre projet de vente ou d'acquisition. Vous pouvez aussi joindre Patrimoine Cardinal au 04 83 58 43 86." },
];

const container = "mx-auto max-w-[1200px] px-6 lg:px-10";
const heading = "text-3xl font-semibold leading-[1.2] tracking-tight text-secondary sm:text-4xl";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.16em] text-text";
const action = "inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function ViagerHeraultPage() {
  return (
    <>
      <JsonLd data={[
        realEstateAgentJsonLd({ path: PATH, areaServed: "Hérault", description: DESCRIPTION }),
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Viager Hérault", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <section aria-labelledby="herault-heading" className="relative isolate overflow-hidden bg-secondary">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-80">
            <Image src="/images/hero-background-montpellier.webp" alt="" fill preload sizes="100vw" className="object-cover object-[65%_center] lg:object-center" />
          </div>
          <div className={`${container} pb-12 pt-6 lg:pb-16 lg:pt-7`}>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[11px] text-white/65">
              <Link href="/" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link>
              <span aria-hidden="true" className="text-white/35">/</span><span aria-current="page">Viager Hérault</span>
            </nav>
            <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16 xl:gap-24">
              <div className="min-w-0 lg:pt-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70"><span className="mr-3 text-primary">—</span>Votre projet dans le département 34</p>
                <h1 id="herault-heading" className="mt-5 text-[38px] font-semibold leading-[1.13] tracking-tight text-white sm:text-5xl xl:text-[54px]">Le viager<br /> <span className="font-serif font-normal italic">dans l&apos;Hérault.</span></h1>
                <p className="mt-6 max-w-lg text-base leading-[1.8] text-white/80 sm:text-lg">Vendre ou acheter en viager dans le 34 commence par votre commune et votre logement. Patrimoine Cardinal vous accompagne pour préparer une étude adaptée à votre bien et aux conditions d&apos;occupation envisagées.</p>
                <div className="mt-8 flex items-center gap-5 border-y border-white/20 py-5">
                  <span aria-hidden="true" className="font-serif text-6xl italic leading-none text-white/35">34</span>
                  <p className="max-w-xs text-sm leading-[1.8] text-white/75">Du littoral aux communes de l&apos;intérieur, l&apos;adresse précise guide l&apos;étude.</p>
                </div>
                <SectionButton sectionId="secteurs-herault" className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-semibold text-white underline decoration-primary/60 underline-offset-8 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Les secteurs du viager dans le 34<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              </div>
              <div id="projet-herault" className="min-w-0 scroll-mt-28">
                <MiniLeadForm appearance="hero" title="Votre projet dans l'Hérault" description="Un premier échange sur la commune de votre bien, son occupation et les conditions à préparer." subject="Projet viager Hérault — département 34" submitLabel="Être rappelé" />
                <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/70">Vous préférez appeler ? <a href={`tel:${agency.telephone}`} className="rounded-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{agency.telephoneDisplay}</a></p>
              </div>
            </div>
          </div>
        </section>

        <section id="secteurs-herault" aria-labelledby="herault-sectors-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
          <div className={container}>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-20">
              <div><p className={eyebrow}><span className="mr-3 text-primary">01</span>Les secteurs de l&apos;Hérault</p><h2 id="herault-sectors-heading" className={`mt-5 ${heading}`}>Un département.<br /><span className="font-serif font-normal italic">Des repères locaux.</span></h2></div>
              <p className="max-w-lg text-base leading-[1.8] text-text">Situez votre logement dans le 34. Ces ensembles servent à préparer l&apos;échange ; l&apos;estimation repose sur l&apos;adresse et les caractéristiques du bien, et non sur un prix unique pour le département.</p>
            </div>
            <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:mt-12 lg:gap-x-20">
              {territories.map((territory, index) => (
                <article key={territory.name} className="border-t border-border pt-6">
                  <p className="text-xs leading-relaxed text-text"><span aria-hidden="true" className="mr-3 font-medium text-primary">0{index + 1}</span>{territory.places}</p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-secondary">{territory.name}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-[1.8] text-text">{territory.text}</p>
                  {territory.href ? <Link href={territory.href} className="mt-4 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-semibold text-secondary underline decoration-primary/50 underline-offset-8 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{territory.link}<Icon name="arrowRight" className="h-4 w-4" /></Link> : null}
                </article>
              ))}
            </div>
            <p className="mt-8 text-xs leading-[1.8] text-text">Repères géographiques : <a href="https://www.herault-tourisme.com/fr/decouvrir/villes-et-villages-dans-lherault/" className="rounded-sm underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">les villes et villages de l&apos;Hérault</a>.</p>
          </div>
        </section>

        <section aria-labelledby="herault-study-heading" className="bg-[#f3f6f7] py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div><p className={eyebrow}><span className="mr-3 text-primary">02</span>Étudier un viager dans le 34</p><h2 id="herault-study-heading" className={`mt-5 ${heading}`}>La valeur du bien.<br />Le projet de vie.</h2><p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Un logement du littoral et une maison dans une commune de l&apos;intérieur ne s&apos;étudient pas à partir des mêmes références. Nous réunissons les informations propres à votre bien avant de préparer les conditions de la vente.</p><SectionButton sectionId="projet-herault" className={`mt-7 ${action}`}>Faire étudier mon bien dans le 34<Icon name="arrowRight" className="h-4 w-4" /></SectionButton></div>
            <dl className="divide-y divide-secondary/15 border-t border-secondary/15">
              {studyItems.map(item => <div key={item.title} className="py-7"><dt className="text-xl font-semibold text-secondary">{item.title}</dt><dd className="mt-4 text-sm leading-[1.8] text-text sm:text-base">{item.text}</dd></div>)}
            </dl>
          </div>
        </section>

        <section aria-labelledby="herault-steps-heading" className="relative isolate overflow-hidden bg-secondary py-16 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-32 -z-10 w-[620px] max-w-none text-white opacity-[0.09] lg:-right-12 lg:w-[760px]"><SellerWatermark className="h-auto w-full" /></div>
          <div className={container}>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65"><span className="mr-3 text-primary">03</span>Préparer votre dossier dans l&apos;Hérault</p>
            <h2 id="herault-steps-heading" className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl">De votre adresse<br />à des conditions expliquées.</h2>
            <ol className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-10">
              {steps.map((step, index) => <li key={step.title} className="relative border-t border-white/20 pt-7"><span aria-hidden="true" className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-primary" /><span className="text-xs font-medium text-primary">0{index + 1}</span><h3 className="mt-3 max-w-xs text-xl font-semibold leading-snug text-white">{step.title}</h3><p className="mt-4 text-sm leading-[1.8] text-white/75">{step.text}</p></li>)}
            </ol>
          </div>
        </section>

        <section aria-labelledby="herault-faq-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div><p className={eyebrow}><span className="mr-3 text-primary">04</span>Vos questions dans le 34</p><h2 id="herault-faq-heading" className={`mt-5 ${heading}`}>Préparer un viager<br />dans l&apos;Hérault.</h2><p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Commune, logement, occupation : quelques repères avant un échange consacré à votre situation.</p><SectionButton sectionId="projet-herault" className={`mt-7 ${action}`}>Parler de mon projet dans l&apos;Hérault<Icon name="arrowRight" className="h-4 w-4" /></SectionButton><a href={`tel:${agency.telephone}`} className="mt-5 flex min-h-11 w-fit items-center gap-2 rounded-sm text-sm font-medium text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Icon name="phone" className="h-4 w-4 text-primary" />{agency.telephoneDisplay}</a></div>
            <div><div className="border-t border-border">{faqs.map(item => <details key={item.question} name="herault-questions" className="group border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden"><h3 className="text-base font-medium leading-relaxed text-secondary sm:text-lg">{item.question}</h3><span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-primary"><span className="absolute inset-x-0 top-1/2 h-px bg-current" /><span className="absolute inset-y-0 left-1/2 w-px bg-current group-open:hidden" /></span></summary><p className="max-w-xl pb-6 pr-6 text-sm leading-[1.9] text-text sm:text-base">{item.answer}</p></details>)}</div><p className="mt-6 text-xs leading-[1.8] text-text">Repères officiels : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className="rounded-sm underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">les règles de la vente en viager sur Service Public</a>.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
