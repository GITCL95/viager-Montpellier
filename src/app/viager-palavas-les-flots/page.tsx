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

const PATH = "/viager-palavas-les-flots";
const TITLE = "Viager Palavas-les-Flots : votre logement et vos droits";
const DESCRIPTION = `Viager à Palavas-les-Flots : étude de votre logement, de ses droits et des conditions de vente. Appelez Patrimoine Cardinal au ${agency.telephoneDisplay}.`;
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

const sectors = [
  {
    name: "Centre-ville rive gauche",
    text: "Précisez la rue, l'entrée de l'immeuble et l'étage. Pour votre quotidien à Palavas, l'accès à pied, les marches et la présence d'un ascenseur font partie de la description du logement.",
  },
  {
    name: "Abbé Brocardi et Marines du Lez",
    text: "Identifiez le logement et ses annexes : cave, garage ou place privative, s'ils existent. Une possibilité de stationner dans l'espace public se distingue d'un lot inclus dans la vente.",
  },
  {
    name: "Lamparos et Marines du Prévost",
    text: "Si votre bien dispose d'un balcon, d'une terrasse ou d'un jardin, précisez sa surface et les conditions d'usage. En copropriété, les documents permettent de vérifier les droits sur ces espaces.",
  },
];

const uses = [
  {
    title: "Vous habitez à Palavas toute l'année",
    text: "Votre projet commence par vos habitudes : accès au logement, étage, ascenseur et espaces extérieurs utilisés au quotidien. Si vous souhaitez rester chez vous, les bénéficiaires et le droit d'occupation à conserver sont à préciser dans l'acte.",
  },
  {
    title: "Vous y séjournez une partie de l'année",
    text: "Pour une résidence secondaire, indiquez vos périodes de présence et l'existence éventuelle de locations. Le souhait de revenir dans le logement doit être étudié avec les droits conservés ; l'usage saisonnier ne suffit pas à définir les conditions du viager.",
  },
  {
    title: "Le logement est déjà loué",
    text: "Présentez le bail, l'occupation réelle et les documents de location disponibles. Nous examinons votre projet à partir de cette situation, avant de déterminer avec le notaire les droits transmis et les conditions de disponibilité du logement.",
  },
];

const documents = [
  { title: "Le logement, du seuil à la terrasse", text: "Adresse, surface, plan si disponible, étage, ascenseur, état et diagnostics. Décrivez aussi les extérieurs et les annexes qui accompagnent le bien." },
  { title: "Les lots et la copropriété", text: "Titre de propriété, règlement de copropriété, charges et procès-verbaux d'assemblée. Les travaux votés ou envisagés et le statut des terrasses, jardins et stationnements complètent l'étude." },
  { title: "L'occupation et votre projet", text: "Usage principal ou secondaire, bail éventuel, âge du ou des vendeurs et souhaits de capital ou de revenus. Ces éléments servent à examiner une répartition entre bouquet et rente." },
];

const faqs = [
  {
    question: "Puis-je faire étudier ma résidence secondaire à Palavas-les-Flots ?",
    answer: "Oui, vous pouvez présenter ce projet. Précisez vos périodes de présence, les locations éventuelles et votre souhait de continuer à utiliser le logement. La résidence secondaire ne définit pas à elle seule les droits à conserver : votre situation et les conditions de vente sont à examiner avec le notaire.",
  },
  {
    question: "Puis-je conserver l'usage du logement et le louer quand je suis absent ?",
    answer: "Cela dépend du droit conservé. Le droit d'usage et d'habitation permet l'usage personnel du logement, sans le louer. L'usufruit permet aussi la location et la perception des loyers. Si vous souhaitez alterner séjours et location à Palavas, ce point doit être précisé avec le notaire avant la vente.",
  },
  {
    question: "Comment prendre en compte une terrasse ou une place de stationnement ?",
    answer: "Il faut identifier ce qui appartient au bien et les droits qui y sont attachés. Le statut et les conditions d'usage d'une terrasse se vérifient dans les titres et, en copropriété, dans le règlement. Une place privative doit être distinguée du stationnement public. Ces documents permettent de préciser ce qui accompagne le logement vendu.",
  },
  {
    question: "Le secteur de Palavas suffit-il à déterminer le bouquet et la rente ?",
    answer: "Non. Les repères de quartier situent le bien ; l'étude porte sur son adresse, son état, ses accès et ses documents. La valeur du logement, l'âge du ou des vendeurs, le bouquet envisagé et les droits conservés participent ensuite au calcul. Le total de la rente reste lié à la durée de vie de ses bénéficiaires.",
  },
  {
    question: "Puis-je vous contacter pour acheter un viager à Palavas-les-Flots ?",
    answer: "Oui. Présentez l'usage envisagé : y vivre, y séjourner ou louer, ainsi que votre budget et vos critères d'accès ou d'extérieur. Pour chaque bien étudié, les droits d'occupation, les charges de copropriété et les travaux doivent être examinés avec les paiements prévus.",
  },
];

