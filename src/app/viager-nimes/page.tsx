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
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectorCard } from "@/components/SectorCard";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  realEstateAgentJsonLd,
} from "@/lib/seo";

const PATH = "/viager-nimes";
const TITLE = "Viager Nîmes : vente en viager occupé et libre dans le Gard";
const DESCRIPTION =
  "Vendre ou acheter en viager à Nîmes : préfecture du Gard, prix accessibles et patrimoine historique. Estimation gratuite par des experts du viager.";

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
    question: "Le viager est-il courant à Nîmes ?",
    answer:
      "Le viager se développe progressivement à Nîmes, porté par une population senior propriétaire de son logement dans le centre historique et les quartiers pavillonnaires. Le marché reste toutefois moins mature qu'à Montpellier, ce qui laisse une marge de négociation intéressante pour les acheteurs.",
  },
  {
    question: "Les maisons de caractère du centre historique se vendent-elles en viager ?",
    answer:
      "Oui, les maisons de caractère proches des Arènes ou de la Maison Carrée peuvent être vendues en viager occupé comme en viager libre. Leur valeur patrimoniale est prise en compte dans l'estimation, au même titre que l'état général et les éventuels travaux de rénovation à prévoir.",
  },
  {
    question: "Le prix de l'immobilier à Nîmes rend-il le viager plus accessible ?",
    answer:
      "Les prix nîmois étant globalement inférieurs à ceux de Montpellier pour une surface comparable, le bouquet nécessaire pour investir en viager y est souvent plus abordable, ce qui permet à davantage d'investisseurs d'accéder à ce type de placement.",
  },
];

