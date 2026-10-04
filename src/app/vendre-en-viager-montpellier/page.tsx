import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { SectionButton } from "@/components/SectionButton";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, agency, breadcrumbJsonLd, faqJsonLd, realEstateAgentJsonLd } from "@/lib/seo";

const PATH = "/vendre-en-viager-montpellier";
const TITLE = "Vendre en viager à Montpellier : étapes et accompagnement";
const DESCRIPTION = `Vendre en viager à Montpellier avec Patrimoine Cardinal : estimation gratuite, choix de la formule et accompagnement. Appelez le ${agency.telephoneDisplay}.`;

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
    question: "Comment savoir ce que mon bien peut me rapporter ?",
    answer: "L'étude part de la valeur immobilière de votre logement à Montpellier, de votre âge et des droits d'occupation conservés. Bouquet et rente sont examinés ensemble, en tenant compte de vos besoins. Une estimation permet de comparer des conditions concrètes, sans vous engager à vendre.",
  },
  {
    question: "Puis-je rester chez moi ou louer mon logement ?",
    answer: "Un viager occupé peut vous permettre de rester dans votre logement. Un droit d'usage et d'habitation réserve une occupation personnelle ; un usufruit permet aussi de louer le bien. Ces droits, ainsi que les conditions d'un éventuel départ, doivent être précisés dans l'acte notarié.",
  },
  {
    question: "Quelles protections prévoir pour la rente et mon conjoint ?",
    answer: "Avant la signature, le notaire explique les garanties de paiement, l'indexation éventuelle de la rente et les dispositions pour votre conjoint. Une clause résolutoire peut être prévue en cas d'impayés. Ses effets et les démarches nécessaires dépendent du contrat : les protections doivent être examinées pour votre situation.",
  },
  {
    question: "Qui paie les charges et les travaux après la vente ?",
    answer: "La répartition doit être précisée dans l'acte. Elle dépend notamment du droit conservé : usufruit et droit d'usage et d'habitation ne créent pas les mêmes obligations. Demandez une explication des charges, taxes et travaux avant de vous engager.",
  },
  {
    question: "Quels documents préparer pour le premier échange ?",
    answer: "Pour commencer, indiquez la commune, le type de logement, sa surface et votre souhait de rester ou de partir. Le titre de propriété, les diagnostics et les documents de copropriété permettront ensuite de préparer le dossier. Vous pouvez nous contacter avant d'avoir réuni toutes les pièces.",
  },
];

const steps = [
  { title: "Votre situation d'abord", description: "Votre logement, vos besoins de revenus, votre souhait de rester ou de partir. Nous prenons le temps de comprendre ce qui compte pour vous.", note: "Un échange sans engagement" },
  { title: "Une proposition expliquée", description: "Nous évaluons le bien et comparons les conditions envisageables. Avec votre accord, nous préparons la vente et recherchons un acquéreur.", note: "Bouquet, rente et occupation" },
  { title: "Un acte préparé avec le notaire", description: "Prix, droits conservés, charges et garanties : le notaire précise les engagements de chacun avant que vous décidiez de signer.", note: "Des conditions écrites" },
];

