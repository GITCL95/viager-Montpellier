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

const PATH = "/viager-libre-montpellier";
const TITLE = "Viager libre à Montpellier : usage, bouquet et rente";
const DESCRIPTION = `Viager libre à Montpellier : logement disponible, bouquet, rente et budget de l'acquéreur. Patrimoine Cardinal : ${agency.telephoneDisplay}.`;

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
    images: [{ url: absoluteUrl("/images/project-buy.webp"), alt: "Préparer un projet en viager libre à Montpellier" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [absoluteUrl("/images/project-buy.webp")] },
};

const faqs = [
  {
    question: "Puis-je habiter le logement dès la signature ?",
    answer: "Le viager libre permet à l'acquéreur d'utiliser le logement dès la vente. Le vendeur ne conserve pas de droit d'occupation. Avant de vous organiser, faites confirmer la situation du bien et les modalités de remise des clés dans l'acte notarié.",
  },
  {
    question: "Puis-je mettre le bien en location ?",
    answer: "Oui, l'acquéreur peut louer le logement et percevoir les loyers. Préparez ce projet avec un budget qui tient compte des travaux, des charges et des périodes sans locataire. Le loyer espéré ne doit pas être présenté comme un revenu garanti.",
  },
  {
    question: "Le bouquet est-il obligatoire en viager libre ?",
    answer: "Non. Le bouquet est une somme versée à la signature lorsqu'il est prévu. Son montant se négocie avec celui de la rente. L'étude doit expliquer leur équilibre, à partir de la valeur du bien et de la situation du vendeur.",
  },
  {
    question: "Connaît-on le coût total de l'achat à l'avance ?",
    answer: "Les conditions de paiement sont écrites dans l'acte, mais la durée du versement de la rente dépend de la vie du vendeur. Le total payé reste donc incertain. Une clause d'indexation peut aussi faire évoluer la rente si elle est prévue au contrat.",
  },
  {
    question: "Qui règle les charges, les taxes et les travaux ?",
    answer: "En viager libre, l'acquéreur prend en charge les taxes, l'entretien et les réparations. Ces dépenses s'ajoutent à la rente. Demandez au notaire d'expliquer les obligations inscrites dans l'acte et examinez les documents du logement avant de vous engager.",
  },
];

const priceComponents = [
  { label: "La valeur du logement", timing: "Le point de départ", description: "L'emplacement à Montpellier, la surface, l'état et les travaux à prévoir permettent d'étudier le bien lui-même." },
  { label: "Le bouquet", timing: "À la signature, s'il est prévu", description: "Ce capital de départ est facultatif. Il s'examine avec la rente et les ressources disponibles pour le projet." },
  { label: "La rente", timing: "Selon les échéances de l'acte", description: "Son montant tient compte notamment de la valeur du bien, de l'âge du vendeur et du bouquet. Son versement est viager." },
];

const steps = [
  { title: "Clarifier l'usage du bien", description: "Habiter le logement ou le louer, vendre un bien que vous n'occupez plus : nous commençons par votre projet et la situation du logement.", note: "Votre objectif et la disponibilité" },
  { title: "Étudier l'équilibre financier", description: "Valeur, bouquet, rente, charges et travaux sont réunis dans une proposition expliquée. Vous disposez des éléments pour décider.", note: "Le budget dans son ensemble" },
  { title: "Préparer la signature et les clés", description: "Le notaire précise les paiements, les obligations et les modalités de mise à disposition. La remise du bien se prépare avec les parties.", note: "Des conditions inscrites dans l'acte" },
];

