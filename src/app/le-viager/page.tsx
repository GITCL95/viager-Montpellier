import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, breadcrumbJsonLd, realEstateAgentJsonLd } from "@/lib/seo";

const PATH = "/le-viager";
const TITLE = "Le viager expliqué : fonctionnement, bouquet et rente | Patrimoine Cardinal";
const DESCRIPTION =
  "Comprendre le viager : définition, calcul du bouquet et de la rente, différence entre viager libre et occupé, garanties pour le vendeur. Guide complet par nos experts à Montpellier.";

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

export default function LeViagerPage() {
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
            { name: "Le viager", path: PATH },
          ]),
        ]}
      />

      <Header />

      <main className="flex-1">
        <PageHero
          eyebrow="Comprendre le viager"
          title="Le viager, comment ça marche ?"
          description="Le viager est une vente immobilière en deux temps : un capital initial (le bouquet) puis une rente régulière versée au vendeur. Découvrez son fonctionnement, ses garanties et les formules disponibles à Montpellier."
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Le viager" }]}
          stats={[
            { value: "2", label: "formules : viager libre ou occupé" },
            { value: "48h", label: "délai d'étude de votre projet" },
            { value: "100%", label: "sécurisé par acte notarié" },
          ]}
          secondaryCtaLabel="Voir la FAQ complète"
          secondaryCtaHref="/faq"
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Définition"
                title="Qu'est-ce que le viager exactement ?"
              />
              <p className="mt-6 leading-relaxed text-text">
                Le viager est une forme de vente immobilière où l&apos;acheteur,
                appelé le débirentier, verse au vendeur, le crédirentier, un
                capital initial appelé « bouquet », puis une rente périodique
                — le plus souvent mensuelle — jusqu&apos;au décès de ce
                dernier. Cette formule permet au vendeur de transformer son
                patrimoine immobilier en revenus réguliers, tout en conservant
                généralement le droit de continuer à vivre dans son logement.
                C&apos;est{" "}
                <Link href="/" className="font-semibold text-primary">
                  notre agence viager à Montpellier
                </Link>{" "}
                qui encadre chaque étape de la transaction, de l&apos;estimation
                à la signature notariée.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Contrairement à une vente classique, le prix total perçu par
                le vendeur n&apos;est jamais connu à l&apos;avance : il dépend
                de sa durée de vie après la vente. C&apos;est un pari partagé
                entre les deux parties, encadré par des règles de calcul
                précises et des garanties légales solides pour sécuriser le
                vendeur.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Le calcul"
                title="Comment sont calculés le bouquet et la rente ?"
                description="Trois facteurs déterminent le montant de la rente viagère : la valeur du bien, l'âge du vendeur et le montant du bouquet choisi."
              />
              <p className="mt-6 leading-relaxed text-text">
                Nos conseillers réalisent une estimation de la valeur vénale
                du bien, puis appliquent une décote d&apos;occupation si le
                vendeur conserve son droit d&apos;usage (généralement 30 à 50
                % selon son âge). Le solde est ensuite converti en rente
                viagère grâce à des tables de calcul basées sur
                l&apos;espérance de vie statistique. Plus le bouquet initial
                est élevé, plus la rente mensuelle est réduite, et
                inversement : chaque vendeur choisit la répartition qui
                correspond le mieux à ses besoins (travaux, aide à un enfant,
                complément de revenu régulier).
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Comparatif"
                title="Viager libre ou viager occupé ?"
                description="Le choix dépend de votre situation : souhaitez-vous continuer à vivre dans votre logement ou l'avez-vous déjà libéré ?"
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
              Pour aller plus loin, consultez nos pages dédiées au{" "}
              <Link href="/viager-libre-montpellier" className="font-semibold text-primary">
                viager libre à Montpellier
              </Link>{" "}
              et au{" "}
              <Link href="/viager-occupe-montpellier" className="font-semibold text-primary">
                viager occupé à Montpellier
              </Link>
              , avec exemples chiffrés et biens disponibles.
            </p>
          </div>
        </section>

        <Services />
        <WhyChoose />

        <CtaBanner
          title="Une question sur votre projet de viager ?"
          description="Nos conseillers réalisent une estimation gratuite de votre bouquet et de votre rente, sans engagement, sous 48 h."
          primaryLabel="Estimation gratuite de votre bien"
          primaryHref="/contact"
          secondaryLabel="Consulter la FAQ"
          secondaryHref="/faq"
        />
      </main>

      <Footer />
    </>
  );
}
