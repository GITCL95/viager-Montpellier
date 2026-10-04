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

const PATH = "/acheter-en-viager-montpellier";
const TITLE = "Acheter en viager à Montpellier : budget et étapes";
const DESCRIPTION =
  "Préparez un achat en viager à Montpellier : bouquet, rente, occupation, charges et vérifications. Définissez votre projet avec Patrimoine Cardinal.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: absoluteUrl(PATH), type: "website", locale: "fr_FR" },
};

const faqs = [
  {
    question: "Puis-je habiter immédiatement un bien acheté en viager ?",
    answer:
      "Un viager libre permet de disposer du logement dès la vente, selon les conditions de l'acte. En viager occupé, les droits conservés par le vendeur doivent être respectés : la date de disponibilité du bien n'est pas connue à l'avance dans une occupation viagère.",
  },
  {
    question: "Le montant du bouquet suffit-il pour comparer deux projets ?",
    answer:
      "Non. Comparez aussi la rente et son indexation éventuelle, les droits d'occupation, les frais d'acquisition, les charges et les travaux. Un bouquet plus faible peut s'accompagner d'engagements futurs plus importants.",
  },
  {
    question: "La durée de paiement de la rente est-elle fixée à l'avance ?",
    answer:
      "Non, la rente viagère dépend de la durée de vie du ou des bénéficiaires. Le coût total ne peut donc pas être connu à la signature. Une vente à terme répond à une logique différente, avec une durée de paiement convenue.",
  },
  {
    question: "Qui paie les charges et les travaux ?",
    answer:
      "La formule et les clauses de l'acte déterminent la répartition à examiner avec le notaire. Demandez le détail de l'entretien, des réparations, de la copropriété et des taxes avant de fixer votre budget, notamment en cas d'occupation conservée par le vendeur.",
  },
];

const budgets = [
  { title: "Votre budget à la signature", description: "Prévoyez le bouquet éventuel, les frais d'acquisition et les honoraires applicables. Gardez une réserve pour les dépenses du logement et les imprévus.", icon: "calculator" as const },
  { title: "Votre capacité dans la durée", description: "Examinez la rente, les conditions d'indexation et les charges qui vous incomberont. Testez votre capacité de paiement dans plusieurs scénarios, y compris une durée longue.", icon: "clock" as const },
  { title: "Votre usage du logement", description: "Habiter, louer ou constituer un patrimoine : votre calendrier détermine la formule à examiner. Un logement occupé ne doit pas être budgété comme un bien immédiatement disponible.", icon: "key" as const },
];

export default function AcheterEnViagerMontpellierPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Acheter en viager à Montpellier", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Votre parcours acquéreur"
          title="Acheter en viager à Montpellier"
          description="Définissez votre budget, votre horizon et l'usage souhaité du logement avant de vous engager. Nous vous aidons à examiner les modalités du projet et les questions à poser au notaire."
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Acheter en viager à Montpellier" }]}
          primaryCtaLabel="Définir mon projet d'achat"
          primaryCtaHref="#projet-achat"
          secondaryCtaLabel="Comparer les formules"
          secondaryCtaHref="#choisir-formule"
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading eyebrow="Préparer votre budget" title="Examiner l'engagement complet de l'achat" description="Votre effort financier comprend les sommes versées au vendeur et les coûts du logement. L'analyse doit tenir compte de votre épargne, de vos revenus et des engagements que vous avez déjà." />
            <ProcessSteps steps={budgets} />
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-text">
              La durée de vie du vendeur constitue l&apos;aléa du viager :
              le total des rentes n&apos;est pas connu au départ. Ce point
              doit guider l&apos;étude de votre capacité financière, comme
              l&apos;expliquent les{" "}
              <a href="https://paris.notaires.fr/fr/actualites/videographie-immobilier-vendre-ou-acheter-en-viager-est-ce-une-bonne-idee" className="font-semibold text-primary underline underline-offset-4">Notaires du Grand Paris sur l&apos;achat en viager</a>.
            </p>
          </div>
        </section>

        <section id="choisir-formule" className="scroll-mt-28 bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading eyebrow="Votre calendrier" title="Choisir une formule compatible avec votre projet" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { title: "Viager libre", description: "Pour un projet qui nécessite de disposer du bien dès l'acquisition. Examinez l'état du logement, les coûts d'usage et les travaux avant de prévoir une occupation ou une location.", href: "/viager-libre-montpellier", label: "Comprendre le viager libre" },
                { title: "Viager occupé", description: "Pour un projet dont l'horizon permet de respecter les droits conservés par le vendeur. Étudiez les conditions de libération, les charges et la rente avant de retenir cette formule.", href: "/viager-occupe-montpellier", label: "Comprendre le viager occupé" },
                { title: "Vente à terme", description: "Pour comparer un paiement échelonné dont la durée est convenue à l'avance. Le calendrier de paiement et celui de l'occupation sont deux points à examiner séparément.", href: "/vente-a-terme-montpellier", label: "Étudier la vente à terme" },
              ].map((option) => (
                <div key={option.href} className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-border">
                  <h3 className="text-lg font-bold text-secondary">{option.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text">{option.description}</p>
                  <Link href={option.href} className="mt-6 text-sm font-semibold text-primary">{option.label} →</Link>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-text">
              Service Public décrit les différences d&apos;occupation et les
              règles de répartition des dépenses dans son guide{" "}
              <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className="font-semibold text-primary underline underline-offset-4">achat ou vente en viager</a>.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading eyebrow="Étudier un dossier" title="Les vérifications avant votre engagement" />
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl bg-bg-gray p-8 ring-1 ring-border">
                <h3 className="text-xl font-bold text-secondary">Le logement et son environnement</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text">
                  <li>• Vérifier l&apos;état, les diagnostics et les travaux à anticiper.</li>
                  <li>• En copropriété, examiner les charges, les comptes rendus d&apos;assemblée et les projets de travaux.</li>
                  <li>• Comparer adresse, transports, accessibilité et caractéristiques avec votre usage prévu.</li>
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-text">
                  La fiche de{" "}
                  <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F37190" className="font-semibold text-primary underline underline-offset-4">Service Public sur l&apos;achat en copropriété</a>{" "}
                  détaille les informations à obtenir.
                </p>
              </div>
              <div className="rounded-3xl bg-bg-gray p-8 ring-1 ring-border">
                <h3 className="text-xl font-bold text-secondary">Le contrat et vos paiements</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text">
                  <li>• Comprendre les droits d&apos;occupation et les conditions de libération du bien.</li>
                  <li>• Examiner le bouquet, la rente et les clauses de révision éventuelle.</li>
                  <li>• Faire expliquer la répartition des dépenses, les garanties et les conséquences d&apos;un défaut de paiement.</li>
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-text">
                  Faites relire l&apos;ensemble par votre notaire. La
                  décision se fonde sur le bien, le contrat et votre
                  capacité à respecter les paiements dans la durée.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projet-achat" className="scroll-mt-28 bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10">
            <div>
              <SectionHeading eyebrow="Votre recherche à Montpellier" title="Précisons vos critères avec un conseiller" description="Lors du premier échange, indiquez le secteur souhaité, le type de logement, votre capital disponible et le montant mensuel que vous pouvez envisager." />
              <p className="mt-5 leading-relaxed text-text">
                Précisez également si vous souhaitez occuper le logement,
                le louer ou préparer un projet à plus long terme. Ces
                critères permettent d&apos;orienter la conversation et de
                repérer les questions qui nécessitent une étude approfondie.
              </p>
            </div>
            <MiniLeadForm title="Parler de mon projet d'achat" description="Laissez vos coordonnées pour définir votre budget, vos critères et la formule à examiner avec un conseiller." subject="Projet acquéreur — Viager Montpellier" />
          </div>
        </section>
        <FaqSection title="Questions avant d'acheter en viager" items={faqs} />
        <CtaBanner title="Un achat adapté à votre horizon et à votre budget" description="Préparez vos critères avec l'agence avant d'examiner les conditions d'un projet précis." primaryLabel="Échanger sur mon achat" primaryHref="#projet-achat" secondaryLabel="Contacter l'agence" secondaryHref="/contact" />
      </main>
      <Footer />
    </>
  );
}
