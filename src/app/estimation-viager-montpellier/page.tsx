import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FaqSection } from "@/components/FaqSection";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, agency, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const PATH = "/estimation-viager-montpellier";
const TITLE = "Estimation viager Montpellier : étudier bouquet et rente";
const DESCRIPTION =
  "Demandez une estimation viager à Montpellier : valeur du bien, âge des vendeurs et occupation. Un conseiller étudie votre projet de bouquet et de rente.";

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
    question: "Que comprend une estimation en viager ?",
    answer:
      "Elle distingue la valeur immobilière du logement, les droits conservés par le vendeur et les modalités de paiement envisagées. Le conseiller compare les hypothèses de bouquet et de rente ; le notaire vérifie les modalités retenues avant la vente.",
  },
  {
    question: "Le formulaire donne-t-il un montant automatique ?",
    answer:
      "Non. Il transmet les premières informations à un conseiller. Une étude personnalisée nécessite de connaître le bien, les vendeurs et leur projet ; aucune valeur ni rente ne peut être déduite de la seule surface.",
  },
  {
    question: "Puis-je demander une estimation si je souhaite rester chez moi ?",
    answer:
      "Oui. Précisez votre souhait de conserver l'occupation du logement. L'étude pourra porter sur un viager occupé et les droits à prévoir dans l'acte, en tenant compte d'un éventuel conjoint.",
  },
  {
    question: "Faut-il connaître le bouquet souhaité dès le premier échange ?",
    answer:
      "Non. Vous pouvez d'abord expliquer vos besoins : disposer d'un capital, compléter vos revenus ou préparer un changement de logement. Plusieurs répartitions peuvent ensuite être comparées pour éclairer votre décision.",
  },
];

const factors = [
  {
    title: "La valeur du logement",
    description:
      "Adresse et quartier, surface, étage, extérieur, état du logement, diagnostics et situation de la copropriété permettent de préparer une évaluation adaptée au bien.",
  },
  {
    title: "La situation des vendeurs",
    description:
      "L'âge du ou des vendeurs, le nombre de bénéficiaires de la rente et les droits à conserver participent à l'étude. Ces informations se précisent avec le conseiller.",
  },
  {
    title: "Le projet de paiement",
    description:
      "Vos besoins de capital et de revenus orientent la répartition envisagée entre bouquet et rente. Une hypothèse de calcul doit toujours être accompagnée de ses conditions.",
  },
];

export default function EstimationViagerMontpellierPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Estimation viager Montpellier", path: PATH },
          ]),
          faqJsonLd(faqs),
        ]}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Évaluer votre projet"
          title="Estimation de votre bien en viager à Montpellier"
          description="Avant de choisir un bouquet et une rente, faites étudier la valeur de votre logement et les droits que vous souhaitez conserver. Un conseiller vous accompagne pour comparer les possibilités."
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Estimation viager Montpellier" }]}
          primaryCtaLabel="Demander mon estimation"
          primaryCtaHref="#demande-estimation"
          secondaryCtaLabel="Appeler un conseiller"
          secondaryCtaHref={`tel:${agency.telephone}`}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Les éléments de l'étude"
              title="Une estimation qui distingue le bien et le contrat"
              description="Un appartement dans l'Écusson, une maison avec jardin ou un logement en copropriété ne s'évaluent pas uniquement au mètre carré. Votre situation et les conditions de la vente complètent l'analyse immobilière."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {factors.map((factor) => (
                <div key={factor.title} className="rounded-3xl bg-bg-gray p-7 ring-1 ring-border">
                  <h3 className="text-lg font-bold text-secondary">{factor.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text">{factor.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-text">
              La rente dépend notamment de la valeur du bien, du bouquet, de
              l&apos;âge des bénéficiaires et des droits d&apos;occupation.
              Le notaire intervient dans la détermination et la formalisation
              de ces modalités. Retrouvez ces critères dans la{" "}
              <a href="https://www.notaires.fr/sites/default/files/media/Notaires_viager.pdf" className="font-semibold text-primary underline underline-offset-4">
                fiche des Notaires de France sur le viager
              </a>.
            </p>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading eyebrow="Comment se déroule l'estimation ?" title="De votre demande à une étude expliquée" />
            <ProcessSteps steps={[
              { title: "Décrire votre logement", description: "Indiquez sa localisation, son type, sa surface approximative et votre souhait d'occupation. Vous pouvez ajouter les particularités ou travaux à signaler.", icon: "mapPin" },
              { title: "Échanger avec le conseiller", description: "Nous précisons votre projet et les éléments manquants. Une visite et les documents du bien peuvent être nécessaires pour approfondir l'évaluation.", icon: "user" },
              { title: "Comparer les hypothèses", description: "L'étude distingue valeur du bien, occupation éventuelle et répartition des paiements. Vous disposez des éléments pour poursuivre ou ajuster votre projet.", icon: "calculator" },
            ]} />
          </div>
        </section>

        <section id="demande-estimation" className="scroll-mt-28 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:px-10">
            <div>
              <SectionHeading eyebrow="Préparer le premier échange" title="Parlez-nous de votre bien et de vos besoins" />
              <p className="mt-6 leading-relaxed text-text">
                Pour commencer, une description du logement suffit. Si vous
                les avez, gardez à portée de main le titre de propriété, le
                plan ou la surface, les diagnostics et les informations de
                copropriété. Ils aideront le conseiller à identifier les
                points à examiner pendant l&apos;étude.
              </p>
              <p className="mt-4 leading-relaxed text-text">
                Vous souhaitez continuer à y vivre ? Consultez le{" "}
                <Link href="/viager-occupe-montpellier" className="font-semibold text-primary">viager occupé</Link>.
                Si vous prévoyez de le libérer, explorez le{" "}
                <Link href="/viager-libre-montpellier" className="font-semibold text-primary">viager libre</Link>.
                Notre guide pour{" "}
                <Link href="/vendre-en-viager-montpellier" className="font-semibold text-primary">vendre en viager à Montpellier</Link>{" "}
                détaille les étapes après l&apos;estimation.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Cette demande prépare un échange personnalisé avec l&apos;agence.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <MiniLeadForm
                context="estimation"
                title="Demander une estimation viager"
                description="Renseignez votre logement et vos coordonnées pour qu'un conseiller puisse vous recontacter et préciser votre projet."
                subject="Demande d'estimation viager — Montpellier"
              />
            </div>
          </div>
        </section>

        <FaqSection title="Vos questions sur l'estimation viager" items={faqs} />
        <CtaBanner
          title="Préparons votre estimation ensemble"
          description="Une première conversation permet de préciser le logement, vos attentes et les prochaines étapes de l'étude."
          primaryLabel="Décrire mon bien"
          primaryHref="#demande-estimation"
          secondaryLabel={agency.telephoneDisplay}
          secondaryHref={`tel:${agency.telephone}`}
        />
      </main>
      <Footer />
    </>
  );
}
