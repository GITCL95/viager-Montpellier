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

const PATH = "/acheter-en-viager-montpellier";
const TITLE = "Acheter en viager à Montpellier : budget et étapes";
const DESCRIPTION = `Acheter en viager à Montpellier avec Patrimoine Cardinal : budget, occupation et accompagnement jusqu'au notaire. Appelez le ${agency.telephoneDisplay}.`;

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
    images: [{ url: absoluteUrl("/images/project-buy.webp"), alt: "Préparer un achat en viager à Montpellier" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [absoluteUrl("/images/project-buy.webp")] },
};

const faqs = [
  {
    question: "Quel budget prévoir pour acheter en viager ?",
    answer: "Examinez ensemble le bouquet éventuel, les frais d'acquisition, les honoraires à votre charge et la rente. Ajoutez les taxes, les charges et les travaux prévisibles selon l'acte. Le bouquet seul ne permet pas de comparer deux projets : votre capacité à payer dans la durée compte aussi.",
  },
  {
    question: "Pendant combien de temps faut-il verser la rente ?",
    answer: "La rente viagère dépend de la durée de vie du ou des bénéficiaires prévus dans le contrat. Sa durée et le coût total ne sont donc pas connus à la signature. Il faut aussi examiner l'indexation éventuelle et les dispositions concernant plusieurs vendeurs avec le notaire.",
  },
  {
    question: "Quand pourrai-je habiter ou louer le logement ?",
    answer: "En viager libre, l'acquéreur peut utiliser le logement dès la vente. En viager occupé, il doit respecter les droits conservés par le vendeur. Une occupation viagère n'a pas de date de fin connue à l'avance ; les conditions d'une libération anticipée doivent être examinées dans l'acte.",
  },
  {
    question: "Qui paie les charges, les taxes et les travaux ?",
    answer: "La répartition dépend de la formule, des droits conservés et des clauses de l'acte. Avant de vous engager, demandez un détail des dépenses qui vous incomberont, notamment les réparations et les charges de copropriété. Cette vérification permet de préparer un budget adapté au logement.",
  },
  {
    question: "Quels éléments vérifier avant de faire une offre ?",
    answer: "Examinez le logement et ses diagnostics, les documents de copropriété lorsqu'il y en a une, puis les conditions de paiement et d'occupation. Faites expliquer par le notaire les garanties, l'indexation et les conséquences d'un défaut de paiement. Vos critères de recherche peuvent être définis avec l'agence dès le premier échange.",
  },
];

const steps = [
  { title: "Votre projet et vos moyens", description: "Secteur souhaité, type de logement, capital disponible et capacité mensuelle. Nous précisons avec vous votre usage et votre horizon d'achat.", note: "Un budget et un calendrier réalistes" },
  { title: "Un dossier examiné ensemble", description: "Nous vous aidons à comparer le logement et les conditions proposées : paiements, disponibilité, état du bien et dépenses à anticiper.", note: "Le bien et le contrat dans leur ensemble" },
  { title: "Un engagement préparé", description: "Votre notaire vérifie les modalités de la vente et vous explique les droits et obligations. Vous disposez des éléments pour prendre votre décision.", note: "Des conditions comprises avant la signature" },
];

const container = "mx-auto max-w-[1200px] px-6 lg:px-10";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.16em] text-text";
const textLink = "inline-flex items-center gap-3 rounded-sm text-sm font-semibold text-secondary underline decoration-primary/50 underline-offset-8 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const heading = "text-3xl font-semibold leading-[1.2] tracking-tight text-secondary sm:text-4xl";

