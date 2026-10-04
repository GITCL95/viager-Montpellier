import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FaqSection } from "@/components/FaqSection";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const PATH = "/vendre-en-viager-montpellier";
const TITLE = "Vendre en viager à Montpellier : étapes et accompagnement";
const DESCRIPTION =
  "Préparez la vente de votre bien en viager à Montpellier : choix de la formule, estimation, documents et garanties à examiner avec votre notaire.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: absoluteUrl(PATH), type: "website", locale: "fr_FR" },
};

const faqs = [
  {
    question: "Puis-je vendre en viager et continuer à vivre dans mon logement ?",
    answer:
      "Oui, un viager occupé permet de conserver les droits prévus au contrat. Un droit d'usage et d'habitation ne donne pas les mêmes possibilités qu'un usufruit : le choix doit être expliqué et formalisé avec le notaire.",
  },
  {
    question: "Le bouquet est-il obligatoire ?",
    answer:
      "Non. Cette partie du prix payée à la signature est librement négociée. Son montant et la rente doivent être étudiés ensemble, selon la valeur du logement, l'occupation et la situation des vendeurs.",
  },
  {
    question: "Quels documents faut-il préparer ?",
    answer:
      "Commencez par le titre de propriété, les informations de surface, les diagnostics disponibles et, en copropriété, les charges et documents de l'immeuble. Le conseiller et le notaire préciseront les pièces nécessaires selon votre logement et votre situation.",
  },
  {
    question: "Quelles protections prévoir si la rente n'est pas payée ?",
    answer:
      "Le notaire étudie les garanties et les clauses adaptées, notamment une clause résolutoire. Leurs effets et leur mise en œuvre dépendent de l'acte : il faut les examiner avant la signature et vérifier la capacité de paiement de l'acquéreur.",
  },
];

const options = [
  { title: "Rester dans votre logement", description: "Votre priorité est de conserver votre cadre de vie. Étudiez les droits d'occupation, la protection du conjoint et les conditions d'un éventuel départ.", href: "/viager-occupe-montpellier", label: "Étudier le viager occupé" },
  { title: "Libérer le logement", description: "Vous prévoyez un déménagement ou vendez un logement déjà vacant. Comparez les modalités d'une vente sans occupation conservée.", href: "/viager-libre-montpellier", label: "Comprendre le viager libre" },
  { title: "Fixer la durée des paiements", description: "Vous recherchez un paiement échelonné sur une durée convenue. La vente à terme mérite une comparaison avec la rente viagère.", href: "/vente-a-terme-montpellier", label: "Découvrir la vente à terme" },
];

export default function VendreEnViagerMontpellierPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Vendre en viager à Montpellier", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Votre parcours vendeur"
          title="Vendre votre bien en viager à Montpellier"
          description="Compléter vos revenus, disposer d'un capital ou organiser un changement de logement : nous vous aidons à préparer votre vente et à examiner les conditions qui comptent pour vous."
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Vendre en viager à Montpellier" }]}
          primaryCtaLabel="Faire estimer mon bien"
          primaryCtaHref="/estimation-viager-montpellier"
          secondaryCtaLabel="Parler de mon projet"
          secondaryCtaHref="#projet-vendeur"
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading eyebrow="Choisir votre parcours" title="Partir de votre situation, puis choisir la formule" description="Avant de parler de prix, précisez vos besoins : continuer à habiter le bien, protéger votre conjoint, recevoir un capital ou privilégier des revenus réguliers. Ces choix orientent l'étude." />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {options.map((option) => (
                <div key={option.href} className="flex flex-col rounded-3xl bg-bg-gray p-7 ring-1 ring-border">
                  <h3 className="text-lg font-bold text-secondary">{option.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text">{option.description}</p>
                  <Link href={option.href} className="mt-6 text-sm font-semibold text-primary">{option.label} →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading eyebrow="Les étapes de la vente" title="Une décision préparée, puis un contrat précis" />
            <ProcessSteps steps={[
              { title: "Évaluer et comparer", description: "Nous étudions votre logement et vos objectifs pour comparer les conditions envisageables. La valeur immobilière et le choix d'occupation servent de base à l'estimation.", icon: "calculator" },
              { title: "Préparer la vente", description: "Le dossier décrit le bien et les conditions proposées. Avec votre accord, l'agence accompagne la recherche d'un acquéreur et l'examen de son projet de paiement.", icon: "search" },
              { title: "Formaliser chez le notaire", description: "Les parties précisent prix, rente, occupation et garanties. Le notaire prépare l'acte et explique les conséquences des clauses avant votre engagement.", icon: "shield" },
            ]} />
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-text">
              Le bouquet est facultatif et librement fixé. La rente reste
              liée à la durée de vie du ou des bénéficiaires ; il faut donc
              comprendre l&apos;aléa et les garanties. Les{" "}
              <a href="https://paris.notaires.fr/fr/actualites/le-mot-du-mois-le-bouquet" className="font-semibold text-primary underline underline-offset-4">Notaires du Grand Paris expliquent le bouquet</a>{" "}
              et les{" "}
              <a href="https://paris.notaires.fr/fr/actualites/la-vente-en-viager-une-source-de-revenus-manier-avec-precaution" className="font-semibold text-primary underline underline-offset-4">précautions à prendre avant une vente</a>.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
            <div>
              <SectionHeading eyebrow="Votre dossier" title="Les informations à rassembler" />
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-text">
                <li>• Titre de propriété, identité des propriétaires et situation éventuelle d&apos;indivision.</li>
                <li>• Surface, plans disponibles, travaux réalisés et particularités du logement.</li>
                <li>• Diagnostics immobiliers à vérifier et à compléter selon le bien.</li>
                <li>• En copropriété : règlement, charges, procès-verbaux et informations sur les travaux.</li>
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-text">
                La liste dépend de la situation du logement. Consultez les règles de{" "}
                <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F10798" className="font-semibold text-primary underline underline-offset-4">Service Public sur les diagnostics de vente</a>{" "}
                et la{" "}
                <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2604" className="font-semibold text-primary underline underline-offset-4">vente d&apos;un logement en copropriété</a>.
              </p>
            </div>
            <div className="rounded-3xl bg-bg-gray p-8 ring-1 ring-border">
              <h2 className="text-2xl font-bold text-secondary">En parler avec vos proches et votre notaire</h2>
              <p className="mt-4 text-sm leading-relaxed text-text">
                Une vente modifie votre patrimoine. Si vous le souhaitez,
                associez vos proches aux échanges et exposez vos priorités
                au notaire : protection du conjoint, droit d&apos;occupation,
                départ du logement et conséquences successorales.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text">
                Demandez également une explication écrite des paiements,
                de leur éventuelle indexation, des charges et des recours
                en cas d&apos;impayés. Les dispositions retenues doivent
                correspondre à votre situation, au-delà du seul montant
                annoncé de la rente.
              </p>
              <Link href="/estimation-viager-montpellier" className="mt-6 inline-block text-sm font-semibold text-primary">Commencer par une estimation de mon bien →</Link>
            </div>
          </div>
        </section>

        <section id="projet-vendeur" className="scroll-mt-28 bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10">
            <SectionHeading eyebrow="Un premier échange" title="Préparons votre projet de vente" description="Vous pouvez nous contacter avant d'avoir choisi votre formule. Nous commencerons par votre logement, votre souhait d'occupation et les questions auxquelles vous souhaitez répondre." />
            <MiniLeadForm title="Être accompagné pour vendre" description="Laissez vos coordonnées pour échanger avec un conseiller sur votre projet de vente en viager." subject="Projet vendeur — Viager Montpellier" />
          </div>
        </section>
        <FaqSection title="Questions avant de vendre en viager" items={faqs} />
        <CtaBanner title="Quelle vente convient à votre situation ?" description="L'estimation permet de préparer une comparaison des formules et des modalités de paiement." primaryLabel="Demander une estimation" primaryHref="/estimation-viager-montpellier" secondaryLabel="Contacter l'agence" secondaryHref="/contact" />
      </main>
      <Footer />
    </>
  );
}
