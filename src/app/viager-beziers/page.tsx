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

const PATH = "/viager-beziers";
const TITLE = "Viager Béziers : estimation gratuite et accompagnement notarial";
const DESCRIPTION =
  "Vendre ou investir en viager à Béziers : renouveau du centre-ville, rendements locatifs attractifs et accompagnement notarial complet. Estimation gratuite.";

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
    question: "Pourquoi investir en viager à Béziers plutôt qu'ailleurs dans l'Hérault ?",
    answer:
      "Béziers offre aujourd'hui l'un des tickets d'entrée les plus bas de la région pour un investissement en viager, tout en bénéficiant d'un programme de rénovation urbaine actif sur le centre-ville. Cette combinaison permet des rendements locatifs potentiels supérieurs à ceux observés à Montpellier ou sur le littoral.",
  },
  {
    question: "Les maisons vigneronnes autour de Béziers sont-elles concernées par le viager ?",
    answer:
      "Oui, les maisons vigneronnes et les propriétés avec vignes en périphérie de Béziers peuvent tout à fait être vendues en viager, occupé ou libre. Leur estimation intègre alors à la fois la valeur du bâti et celle du foncier agricole ou viticole associé, selon une expertise dédiée.",
  },
  {
    question: "Le renouveau du centre-ville de Béziers a-t-il un impact sur les prix ?",
    answer:
      "Les programmes de rénovation du centre historique commencent à tirer les prix vers le haut dans certaines rues réhabilitées, tout en laissant encore des opportunités à des niveaux de prix attractifs dans les rues adjacentes, ce qui est particulièrement favorable aux acheteurs en viager libre souhaitant rénover eux-mêmes.",
  },
];

