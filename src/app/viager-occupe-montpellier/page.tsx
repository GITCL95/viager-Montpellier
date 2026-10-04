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

const PATH = "/viager-occupe-montpellier";
const TITLE = "Viager occupé Montpellier : droits, bouquet et rente";
const DESCRIPTION = `Viager occupé à Montpellier : droits d'occupation, bouquet et rente. Patrimoine Cardinal vous accompagne. Contact : ${agency.telephoneDisplay}.`;

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
    images: [{ url: absoluteUrl("/images/project-sell.webp"), alt: "Préparer un viager occupé à Montpellier" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [absoluteUrl("/images/project-sell.webp")] },
};

const faqs = [
  {
    question: "Puis-je rester dans mon logement après la vente ?",
    answer: "Oui, le viager occupé permet de conserver un droit d'usage et d'habitation ou un usufruit. L'acte précise les bénéficiaires, la durée et les conditions de ce droit. Il faut notamment examiner la situation de votre conjoint et les conséquences d'un éventuel départ.",
  },
  {
    question: "Un droit d'usage et d'habitation permet-il de louer le bien ?",
    answer: "Non. Le droit d'usage et d'habitation réserve un usage personnel du logement et ne permet pas de le louer. Un usufruit permet en revanche de l'habiter ou de le louer et de percevoir les loyers. Cette distinction doit guider le choix du droit conservé dans l'acte.",
  },
  {
    question: "Que se passe-t-il si je quitte définitivement le logement ?",
    answer: "Le départ doit être examiné selon les droits et les clauses de votre acte. Une libération anticipée peut faire l'objet de dispositions particulières, notamment concernant la rente. La majoration n'est pas automatique : demandez au notaire d'expliquer les conditions, la procédure et les conséquences avant la signature.",
  },
  {
    question: "Qui paie les charges et les travaux ?",
    answer: "La répartition est à préciser dans l'acte en fonction des droits conservés. Faites distinguer entretien, réparations, travaux de copropriété, taxes et dépenses d'usage. Un usufruit et un droit d'usage et d'habitation n'impliquent pas nécessairement la même répartition : votre budget doit être étudié à partir du contrat.",
  },
  {
    question: "Comment prévoir la protection de mon conjoint ?",
    answer: "Le notaire doit examiner qui bénéficie du droit d'occupation et de la rente, ainsi que les dispositions applicables au décès de l'un des vendeurs. Droit d'occupation et réversion de rente sont deux sujets distincts : leurs conditions doivent être précisées dans l'acte selon votre situation.",
  },
  {
    question: "Quelles clauses examiner pour le paiement de la rente ?",
    answer: "Vérifiez la périodicité, l'indexation éventuelle et les garanties de paiement. Une clause résolutoire peut être prévue en cas d'impayés ; ses effets et sa mise en œuvre dépendent du contrat. Le notaire explique les protections retenues et les démarches nécessaires.",
  },
];

const factors = [
  { label: "Le logement", title: "Sa valeur sans occupation", description: "Localisation à Montpellier, surface, état, extérieur et copropriété : l'évaluation immobilière constitue le point de départ de l'étude." },
  { label: "Le droit conservé", title: "L'occupation à valoriser", description: "Le droit d'usage et d'habitation ou l'usufruit, ses bénéficiaires et leur âge participent à l'évaluation des droits conservés." },
  { label: "Les paiements", title: "L'équilibre bouquet et rente", description: "Le capital souhaité à la signature et les revenus envisagés sont étudiés ensemble, avec les conditions de versement de la rente." },
];

const steps = [
  { title: "Décrire la vie que vous souhaitez conserver", text: "Continuer à habiter le logement, protéger votre conjoint ou prévoir un départ futur : nous commençons par vos besoins d'occupation.", note: "Votre situation et votre logement" },
  { title: "Étudier les droits et les montants", text: "L'évaluation du bien et des droits conservés permet de préparer une répartition entre bouquet et rente, expliquée avec ses hypothèses.", note: "Une étude propre à votre projet" },
  { title: "Préciser les clauses avec le notaire", text: "Occupation, départ, bénéficiaires, charges et paiements : le notaire formalise les conditions et explique leurs conséquences avant votre engagement.", note: "Des dispositions écrites" },
];

