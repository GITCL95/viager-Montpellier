import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { SectionButton } from "@/components/SectionButton";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import { JsonLd } from "@/components/JsonLd";
import { SellerWatermark } from "@/components/SellerWatermark";
import { absoluteUrl, agency, breadcrumbJsonLd, faqJsonLd, realEstateAgentJsonLd } from "@/lib/seo";

const PATH = "/viager-sete";
const TITLE = "Viager Sète : étude de votre bien et accompagnement";
const DESCRIPTION = `Viager à Sète : étude de votre bien, bouquet, rente et accompagnement avec Patrimoine Cardinal. Parlons de votre projet au ${agency.telephoneDisplay}.`;

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
    images: [{ url: absoluteUrl("/images/agency-montpellier.webp"), alt: "Illustration d'un intérieur résidentiel" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [absoluteUrl("/images/agency-montpellier.webp")] },
};

const neighborhoods = [
  { name: "Cœur de ville et Quartier Haut", description: "Pour un logement du centre, précisez l'étage, la présence d'un ascenseur et l'accès depuis la rue. L'état de l'immeuble et les travaux déjà réalisés complètent le dossier." },
  { name: "Mont Saint-Clair", description: "L'étude décrit l'accès au logement, l'orientation, les extérieurs et, pour une maison, le terrain. Une vue éventuelle se vérifie depuis le bien, avec ses caractéristiques propres." },
  { name: "La Corniche", description: "Exposition, balcon ou terrasse, état des façades et des menuiseries : ces éléments permettent de décrire le logement. L'accès et le stationnement sont également à préciser." },
  { name: "Les Quilles", description: "Pour un appartement, examinez les dépendances, l'ascenseur, les charges et les travaux de la copropriété. Le lot vendu et ses équipements doivent être identifiés précisément." },
  { name: "Villeroy", description: "Maison ou appartement, la surface, l'agencement et les espaces extérieurs sont étudiés à l'adresse du bien. Les documents disponibles aident à préciser son état et ses équipements." },
  { name: "Pointe Courte et La Plagette", description: "Précisez l'adresse, l'usage actuel et l'accès au logement. La surface, les travaux réalisés et les droits attachés au bien sont à vérifier pour préparer le projet de vente." },
];

const criteria = [
  { title: "Le logement et ses accès", text: "Surface, pièces, étage, ascenseur, exposition, extérieur et stationnement. À Sète, l'adresse exacte permet de situer le bien et d'examiner ses conditions d'accès." },
  { title: "L'état et les documents", text: "Diagnostics, travaux réalisés et à prévoir. Pour une copropriété, l'étude s'appuie aussi sur les charges, les comptes rendus d'assemblée et les informations concernant l'immeuble." },
  { title: "L'occupation et votre situation", text: "Usage actuel du logement, droits à conserver, âge du ou des vendeurs et besoins de capital ou de revenus. Ces éléments complètent l'évaluation immobilière pour étudier bouquet et rente." },
];

const faqs = [
  {
    question: "Comment faire étudier mon bien en viager à Sète ?",
    answer: "Indiquez l'adresse ou le quartier, le type de logement, sa surface et votre souhait d'occupation. Un conseiller précise avec vous les informations et les documents nécessaires. L'étude relie la valeur immobilière du bien à votre situation pour examiner une répartition entre bouquet et rente.",
  },
  {
    question: "Le quartier suffit-il à fixer le bouquet et la rente ?",
    answer: "Non. Un quartier permet de situer le logement, mais l'adresse, l'état, les accès, les équipements et les documents du bien doivent être examinés. Les modalités du viager dépendent aussi de l'âge du ou des vendeurs, de l'occupation conservée et du bouquet envisagé.",
  },
  {
    question: "Puis-je continuer à habiter mon logement à Sète ?",
    answer: "Un projet de viager peut prévoir la conservation d'un droit d'usage et d'habitation ou d'un usufruit. Le premier réserve l'usage personnel du logement ; le second permet aussi de le louer et d'en percevoir les loyers. Le notaire précise le droit adapté, ses bénéficiaires et ses conditions dans l'acte.",
  },
  {
    question: "Une résidence secondaire à Sète peut-elle être étudiée ?",
    answer: "Vous pouvez présenter votre projet au conseiller. Il faut préciser l'occupation réelle, une éventuelle location et les droits que vous souhaitez conserver. La qualification de résidence secondaire ne détermine pas à elle seule les conditions de vente ; le dossier et votre situation sont à examiner avec le notaire.",
  },
  {
    question: "Quels documents examiner pour un appartement sétois ?",
    answer: "Préparez les diagnostics disponibles et les informations de surface. En copropriété, les charges, le règlement, les procès-verbaux d'assemblée et les travaux à anticiper permettent de compléter l'étude. La liste des pièces à réunir sera précisée selon le logement et l'avancement du projet.",
  },
  {
    question: "Accompagnez-vous aussi un projet d'achat à Sète ?",
    answer: "Vous pouvez nous contacter pour définir le secteur souhaité, le type de logement, votre capital disponible et votre capacité de paiement mensuelle. L'usage prévu du bien et les droits d'occupation sont à examiner avec les charges et les travaux. La durée de la rente viagère reste liée à la vie du ou des bénéficiaires.",
  },
];