const container = "mx-auto max-w-[1200px] px-6 lg:px-10";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.16em] text-text";
const heading = "text-3xl font-semibold leading-[1.2] tracking-tight text-secondary sm:text-4xl";
const textLink = "rounded-sm underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function ViagerLibreMontpellierPage() {
  return (
    <>
      <JsonLd data={[
        realEstateAgentJsonLd({ path: PATH, areaServed: "Montpellier", description: DESCRIPTION }),
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Viager libre à Montpellier", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <section aria-labelledby="libre-heading" className="relative isolate overflow-hidden bg-secondary">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-80">
            <Image src="/images/hero-background-montpellier.webp" alt="" fill preload sizes="100vw" className="object-cover object-[65%_center] lg:object-center" />
          </div>
          <div className={`${container} pb-12 pt-6 lg:pb-16 lg:pt-7`}>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[11px] text-white/65">
              <Link href="/" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link>
              <span aria-hidden="true" className="text-white/35">/</span>
              <span aria-current="page">Viager libre à Montpellier</span>
            </nav>
            <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16 xl:gap-24">
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70"><span className="mr-3 text-primary">—</span>Disposer du logement</p>
                <h1 id="libre-heading" className="mt-5 text-[38px] font-semibold leading-[1.13] tracking-tight text-white sm:text-5xl xl:text-[54px]">
                  Le viager libre<br className="hidden sm:block" /> <span className="font-serif font-normal italic">à Montpellier.</span>
                </h1>
                <p className="mt-6 max-w-lg text-base leading-[1.8] text-white/80 sm:text-lg">Un logement pour y vivre ou le louer. En viager libre, le vendeur ne conserve pas son occupation : l&apos;usage du bien et les paiements se préparent dès la vente.</p>
                <figure className="mt-8 max-w-xl">
                  <div className="relative aspect-[3/1] overflow-hidden rounded-lg sm:aspect-[3.2/1]">
                    <Image src="/images/project-buy.webp" alt="Une façade montpelliéraine illustrant un projet immobilier" fill preload sizes="(min-width: 1280px) 588px, (min-width: 1024px) 55vw, calc(100vw - 48px)" className="object-cover object-[center_45%]" />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-3 text-xs leading-relaxed text-white/65"><span aria-hidden="true" className="h-px w-7 shrink-0 bg-primary" />La disponibilité du bien, au cœur de votre projet.</figcaption>
                </figure>
              </div>
              <div id="projet-libre" className="min-w-0 scroll-mt-28">
                <MiniLeadForm appearance="hero" title="Votre projet en viager libre" description="Un premier échange pour préparer l'usage du logement et son budget." subject="Demande — Viager libre Montpellier" submitLabel="Être rappelé" />
                <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/70">Vous préférez appeler ? <a href={`tel:${agency.telephone}`} className="rounded-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{agency.telephoneDisplay}</a></p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="libre-use-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">01</span>Le logement après la vente</p>
              <h2 id="libre-use-heading" className={`mt-5 ${heading}`}>Un bien disponible.<br /><span className="font-serif font-normal italic">Un usage à préparer.</span></h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">En viager libre, l&apos;acquéreur peut occuper le logement ou le louer dès la signature. La situation du bien et la remise des clés sont vérifiées avant votre engagement.</p>
            </div>
            <div className="divide-y divide-border">
              <div className="pb-8">
                <Icon name="key" className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-secondary sm:text-2xl">Y vivre.</h3>
                <p className="mt-4 text-base leading-[1.8] text-text">Votre installation demande de regarder le logement au-delà de son mode de paiement : accès, état, travaux et vie quotidienne dans le quartier. Nous relions ces éléments à votre calendrier.</p>
              </div>
              <div className="pt-8">
                <Icon name="user" className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-secondary sm:text-2xl">Le mettre en location.</h3>
                <p className="mt-4 text-base leading-[1.8] text-text">Pour un projet locatif, examinez les dépenses du propriétaire et les périodes sans locataire. Le budget doit permettre de verser la rente, même si les loyers ne correspondent pas aux prévisions.</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="libre-budget-heading" className="bg-[#f3f6f7] py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">02</span>Les engagements financiers</p>
              <h2 id="libre-budget-heading" className={`mt-5 ${heading}`}>Le prix s&apos;étudie.<br />Le budget se prévoit.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Bouquet, rente et dépenses du logement se regardent ensemble. Une disponibilité immédiate ne rend pas certain le coût final d&apos;une rente viagère.</p>
              <p className="mt-5 max-w-sm text-sm leading-[1.8] text-text">La durée de versement dépend de la vie du vendeur. L&apos;éventuelle indexation et la périodicité sont précisées dans l&apos;acte.</p>
              <p className="mt-5 text-xs leading-[1.8] text-text"><a href="https://www.economie.gouv.fr/particuliers/gerer-mon-argent/investir-dans-limmobilier/le-viager-comment-ca-marche" className={textLink}>Le principe d&apos;aléa expliqué par le ministère de l&apos;Économie</a>.</p>
            </div>
            <div>
              <dl className="divide-y divide-secondary/15 border-t border-secondary/15">
                {priceComponents.map(item => (
                  <div key={item.label} className="grid gap-3 py-6 sm:grid-cols-[0.75fr_1.25fr] sm:gap-8">
                    <dt><span className="block text-lg font-semibold text-secondary">{item.label}</span><span className="mt-2 block text-xs leading-relaxed text-text">{item.timing}</span></dt>
                    <dd className="text-sm leading-[1.8] text-text">{item.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 border-l-2 border-primary pl-5">
                <h3 className="text-base font-semibold text-secondary">Prévoir aussi les charges et les travaux</h3>
                <p className="mt-3 text-sm leading-[1.8] text-text">L&apos;acquéreur assume les taxes, l&apos;entretien et les réparations du logement. Les documents de copropriété, les diagnostics et les conditions du contrat servent à préparer ces dépenses.</p>
                <p className="mt-3 text-xs leading-[1.8] text-text"><a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className={textLink}>La répartition des charges sur Service Public</a>.</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="libre-steps-heading" className="relative isolate overflow-hidden bg-secondary py-16 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-32 -z-10 w-[620px] max-w-none text-white opacity-[0.09] lg:-right-12 lg:w-[760px]"><SellerWatermark className="h-auto w-full" /></div>
          <div className={container}>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65"><span className="mr-3 text-primary">03</span>Un dossier concret</p>
            <h2 id="libre-steps-heading" className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl">Du projet d&apos;usage<br />à la remise du bien.</h2>
            <ol className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-10">
              {steps.map((step, index) => (
                <li key={step.title} className="relative border-t border-white/20 pt-7">
                  <span aria-hidden="true" className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-primary">0{index + 1}</span>
                  <h3 className="mt-3 max-w-xs text-xl font-semibold leading-snug text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-white/75">{step.description}</p>
                  <p className="mt-5 text-xs text-white/85">{step.note}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="libre-faq-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">04</span>Avant de signer</p>
              <h2 id="libre-faq-heading" className={`mt-5 ${heading}`}>Vos questions<br />sur le viager libre.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Disponibilité, location, paiements : un projet clair commence par des réponses adaptées au logement et à votre situation.</p>
              <SectionButton sectionId="projet-libre" className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Parler de mon projet<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              <a href={`tel:${agency.telephone}`} className="mt-5 flex w-fit items-center gap-2 rounded-sm text-sm font-medium text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Icon name="phone" className="h-4 w-4 text-primary" />{agency.telephoneDisplay}</a>
            </div>
            <div>
              <div className="border-t border-border">
                {faqs.map(item => (
                  <details key={item.question} name="libre-questions" className="group border-b border-border">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-medium leading-relaxed text-secondary sm:text-lg">{item.question}</h3>
                      <span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-primary"><span className="absolute inset-x-0 top-1/2 h-px bg-current" /><span className="absolute inset-y-0 left-1/2 w-px bg-current group-open:hidden" /></span>
                    </summary>
                    <p className="max-w-xl pb-6 pr-6 text-sm leading-[1.9] text-text sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
              <p className="mt-6 text-xs leading-[1.8] text-text">Repères officiels : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className={textLink}>les règles de la vente en viager sur Service Public</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
