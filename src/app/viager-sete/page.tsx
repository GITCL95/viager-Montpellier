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
import { MiniLeadForm } from "@/components/MiniLeadForm";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  realEstateAgentJsonLd,
} from "@/lib/seo";

const PATH = "/viager-sete";
const TITLE = "Viager Sète : vendre ou acheter en viager sur l'île singulière";
const DESCRIPTION =
  "Vente et achat en viager à Sète : marché du littoral, résidences secondaires et estimation gratuite par des experts du viager dans l'Hérault.";

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
    question: "Le viager est-il adapté aux résidences secondaires à Sète ?",
    answer:
      "Oui, à condition de privilégier le viager libre : le bien n'étant pas la résidence principale du vendeur, il peut être vendu libre de toute occupation et disponible immédiatement pour l'acheteur, qui pourra l'utiliser comme résidence secondaire ou le mettre en location saisonnière.",
  },
  {
    question: "Les prix élevés du bassin de Thau influencent-ils le bouquet ?",
    answer:
      "Oui, la forte valorisation des biens avec vue sur l'étang de Thau ou proches du centre historique se répercute directement sur le montant du bouquet et de la rente, qui sont calculés à partir de la valeur vénale réelle du bien, expertisée localement.",
  },
  {
    question: "Puis-je vendre en viager une maison de pêcheur au quartier Haut ?",
    answer:
      "Absolument. Les maisons de pêcheurs du quartier Haut, souvent recherchées pour leur cachet, se prêtent bien au viager occupé comme au viager libre selon que le propriétaire souhaite ou non continuer à y résider. Une visite sur place permet d'évaluer précisément la décote applicable.",
  },
];

