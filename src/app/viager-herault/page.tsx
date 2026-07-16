import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { SectorCard } from "@/components/SectorCard";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  realEstateAgentJsonLd,
} from "@/lib/seo";

const PATH = "/viager-herault";
const TITLE =
  "Viager Hérault (34) : vente et achat en viager dans tout le département";
const DESCRIPTION =
  "Spécialiste du viager dans l'Hérault : Montpellier, Sète, Béziers et toute la métropole. Viager occupé et libre, estimation gratuite par des experts locaux.";

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
    question: "Intervenez-vous dans tout le département de l'Hérault ?",
    answer:
      "Oui, notre équipe intervient sur l'ensemble du département, avec une expertise particulière sur Montpellier, Sète et Béziers, ainsi que sur les communes de la métropole comme Castelnau-le-Lez, Lattes ou Palavas-les-Flots. Nos conseillers se déplacent systématiquement sur place pour évaluer chaque bien.",
  },
  {
    question: "Le viager fonctionne-t-il de la même façon partout dans le 34 ?",
    answer:
      "Le principe juridique du viager (bouquet, rente, droit d'usage) est identique partout en France. En revanche, la valeur des biens, les décotes appliquées et la demande locale varient fortement d'une commune à l'autre de l'Hérault, du littoral sétois aux communes rurales de l'arrière-pays.",
  },
  {
    question: "Comment obtenir une estimation pour un bien situé dans l'Hérault ?",
    answer:
      "Il suffit de nous transmettre l'adresse et les caractéristiques principales de votre bien : un conseiller local vous contacte sous 48 h pour organiser une visite et vous remettre une simulation chiffrée de bouquet et de rente, sans engagement de votre part.",
  },
];

const sectors = [
  {
    name: "Montpellier",
    description:
      "Notre secteur historique : préfecture de l'Hérault, forte demande étudiante et investisseurs actifs sur l'ensemble des quartiers.",
    href: "/",
    ctaLabel: "Voir notre agence",
  },
  {
    name: "Sète",
    description:
      "Ville portuaire prisée pour les résidences secondaires, entre étang de Thau et Méditerranée.",
    href: "/viager-sete",
    ctaLabel: "Le viager à Sète",
  },
  {
    name: "Béziers",
    description:
      "Un centre-ville en pleine rénovation, avec des rendements locatifs parmi les plus attractifs de la région.",
    href: "/viager-beziers",
    ctaLabel: "Le viager à Béziers",
  },
  {
    name: "Castelnau-le-Lez",
    description:
      "Commune résidentielle limitrophe de Montpellier, prisée pour ses maisons avec jardin.",
  },
  {
    name: "Lattes",
    description:
      "Entre Montpellier et la mer, un secteur familial en forte croissance démographique.",
  },
  {
    name: "Palavas-les-Flots",
    description:
      "Station balnéaire recherchée pour les résidences secondaires en viager libre.",
  },
];

