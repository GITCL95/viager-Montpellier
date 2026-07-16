import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, faqJsonLd, realEstateAgentJsonLd } from "@/lib/seo";

const PATH = "/faq";
const TITLE = "FAQ Viager : toutes vos questions sur la vente en viager à Montpellier";
const DESCRIPTION =
  "Fonctionnement, calcul de la rente, garanties, fiscalité : retrouvez les réponses aux questions les plus posées sur le viager par nos clients à Montpellier.";

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
  },
};

const fonctionnement = [
  {
    question: "Qu'est-ce que le viager exactement ?",
    answer:
      "Le viager est une vente immobilière où l'acheteur (débirentier) verse au vendeur (crédirentier) un capital initial appelé « bouquet », puis une rente périodique jusqu'au décès de ce dernier. C'est une solution qui permet au vendeur de percevoir un revenu complémentaire tout en conservant, dans le cas d'un viager occupé, le droit de vivre dans son logement.",
  },
  {
    question: "Quelle est la différence entre viager libre et viager occupé ?",
    answer:
      "En viager occupé, le vendeur garde le droit d'habiter le logement ou de le louer jusqu'à son décès. En viager libre, l'acheteur peut occuper ou louer le bien immédiatement après la vente. Le viager occupé est le plus répandu et permet une rente généralement plus élevée pour le vendeur.",
  },
  {
    question: "Comment est calculée la rente viagère ?",
    answer:
      "La rente est calculée selon la valeur du bien, l'âge et l'espérance de vie du vendeur, ainsi que le montant du bouquet choisi. Plus le bouquet est faible, plus la rente mensuelle est élevée, et inversement. Nos conseillers réalisent une simulation personnalisée et gratuite pour chaque situation.",
  },
  {
    question: "Peut-on vendre en viager à tout âge ?",
    answer:
      "Le viager est accessible à partir de 60-65 ans en général, car la rente est calculée sur l'espérance de vie du vendeur. Plus le vendeur est âgé, plus la rente proposée est élevée pour un bouquet équivalent. Il n'existe pas d'âge maximum : nous avons accompagné des vendeurs de plus de 90 ans.",
  },
];

const garanties = [
  {
    question: "Le vendeur peut-il perdre son bien en cas de non-paiement ?",
    answer:
      "Non, la vente en viager est sécurisée par un acte notarié qui inscrit une clause résolutoire et une hypothèque légale (privilège du vendeur) au profit du vendeur. En cas de défaut de paiement de la rente, la vente peut être annulée et le bien restitué au vendeur.",
  },
  {
    question: "Qui paie les gros travaux dans un viager occupé ?",
    answer:
      "En viager occupé, la répartition suit en général les mêmes règles qu'entre un usufruitier et un nu-propriétaire : les grosses réparations (toiture, structure) restent à la charge de l'acheteur, tandis que l'entretien courant reste à la charge du vendeur occupant. Cette répartition est toujours précisée dans l'acte notarié.",
  },
  {
    question: "La rente viagère est-elle revalorisée chaque année ?",
    answer:
      "Oui, la rente est indexée chaque année sur un indice contractuel, le plus souvent l'indice INSEE des prix à la consommation, afin de préserver le pouvoir d'achat du vendeur dans la durée. Cette clause d'indexation est obligatoire et précisée dans l'acte de vente.",
  },
];

const fiscalite = [
  {
    question: "Quels sont les avantages fiscaux du viager ?",
    answer:
      "Une partie de la rente viagère est exonérée d'impôt selon l'âge du crédirentier au moment de la vente (jusqu'à 70 % d'exonération après 69 ans). Le bouquet, lui, n'est pas imposable. Nous vous conseillons de vous rapprocher d'un notaire pour une analyse adaptée à votre situation.",
  },
  {
    question: "Le viager est-il intéressant pour les héritiers ?",
    answer:
      "Le bien vendu en viager ne fait plus partie de la succession du vendeur : il ne peut donc pas être transmis à ses héritiers, mais le bouquet et les rentes déjà perçus, s'ils n'ont pas été dépensés, entrent normalement dans la succession. C'est pourquoi le viager est souvent choisi par des propriétaires sans enfants ou souhaitant profiter pleinement de leur capital de leur vivant.",
  },
];

const allFaqs = [...fonctionnement, ...garanties, ...fiscalite];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          realEstateAgentJsonLd({
            path: PATH,
            areaServed: "Montpellier",
            description: DESCRIPTION,
          }),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "FAQ", path: PATH },
          ]),
          faqJsonLd(allFaqs),
        ]}
      />

      <Header />

      <main className="flex-1">
        <PageHero
          eyebrow="Questions fréquentes"
          title="Tout savoir sur la vente en viager"
          description="Fonctionnement, calcul de la rente, garanties, fiscalité : retrouvez les réponses aux questions les plus posées par nos clients à Montpellier. Une question spécifique ? Contactez-nous directement."
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]}
        />

        <FaqSection
          id="fonctionnement"
          eyebrow="Fonctionnement"
          title="Comprendre le fonctionnement du viager"
          items={fonctionnement}
        />

        <FaqSection
          id="garanties"
          eyebrow="Garanties & sécurité"
          title="Les garanties du vendeur et de l'acheteur"
          items={garanties}
        />

        <FaqSection
          id="fiscalite"
          eyebrow="Fiscalité & succession"
          title="Fiscalité et succession en viager"
          items={fiscalite}
        />

        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
            <p className="leading-relaxed text-text">
              Vous ne trouvez pas la réponse à votre question ? Consultez
              notre page{" "}
              <Link href="/le-viager" className="font-semibold text-primary">
                Le viager expliqué
              </Link>{" "}
              ou contactez directement{" "}
              <Link href="/notre-equipe" className="font-semibold text-primary">
                notre équipe de conseillers
              </Link>{" "}
              à Montpellier.
            </p>
          </div>
        </section>

        <CtaBanner
          title="Une question sur votre situation personnelle ?"
          description="Nos conseillers vous répondent sous 48 h et réalisent une estimation gratuite de votre bien, sans engagement."
          primaryLabel="Estimation gratuite de votre bien"
          primaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