export default function ViagerBeziersPage() {
  return (
    <>
      <JsonLd
        data={[
          realEstateAgentJsonLd({
            path: PATH,
            areaServed: "Béziers",
            description: DESCRIPTION,
          }),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Viager Hérault", path: "/viager-herault" },
            { name: "Viager Béziers", path: PATH },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <Header />

      <main className="flex-1">
        <PageHero
          eyebrow="Viager et renouveau urbain"
          title="Le viager à Béziers"
          description="Entre le canal du Midi et les coteaux viticoles, Béziers vit une véritable reconquête de son centre-ville. Un contexte idéal pour vendre en viager ou investir à des niveaux de prix encore attractifs, avec une estimation gratuite sous 48 h."
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Viager Hérault", href: "/viager-herault" },
            { label: "Viager Béziers" },
          ]}
          stats={[
            { value: "-25%", label: "de prix moyen au m² par rapport à Montpellier" },
            { value: "Action Cœur de Ville", label: "programme national de rénovation du centre" },
            { value: "48h", label: "pour une première estimation" },
          ]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Contexte local"
                title="Le marché du viager à Béziers"
              />
              <p className="mt-6 leading-relaxed text-text">
                Dominée par sa cathédrale Saint-Nazaire et traversée par le
                canal du Midi, Béziers bénéficie depuis plusieurs années du
                programme national « Action Cœur de Ville », qui finance la
                rénovation de nombreux immeubles du centre historique. Cette
                dynamique attire une nouvelle génération de propriétaires et
                d&apos;investisseurs, dans une ville où les prix restent
                encore parmi les plus bas des grandes villes de
                l&apos;Hérault.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Pour les propriétaires seniors du centre ancien ou des
                coteaux viticoles environnants, le viager représente une
                solution de plus en plus envisagée pour compléter une
                retraite souvent modeste, dans une région où le patrimoine
                immobilier constitue l&apos;essentiel de l&apos;épargne
                accumulée au fil d&apos;une vie.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Le vignoble biterrois, l&apos;un des plus vastes de France,
                complète ce paysage avec des propriétés viticoles familiales
                dont les exploitants, souvent proches de la retraite,
                cherchent à valoriser leur patrimoine sans nécessairement
                céder l&apos;exploitation elle-même. Le viager permet alors
                de dissocier la vente du bâti de la poursuite, si souhaitée,
                de l&apos;activité agricole sur le foncier attenant.
              </p>
            </div>

            <div className="relative mt-10 aspect-[4/5] w-full overflow-hidden rounded-[2rem] lg:mt-0">
              <Image
                src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80"
                alt="Maison avec jardin proche du centre-ville de Béziers, à vendre en viager"
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
                title="Vendre en viager à Béziers"
              />
              <p className="mt-4 leading-relaxed text-text">
                Les conseillers de{" "}
                <Link href="/" className="font-semibold text-primary">
                  notre agence viager à Montpellier
                </Link>{" "}
                se déplacent régulièrement à Béziers pour accompagner les
                propriétaires, qu&apos;il s&apos;agisse d&apos;un appartement
                du centre historique ou d&apos;une maison vigneronne en
                périphérie.
              </p>
            </div>

            <ProcessSteps
              steps={[
                {
                  icon: "search",
                  title: "Visite sous 48 h",
                  description:
                    "Un conseiller local visite votre bien à Béziers, en tenant compte des éventuels travaux de rénovation déjà engagés ou à prévoir.",
                },
                {
                  icon: "calculator",
                  title: "Étude chiffrée",
                  description:
                    "Vous recevez une simulation détaillée du bouquet et de la rente, ajustée au marché biterrois.",
                },
                {
                  icon: "key",
                  title: "Acte notarié",
                  description:
                    "La vente est finalisée devant notaire, avec toutes les garanties légales propres au viager.",
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
                title="Acheter en viager à Béziers"
              />
              <p className="mt-6 leading-relaxed text-text">
                Avec des prix parmi les plus bas des grandes villes de la
                région et une demande locative croissante portée par la
                rénovation du centre-ville, Béziers offre des perspectives
                de rendement locatif attractives pour un investissement en
                viager libre, exploitable dès l&apos;acquisition.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                En viager occupé, la décote appliquée permet d&apos;acquérir
                à moindre coût des biens de caractère dans le centre
                historique, avec une perspective de valorisation à moyen
                terme liée à la poursuite des programmes de rénovation
                urbaine engagés par la ville.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Certains investisseurs choisissent également Béziers comme
                porte d&apos;entrée sur le marché du viager avant
                d&apos;envisager, dans un second temps, un projet plus
                important à Montpellier ou sur le littoral. Le ticket
                d&apos;entrée plus faible permet de se familiariser avec le
                fonctionnement du bouquet et de la rente avant de mobiliser
                des capitaux plus conséquents, tout en diversifiant
                progressivement son patrimoine sur plusieurs secteurs de la
                région.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Rayonnement régional"
              title="Nos autres secteurs"
              description="Notre équipe intervient aussi sur d'autres villes de la région Occitanie."
            />

            <p className="mt-8 max-w-3xl leading-relaxed text-text">
              Nos conseillers accompagnent également les propriétaires qui
              souhaitent{" "}
              <a href="/viager-sete" className="font-semibold text-primary">
                vendre en viager à Sète
              </a>
              , à moins d&apos;une heure de route de Béziers.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <SectorCard
                name="Hérault"
                description="Retrouvez toutes nos zones d'intervention dans le département."
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
                name="Nîmes"
                description="Préfecture du Gard, entre patrimoine romain et prix accessibles."
                href="/viager-nimes"
                ctaLabel="Découvrir Nîmes"
              />
            </div>
          </div>
        </section>

        <FaqSection
          title="Questions fréquentes sur le viager à Béziers"
          items={faqs}
        />

        <CtaBanner
          title="Un bien à Béziers ? Discutons de votre projet."
          description="Nos conseillers étudient votre situation et vous proposent une estimation gratuite de votre bien sous 48 h."
          primaryLabel="estimation gratuite de votre bien"
          primaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