export default function ViagerSetePage() {
  return (
    <>
      <JsonLd
        data={[
          realEstateAgentJsonLd({
            path: PATH,
            areaServed: "Sète",
            description: DESCRIPTION,
          }),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Viager Hérault", path: "/viager-herault" },
            { name: "Viager Sète", path: PATH },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <Header />

      <main className="flex-1">
        <PageHero
          eyebrow="Viager sur le littoral"
          title="Le viager à Sète"
          description="Entre étang de Thau et Méditerranée, le marché sétois du viager profite d'une forte demande sur les résidences secondaires et les maisons de caractère. Nos conseillers vous accompagnent pour vendre ou investir, avec une estimation gratuite sous 48 h."
          breadcrumbs={[
            { label: "Accueil", href: "/" },
            { label: "Viager Hérault", href: "/viager-herault" },
            { label: "Viager Sète" },
          ]}
          stats={[
            { value: "+35%", label: "de résidences secondaires dans le parc sétois" },
            { value: "3", label: "quartiers prioritaires : Centre, Île de Thau, Quartier Haut" },
            { value: "48h", label: "pour une première estimation" },
          ]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Contexte local"
                title="Le marché du viager à Sète"
              />
              <p className="mt-6 leading-relaxed text-text">
                Surnommée l&apos;île singulière, Sète conjugue un port de
                pêche actif, des canaux traversant la ville et un accès
                direct à la Méditerranée : une combinaison qui alimente une
                demande soutenue pour les résidences secondaires, notamment
                autour du Mont Saint-Clair et du quartier Haut. Cette
                pression sur les prix, plus marquée qu&apos;à
                l&apos;intérieur des terres, profite directement aux
                vendeurs en viager, qui peuvent proposer des bouquets et des
                rentes attractifs.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Le marché local se distingue aussi par une forte
                saisonnalité touristique, qui pousse de nombreux
                investisseurs à privilégier le viager libre pour pouvoir
                exploiter le bien en location de courte durée dès son
                acquisition, plutôt que d&apos;attendre plusieurs années la
                libération d&apos;un viager occupé. Les biens situés dans le
                centre-ville, près des halles ou du théâtre Molière,
                affichent généralement les valorisations les plus élevées,
                tandis que les hauteurs du Mont Saint-Clair concentrent des
                villas avec vue qui trouvent facilement preneur en viager
                libre auprès d&apos;acquéreurs en quête d&apos;une résidence
                secondaire. Plus largement,{" "}
                <a
                  href="/viager-herault"
                  className="font-semibold text-primary"
                >
                  le viager dans l&apos;Hérault
                </a>{" "}
                profite aujourd&apos;hui de l&apos;attractivité de tout le
                littoral.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-6 lg:mt-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
                  alt="Intérieur lumineux d'une maison à vendre en viager à Sète"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
              <MiniLeadForm
                title="Un projet à Sète ?"
                description="Laissez-nous vos coordonnées, un conseiller local vous recontacte sous 48 h."
                subject="Demande — Viager Sète"
              />
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Pour les vendeurs"
                title="Vendre en viager à Sète"
              />
              <p className="mt-4 leading-relaxed text-text">
                Basée à Montpellier,{" "}
                <Link href="/" className="font-semibold text-primary">
                  notre agence viager à Montpellier
                </Link>{" "}
                accompagne également les propriétaires sétois selon un
                processus simple et encadré, du premier contact à la
                signature notariée.
              </p>
            </div>

            <ProcessSteps
              steps={[
                {
                  icon: "search",
                  title: "Visite sous 48 h",
                  description:
                    "Un conseiller local se déplace à Sète pour visiter votre bien et évaluer ses atouts : vue, exposition, proximité du port ou des canaux.",
                },
                {
                  icon: "calculator",
                  title: "Étude chiffrée",
                  description:
                    "Vous recevez une simulation détaillée du bouquet et de la rente, adaptée à votre âge et à la nature du bien (résidence principale ou secondaire).",
                },
                {
                  icon: "key",
                  title: "Acte notarié",
                  description:
                    "La vente est finalisée chez le notaire de votre choix, avec toutes les garanties légales propres au viager.",
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
                title="Acheter en viager à Sète"
              />
              <p className="mt-6 leading-relaxed text-text">
                Pour un investisseur, acheter en viager à Sète permet
                d&apos;accéder à des biens avec vue sur l&apos;eau ou situés
                dans des quartiers recherchés à un prix décoté par rapport à
                une vente classique. En viager libre, le bien peut être
                exploité immédiatement en location saisonnière ou à l&apos;année ;
                en viager occupé, la décote est plus importante mais
                l&apos;investissement reste bloqué jusqu&apos;au décès du
                vendeur, ce qui convient à un horizon de placement long
                terme, souvent dans une logique de transmission
                patrimoniale.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Nos conseillers réalisent systématiquement une simulation de
                rentabilité intégrant le bouquet, la rente et
                l&apos;espérance de vie statistique du vendeur, afin de
                comparer objectivement un projet de viager à Sète avec un
                achat classique équivalent.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                La rareté du foncier disponible, contrainte par la
                configuration de l&apos;île entre étang et mer, soutient
                durablement les valeurs immobilières sétoises. C&apos;est un
                argument supplémentaire pour un investisseur patient,
                prêt à immobiliser un capital en viager occupé en échange
                d&apos;une décote significative sur un bien qu&apos;il
                n&apos;aurait pas pu acquérir dans les mêmes conditions sur
                le marché classique.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Rayonnement régional"
              title="Nos autres secteurs"
              description="Notre équipe intervient également ailleurs dans la région, en complément de son ancrage sétois."
            />

            <p className="mt-8 max-w-3xl leading-relaxed text-text">
              Si votre projet concerne un autre secteur, nos conseillers
              peuvent également vous accompagner pour{" "}
              <a
                href="/viager-nimes"
                className="font-semibold text-primary"
              >
                vendre en viager à Nîmes
              </a>
              , à environ une heure de route de Sète.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <SectorCard
                name="Hérault"
                description="Retrouvez toutes nos zones d'intervention dans le département."
                href="/viager-herault"
                ctaLabel="Voir tout le département"
              />
              <SectorCard
                name="Nîmes"
                description="Préfecture du Gard, entre patrimoine romain et prix plus accessibles."
                href="/viager-nimes"
                ctaLabel="Découvrir Nîmes"
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
          title="Questions fréquentes sur le viager à Sète"
          items={faqs}
        />

        <CtaBanner
          title="Un bien à Sète ? Échangeons sur votre projet."
          description="Nos conseillers locaux étudient votre situation et vous proposent une estimation gratuite de votre bien sous 48 h."
          primaryLabel="estimation gratuite de votre bien"
          primaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
