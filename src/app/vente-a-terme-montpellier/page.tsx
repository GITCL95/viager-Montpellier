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

const PATH = "/vente-a-terme-montpellier";
const TITLE = "Vente à terme à Montpellier : prix et échéancier";
const DESCRIPTION = `Vente à terme à Montpellier : prix, échéancier et occupation du logement. Étudiez votre projet avec Patrimoine Cardinal au ${agency.telephoneDisplay}.`;
const SHARE_IMAGE = "/images/montpellier-panorama.webp";

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
    images: [{ url: absoluteUrl(SHARE_IMAGE), alt: "Préparer une vente à terme à Montpellier" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [absoluteUrl(SHARE_IMAGE)],
  },
};

const faqs = [
  {
    question: "Comment le prix d'une vente à terme est-il payé ?",
    answer: "Le prix et la durée du paiement sont convenus avant la signature. Une partie peut être réglée comptant, puis le solde est versé selon les échéances prévues dans l'acte. Montants, dates, durée et éventuelle indexation doivent être précisés ensemble.",
  },
  {
    question: "Quand l'acquéreur devient-il propriétaire ?",
    answer: "Le transfert de propriété a lieu à la signature de l'acte authentique, même si une partie du prix reste à payer. La possibilité d'occuper le logement est une question distincte : elle dépend des droits éventuellement conservés par le vendeur et des conditions inscrites dans l'acte.",
  },
  {
    question: "Puis-je rester dans le logement après la vente ?",
    answer: "Une occupation peut être conservée si le contrat le prévoit. Le notaire précise le droit retenu, sa durée et les conditions de sa fin, ainsi que la répartition des charges. La dernière échéance du prix ne signifie donc pas automatiquement que le logement devient disponible.",
  },
  {
    question: "Que se passe-t-il si le vendeur décède avant le terme ?",
    answer: "Le décès du vendeur n'arrête pas le paiement du prix. Le solde restant dû revient à ses héritiers et doit être réglé selon les modalités du contrat. Le notaire explique les conséquences de l'acte pour la succession avant la signature.",
  },
  {
    question: "Le montant des échéances peut-il évoluer ?",
    answer: "Le contrat peut prévoir une indexation : elle n'est pas automatique. Lorsqu'elle est retenue, l'acte doit préciser l'indice et les modalités de révision. L'acquéreur doit étudier le budget sur toute la période de paiement, avec cette éventuelle évolution.",
  },
  {
    question: "Que faut-il prévoir en cas d'échéance impayée ?",
    answer: "Les garanties de paiement et une éventuelle clause résolutoire sont à examiner avec le notaire. Il doit en expliquer les conditions d'application et les démarches nécessaires. La présence d'une clause ne permet pas de promettre une récupération automatique du logement.",
  },
];

const paymentStages = [
  {
    period: "À la signature",
    title: "Le prix est convenu",
    description: "L'acte fixe le prix et la part éventuellement payée comptant. L'acquéreur devient propriétaire du bien.",
    detail: "Prix · versement initial · transfert de propriété",
  },
  {
    period: "Aux dates prévues",
    title: "Le solde est échelonné",
    description: "Les versements suivent le calendrier signé. Leur montant et toute indexation éventuelle sont définis dans l'acte.",
    detail: "Montants · périodicité · modalités de révision",
  },
  {
    period: "Au terme convenu",
    title: "Le paiement s'achève",
    description: "Le dernier versement clôt le règlement du prix si les échéances ont été respectées. La disponibilité du logement suit ses propres conditions.",
    detail: "Solde du prix · occupation à examiner séparément",
  },
];

const projectSteps = [
  {
    title: "Partir du logement et du projet",
    description: "Nous étudions le bien à Montpellier, les besoins du vendeur et le budget de l'acquéreur. Le souhait de rester dans les lieux est précisé dès ce premier échange.",
  },
  {
    title: "Construire des conditions lisibles",
    description: "Prix, versement au départ, durée et échéances : les parties discutent d'un calendrier et de ses éventuelles révisions, en tenant compte de la capacité de paiement de l'acquéreur.",
  },
  {
    title: "Faire préciser l'acte par le notaire",
    description: "Paiement, occupation, charges, garanties et conséquences d'un décès ou d'un impayé sont expliqués avant la signature de l'acte authentique.",
  },
];