export default function AcheterEnViagerMontpellierPage() {
  return (
    <>
      <JsonLd data={[
        realEstateAgentJsonLd({ path: PATH, areaServed: "Montpellier", description: DESCRIPTION }),
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Acheter en viager à Montpellier", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <section aria-labelledby="buyer-heading" className="relative isolate overflow-hidden bg-secondary">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-80">
            <Image src="/images/hero-background-montpellier.webp" alt="" fill preload sizes="100vw" className="object-cover object-[65%_center] lg:object-center" />
          </div>
          <div className={`${container} pb-12 pt-6 lg:pb-16 lg:pt-7`}>
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[11px] text-white/65">
              <Link href="/" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link>
              <span aria-hidden="true" className="text-white/35">/</span>
              <span aria-current="page">Acheter en viager à Montpellier</span>
            </nav>
            <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16 xl:gap-24">
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70"><span className="mr-3 text-primary">—</span>Pour les acquéreurs</p>
                <h1 id="buyer-heading" className="mt-5 text-[38px] font-semibold leading-[1.13] tracking-tight text-white sm:text-5xl xl:text-[54px]">
                  Acheter en viager<br className="hidden sm:block" /> <span className="font-serif font-normal italic">à Montpellier.</span>
                </h1>
                <p className="mt-6 max-w-lg text-base leading-[1.8] text-white/80 sm:text-lg">
                  Préparer un futur lieu de vie ou construire votre patrimoine. Commencez par votre budget, votre calendrier et les conditions d&apos;un achat que vous pourrez assumer dans la durée.
                </p>
                <figure className="mt-8 max-w-xl">
                  <div className="relative aspect-[3/1] overflow-hidden rounded-lg sm:aspect-[3.2/1]">
                    <Image src="/images/project-buy.webp" alt="Façades en pierre et balcons donnant sur une rue arborée" fill preload sizes="(min-width: 1280px) 588px, (min-width: 1024px) 55vw, calc(100vw - 48px)" className="object-cover object-[center_45%]" />
                  </div>
                  <figcaption className="mt-3 flex items-center gap-3 text-xs leading-relaxed text-white/65"><span aria-hidden="true" className="h-px w-7 shrink-0 bg-primary" />Un projet immobilier, un horizon à définir.</figcaption>
                </figure>
              </div>
              <div id="projet-achat" className="min-w-0 scroll-mt-28">
                <MiniLeadForm appearance="hero" title="Parlons de votre projet d'achat" description="Un premier échange pour définir vos critères, votre budget et la formule à examiner." subject="Projet acquéreur — Viager Montpellier" submitLabel="Être rappelé" />
                <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/70">Vous préférez appeler ? <a href={`tel:${agency.telephone}`} className="rounded-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{agency.telephoneDisplay}</a></p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="buyer-budget-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:items-center lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">01</span>Construire votre budget</p>
              <h2 id="buyer-budget-heading" className={`mt-5 ${heading}`}>L&apos;achat se prépare<br /><span className="font-serif font-normal italic">dans son ensemble.</span></h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Le bouquet est une partie de votre engagement. La rente, les dépenses du logement et votre réserve financière complètent l&apos;étude.</p>
              <SectionButton sectionId="projet-achat" className={`mt-7 ${textLink}`}>Définir mon budget avec un conseiller<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
            </div>
            <div>
              <div className="rounded-xl border border-[#dce9ee] bg-[#f0f5f7] px-6 py-8 sm:px-9 sm:py-10">
                <div className="grid gap-7 sm:grid-cols-[0.8fr_1.2fr] sm:gap-10">
                  <div>
                    <p className="text-xs text-text">À la signature</p>
                    <div aria-hidden="true" className="mt-5 flex h-16 w-16 items-center justify-center rounded-full border border-primary/35 bg-primary/[0.06] font-serif text-4xl text-primary">€</div>
                    <h3 className="mt-5 text-xl font-semibold text-secondary">Le capital de départ</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-text">Bouquet éventuel, frais d&apos;acquisition et honoraires à votre charge.</p>
                  </div>
                  <div className="border-t border-secondary/15 pt-7 sm:border-l sm:border-t-0 sm:pl-9 sm:pt-0">
                    <p className="text-xs text-text">Dans le temps</p>
                    <div aria-hidden="true" className="mt-5 flex h-16 items-center gap-2.5">
                      {[0, 1, 2].map(i => <span key={i} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/25 font-serif text-xl text-secondary">€</span>)}
                      <span className="text-xl tracking-[0.12em] text-primary">···</span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-secondary">Les paiements à prévoir</h3>
                    <p className="mt-3 text-sm leading-[1.8] text-text">Rente et indexation éventuelle, puis charges, taxes et travaux selon l&apos;acte.</p>
                  </div>
                </div>
                <div className="mt-7 flex items-start gap-3 border-t border-secondary/15 pt-5">
                  <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-xs leading-[1.8] text-text">La durée de la rente dépend de la vie du ou des bénéficiaires. Le coût total reste incertain : examinez aussi un scénario long et gardez une marge pour les imprévus.</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-text">Pour approfondir : <a href="https://paris.notaires.fr/fr/actualites/videographie-immobilier-vendre-ou-acheter-en-viager-est-ce-une-bonne-idee" className="rounded-sm underline underline-offset-4 hover:text-secondary">l&apos;aléa et les paiements expliqués par les notaires</a>.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="buyer-choices-heading" className="bg-white">
          <div className={`${container} border-t border-border py-16 lg:py-24`}>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20">
              <div>
                <p className={eyebrow}><span className="mr-3 text-primary">02</span>Votre usage et votre calendrier</p>
                <h2 id="buyer-choices-heading" className={`mt-5 ${heading}`}>Quand souhaitez-vous<br />disposer du logement ?</h2>
                <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Habiter, louer ou préparer un projet à plus long terme : les droits conservés par le vendeur doivent être compatibles avec votre objectif.</p>
              </div>
              <div className="divide-y divide-border">
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-secondary sm:text-2xl">« Je veux en disposer dès l&apos;achat. »</h3>
                  <p className="mt-4 text-base leading-[1.8] text-text">En viager libre, l&apos;acquéreur peut habiter ou louer le bien dès la vente. Examinez son état et les travaux nécessaires avant de prévoir votre installation ou sa mise en location.</p>
                  <Link href="/viager-libre-montpellier" className={`mt-5 ${textLink}`}>Comprendre le viager libre<Icon name="arrowRight" className="h-4 w-4" /></Link>
                </div>
                <div className="py-8">
                  <h3 className="text-xl font-semibold text-secondary sm:text-2xl">« Mon projet peut attendre. »</h3>
                  <p className="mt-4 text-base leading-[1.8] text-text">En viager occupé, vous respectez les droits conservés par le vendeur. Une occupation viagère n&apos;a pas de date de fin connue à l&apos;avance. Faites expliquer les conditions d&apos;un éventuel départ et leurs effets sur la rente.</p>
                  <Link href="/viager-occupe-montpellier" className={`mt-5 ${textLink}`}>Comprendre le viager occupé<Icon name="arrowRight" className="h-4 w-4" /></Link>
                </div>
                <p className="pt-6 text-sm leading-[1.8] text-text">Vous souhaitez comparer une durée de paiement définie ? Étudiez aussi la <Link href="/vente-a-terme-montpellier" className="rounded-sm font-medium text-secondary underline decoration-primary/50 underline-offset-4 hover:text-primary">vente à terme</Link>, en distinguant son échéancier et le droit d&apos;occupation.</p>
              </div>
            </div>
            <div className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20">
              <div>
                <h3 className="text-lg font-semibold text-secondary">Vérifier le logement</h3>
                <p className="mt-3 text-sm leading-[1.8] text-text">Diagnostics, état du bien et environnement. En copropriété, examinez aussi les charges, les comptes rendus d&apos;assemblée et les travaux à anticiper.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary">Comprendre le contrat</h3>
                <p className="mt-3 text-sm leading-[1.8] text-text">Occupation, révision de la rente, répartition des dépenses et garanties. Le notaire vous explique les engagements et les conséquences d&apos;un défaut de paiement avant la signature.</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="buyer-steps-heading" className="relative isolate overflow-hidden bg-secondary py-16 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-32 -z-10 w-[620px] max-w-none text-white opacity-[0.09] lg:-right-12 lg:w-[760px]">
            <SellerWatermark className="h-auto w-full" />
          </div>
          <div className={container}>
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65"><span className="mr-3 text-primary">03</span>Avancer avec un conseiller</p>
                <h2 id="buyer-steps-heading" className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl">De vos critères<br />à un achat préparé.</h2>
              </div>
              <p className="max-w-sm text-base leading-[1.8] text-white/75">Vous pouvez commencer par une question de budget ou de disponibilité, avant de retenir une formule.</p>
            </div>
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

        <section aria-labelledby="buyer-faq-heading" className="bg-white py-16 lg:py-24">
          <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20`}>
            <div>
              <p className={eyebrow}><span className="mr-3 text-primary">04</span>Prendre le temps de décider</p>
              <h2 id="buyer-faq-heading" className={`mt-5 ${heading}`}>Vos questions<br />avant d&apos;acheter.</h2>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Budget, durée, disponibilité et dépenses du bien : clarifiez chaque point avec l&apos;agence et votre notaire.</p>
              <SectionButton sectionId="projet-achat" className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Parler de mon projet d&apos;achat<Icon name="arrowRight" className="h-4 w-4" /></SectionButton>
              <a href={`tel:${agency.telephone}`} className="mt-5 flex w-fit items-center gap-2 rounded-sm text-sm font-medium text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Icon name="phone" className="h-4 w-4 text-primary" />{agency.telephoneDisplay}</a>
            </div>
            <div>
              <div className="border-t border-border">
                {faqs.map(item => (
                  <details key={item.question} name="buyer-questions" className="group border-b border-border">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base font-medium leading-relaxed text-secondary sm:text-lg">{item.question}</h3>
                      <span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-primary"><span className="absolute inset-x-0 top-1/2 h-px bg-current" /><span className="absolute inset-y-0 left-1/2 w-px bg-current group-open:hidden" /></span>
                    </summary>
                    <p className="max-w-xl pb-6 pr-6 text-sm leading-[1.9] text-text sm:text-base">{item.answer}</p>
                  </details>
                ))}
              </div>
              <p className="mt-6 text-xs leading-[1.8] text-text">Repères officiels : <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className="rounded-sm underline underline-offset-4 hover:text-secondary">acheter en viager</a> et <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F37190" className="rounded-sm underline underline-offset-4 hover:text-secondary">acheter en copropriété</a> sur Service Public.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
