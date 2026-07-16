import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import Image from "next/image";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqJsonLd,
  realEstateAgentJsonLd,
} from "@/lib/seo";

const PATH = "/viager-occupe-montpellier";
const TITLE = "Viager occupé Montpellier : vendez en restant chez vous";
const DESCRIPTION =
  "Le viager occupé à Montpellier : percevez un bouquet et une rente à vie tout en continuant d'habiter votre logement. Accompagnement notarial complet.";

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
    question: "Qu'est-ce que le droit d'usage et d'habitation (DUH) ?",
    answer:
      "Le droit d'usage et d'habitation est inscrit dans l'acte notarié de vente en viager occupé : il garantit au vendeur le droit de continuer à vivre dans son logement jusqu'à son décès, sans en être propriétaire. Ce droit est incessible et s'éteint automatiquement à la fin de vie du crédirentier, moment où l'acheteur récupère la pleine propriété et la jouissance du bien.",
  },
  {
    question: "Que se passe-t-il si le vendeur part en maison de retraite ?",
    answer:
      "Si le vendeur quitte le logement pour un établissement médicalisé ou une résidence senior, il peut, selon les clauses prévues à l'acte, mettre le bien en location ou percevoir une rente majorée en compensation de la libération anticipée du logement. Ce point est négocié et fixé précisément avant la signature.",
  },
  {
    question: "La rente est-elle revalorisée chaque année ?",
    answer:
      "Oui, la rente viagère est indexée chaque année sur un indice de référence (généralement l'indice INSEE des prix à la consommation), afin de préserver le pouvoir d'achat du vendeur sur toute la durée du contrat. Cette clause d'indexation est obligatoirement mentionnée dans l'acte notarié.",
  },
  {
    question: "Que se passe-t-il en cas de non-paiement de la rente par l'acheteur ?",
    answer:
      "La vente en viager occupé est sécurisée par un privilège du vendeur et une clause résolutoire inscrits à l'acte notarié. En cas de défaut de paiement de la rente, le vendeur peut faire annuler la vente par voie judiciaire et récupérer son bien, tout en conservant les sommes déjà perçues.",
  },
];