const container = "mx-auto max-w-[1200px] px-6 lg:px-10";
const heading = "text-3xl font-semibold leading-[1.2] tracking-tight text-secondary sm:text-4xl";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.16em] text-text";
const actionClass = "inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function VenteATermeMontpellierPage() {
  return (
    <>
      <JsonLd data={[
        realEstateAgentJsonLd({ path: PATH, areaServed: "Montpellier", description: DESCRIPTION }),
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Vente à terme à Montpellier", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <section aria-labelledby="term-heading" className="relative isolate overflow-hidden bg-secondary">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-80">
            <Image src="/images/hero-background-montpellier.webp" alt="" fill preload sizes="100vw" className="object-cover object-[65%_center] lg:object-center" />
          </div>
          <div className={`${container} pb-12 pt-6 lg:pb-16 lg:pt-7`}>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[11px] text-white/65">
              <Link href="/" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link>
              <span aria-hidden="true" className="text-white/35">/</span>
              <span aria-current="page">Vente à terme à Montpellier</span>
            </nav>
            <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16 xl:gap-24">
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70"><span className="mr-3 text-primary">—</span>Un calendrier décidé ensemble</p>
                <h1 id="term-heading" className="mt-5 text-[38px] font-semibold leading-[1.13] tracking-tight text-white sm:text-5xl xl:text-[54px]">
                  Vente à terme<br className="hidden sm:block" /> <span className="font-serif font-normal italic">à Montpellier.</span>
                </h1>
                <p className="mt-6 max-w-lg text-base leading-[1.8] text-white/80 sm:text-lg">
                  Un prix convenu et un paiement réparti sur une durée définie. Nous vous aidons à préparer le calendrier et les conditions d&apos;occupation de votre logement.
                </p>
                <div className="mt-8 max-w-lg border-y border-white/20 py-5">
                  <p className="text-xs text-white/65">Le fil du paiement</p>
                  <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-white">
                    <span>Signature</span><Icon name="arrowRight" className="h-4 w-4 text-primary" /><span>Échéances</span><Icon name="arrowRight" className="h-4 w-4 text-primary" /><span>Terme convenu</span>
                  </p>
                </div>
                <SectionButton sectionId="term-calendar" className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-medium text-white underline decoration-primary/60 underline-offset-8 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Comprendre le calendrier<Icon name="arrowRight" className="h-4 w-4 text-primary" /></SectionButton>
              </div>
              <div id="projet-vente-terme" className="min-w-0 scroll-mt-28">
                <MiniLeadForm appearance="hero" title="Parlons de votre vente à terme" description="Votre logement, l'occupation souhaitée et le calendrier envisagé : préparons un premier échange." subject="Projet vente à terme — Montpellier" submitLabel="Être rappelé" />
                <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/70">Vous préférez appeler ? <a href={`tel:${agency.telephone}`} className="rounded-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{agency.telephoneDisplay}</a></p>
              </div>
            </div>
          </div>
        </section>

        <section id="term-calendar" aria-labelledby="term-calendar-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
          <div className={container}>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-20">
              <div>
                <p className={eyebrow}><span className="mr-3 text-primary">01</span>Le règlement du prix</p>
                <h2 id="term-calendar-heading" className={`mt-5 ${heading}`}>Un prix convenu.<br /><span className="font-serif font-normal italic">Des dates écrites.</span></h2>
              </div>
              <p className="max-w-lg text-base leading-[1.8] text-text">Les parties fixent la durée du paiement avant de signer. Le versement initial, le solde et les échéances forment un même accord, à lire dans son ensemble.</p>
            </div>
            <div className="mt-10 rounded-xl border border-[#dce9ee] bg-[#f0f5f7] p-6 sm:p-9 lg:mt-12 lg:p-10">
              <ol className="grid gap-9 md:grid-cols-3 md:gap-8 lg:gap-12">
                {paymentStages.map((stage, index) => (
                  <li key={stage.period} className="relative border-l border-secondary/20 pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-7">
                    <span aria-hidden="true" className="absolute -left-1 top-1 h-2 w-2 rounded-full bg-primary md:-top-1 md:left-0" />
                    <p className="text-xs font-medium text-primary">{stage.period}</p>
                    <h3 className="mt-3 text-xl font-semibold leading-snug text-secondary">{stage.title}</h3>
                    <p className="mt-4 text-sm leading-[1.8] text-text">{stage.description}</p>
                    <p className="mt-5 text-xs leading-[1.8] text-secondary/75"><span className="sr-only">Étape {index + 1} : </span>{stage.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-[1.8] text-text">Le calendrier doit aussi préciser comment les paiements sont effectués et les conditions d&apos;un éventuel règlement anticipé. Une durée connue ne dispense pas d&apos;examiner ces modalités avec le notaire.</p>
          </div>
        </section>

        <section aria-labelledby="term-occupation-heading" className="bg-bg-gray py-16 lg:py-24">
          <div className={container}>
            <div className="max-w-2xl">
              <p className={eyebrow}><span className="mr-3 text-primary">02</span>La disponibilité du logement</p>
              <h2 id="term-occupation-heading" className={`mt-5 ${heading}`}>Le paiement a son calendrier.<br />L&apos;occupation a ses conditions.</h2>
              <p className="mt-5 text-base leading-[1.8] text-text">La fin des versements ne fixe pas à elle seule la date de remise des clés. Le droit d&apos;occuper le bien et les conditions de sa mise à disposition doivent être définis séparément dans l&apos;acte.</p>
            </div>
            <div className="mt-10 grid gap-8 border-y border-secondary/15 py-8 md:grid-cols-2 md:gap-12 lg:mt-12 lg:gap-20">
              <div>
                <p className="text-xs text-text">Si le logement est disponible dès la vente</p>
                <h3 className="mt-3 text-xl font-semibold text-secondary">Disposer du bien à la signature</h3>
                <p className="mt-4 text-sm leading-[1.8] text-text">L&apos;acquéreur peut occuper le logement ou envisager sa location selon sa situation. Le paiement du prix se poursuit aux dates convenues dans l&apos;acte.</p>
              </div>
              <div className="border-t border-secondary/15 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0 lg:pl-20">
                <p className="text-xs text-text">Si le vendeur conserve une occupation</p>
                <h3 className="mt-3 text-xl font-semibold text-secondary">Préciser le droit de rester</h3>
                <p className="mt-4 text-sm leading-[1.8] text-text">Nature du droit, durée, conditions de départ et répartition des charges : ces points sont expliqués par le notaire. L&apos;acquéreur ne peut pas présumer que le bien sera disponible à la dernière échéance.</p>
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-[1.8] text-text">À Montpellier, indiquez dès le premier échange si vous souhaitez rester dans le logement ou le mettre à disposition à la vente.</p>
              <SectionButton sectionId="projet-vente-terme" className={`${actionClass} shrink-0`}>Parler de mon projet<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
            </div>
          </div>
        </section>

        <section aria-labelledby="term-steps-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">03</span>Préparer les engagements</p>
              <h2 id="term-steps-heading" className={`mt-5 ${heading}`}>Du premier échange<br />à l&apos;acte notarié.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Un accompagnement pour mettre à plat les conditions de la vente et préparer les questions à poser au notaire.</p>
              <Link href="/estimation-viager-montpellier" className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-sm text-sm font-semibold text-secondary underline decoration-primary/50 underline-offset-8 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Faire étudier la valeur du bien<Icon name="arrowRight" className="h-4 w-4" /></Link>
            </div>
            <ol className="border-t border-border">
              {projectSteps.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-border py-7 sm:gap-6">
                  <span aria-hidden="true" className="pt-1 text-xs font-medium text-primary">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug text-secondary">{step.title}</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-text">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="term-faq-heading" className="bg-secondary py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65"><span className="mr-3 text-primary">04</span>Les points à éclaircir</p>
              <h2 id="term-faq-heading" className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl">Avant de retenir<br />un échéancier.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-white/75">Occupation, révision des paiements et transmission du solde : prenez le temps de comprendre les engagements prévus dans l&apos;acte.</p>
              <SectionButton sectionId="projet-vente-terme" className={`mt-7 ${actionClass}`}>Étudier une vente à terme<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              <a href={`tel:${agency.telephone}`} className="mt-5 flex min-h-11 w-fit items-center gap-2 rounded-sm text-sm font-medium text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Icon name="phone" className="h-4 w-4 text-primary" />{agency.telephoneDisplay}</a>
            </div>
            <div>
              <div className="border-t border-white/20">
                {faqs.map(item => (
                  <details key={item.question} name="term-questions" className="group border-b border-white/20">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-medium leading-relaxed text-white sm:text-lg">{item.question}</h3>
                      <span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-primary"><span className="absolute inset-x-0 top-1/2 h-px bg-current" /><span className="absolute inset-y-0 left-1/2 w-px bg-current group-open:hidden" /></span>
                    </summary>
                    <p className="max-w-xl pb-6 pr-6 text-sm leading-[1.9] text-white/75 sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
              <p className="mt-6 text-xs leading-[1.8] text-white/65">Repères officiels : <a href="https://www.immobilier.notaires.fr/node/708" className="rounded-sm underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">la vente à terme expliquée par les Notaires de France</a> et <a href="https://paris.notaires.fr/fr/actualites/quest-ce-quune-vente-terme" className="rounded-sm underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">les précisions des Notaires du Grand Paris</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