export default function ViagerHeraultPage() {
  return (
    <>
      <JsonLd
        data={[
          realEstateAgentJsonLd({
            path: PATH,
            areaServed: ["Hérault", "Montpellier", "Sète", "Béziers"],
            description: DESCRIPTION,
          }),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Viager Hérault", path: PATH },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <Header />

      <main className="flex-1">
        <PageHero
          eyebrow="Viager dans le département"
          title="Le viager dans l'Hérault"
          description="Du littoral sétois aux communes de la métropole montpelliéraine, nous accompagnons vendeurs et investisseurs en viager occupé ou libre partout dans le département de l'Hérault, avec une estimation gratuite réalisée par des experts locaux."
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Viager Hérault" }]}
          stats={[
            { value: "34", label: "communes couvertes dans le département de l'Hérault" },
            { value: "6", label: "secteurs d'intervention prioritaires" },
            { value: "48h", label: "de délai de réponse à toute demande" },
          ]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Contexte régional"
                title="Un marché du viager porté par le littoral héraultais"
              />
              <p className="mt-6 leading-relaxed text-text">
                L&apos;Hérault fait partie des départements où le viager se
                développe le plus rapidement en France, porté par une
                population senior importante sur le littoral, des prix
                immobiliers élevés à Montpellier et sur la côte, ainsi
                qu&apos;un déficit de retraite complémentaire pour de
                nombreux propriétaires. Sète, avec son marché des résidences
                secondaires, et Béziers, en pleine reconquête de son
                centre-ville, illustrent bien la diversité des opportunités
                disponibles dans le 34.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Cette dynamique attire également des investisseurs venus
                d&apos;autres régions, séduits par le climat, le
                dynamisme économique de la métropole et des décotes qui
                restent, à ce jour, plus intéressantes que sur la Côte
                d&apos;Azur ou le Pays basque pour un profil de bien
                comparable.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Selon les données démographiques régionales, l&apos;Hérault
                compte une part croissante d&apos;habitants de plus de 65 ans,
                notamment sur le bassin de Thau et le pourtour montpelliérain.
                Beaucoup d&apos;entre eux sont propriétaires sans emprunt en
                cours, ce qui en fait un profil idéal pour le viager occupé :
                leur patrimoine immobilier représente souvent l&apos;essentiel
                de leur épargne, alors que leurs revenus de retraite restent
                limités. Transformer une partie de ce capital en rente
                mensuelle leur permet de maintenir leur niveau de vie sans
                quitter leur environnement familier.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-6 lg:mt-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80"
                  alt="Villa contemporaine typique du marché du viager dans l'Hérault"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
              <MiniLeadForm
                title="Un projet dans l'Hérault ?"
                description="Laissez-nous vos coordonnées, un conseiller local vous recontacte sous 48 h."
                subject="Demande — Viager Hérault"
              />
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Zone de couverture"
              title="Nos secteurs d'intervention dans le 34"
              description="Une présence locale sur les communes les plus actives du département, avec un conseiller dédié par secteur."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((sector) => (
                <SectorCard key={sector.name} {...sector} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Zoom Montpellier"
                title="Viager occupé et viager libre dans l'Hérault"
              />
              <p className="mt-6 leading-relaxed text-text">
                À Montpellier, préfecture du département, les deux formules
                coexistent selon les profils de vendeurs. Les propriétaires
                souhaitant rester chez eux privilégient le{" "}
                <a
                  href="/viager-occupe-montpellier"
                  className="font-semibold text-primary"
                >
                  viager occupé à Montpellier
                </a>
                , tandis que les biens déjà libérés ou destinés à
                l&apos;investissement locatif se négocient plutôt en{" "}
                <a
                  href="/viager-libre-montpellier"
                  className="font-semibold text-primary"
                >
                  viager libre à Montpellier
                </a>
                . Cette même logique s&apos;applique, avec des niveaux de prix
                différents, sur l&apos;ensemble des communes du département où
                nous intervenons.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Notre différence"
                title="Pourquoi passer par une agence locale ?"
              />
              <p className="mt-6 leading-relaxed text-text">
                Les grands portails nationaux de viager appliquent souvent
                des grilles de décote standardisées, sans connaissance fine
                du marché rue par rue. Une agence locale comme{" "}
                <Link href="/" className="font-semibold text-primary">
                  notre agence viager à Montpellier
                </Link>{" "}
                se déplace systématiquement sur place, compare avec des
                ventes récentes du même quartier et ajuste l&apos;estimation
                en fonction de critères que seule une présence de terrain
                permet de mesurer : exposition, nuisances, projets
                d&apos;urbanisme, dynamique du quartier.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Cette proximité se traduit aussi par un accompagnement humain
                tout au long du dossier, avec un conseiller unique joignable
                directement, plutôt qu&apos;une plateforme automatisée sans
                interlocuteur dédié.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Enfin, une agence ancrée dans le département dispose d&apos;un
                réseau de notaires partenaires spécialisés en viager sur
                l&apos;ensemble de l&apos;Hérault, ce qui permet de sécuriser
                juridiquement chaque dossier, quel que soit le secteur
                concerné, et de raccourcir sensiblement les délais entre
                l&apos;estimation initiale et la signature définitive de
                l&apos;acte.
              </p>
            </div>
          </div>
        </section>

        <FaqSection
          title="Questions fréquentes sur le viager dans l'Hérault"
          items={faqs}
        />

        <CtaBanner
          title="Un bien dans l'Hérault ? Parlons-en."
          description="Où que vous soyez dans le département, un conseiller local étudie votre projet et vous propose une estimation gratuite de votre bien."
          primaryLabel="estimation gratuite de votre bien"
          primaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