export default function ViagerOccupeMontpellierPage() {
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
            { name: "Viager occupé Montpellier", path: PATH },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <Header />

      <main className="flex-1">
        <PageHero
          eyebrow="Viager occupé à Montpellier"
          title="Viager occupé à Montpellier"
          description="Vendez votre bien, restez chez vous, percevez une rente à vie : le viager occupé permet de transformer votre patrimoine en revenu complémentaire sans quitter votre logement. Estimation gratuite et confidentielle sous 48 h."
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Viager occupé Montpellier" }]}
          stats={[
            { value: "70%", label: "d'abattement fiscal possible sur la rente après 69 ans" },
            { value: "81 ans", label: "âge moyen de nos vendeurs en viager occupé" },
            { value: "100%", label: "sécurisé par acte notarié" },
          ]}
          secondaryCtaLabel="Simuler mon bouquet et ma rente"
          secondaryCtaHref="#simulation"
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-[1.6fr_1fr] lg:gap-14 lg:px-10">
            <div>
              <SectionHeading
                eyebrow="Le principe"
                title="Comment fonctionne le viager occupé ?"
              />
              <p className="mt-6 leading-relaxed text-text">
                En viager occupé, le vendeur (crédirentier) cède la propriété
                de son logement à l&apos;acheteur (débirentier) tout en
                conservant un droit d&apos;usage et d&apos;habitation (DUH)
                inscrit à l&apos;acte notarié. Il continue donc à vivre chez
                lui, exactement comme avant la vente, et perçoit en échange
                un capital initial appelé bouquet ainsi qu&apos;une rente
                mensuelle versée jusqu&apos;à son décès. C&apos;est la
                formule la plus répandue chez{" "}
                <Link href="/" className="font-semibold text-primary">
                  notre agence viager à Montpellier
                </Link>
                , car elle répond au besoin le plus fréquent : rester dans
                ses murs tout en sécurisant un complément de revenus.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Le prix de vente tient compte d&apos;une décote
                d&apos;occupation, généralement comprise entre 30 et 50 %,
                qui compense le fait que l&apos;acheteur ne pourra disposer
                du bien qu&apos;après le décès du vendeur. Plus le vendeur est
                âgé au moment de la vente, plus la décote est faible et la
                rente potentiellement élevée. Pour un projet où le bien doit
                être disponible rapidement, la formule du{" "}
                <a
                  href="/viager-libre-montpellier"
                  className="font-semibold text-primary"
                >
                  viager libre à Montpellier
                </a>{" "}
                sera en revanche plus pertinente.
              </p>
            </div>

            <div className="mt-10 lg:mt-0">
              <MiniLeadForm
                title="Un projet en viager occupé ?"
                description="Laissez-nous vos coordonnées, un conseiller vous recontacte sous 48 h pour étudier votre projet."
                subject="Demande — Viager occupé Montpellier"
              />
            </div>
          </div>
        </section>

        <section id="simulation" className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 lg:grid lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="Simulation"
                title="Combien vaut votre bien en viager occupé ?"
              />
              <p className="mt-6 leading-relaxed text-text">
                Le montant du bouquet et de la rente dépend de trois
                variables principales : la valeur vénale du bien (estimée
                comme pour une vente classique), l&apos;âge et
                l&apos;espérance de vie statistique du vendeur, et la décote
                d&apos;occupation appliquée. Plus le bouquet initial est
                élevé, plus la rente mensuelle est réduite, et inversement.
              </p>

              <div className="mt-8 rounded-3xl bg-white p-6 ring-1 ring-border">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Exemple chiffré réaliste
                </p>
                <p className="mt-3 text-sm leading-relaxed text-secondary/90">
                  Appartement T3 de 70 m² dans l&apos;Écusson, valeur vénale
                  estimée à <strong>322 000 €</strong>. Pour une vendeuse de
                  81 ans, la répartition usuelle serait :
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-bg-gray p-4">
                    <p className="text-2xl font-bold text-secondary">
                      ~74 000 €
                    </p>
                    <p className="mt-1 text-xs text-text">Bouquet initial</p>
                  </div>
                  <div className="rounded-2xl bg-bg-gray p-4">
                    <p className="text-2xl font-bold text-secondary">
                      ~1 240 €<span className="text-sm">/mois</span>
                    </p>
                    <p className="mt-1 text-xs text-text">Rente viagère</p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-text">
                  Simulation indicative réalisée à partir des tables de
                  mortalité usuelles et d&apos;une décote d&apos;occupation
                  d&apos;environ 35 %. Chaque situation est étudiée
                  individuellement par nos conseillers.
                </p>
              </div>
            </div>

            <div className="relative mt-10 aspect-[4/5] w-full overflow-hidden rounded-[2rem] lg:mt-0">
              <Image
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80"
                alt="Chambre confortable d'un appartement vendu en viager occupé à Montpellier"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Sécurité juridique"
                title="Les garanties du vendeur"
              />
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: "shield" as const,
                  title: "Privilège du vendeur",
                  description:
                    "Une hypothèque légale est inscrite au profit du crédirentier, garantissant le paiement de la rente sur toute la durée du contrat.",
                },
                {
                  icon: "check" as const,
                  title: "Clause résolutoire",
                  description:
                    "En cas de défaut de paiement, la vente peut être annulée par voie judiciaire et le bien restitué au vendeur.",
                },
                {
                  icon: "calculator" as const,
                  title: "Indexation annuelle",
                  description:
                    "La rente est revalorisée chaque année selon un indice de référence, pour préserver le pouvoir d'achat du vendeur dans le temps.",
                },
                {
                  icon: "key" as const,
                  title: "Acte notarié obligatoire",
                  description:
                    "Chaque vente en viager occupé est actée devant notaire, garantissant la conformité juridique et la protection des deux parties.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-bg-gray p-6 ring-1 ring-border"
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

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Fiscalité"
                title="Fiscalité du viager occupé"
              />
              <p className="mt-6 leading-relaxed text-text">
                La rente viagère perçue par le vendeur bénéficie d&apos;un
                abattement fiscal qui dépend uniquement de son âge au moment
                de la première perception de la rente : 30 % d&apos;abattement
                avant 50 ans, 50 % entre 50 et 59 ans, 60 % entre 60 et 69
                ans, et jusqu&apos;à 70 % d&apos;exonération après 69 ans.
                Seule la fraction imposable est soumise au barème
                progressif de l&apos;impôt sur le revenu.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Le bouquet, quant à lui, n&apos;est pas imposable
                puisqu&apos;il s&apos;agit d&apos;un capital versé une seule
                fois lors de la vente. Nous vous recommandons de vous
                rapprocher d&apos;un notaire pour une analyse fiscale
                adaptée à votre situation personnelle avant toute signature.
              </p>
            </div>
          </div>
        </section>

        <FaqSection
          title="Questions fréquentes sur le viager occupé"
          description="Les réponses aux questions les plus posées par nos clients vendeurs à Montpellier."
          items={faqs}
        />

        <CtaBanner
          title="Envie de connaître le montant de votre bouquet et de votre rente ?"
          description="Nos conseillers réalisent une estimation gratuite de votre bien et vous répondent sous 48 h, en toute confidentialité."
          primaryLabel="estimation gratuite de votre bien"
          primaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