const steps = [
  { title: "Situer votre projet à Sète", text: "Adresse, quartier, type de bien et occupation actuelle. Nous commençons par votre logement ou vos critères d'achat et les questions auxquelles vous souhaitez répondre.", note: "Un premier échange sur votre situation" },
  { title: "Préparer l'étude du logement", text: "Les caractéristiques et les documents sont précisés avec vous. Une visite peut compléter le dossier pour examiner les accès, l'état et les particularités du bien.", note: "Des informations propres à l'adresse" },
  { title: "Examiner les conditions de la vente", text: "Bouquet, rente, occupation et dépenses sont étudiés ensemble. Le notaire formalise les droits, les paiements et les clauses avant votre engagement.", note: "Des conditions expliquées et écrites" },
];

const container = "mx-auto max-w-[1200px] px-6 lg:px-10";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.16em] text-text";
const heading = "text-3xl font-semibold leading-[1.2] tracking-tight text-secondary sm:text-4xl";
const buttonClass = "inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function ViagerSetePage() {
  return (
    <>
      <JsonLd data={[
        realEstateAgentJsonLd({ path: PATH, areaServed: "Sète", description: DESCRIPTION }),
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Viager Sète", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <section aria-labelledby="sete-heading" className="relative isolate overflow-hidden bg-secondary">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-80">
            <Image src="/images/hero-background-montpellier.webp" alt="" fill preload sizes="100vw" className="object-cover object-[65%_center] lg:object-center" />
          </div>
          <div className={`${container} pb-12 pt-6 lg:pb-16 lg:pt-7`}>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[11px] text-white/65">
              <Link href="/" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link>
              <span aria-hidden="true" className="text-white/35">/</span>
              <span aria-current="page">Viager Sète</span>
            </nav>
            <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16 xl:gap-24">
              <div className="min-w-0 lg:pt-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70"><span className="mr-3 text-primary">—</span>Votre projet immobilier sétois</p>
                <h1 id="sete-heading" className="mt-5 text-[38px] font-semibold leading-[1.13] tracking-tight text-white sm:text-5xl xl:text-[54px]">Viager<br /><span className="font-serif font-normal italic">à Sète.</span></h1>
                <p className="mt-6 max-w-lg text-base leading-[1.8] text-white/80 sm:text-lg">Vendre votre logement, préparer des revenus ou étudier un achat à Sète. Patrimoine Cardinal vous accompagne à partir de votre adresse, de votre situation et des conditions à examiner.</p>
                <div className="mt-8 flex items-start gap-4 border-t border-white/20 pt-6">
                  <Icon name="mapPin" className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <p className="max-w-sm text-sm leading-[1.8] text-white/75">Du Quartier Haut au Mont Saint-Clair, des Quilles à la Pointe Courte, chaque logement se décrit à son adresse.</p>
                </div>
                <SectionButton sectionId="sete-neighborhoods" className="mt-7 inline-flex items-center gap-3 rounded-sm text-sm font-semibold text-white underline decoration-primary/60 underline-offset-8 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Situer mon bien dans Sète<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              </div>
              <div id="projet-viager-sete" className="min-w-0 scroll-mt-28">
                <MiniLeadForm appearance="hero" title="Parlons de votre projet à Sète" description="Un conseiller échange avec vous sur votre logement ou vos critères d'achat à Sète." subject="Projet viager — Sète" submitLabel="Être rappelé" />
                <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/70">Vous préférez appeler ? <a href={`tel:${agency.telephone}`} className="rounded-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{agency.telephoneDisplay}</a></p>
              </div>
            </div>
          </div>
        </section>

        <section id="sete-neighborhoods" aria-labelledby="sete-neighborhoods-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
          <div className={container}>
            <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
              <div>
                <p className={eyebrow}><span className="mr-3 text-primary">01</span>Les quartiers de Sète</p>
                <h2 id="sete-neighborhoods-heading" className={`mt-5 ${heading}`}>Où se situe<br /><span className="font-serif font-normal italic">votre logement ?</span></h2>
              </div>
              <p className="max-w-lg text-base leading-[1.8] text-text">Le nom du quartier aide à situer votre projet. Pour préparer une étude en viager à Sète, nous précisons ensuite les caractéristiques du logement et ses accès.</p>
            </div>
            <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {neighborhoods.map(neighborhood => (
                <li key={neighborhood.name} className="border-t border-border pt-5">
                  <span aria-hidden="true" className="block h-px w-7 bg-primary" />
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-secondary">{neighborhood.name}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-text">{neighborhood.description}</p>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-xs leading-relaxed text-text">Repères de quartier : <a href="https://reservation.archipel-thau.com/medias/documents/01_DOCUMENTATIONS/Petit_plan_de_Sete_2025-2026_last150126.pdf" className="rounded-sm underline underline-offset-4 hover:text-secondary">le plan de Sète publié par l&apos;office de tourisme</a>.</p>
            <p className="mt-5 text-sm leading-[1.8] text-text">Un bien situé ailleurs dans le département ? Découvrez nos autres <Link href="/viager-herault" className="rounded-sm underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">secteurs de viager dans l&apos;Hérault</Link>.</p>
          </div>
        </section>

        <section aria-labelledby="sete-study-heading" className="bg-white">
          <div className={`${container} grid gap-10 border-t border-border py-16 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20 lg:py-24`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">02</span>Étudier votre bien à Sète</p>
              <h2 id="sete-study-heading" className={`mt-5 ${heading}`}>De l&apos;adresse<br />aux conditions du viager.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">La valeur immobilière et les droits conservés sont étudiés ensemble. Un appartement, une maison ou un logement déjà loué demandent un dossier précis.</p>
              <SectionButton sectionId="projet-viager-sete" className={`${buttonClass} mt-7`}>Faire étudier mon bien à Sète<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
            </div>
            <div>
              <dl className="divide-y divide-border border-t border-border">
                {criteria.map(criterion => (
                  <div key={criterion.title} className="py-6">
                    <dt className="text-xl font-semibold text-secondary">{criterion.title}</dt>
                    <dd className="mt-3 text-base leading-[1.8] text-text">{criterion.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm leading-[1.8] text-text">Le bouquet, lorsqu&apos;il est prévu, est la part du prix payée à la signature. La rente est étudiée selon les modalités retenues ; son total dépend de la durée de vie du ou des bénéficiaires.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="sete-support-heading" className="relative isolate overflow-hidden bg-secondary py-16 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-32 -z-10 w-[620px] max-w-none text-white opacity-[0.09] lg:-right-12 lg:w-[760px]">
            <SellerWatermark className="h-auto w-full" />
          </div>
          <div className={container}>
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65"><span className="mr-3 text-primary">03</span>Votre accompagnement à Sète</p>
                <h2 id="sete-support-heading" className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl">Un projet sétois,<br />des étapes préparées.</h2>
              </div>
              <p className="max-w-sm text-base leading-[1.8] text-white/75">Vous pouvez commencer par décrire votre logement ou les critères de votre recherche à Sète.</p>
            </div>
            <ol className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-10">
              {steps.map((step, index) => (
                <li key={step.title} className="relative border-t border-white/20 pt-7">
                  <span aria-hidden="true" className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-primary">0{index + 1}</span>
                  <h3 className="mt-3 max-w-xs text-xl font-semibold leading-snug text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-white/75">{step.text}</p>
                  <p className="mt-5 text-xs text-white/85">{step.note}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="sete-faq-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">04</span>Préciser votre projet</p>
              <h2 id="sete-faq-heading" className={`mt-5 ${heading}`}>Vos questions<br />sur le viager à Sète.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Quartier, occupation, documents et budget : les réponses se construisent à partir de votre logement et de votre situation.</p>
              <SectionButton sectionId="projet-viager-sete" className={`${buttonClass} mt-7`}>Parler de mon projet à Sète<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              <a href={`tel:${agency.telephone}`} className="mt-5 flex w-fit items-center gap-2 rounded-sm text-sm font-medium text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Icon name="phone" className="h-4 w-4 text-primary" />{agency.telephoneDisplay}</a>
            </div>
            <div>
              <div className="border-t border-border">
                {faqs.map(item => (
                  <details key={item.question} name="sete-questions" className="group border-b border-border">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-medium leading-relaxed text-secondary sm:text-lg">{item.question}</h3>
                      <span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-primary"><span className="absolute inset-x-0 top-1/2 h-px bg-current" /><span className="absolute inset-y-0 left-1/2 w-px bg-current group-open:hidden" /></span>
                    </summary>
                    <p className="max-w-xl pb-6 pr-6 text-sm leading-[1.9] text-text sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
              <p className="mt-6 text-xs leading-[1.8] text-text">Repères officiels : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className="rounded-sm underline underline-offset-4 hover:text-secondary">les règles du viager</a> et <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F37190" className="rounded-sm underline underline-offset-4 hover:text-secondary">les informations de copropriété</a> sur Service Public.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