const container = "mx-auto max-w-[1200px] px-6 lg:px-10";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.16em] text-text";
const heading = "text-3xl font-semibold leading-[1.2] tracking-tight text-secondary sm:text-4xl";
const buttonClass = "inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const sourceClass = "rounded-sm underline underline-offset-4 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function ViagerPalavasLesFlotsPage() {
  return (
    <>
      <JsonLd data={[
        realEstateAgentJsonLd({ path: PATH, areaServed: "Palavas-les-Flots", description: DESCRIPTION }),
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Viager Hérault", path: "/viager-herault" }, { name: "Viager Palavas-les-Flots", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <section aria-labelledby="palavas-heading" className="relative isolate overflow-hidden bg-secondary">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-80">
            <Image src={SHARE_IMAGE} alt="" fill preload sizes="100vw" className="object-cover object-[65%_center] lg:object-center" />
          </div>
          <div className={`${container} pb-12 pt-6 lg:pb-16 lg:pt-7`}>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[11px] text-white/65">
              <Link href="/" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link>
              <span aria-hidden="true" className="text-white/35">/</span>
              <Link href="/viager-herault" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Hérault</Link>
              <span aria-hidden="true" className="text-white/35">/</span>
              <span aria-current="page">Palavas-les-Flots</span>
            </nav>
            <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16 xl:gap-24">
              <div className="min-w-0 lg:pt-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70"><span className="mr-3 text-primary">—</span>Votre logement, vos usages</p>
                <h1 id="palavas-heading" className="mt-5 text-[32px] font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl xl:text-[52px]">Viager à<br /><span className="font-serif font-normal italic">Palavas-<wbr />les-Flots.</span></h1>
                <p className="mt-6 max-w-lg text-base leading-[1.8] text-white/80 sm:text-lg">Vous vivez à Palavas-les-Flots, y revenez pour vos séjours ou possédez un logement loué ? Patrimoine Cardinal étudie votre projet de viager à partir du bien et de l&apos;usage que vous souhaitez en garder.</p>
                <div className="mt-8 flex items-start gap-4 border-t border-white/20 pt-6">
                  <Icon name="mapPin" className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <p className="max-w-sm text-sm leading-[1.8] text-white/75">Rive gauche ou rive droite : l&apos;adresse, les accès et les droits sur le logement précisent votre projet à Palavas.</p>
                </div>
                <SectionButton sectionId="palavas-sectors" className="mt-7 inline-flex items-center gap-3 rounded-sm text-sm font-semibold text-white underline decoration-primary/60 underline-offset-8 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Situer mon bien à Palavas<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              </div>
              <div id="projet-viager-palavas" className="min-w-0 scroll-mt-28">
                <MiniLeadForm appearance="hero" title="Votre projet à Palavas" description="Un premier échange sur votre logement et son usage." subject="Projet viager — Palavas-les-Flots" submitLabel="Être rappelé" />
                <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/70">Vous préférez appeler ? <a href={`tel:${agency.telephone}`} className="rounded-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{agency.telephoneDisplay}</a></p>
              </div>
            </div>
          </div>
        </section>

        <section id="palavas-sectors" aria-labelledby="palavas-sectors-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
          <div className={container}>
            <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
              <div>
                <p className={eyebrow}><span className="mr-3 text-primary">01</span>Des repères à Palavas</p>
                <h2 id="palavas-sectors-heading" className={`mt-5 ${heading}`}>Situer le quartier.<br /><span className="font-serif font-normal italic">Décrire votre logement.</span></h2>
              </div>
              <p className="max-w-lg text-base leading-[1.8] text-text">Ces trois ensembles sont cités par la Ville dans ses réunions de quartiers. Ils donnent des repères ; l&apos;étude se poursuit à l&apos;adresse du bien, avec ses caractéristiques propres.</p>
            </div>
            <ul className="mt-10 grid gap-x-10 gap-y-8 lg:grid-cols-3">
              {sectors.map(sector => (
                <li key={sector.name} className="border-t border-border pt-5">
                  <span aria-hidden="true" className="block h-px w-7 bg-primary" />
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-secondary">{sector.name}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-text">{sector.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-xs leading-[1.8] text-text">Repères municipaux : <a href="https://palavaslesflots.com/actualite/retour-sur-les-reunions-de-quartiers/" className={sourceClass}>les réunions de quartiers de Palavas-les-Flots</a>. Pour les possibilités dans l&apos;espace public, consultez <a href="https://palavaslesflots.com/utile/transports/stationnement/" className={sourceClass}>les informations de stationnement de la Ville</a>.</p>
            <p className="mt-5 text-sm leading-[1.8] text-text">Vous possédez un bien dans une autre commune du département ? Découvrez notre <Link href="/viager-herault" className={sourceClass}>accompagnement en viager dans l&apos;Hérault</Link>.</p>
          </div>
        </section>

        <section aria-labelledby="palavas-uses-heading" className="bg-white">
          <div className={`${container} border-t border-border py-16 lg:py-24`}>
            <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
              <div>
                <p className={eyebrow}><span className="mr-3 text-primary">02</span>L&apos;usage du bien</p>
                <h2 id="palavas-uses-heading" className={`mt-5 ${heading}`}>Y vivre, y revenir<br /><span className="font-serif font-normal italic">ou le louer.</span></h2>
              </div>
              <p className="max-w-lg text-base leading-[1.8] text-text">À Palavas-les-Flots, précisez ce que représente ce logement dans votre vie. Votre usage actuel et vos souhaits pour la suite doivent être rapprochés des droits à conserver ou à transmettre.</p>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
              {uses.map(use => (
                <article key={use.title}>
                  <h3 className="text-xl font-semibold leading-snug text-secondary">{use.title}</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-text">{use.text}</p>
                </article>
              ))}
            </div>
            <SectionButton sectionId="projet-viager-palavas" className={`${buttonClass} mt-8`}>Faire étudier mon projet<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
          </div>
        </section>

        <section aria-labelledby="palavas-documents-heading" className="relative isolate overflow-hidden bg-secondary py-16 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-32 -z-10 w-[620px] max-w-none text-white opacity-[0.09] lg:-right-12 lg:w-[760px]">
            <SellerWatermark className="h-auto w-full" />
          </div>
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65"><span className="mr-3 text-primary">03</span>Préparer votre dossier</p>
              <h2 id="palavas-documents-heading" className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl">Les pièces qui précisent<br />votre bien à Palavas.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-white/75">Une terrasse, un accès ou des charges de copropriété changent la lecture du dossier. Nous précisons avec vous les documents à réunir avant d&apos;examiner les conditions du viager.</p>
            </div>
            <dl className="divide-y divide-white/20 border-t border-white/20">
              {documents.map((document, index) => (
                <div key={document.title} className="py-6">
                  <dt className="flex items-baseline gap-5 text-xl font-semibold leading-snug text-white"><span aria-hidden="true" className="shrink-0 text-xs font-medium text-primary">0{index + 1}</span>{document.title}</dt>
                  <dd className="mt-3 text-sm leading-[1.8] text-white/75 sm:pl-9">{document.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="palavas-faq-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">04</span>Vos questions</p>
              <h2 id="palavas-faq-heading" className={`mt-5 ${heading}`}>Le viager à<br />Palavas-les-Flots.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Votre adresse, vos séjours, une location ou un extérieur : parlons des points qui comptent pour votre projet.</p>
              <SectionButton sectionId="projet-viager-palavas" className={`${buttonClass} mt-7`}>Parler de mon logement<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              <a href={`tel:${agency.telephone}`} className="mt-5 flex w-fit items-center gap-2 rounded-sm text-sm font-medium text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Icon name="phone" className="h-4 w-4 text-primary" />{agency.telephoneDisplay}</a>
            </div>
            <div>
              <div className="border-t border-border">
                {faqs.map(item => (
                  <details key={item.question} name="palavas-questions" className="group border-b border-border">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-medium leading-relaxed text-secondary sm:text-lg">{item.question}</h3>
                      <span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-primary"><span className="absolute inset-x-0 top-1/2 h-px bg-current" /><span className="absolute inset-y-0 left-1/2 w-px bg-current group-open:hidden" /></span>
                    </summary>
                    <p className="max-w-xl pb-6 pr-6 text-sm leading-[1.9] text-text sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
              <p className="mt-6 text-xs leading-[1.8] text-text">Pour les droits d&apos;occupation et les paiements, retrouvez <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className={sourceClass}>les règles de la vente en viager sur Service Public</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