const container = "mx-auto max-w-[1200px] px-6 lg:px-10";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.16em] text-text";
const textLink = "inline-flex items-center gap-3 rounded-sm text-sm font-semibold text-secondary underline decoration-primary/50 underline-offset-8 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const heading = "text-3xl font-semibold leading-[1.2] tracking-tight text-secondary sm:text-4xl";

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
        <section aria-labelledby="seller-heading" className="border-b border-[#e9e7e0] bg-[#f6f5f0]">
          <div className={`${container} pb-12 pt-6 lg:pb-16 lg:pt-7`}>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[11px] text-text">
              <Link href="/" className="rounded-sm hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link>
              <span aria-hidden="true" className="text-text/50">/</span>
              <span aria-current="page">Vendre en viager à Montpellier</span>
            </nav>
            <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16 xl:gap-24">
              <div className="min-w-0">
                <p className={eyebrow}><span className="mr-3 text-primary">—</span>Pour les propriétaires</p>
                <h1 id="seller-heading" className="mt-5 text-[38px] font-semibold leading-[1.13] tracking-tight text-secondary sm:text-5xl xl:text-[54px]">
                  Vendre en viager<br className="hidden sm:block" /> <span className="font-serif font-normal italic">à Montpellier.</span>
                </h1>
                <p className="mt-6 max-w-lg text-base leading-[1.8] text-text sm:text-lg">
                  Compléter votre retraite, financer un projet, aider un proche. Votre logement peut contribuer à la suite de votre vie, avec la possibilité de rester chez vous.
                </p>
                <figure className="mt-8 max-w-xl">
                  <div className="relative aspect-[3/1] overflow-hidden rounded-lg sm:aspect-[3.2/1]">
                    <Image src="/images/project-sell.webp" alt="Un couple profite de son cadre de vie" fill preload sizes="(min-width: 1280px) 588px, (min-width: 1024px) 55vw, calc(100vw - 48px)" className="object-cover object-[center_35%]" />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-3 text-xs leading-relaxed text-text"><span aria-hidden="true" className="h-px w-7 shrink-0 bg-primary" />Préparer l&apos;avenir, en gardant vos repères.</figcaption>
                </figure>
              </div>
              <div id="projet-vendeur" className="min-w-0 scroll-mt-28">
                <MiniLeadForm appearance="hero" title="Parlons de votre situation" description="Un premier échange pour voir ce qui est possible pour votre logement." subject="Projet vendeur — Viager Montpellier" submitLabel="Être rappelé" />
                <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-text">Vous préférez appeler ? <a href={`tel:${agency.telephone}`} className="rounded-sm font-semibold text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{agency.telephoneDisplay}</a></p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="seller-income-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:items-center lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">01</span>Comprendre ce que vous recevez</p>
              <h2 id="seller-income-heading" className={`mt-5 ${heading}`}>Du patrimoine<br />aux revenus.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Le prix peut associer un capital au départ et une rente dans le temps. Leur équilibre se construit à partir de votre bien et de vos besoins.</p>
              <Link href="/estimation-viager-montpellier" className={`mt-7 ${textLink}`}>Faire étudier mon bien<Icon name="arrowRight" className="h-4 w-4" /></Link>
            </div>
            <div>
              <div className="rounded-xl bg-[#f6f5f0] px-6 py-8 sm:px-9 sm:py-10">
                <div className="grid gap-9 sm:grid-cols-[0.8fr_1.2fr] sm:gap-10">
                  <div>
                    <p className="text-xs text-text">À la signature</p>
                    <div aria-hidden="true" className="mt-5 flex h-16 w-16 items-center justify-center rounded-full border border-primary/35 bg-primary/[0.06] font-serif text-4xl text-primary">€</div>
                    <h3 className="mt-5 text-xl font-semibold text-secondary">Le bouquet</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-text">Une somme versée au départ. Elle est facultative et se négocie avec la rente.</p>
                  </div>
                  <div className="border-t border-[#deddd5] pt-7 sm:border-l sm:border-t-0 sm:pl-9 sm:pt-0">
                    <p className="text-xs text-text">Dans le temps</p>
                    <div aria-hidden="true" className="mt-5 flex h-16 items-center gap-2.5">
                      {[0, 1, 2].map(i => <span key={i} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/25 font-serif text-xl text-secondary">€</span>)}
                      <span className="text-xl tracking-[0.12em] text-primary">···</span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-secondary">La rente</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-text">Un revenu versé votre vie durant, selon la périodicité convenue dans l&apos;acte.</p>
                  </div>
                </div>
                <p className="mt-7 border-t border-[#deddd5] pt-5 text-xs leading-[1.8] text-text">Les montants dépendent notamment de la valeur du logement, de votre âge et du droit d&apos;occupation conservé.</p>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-text">Pour approfondir : <a href="https://paris.notaires.fr/fr/actualites/le-mot-du-mois-le-bouquet" className="rounded-sm underline underline-offset-4 hover:text-secondary">le bouquet expliqué par les notaires</a>.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="seller-choices-heading" className="bg-white">
          <div className={`${container} grid gap-10 border-t border-border py-16 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20 lg:py-24`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">02</span>Votre lieu de vie</p>
              <h2 id="seller-choices-heading" className={`mt-5 ${heading}`}>La suite se prépare<br /><span className="font-serif font-normal italic">à vos conditions.</span></h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Rester dans votre quartier ou ouvrir un nouveau chapitre : ce choix guide les conditions de votre vente.</p>
            </div>
            <div className="divide-y divide-border">
              <div className="pb-8">
                <h3 className="text-xl font-semibold text-secondary sm:text-2xl">« Je veux continuer à vivre chez moi. »</h3>
                <p className="mt-4 text-base leading-[1.8] text-text">En viager occupé, vous pouvez conserver un droit d&apos;occupation. Nous étudions aussi la place de votre conjoint et les conditions d&apos;un éventuel départ du logement.</p>
                <Link href="/viager-occupe-montpellier" className={`mt-5 ${textLink}`}>Comprendre le viager occupé<Icon name="arrowRight" className="h-4 w-4" /></Link>
              </div>
              <div className="py-8">
                <h3 className="text-xl font-semibold text-secondary sm:text-2xl">« Je suis prêt à changer de logement. »</h3>
                <p className="mt-4 text-base leading-[1.8] text-text">Si le bien est libéré à la vente, l&apos;acquéreur peut en disposer dès la signature. Le viager libre permet d&apos;étudier un paiement en capital et en rente sans occupation conservée.</p>
                <Link href="/viager-libre-montpellier" className={`mt-5 ${textLink}`}>Comprendre le viager libre<Icon name="arrowRight" className="h-4 w-4" /></Link>
              </div>
              <p className="pt-6 text-sm leading-[1.8] text-text">Vous préférez une durée de paiement définie ? La <Link href="/vente-a-terme-montpellier" className="rounded-sm font-medium text-secondary underline decoration-primary/50 underline-offset-4 hover:text-primary">vente à terme</Link> peut aussi être comparée à votre projet.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="seller-steps-heading" className="bg-[#f6f5f0] py-16 lg:py-24">
          <div className={container}>
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <p className={eyebrow}><span className="mr-3 text-primary">03</span>Avancer avec un conseiller</p>
                <h2 id="seller-steps-heading" className={`mt-5 ${heading}`}>De votre première question<br />à la signature.</h2>
              </div>
              <p className="max-w-sm text-base leading-[1.8] text-text">Vous pouvez commencer sans avoir choisi de formule ni réuni tous vos documents.</p>
            </div>
            <ol className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-10">
              {steps.map((step, index) => (
                <li key={step.title} className="relative border-t border-secondary/20 pt-7">
                  <span aria-hidden="true" className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-text">0{index + 1}</span>
                  <h3 className="mt-3 max-w-xs text-xl font-semibold leading-snug text-secondary">{step.title}</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-text">{step.description}</p>
                  <p className="mt-5 text-xs text-secondary">{step.note}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="seller-faq" aria-labelledby="seller-faq-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">04</span>Prendre le temps de décider</p>
              <h2 id="seller-faq-heading" className={`mt-5 ${heading}`}>Vos questions<br />avant de vendre.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Occupation, revenus, charges, protection de vos proches : les réponses doivent correspondre à votre situation.</p>
              <SectionButton sectionId="projet-vendeur" className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Parler de ma situation<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              <a href={`tel:${agency.telephone}`} className="mt-5 flex w-fit items-center gap-2 rounded-sm text-sm font-medium text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Icon name="phone" className="h-4 w-4 text-primary" />{agency.telephoneDisplay}</a>
            </div>
            <div>
              <div className="border-t border-border">
                {faqs.map(item => (
                  <details key={item.question} name="seller-questions" className="group border-b border-border">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-medium leading-relaxed text-secondary sm:text-lg">{item.question}</h3>
                      <span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-primary"><span className="absolute inset-x-0 top-1/2 h-px bg-current" /><span className="absolute inset-y-0 left-1/2 w-px bg-current group-open:hidden" /></span>
                    </summary>
                    <p className="max-w-xl pb-6 pr-6 text-sm leading-[1.9] text-text sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
              <p className="mt-6 text-xs leading-[1.8] text-text">Repères officiels : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className="rounded-sm underline underline-offset-4 hover:text-secondary">la vente en viager</a> et <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F934" className="rounded-sm underline underline-offset-4 hover:text-secondary">l&apos;usufruit</a> sur Service Public.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