const container = "mx-auto max-w-[1200px] px-6 lg:px-10";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.16em] text-text";
const heading = "text-3xl font-semibold leading-[1.2] tracking-tight text-secondary sm:text-4xl";
const textLink = "inline-flex items-center gap-3 rounded-sm text-sm font-semibold text-secondary underline decoration-primary/50 underline-offset-8 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function ViagerOccupeMontpellierPage() {
  return (
    <>
      <JsonLd data={[
        realEstateAgentJsonLd({ path: PATH, areaServed: "Montpellier", description: DESCRIPTION }),
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Viager occupé Montpellier", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <section aria-labelledby="occupied-heading" className="relative isolate overflow-hidden bg-secondary">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-80">
            <Image src="/images/hero-background-montpellier.webp" alt="" fill preload sizes="100vw" className="object-cover object-[65%_center] lg:object-center" />
          </div>
          <div className={`${container} pb-12 pt-6 lg:pb-16 lg:pt-7`}>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[11px] text-white/65">
              <Link href="/" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link>
              <span aria-hidden="true" className="text-white/35">/</span>
              <span aria-current="page">Viager occupé Montpellier</span>
            </nav>
            <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16 xl:gap-24">
              <div className="min-w-0 lg:pt-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70"><span className="mr-3 text-primary">—</span>Vendre en conservant l&apos;occupation</p>
                <h1 id="occupied-heading" className="mt-5 text-[38px] font-semibold leading-[1.13] tracking-tight text-white sm:text-5xl xl:text-[54px]">Viager occupé<br /><span className="font-serif font-normal italic">à Montpellier.</span></h1>
                <p className="mt-6 max-w-lg text-base leading-[1.8] text-white/80 sm:text-lg">Continuer à vivre dans votre logement tout en le vendant. Le viager occupé associe votre projet de revenus à un droit conservé, défini dans l&apos;acte notarié.</p>
                <div className="mt-8 flex items-start gap-4 border-t border-white/20 pt-6">
                  <Icon name="key" className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <p className="max-w-sm text-sm leading-[1.8] text-white/75">Votre quartier, vos habitudes, la place de votre conjoint : ces repères guident les conditions à préparer.</p>
                </div>
                <Link href="/estimation-viager-montpellier" className="mt-7 inline-flex items-center gap-3 rounded-sm text-sm font-semibold text-white underline decoration-primary/60 underline-offset-8 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Faire étudier mon bouquet et ma rente<Icon name="arrowRight" className="h-4 w-4" /></Link>
              </div>
              <div id="projet-viager-occupe" className="min-w-0 scroll-mt-28">
                <MiniLeadForm appearance="hero" title="Rester chez vous, préparer la suite" description="Un premier échange sur votre logement et les droits que vous souhaitez conserver." subject="Projet viager occupé — Montpellier" submitLabel="Être rappelé" />
                <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/70">Vous préférez appeler ? <a href={`tel:${agency.telephone}`} className="rounded-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{agency.telephoneDisplay}</a></p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="occupied-rights-heading" className="bg-white py-16 lg:py-24">
          <div className={container}>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:items-start lg:gap-20">
              <div>
                <p className={eyebrow}><span className="mr-3 text-primary">01</span>Le droit conservé</p>
                <h2 id="occupied-rights-heading" className={`mt-5 ${heading}`}>Rester chez vous.<br /><span className="font-serif font-normal italic">Avec des droits précis.</span></h2>
                <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Le logement est vendu avec les droits conservés par le vendeur. Leur contenu compte autant que les montants : habiter personnellement et pouvoir louer ne sont pas la même chose.</p>
                <figure className="mt-7">
                  <div className="relative aspect-[1.7/1] overflow-hidden rounded-lg">
                    <Image src="/images/project-sell.webp" alt="Un couple profite de son cadre de vie" fill sizes="(min-width: 1024px) 420px, calc(100vw - 48px)" className="object-cover object-[center_35%]" />
                  </div>
                  <figcaption className="mt-3 text-xs leading-relaxed text-text">Préserver vos repères se prépare dans l&apos;acte.</figcaption>
                </figure>
              </div>
              <div className="divide-y divide-border border-t border-border">
                <article className="py-7 first:pt-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-text">L&apos;usage personnel</p>
                  <h3 className="mt-3 text-2xl font-semibold text-secondary">Le droit d&apos;usage et d&apos;habitation</h3>
                  <p className="mt-4 text-base leading-[1.8] text-text">Le DUH vous permet d&apos;habiter le logement pour votre usage personnel. Il ne vous permet pas de le mettre en location. Ses bénéficiaires et les conditions d&apos;occupation sont à définir avec le notaire.</p>
                </article>
                <article className="py-7">
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-text">L&apos;usage et les revenus</p>
                  <h3 className="mt-3 text-2xl font-semibold text-secondary">L&apos;usufruit</h3>
                  <p className="mt-4 text-base leading-[1.8] text-text">L&apos;usufruit permet d&apos;habiter le bien ou de le louer et d&apos;en percevoir les loyers. Il implique aussi des obligations, notamment de conservation et d&apos;entretien, à examiner avant de retenir ce droit.</p>
                </article>
                <p className="pt-6 text-sm leading-[1.8] text-text">Précisez votre souhait actuel et les situations futures à anticiper : vie à deux, déménagement ou changement de besoins. Le droit conservé doit correspondre à votre projet.</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="occupied-value-heading" className="bg-white">
          <div className={`${container} border-t border-border py-16 lg:py-24`}>
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
              <div>
                <p className={eyebrow}><span className="mr-3 text-primary">02</span>Comprendre les montants</p>
                <h2 id="occupied-value-heading" className={`mt-5 ${heading}`}>Votre bien, votre occupation,<br />votre répartition.</h2>
              </div>
              <p className="max-w-lg text-base leading-[1.8] text-text">L&apos;occupation conservée est prise en compte dans l&apos;étude de la vente. Il n&apos;existe pas de montant de bouquet ou de rente applicable à tous les logements et à tous les vendeurs.</p>
            </div>
            <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-10">
              {factors.map((factor, index) => (
                <li key={factor.title} className="border-t border-secondary/20 pt-5">
                  <p className="flex items-center gap-3 text-xs text-text"><span aria-hidden="true" className="text-primary">0{index + 1}</span>{factor.label}</p>
                  <h3 className="mt-4 text-xl font-semibold text-secondary">{factor.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-text">{factor.description}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 grid gap-6 rounded-xl border border-[#dce9ee] bg-[#f0f5f7] px-6 py-7 sm:grid-cols-2 sm:gap-10 sm:px-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary">Le bouquet à la signature</h3>
                <p className="mt-3 text-sm leading-[1.8] text-text">Cette part du prix payée au départ est facultative. Elle se négocie avec la rente, à partir de l&apos;étude du bien et de vos besoins de capital.</p>
              </div>
              <div className="border-t border-secondary/15 pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                <h3 className="text-lg font-semibold text-secondary">La rente dans le temps</h3>
                <p className="mt-3 text-sm leading-[1.8] text-text">Sa durée dépend de la vie du ou des bénéficiaires. L&apos;acte précise les versements et une éventuelle indexation ; le total reçu n&apos;est pas connu à la signature.</p>
              </div>
            </div>
            <Link href="/estimation-viager-montpellier" className={`mt-7 ${textLink}`}>Demander une étude de mon bien<Icon name="arrowRight" className="h-4 w-4" /></Link>
          </div>
        </section>

        <section aria-labelledby="occupied-steps-heading" className="relative isolate overflow-hidden bg-secondary py-16 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-32 -z-10 w-[620px] max-w-none text-white opacity-[0.09] lg:-right-12 lg:w-[760px]">
            <SellerWatermark className="h-auto w-full" />
          </div>
          <div className={container}>
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65"><span className="mr-3 text-primary">03</span>Préparer votre viager occupé</p>
                <h2 id="occupied-steps-heading" className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl">L&apos;occupation au cœur<br />de chaque étape.</h2>
              </div>
              <p className="max-w-sm text-base leading-[1.8] text-white/75">Votre droit d&apos;occupation, vos revenus et vos obligations doivent être examinés ensemble.</p>
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

        <section aria-labelledby="occupied-faq-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">04</span>Les points à préciser</p>
              <h2 id="occupied-faq-heading" className={`mt-5 ${heading}`}>Vos questions<br />sur l&apos;occupation.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Droits, charges, départ du logement et conjoint : préparez vos questions pour une étude de votre situation.</p>
              <SectionButton sectionId="projet-viager-occupe" className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Parler de mon viager occupé<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              <a href={`tel:${agency.telephone}`} className="mt-5 flex w-fit items-center gap-2 rounded-sm text-sm font-medium text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Icon name="phone" className="h-4 w-4 text-primary" />{agency.telephoneDisplay}</a>
            </div>
            <div>
              <div className="border-t border-border">
                {faqs.map(item => (
                  <details key={item.question} name="occupied-questions" className="group border-b border-border">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-medium leading-relaxed text-secondary sm:text-lg">{item.question}</h3>
                      <span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-primary"><span className="absolute inset-x-0 top-1/2 h-px bg-current" /><span className="absolute inset-y-0 left-1/2 w-px bg-current group-open:hidden" /></span>
                    </summary>
                    <p className="max-w-xl pb-6 pr-6 text-sm leading-[1.9] text-text sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
              <p className="mt-6 text-xs leading-[1.8] text-text">Repères officiels : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className="rounded-sm underline underline-offset-4 hover:text-secondary">le viager occupé</a> et <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F934" className="rounded-sm underline underline-offset-4 hover:text-secondary">les droits et obligations de l&apos;usufruitier</a> sur Service Public.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
