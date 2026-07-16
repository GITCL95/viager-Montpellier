import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { PropertyGrid, type PropertyItem } from "@/components/PropertyGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { properties, sectorLinks } from "@/lib/site-data";
import { absoluteUrl, breadcrumbJsonLd, realEstateAgentJsonLd } from "@/lib/seo";

const PATH = "/nos-biens";
const TITLE = "Nos biens en viager à Montpellier : appartements et maisons | Patrimoine Cardinal";
const DESCRIPTION =
  "Découvrez notre sélection de biens à vendre en viager à Montpellier : appartements et maisons, bouquet et rente calculés en toute transparence. Estimation gratuite sous 48 h.";

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

const items: PropertyItem[] = properties.map((property) => ({
  image: property.image,
  alt: property.title,
  tag1: property.tag1,
  tag2: property.tag2,
  title: property.title,
  description: property.description,
}));

const criteria = [
  {
    icon: "search" as const,
    title: "Localisation vérifiée",
    description:
      "Chaque bien est visité par nos conseillers pour évaluer précisément son quartier, son état et son potentiel.",
  },
  {
    icon: "calculator" as const,
    title: "Bouquet et rente transparents",
    description:
      "Le calcul du bouquet et de la rente est détaillé et expliqué avant toute mise en relation avec un acquéreur.",
  },
  {
    icon: "shield" as const,
    title: "Sécurité juridique",
    description:
      "Tous nos dossiers sont préparés avec nos notaires partenaires spécialisés en viager, pour sécuriser chaque partie.",
  },
];

export default function NosBiensPage() {
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
            { name: "Nos biens", path: PATH },
          ]),
        ]}
      />

      <Header />

      <main className="flex-1">
        <PageHero
          eyebrow="Nos biens"
          title="Nos biens actuellement en viager à Montpellier"
          description="Une sélection d'appartements et de maisons à vendre en viager libre ou occupé, à Montpellier et dans sa métropole, avec bouquet et rente calculés en toute transparence."
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Nos biens" }]}
          stats={[
            { value: "12+", label: "biens actuellement disponibles" },
            { value: "2", label: "formules : viager libre ou occupé" },
            { value: "48h", label: "délai de réponse à toute demande" },
          ]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Sélection du moment"
              title="Nos biens en viager disponibles"
              description="Des opportunités vérifiées par nos conseillers, à Montpellier et dans les communes limitrophes."
            />
            <div className="mt-14">
              <PropertyGrid items={items} />
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Notre méthode"
              title="Comment sont sélectionnés nos biens ?"
              description="Chaque bien proposé répond à des critères stricts avant d'être présenté à nos acquéreurs."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {criteria.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-6 ring-1 ring-border"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Vous êtes propriétaire ?"
                title="Faites estimer votre bien en viager"
              />
              <p className="mt-6 leading-relaxed text-text">
                Si vous souhaitez vendre votre bien en viager, nos conseillers
                réalisent une estimation gratuite de votre bouquet et de votre
                rente, sans engagement. Retrouvez également le détail de notre
                offre pour le{" "}
                <Link href="/viager-libre-montpellier" className="font-semibold text-primary">
                  viager libre à Montpellier
                </Link>{" "}
                et pour le{" "}
                <Link href="/viager-occupe-montpellier" className="font-semibold text-primary">
                  viager occupé à Montpellier
                </Link>
                . Nous intervenons aussi dans le reste de l&apos;
                <Link href="/viager-herault" className="font-semibold text-primary">
                  Hérault
                </Link>
                , notamment à{" "}
                {sectorLinks
                  .filter((link) => ["/viager-sete", "/viager-nimes", "/viager-beziers"].includes(link.href))
                  .map((link, index, arr) => (
                    <span key={link.href}>
                      <Link href={link.href} className="font-semibold text-primary">
                        {link.label.replace("Viager ", "")}
                      </Link>
                      {index < arr.length - 2 ? ", " : index === arr.length - 2 ? " et " : ""}
                    </span>
                  ))}
                .
              </p>
            </div>
          </div>
        </section>

        <CtaBanner
          title="Vous ne trouvez pas le bien qui vous correspond ?"
          description="Contactez-nous : nous recevons régulièrement de nouveaux biens en viager avant même leur mise en ligne."
          primaryLabel="Estimation gratuite de votre bien"
          primaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
