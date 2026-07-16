import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { PropertyGrid, type PropertyItem } from "@/components/PropertyGrid";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  realEstateAgentJsonLd,
} from "@/lib/seo";

const PATH = "/viager-libre-montpellier";
const TITLE =
  "Viager libre Montpellier : appartements et maisons | Patrimoine Cardinal";
const DESCRIPTION =
  "Achetez ou vendez en viager libre à Montpellier : biens immédiatement disponibles, bouquet et rente calculés en toute transparence. Estimation gratuite sous 48 h.";

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

const faqs = [
  {
    question: "Le viager libre est-il plus cher qu'un achat classique ?",
    answer:
      "Non, au contraire : le viager libre est généralement proposé avec une décote de 15 à 20 % par rapport à un achat classique comparable, le vendeur privilégiant la rapidité et la sécurité de la transaction plutôt que le prix maximal. Le règlement s'effectue en deux temps, un bouquet puis une rente, ce qui peut modifier le coût total selon la durée de vie du vendeur.",
  },
  {
    question: "Puis-je louer un bien acheté en viager libre ?",
    answer:
      "Oui, c'est l'un des principaux atouts du viager libre : dès la signature chez le notaire, vous devenez pleinement propriétaire de l'usage du bien et pouvez le louer, l'occuper ou le revendre librement, sans attendre le décès du vendeur comme c'est le cas en viager occupé.",
  },
  {
    question: "Comment est calculée la rente en viager libre ?",
    answer:
      "La rente est calculée à partir de la valeur vénale du bien, diminuée du bouquet versé, puis répartie selon l'espérance de vie statistique du vendeur au moment de la vente. Comme aucun droit d'usage n'est conservé, la décote d'occupation ne s'applique pas : la rente est donc souvent plus modérée qu'en viager occupé pour un prix de bien équivalent.",
  },
  {
    question: "Quels quartiers de Montpellier pour un viager libre ?",
    answer:
      "Boutonnet, Les Beaux-Arts, Antigone et l'Écusson concentrent la majorité des appartements en viager libre, tandis que les maisons se trouvent plutôt vers Près d'Arènes, La Pompignane ou en périphérie proche comme Castelnau-le-Lez. Nos conseillers vous orientent selon votre projet, que vous soyez investisseur ou futur résident.",
  },
];

const libreProperties: PropertyItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80",
    alt: "Studio rénové avec cuisine ouverte en viager libre à Montpellier",
    tag1: "BOUQUET 58 000 €",
    tag2: "RENTE 410 €/mois",
    title: "Studio rénové — Boutonnet",
    description:
      "Studio entièrement rénové proche du tramway et des facultés, disponible immédiatement, idéal pour un investissement locatif étudiant.",
    ctaLabel: "Étudier ce studio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
    alt: "Appartement T3 lumineux avec parquet en viager libre à Montpellier",
    tag1: "BOUQUET 96 000 €",
    tag2: "RENTE 620 €/mois",
    title: "T3 lumineux — Les Beaux-Arts",
    description:
      "Appartement familial de 68 m², parquet et double exposition, libre de toute occupation dès la signature de l'acte notarié.",
    ctaLabel: "Demander une visite",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
    alt: "Maison avec jardin en viager libre à Montpellier",
    tag1: "BOUQUET 150 000 €",
    tag2: "RENTE 780 €/mois",
    title: "Maison avec jardin — Près d'Arènes",
    description:
      "Maison de 95 m² avec jardin clos et garage, disponible sans délai, parfaite pour une installation familiale immédiate.",
    ctaLabel: "Recevoir le dossier complet",
  },
];

