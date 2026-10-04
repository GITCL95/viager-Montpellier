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
import { absoluteUrl, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const PATH = "/vente-a-terme-montpellier";
const TITLE = "Vente à terme Montpellier : fonctionnement et accompagnement";
const DESCRIPTION =
  "Comprenez la vente à terme à Montpellier : paiement sur une durée convenue, occupation, héritiers et clauses à examiner avec le notaire. Étudiez votre projet.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: absoluteUrl(PATH), type: "website", locale: "fr_FR" },
};

const faqs = [
  {
    question: "Quelle différence entre vente à terme et viager ?",
    answer:
      "En vente à terme, le paiement du prix est échelonné sur une durée fixée par le contrat. En viager, la rente dépend de la durée de vie du ou des bénéficiaires. Dans les deux cas, il faut examiner séparément les droits d'occupation et les clauses de paiement.",
  },
  {
    question: "Que devient le solde si le vendeur décède avant le terme ?",
    answer:
      "Le décès du vendeur n'éteint pas la dette de prix. Les sommes restant dues sont transmises à ses héritiers et réglées selon les modalités de l'acte, par exemple par la poursuite des échéances ou un règlement du solde si le contrat le prévoit.",
  },
  {
    question: "La fin des mensualités signifie-t-elle que le logement est libre ?",
    answer:
      "Pas nécessairement. La durée du paiement et le droit d'occupation doivent être définis séparément. L'acte précise si le bien est disponible immédiatement ou si le vendeur conserve un droit, ainsi que les conditions de sa fin.",
  },
  {
    question: "Les mensualités peuvent-elles évoluer ?",
    answer:
      "Oui, le contrat peut prévoir une indexation et en préciser l'indice et les modalités. La durée convenue ne dispense donc pas d'examiner l'évolution possible des paiements et les autres dépenses du logement.",
  },
];

const comparison = [
  ["Durée des paiements", "Échéancier convenu au contrat", "Rente liée à la durée de vie du ou des bénéficiaires"],
  ["Décès du vendeur", "Le solde du prix reste dû selon l'acte", "Fin de la rente sous réserve des bénéficiaires et clauses prévus"],
  ["Occupation du logement", "À définir séparément dans l'acte", "Libre ou droits conservés par le vendeur"],
  ["Évolution des versements", "Indexation possible selon les clauses", "Indexation possible selon les clauses"],
];

