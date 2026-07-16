import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { team } from "@/lib/site-data";
import { absoluteUrl, breadcrumbJsonLd, realEstateAgentJsonLd } from "@/lib/seo";

const PATH = "/notre-equipe";
const TITLE = "Notre équipe viager à Montpellier | Patrimoine Cardinal";
const DESCRIPTION =
  "Rencontrez notre équipe pluridisciplinaire : conseillers viager, juriste et négociateur, à votre écoute pour sécuriser votre projet de vente ou d'achat en viager à Montpellier.";

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

export default function NotreEquipePage() {
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
            { name: "Notre équipe", path: PATH },
          ]),
        ]}
      />

      <Header />

      <main className="flex-1">
        <PageHero
          eyebrow="Notre équipe"
          title="Des experts du viager à votre écoute à Montpellier"
          description="Une équipe pluridisciplinaire — immobilier, droit et négociation — pour sécuriser chaque étape de votre projet, de la première estimation jusqu'à la signature notariée."
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Notre équipe" }]}
          stats={[
            { value: "15+", label: "années d'expérience cumulées en viager" },
            { value: "4", label: "expertises complémentaires réunies" },
            { value: "130+", label: "ventes en viager accompagnées" },
          ]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Qui sommes-nous ?"
              title="Une équipe locale, humaine et spécialisée"
              description="Chaque dossier de viager est suivi par un conseiller dédié, épaulé par une juriste et un négociateur pour couvrir l'ensemble des enjeux de votre projet."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group overflow-hidden rounded-3xl bg-bg-gray ring-1 ring-border transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="260px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-secondary">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-primary">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text">
                      {member.bio}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-secondary/50">
                      <Icon name="linkedin" className="h-4 w-4" />
                      <Icon name="mail" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Notre méthode"
              title="Comment nous accompagnons chaque dossier"
              align="center"
            />

            <ProcessSteps
              steps={[
                {
                  icon: "mail",
                  title: "Écoute et premier échange",
                  description:
                    "Nous prenons le temps de comprendre votre situation personnelle, vos besoins et vos priorités avant toute proposition.",
                },
                {
                  icon: "calculator",
                  title: "Estimation chiffrée",
                  description:
                    "Notre conseiller établit une estimation détaillée du bouquet et de la rente, expliquée poste par poste et sans engagement.",
                },
                {
                  icon: "key",
                  title: "Accompagnement jusqu'à l'acte",
                  description:
                    "Notre juriste et nos notaires partenaires sécurisent la transaction jusqu'à la signature, avec un suivi régulier.",
                },
              ]}
            />
          </div>
        </section>

        <CtaBanner
          title="Envie d'échanger avec un conseiller ?"
          description="Prenez contact avec notre équipe pour une estimation gratuite de votre bien, sans engagement."
          primaryLabel="Contacter notre équipe"
          primaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