export default function ViagerLibreMontpellierPage() {
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
            { name: "Viager libre Montpellier", path: PATH },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <Header />

      <main className="flex-1">
        <PageHero
          eyebrow="Viager libre à Montpellier"
          title="Viager libre à Montpellier"
          description="Le viager libre permet d'acheter un bien immédiatement disponible, avec une décote de 15 à 20 % sur le marché classique, ou de vendre sans y résider pour percevoir bouquet et rente sans délai. Nos conseillers étudient votre dossier sous 48 h."
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Viager libre Montpellier" }]}
          stats={[
            { value: "12+", label: "biens en viager libre disponibles" },
            { value: "15-20%", label: "décote moyenne par rapport au marché" },
            { value: "48h", label: "délai d'étude de votre dossier" },
          ]}
          secondaryCtaLabel="Nos biens en viager libre"
          secondaryCtaHref="#biens-libres"
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-[1.6fr_1fr] lg:gap-14 lg:px-10">
            <div>
              <SectionHeading
                eyebrow="Comprendre le viager libre"
                title="Qu'est-ce que le viager libre ?"
              />
              <p className="mt-6 leading-relaxed text-text">
                Le viager libre est une forme de vente en viager où
                l&apos;acheteur (le débirentier) peut occuper le bien,
                l&apos;habiter ou le mettre en location dès la signature de
                l&apos;acte notarié. Contrairement au viager occupé, le
                vendeur (le crédirentier) ne conserve aucun droit d&apos;usage
                sur le logement : il perçoit un bouquet initial puis une
                rente viagère, mais quitte les lieux au moment de la vente.
                Cette formule séduit particulièrement les propriétaires qui
                ont déjà quitté leur logement — départ en résidence senior,
                déménagement chez un enfant, ou revente d&apos;un
                investissement locatif — et souhaitent transformer un capital
                immobilier en revenus réguliers sans contrainte de gestion.
                Retrouvez l&apos;ensemble de nos solutions auprès de{" "}
                <Link href="/" className="font-semibold text-primary">
                  notre agence viager à Montpellier
                </Link>
                .
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Pour l&apos;acheteur, le viager libre présente un double
                avantage : il bénéficie d&apos;une décote sur le prix du
                marché (généralement 15 à 20 % selon la localisation et
                l&apos;état du bien) et peut disposer du logement
                immédiatement, sans attendre le décès du vendeur comme
                c&apos;est le cas en viager occupé.
              </p>
            </div>

            <div className="mt-10 lg:mt-0">
              <MiniLeadForm
                title="Un projet en viager libre ?"
                description="Laissez-nous vos coordonnées, un conseiller vous recontacte sous 48 h pour étudier votre projet."
                subject="Demande — Viager libre Montpellier"
              />
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Marché local"
                title="Appartements en viager libre à Montpellier"
                description="Montpellier concentre une part importante de la demande régionale en viager libre, portée par la présence de deux universités, d'un bassin d'emploi dynamique et d'un marché locatif tendu dans plusieurs quartiers."
              />

              <h3 className="mt-8 text-xl font-bold text-secondary">
                Studios et T2 en viager libre
              </h3>
              <p className="mt-3 leading-relaxed text-text">
                Dans des quartiers comme Boutonnet, Les Beaux-Arts ou proche
                du centre historique, les studios et T2 en viager libre
                séduisent les investisseurs qui visent la location étudiante
                ou meublée. Le bouquet d&apos;entrée reste souvent inférieur
                à celui d&apos;un achat classique, avec un délai de
                rentabilité potentiellement raccourci grâce à la décote
                initiale.
              </p>

              <h3 className="mt-8 text-xl font-bold text-secondary">
                T3 et plus : appartements familiaux
              </h3>
              <p className="mt-3 leading-relaxed text-text">
                Pour les acquéreurs en quête d&apos;une résidence principale
                ou d&apos;un investissement familial, les appartements T3 et
                plus en viager libre situés à Antigone, dans l&apos;Écusson
                ou aux Aiguerelles offrent une alternative crédible à
                l&apos;achat classique, avec un plan de financement souvent
                plus souple : bouquet modéré et solde étalé sous forme de
                rente déductible du budget mensuel.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Biens individuels"
                title="Maisons en viager libre à Montpellier"
              />
              <p className="mt-6 leading-relaxed text-text">
                Les maisons en viager libre sont plus rares que les
                appartements sur le marché montpelliérain, ce qui en fait des
                opportunités recherchées. On les trouve principalement dans
                les secteurs pavillonnaires de la périphérie — Près
                d&apos;Arènes, La Pompignane ou vers Castelnau-le-Lez — avec
                jardin, garage et parfois piscine. Une maison en viager libre
                permet à l&apos;acquéreur de s&apos;installer immédiatement
                ou de la rénover à son rythme, sans les contraintes
                calendaires d&apos;un viager occupé.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Comparatif"
                title="Viager libre ou viager occupé : que choisir ?"
                description="Le choix dépend avant tout de votre situation personnelle : souhaitez-vous continuer à vivre dans votre logement, ou l'avez-vous déjà libéré ?"
              />
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl ring-1 ring-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="px-5 py-4 font-semibold">Critère</th>
                    <th className="px-5 py-4 font-semibold">Viager libre</th>
                    <th className="px-5 py-4 font-semibold">Viager occupé</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    [
                      "Occupation du bien",
                      "Immédiate pour l'acheteur",
                      "Réservée au vendeur jusqu'à son décès",
                    ],
                    [
                      "Décote sur le prix",
                      "15 à 20 % en moyenne",
                      "30 à 50 % selon l'âge du vendeur",
                    ],
                    [
                      "Profil du vendeur",
                      "A déjà quitté le logement",
                      "Souhaite continuer à y vivre",
                    ],
                    [
                      "Rente pour le vendeur",
                      "Généralement plus modérée",
                      "Généralement plus élevée",
                    ],
                    [
                      "Profil de l'acheteur",
                      "Cherche à occuper ou louer vite",
                      "Investisseur patient",
                    ],
                  ].map((row, index) => (
                    <tr
                      key={row[0]}
                      className={index % 2 === 1 ? "bg-bg-gray/60" : ""}
                    >
                      <td className="px-5 py-4 font-semibold text-secondary">
                        {row[0]}
                      </td>
                      <td className="px-5 py-4 text-text">{row[1]}</td>
                      <td className="px-5 py-4 text-text">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-8 max-w-3xl leading-relaxed text-text">
              Si vous souhaitez continuer à vivre dans votre logement tout en
              le vendant, la formule du{" "}
              <a
                href="/viager-occupe-montpellier"
                className="font-semibold text-primary"
              >
                viager occupé à Montpellier
              </a>{" "}
              est probablement plus adaptée à votre situation. Nos
              conseillers comparent les deux options avec vous avant toute
              mise en vente.
            </p>
          </div>
        </section>

        <section id="biens-libres" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Nos biens"
              title="Nos biens actuellement en viager libre"
              description="Une sélection de biens immédiatement disponibles à Montpellier, avec bouquet et rente calculés en toute transparence."
            />
            <div className="mt-14">
              <PropertyGrid items={libreProperties} />
            </div>
          </div>
        </section>

        <FaqSection
          title="Questions fréquentes sur le viager libre"
          description="Les réponses aux questions les plus posées par nos clients à Montpellier."
          items={faqs}
        />

        <CtaBanner
          title="Prêt à étudier votre projet de viager libre ?"
          description="Nos conseillers réalisent une estimation gratuite de votre bien et vous répondent sous 48 h, sans engagement."
          primaryLabel="estimation gratuite de votre bien"
          primaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