export default function ViagerNimesPage() {
  return (
    <>
      <JsonLd
        data={[
          realEstateAgentJsonLd({
            path: PATH,
            areaServed: "Nîmes",
            description: DESCRIPTION,
          }),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Viager Hérault", path: "/viager-herault" },
            { name: "Viager Nîmes", path: PATH },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <Header />

      <main className="flex-1">
        <PageHero
          eyebrow="Viager dans le Gard"
          title="Le viager à Nîmes"
          description="Préfecture du Gard et ville d'art et d'histoire, Nîmes offre un marché du viager encore peu concurrentiel, avec des prix plus accessibles qu'à Montpellier. Estimation gratuite de votre bien sous 48 h."
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Viager Hérault", href: "/viager-herault" },
            { label: "Viager Nîmes" },
          ]}
          stats={[
            { value: "-15%", label: "de prix moyen au m² par rapport à Montpellier" },
            { value: "2000", label: "ans d'histoire dans le centre romain" },
            { value: "48h", label: "pour une première estimation" },
          ]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Contexte local"
                title="Le marché du viager à Nîmes"
              />
              <p className="mt-6 leading-relaxed text-text">
                Préfecture du Gard et haut lieu du patrimoine romain en
                France, avec ses Arènes et sa Maison Carrée, Nîmes conjugue
                un centre historique dense et recherché avec des prix
                immobiliers restés plus accessibles que ceux de Montpellier
                pour une surface équivalente. Cette différence de valorisation
                se traduit par des bouquets d&apos;entrée plus abordables,
                ouvrant le viager à un public d&apos;investisseurs plus large.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                De nombreux propriétaires nîmois, notamment dans les
                quartiers d&apos;Écusson et de Beau Rivage, sont
                aujourd&apos;hui propriétaires depuis plusieurs décennies et
                peu informés des possibilités offertes par le viager pour
                compléter leur retraite sans quitter leur logement. Le
                marché reste ainsi moins mature que dans d&apos;autres
                villes de la région, ce qui laisse une réelle marge de
                négociation pour les acquéreurs bien accompagnés.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Le centre-ville de Nîmes se distingue également par son
                architecture du XIXe siècle et ses immeubles bourgeois
                aujourd&apos;hui recherchés pour la colocation ou la location
                meublée étudiante, l&apos;université de Nîmes attirant chaque
                année plusieurs milliers d&apos;étudiants. Cette demande
                locative structurelle constitue un facteur de sécurité
                supplémentaire pour un projet de viager libre destiné à être
                mis en location dès l&apos;acquisition.
              </p>
            </div>

            <div className="relative mt-10 aspect-[4/5] w-full overflow-hidden rounded-[2rem] lg:mt-0">
              <Image
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80"
                alt="Salon cosy d'une maison de caractère à vendre en viager à Nîmes"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Pour les vendeurs"
                title="Vendre en viager à Nîmes"
              />
              <p className="mt-4 leading-relaxed text-text">
                Que vous soyez propriétaire depuis longtemps ou en train de
                planifier votre retraite, l&apos;équipe de{" "}
                <Link href="/" className="font-semibold text-primary">
                  notre agence viager à Montpellier
                </Link>{" "}
                se déplace jusqu&apos;à Nîmes pour évaluer votre bien selon un
                processus identique à celui appliqué sur l&apos;ensemble de
                notre zone d&apos;intervention.
              </p>
            </div>

            <ProcessSteps
              steps={[
                {
                  icon: "search",
                  title: "Visite sous 48 h",
                  description:
                    "Un conseiller se rend à Nîmes pour visiter votre bien, qu'il soit situé dans le centre historique ou dans un quartier pavillonnaire.",
                },
                {
                  icon: "calculator",
                  title: "Étude chiffrée",
                  description:
                    "Nous vous remettons une simulation précise du bouquet et de la rente, tenant compte des spécificités du marché nîmois.",
                },
                {
                  icon: "key",
                  title: "Acte notarié",
                  description:
                    "La transaction est actée devant notaire, avec les mêmes garanties juridiques que partout ailleurs en France.",
                },
              ]}
            />
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Pour les investisseurs"
                title="Acheter en viager à Nîmes"
              />
              <p className="mt-6 leading-relaxed text-text">
                Les niveaux de prix plus modérés qu&apos;à Montpellier
                permettent d&apos;investir en viager à Nîmes avec un bouquet
                initial réduit, tout en bénéficiant d&apos;une décote
                supplémentaire liée à l&apos;âge du vendeur en viager occupé.
                Ce couple décote de marché et décote d&apos;occupation en
                fait une destination particulièrement intéressante pour un
                premier investissement en viager.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Le potentiel locatif du centre historique, porté par le
                tourisme culturel et une activité étudiante croissante, reste
                également un argument de poids pour les acquéreurs qui
                envisagent une exploitation locative après la libération du
                bien.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Un autre atout du marché nîmois réside dans la diversité des
                typologies disponibles, des petits appartements du centre
                romain aux maisons de ville avec cour intérieure dans les
                quartiers plus résidentiels : de quoi construire un
                portefeuille de biens en viager varié, avec des niveaux de
                risque et de rendement différenciés selon le secteur choisi.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Rayonnement régional"
              title="Nos autres secteurs"
              description="Notre équipe accompagne également des projets sur d'autres villes de la région."
            />

            <p className="mt-8 max-w-3xl leading-relaxed text-text">
              Nous pouvons par exemple vous mettre en relation avec le
              conseiller qui accompagne les propriétaires souhaitant{" "}
              <a
                href="/viager-beziers"
                className="font-semibold text-primary"
              >
                vendre en viager à Béziers
              </a>
              , à un peu plus d&apos;une heure de route de Nîmes.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <SectorCard
                name="Hérault"
                description="Retrouvez toutes nos zones d'intervention dans le département voisin."
                href="/viager-herault"
                ctaLabel="Voir tout le département"
              />
              <SectorCard
                name="Sète"
                description="Un marché porté par le littoral et les résidences secondaires."
                href="/viager-sete"
                ctaLabel="Découvrir Sète"
              />
              <SectorCard
                name="Béziers"
                description="Un centre-ville en renouveau et des rendements locatifs attractifs."
                href="/viager-beziers"
                ctaLabel="Découvrir Béziers"
              />
            </div>
          </div>
        </section>

        <FaqSection
          title="Questions fréquentes sur le viager à Nîmes"
          items={faqs}
        />

        <CtaBanner
          title="Un bien à Nîmes ? Parlons de votre projet."
          description="Nos conseillers étudient votre situation et vous proposent une estimation gratuite de votre bien sous 48 h."
          primaryLabel="estimation gratuite de votre bien"
          primaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