export default function VenteATermeMontpellierPage() {
  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Vente à terme Montpellier", path: PATH }]),
        faqJsonLd(faqs),
      ]} />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Un paiement échelonné"
          title="Vente à terme à Montpellier"
          description="La vente à terme permet d'échelonner le paiement du prix sur une durée convenue. Vendeur et acheteur doivent aussi préciser l'occupation, les garanties et l'évolution éventuelle des échéances."
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Vente à terme Montpellier" }]}
          primaryCtaLabel="Étudier une vente à terme"
          primaryCtaHref="#projet-vente-terme"
          secondaryCtaLabel="Comparer avec le viager"
          secondaryCtaHref="#comparatif"
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading eyebrow="Comprendre le principe" title="Définir le prix, le calendrier et l'occupation" description="La discussion porte sur le montant réglé à la signature, le solde et l'échéancier. Le logement peut être libre ou faire l'objet d'un droit d'occupation conservé par le vendeur." />
            <ProcessSteps steps={[
              { title: "Étudier le logement", description: "L'évaluation du bien et le projet des parties permettent de préparer les conditions proposées, notamment lorsqu'un droit d'occupation est conservé.", icon: "search" },
              { title: "Construire l'échéancier", description: "Les parties conviennent de la part comptant, des échéances et de leur durée. Une éventuelle indexation doit être intégrée à l'étude du budget.", icon: "calculator" },
              { title: "Préciser l'acte", description: "Le notaire formalise occupation, paiements, garanties et conséquences des incidents de paiement ou du décès. Les clauses doivent être comprises avant la signature.", icon: "shield" },
            ]} />
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-text">
              Les modalités de cette vente et la distinction entre paiement
              et occupation sont présentées par le{" "}
              <a href="https://www.immobilier.notaires.fr/node/708" className="font-semibold text-primary underline underline-offset-4">portail immobilier des Notaires de France</a>.
            </p>
          </div>
        </section>

        <section id="comparatif" className="scroll-mt-28 bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading eyebrow="Comparer les mécanismes" title="Vente à terme ou rente viagère ?" description="La différence porte d'abord sur la durée du paiement. Elle ne permet pas, à elle seule, de déduire quand l'acheteur pourra disposer du logement." />
            <div className="mt-10 overflow-x-auto rounded-3xl ring-1 ring-border">
              <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                <caption className="sr-only">Différences entre la vente à terme et le viager</caption>
                <thead className="bg-secondary text-white">
                  <tr><th scope="col" className="px-5 py-4">Point à examiner</th><th scope="col" className="px-5 py-4">Vente à terme</th><th scope="col" className="px-5 py-4">Viager</th></tr>
                </thead>
                <tbody className="bg-white">
                  {comparison.map((row, index) => (
                    <tr key={row[0]} className={index % 2 === 1 ? "bg-bg-gray/60" : ""}>
                      <th scope="row" className="px-5 py-4 font-semibold text-secondary">{row[0]}</th>
                      <td className="px-5 py-4 text-text">{row[1]}</td>
                      <td className="px-5 py-4 text-text">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-text">
              Pour approfondir le calendrier et le traitement du solde en
              cas de décès, consultez les{" "}
              <a href="https://paris.notaires.fr/fr/actualites/quest-ce-quune-vente-terme" className="font-semibold text-primary underline underline-offset-4">explications de la Chambre des notaires de Paris</a>.
            </p>
            <p className="mt-6 max-w-3xl leading-relaxed text-text">
              Vous pouvez aussi comparer les caractéristiques du{" "}
              <Link href="/viager-occupe-montpellier" className="font-semibold text-primary">viager occupé</Link>{" "}
              et du{" "}
              <Link href="/viager-libre-montpellier" className="font-semibold text-primary">viager libre</Link>{" "}
              avec votre projet. Pour la valeur du logement, commencez par une{" "}
              <Link href="/estimation-viager-montpellier" className="font-semibold text-primary">demande d&apos;estimation</Link>.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
            <div>
              <SectionHeading eyebrow="Exemple pédagogique" title="Comprendre un échéancier simple" />
              <p className="mt-6 leading-relaxed text-text">
                Pour un prix hypothétique de 240 000 €, un paiement comptant
                de 60 000 € laisse un solde de 180 000 €. Réparti sur 120
                mensualités, ce solde représente 1 500 € par mois, avant
                toute indexation, intérêts éventuels, frais ou charges.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Ces chiffres illustrent uniquement un calcul. Ils ne
                constituent ni une valeur de marché à Montpellier ni une
                proposition de financement. L&apos;échéancier réel et
                l&apos;occupation doivent être étudiés avec les parties et
                le notaire.
              </p>
            </div>
            <div className="rounded-3xl bg-bg-gray p-8 ring-1 ring-border">
              <h2 className="text-2xl font-bold text-secondary">Les clauses à examiner avec le notaire</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-text">
                <li>• Montant initial, dates de paiement et modalités d&apos;indexation éventuelle.</li>
                <li>• Droits d&apos;occupation et événements qui mettent fin à ces droits.</li>
                <li>• Répartition des taxes, charges, réparations et travaux.</li>
                <li>• Garanties du paiement, clause résolutoire et procédure en cas d&apos;impayés.</li>
                <li>• Sort du solde, modalités de règlement aux héritiers et éventuel paiement anticipé.</li>
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-text">
                Le calendrier doit rester compatible avec la capacité
                financière de l&apos;acquéreur. Pour le vendeur, demandez
                une explication des garanties et de leur mise en œuvre,
                ainsi que des conséquences fiscales de votre situation.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-text">
                Les{" "}
                <a href="https://paris.notaires.fr/fr/actualites/le-paiement-du-prix" className="font-semibold text-primary underline underline-offset-4">Notaires du Grand Paris présentent les clauses de paiement du prix</a>{" "}
                à discuter avant une vente.
              </p>
            </div>
          </div>
        </section>

        <section id="projet-vente-terme" className="scroll-mt-28 bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10">
            <SectionHeading eyebrow="Vendeur ou acquéreur" title="Comparons la vente à terme avec votre projet" description="Précisez votre situation, votre souhait d'occupation et les conditions de paiement que vous envisagez. Un conseiller vous aide à préparer les points à examiner avec le notaire." />
            <MiniLeadForm title="Étudier une vente à terme" description="Laissez vos coordonnées pour échanger sur votre logement ou votre projet d'acquisition à Montpellier." subject="Projet vente à terme — Montpellier" />
          </div>
        </section>
        <FaqSection title="Questions sur la vente à terme" items={faqs} />
        <CtaBanner title="Préparer un calendrier adapté aux deux parties" description="Occupation, budget et garanties se discutent ensemble avant de retenir cette formule." primaryLabel="Parler de mon projet" primaryHref="#projet-vente-terme" secondaryLabel="Estimer mon bien" secondaryHref="/estimation-viager-montpellier" />
      </main>
      <Footer />
    </>
  );
}
