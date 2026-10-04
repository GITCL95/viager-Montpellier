import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import { SectionButton } from "@/components/SectionButton";
import { SellerWatermark } from "@/components/SellerWatermark";
import { ViagerSimulator } from "@/components/ViagerSimulator";
import { absoluteUrl, agency, breadcrumbJsonLd, faqJsonLd, realEstateAgentJsonLd } from "@/lib/seo";

const PATH = "/estimation-viager-montpellier";
const TITLE = "Estimation viager Montpellier : simulateur bouquet et rente";
const DESCRIPTION = `Estimation viager à Montpellier : simulez bouquet et rente, puis faites étudier votre bien avec Patrimoine Cardinal. Appelez le ${agency.telephoneDisplay}.`;
export const metadata: Metadata = {
  title: TITLE, description: DESCRIPTION, alternates: { canonical: PATH },
    openGraph: { title: TITLE, description: DESCRIPTION, url: absoluteUrl(PATH), type: "website", locale: "fr_FR", siteName: agency.name, images: [{ url: absoluteUrl("/images/agency-montpellier.webp"), alt: "Un logement à Montpellier pour préparer une estimation viager" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [absoluteUrl("/images/agency-montpellier.webp")] },
};

const faqs = [
  { question: "Quelle différence entre simulation et estimation viager ?", answer: "La simulation calcule des montants indicatifs à partir de la valeur du bien que vous renseignez et d'hypothèses actuarielle et locative. L'estimation personnalisée vérifie cette valeur immobilière, votre situation et les droits à conserver pour préparer des conditions adaptées à votre vente." },
  { question: "Comment est calculée la décote du viager occupé ?", answer: "Le simulateur valorise l'occupation à partir d'une valeur locative annuelle, de la table de mortalité et du taux d'actualisation choisis. Cette approche économique fournit une hypothèse. Le droit d'usage et d'habitation ou l'usufruit conservé et les conditions du contrat doivent être examinés pour une étude personnalisée." },
  { question: "Faut-il obligatoirement un bouquet de 30 % ?", answer: "Non. Le curseur commence à 30 % de la base de calcul pour vous permettre de comparer les répartitions. Le bouquet est facultatif et se négocie avec la rente. Vous pouvez modifier sa part et observer l'effet sur la rente mensuelle simulée." },
  { question: "Puis-je simuler un viager sur deux personnes ?", answer: "Oui. Renseignez l'âge et la table de mortalité de chaque personne. Le calcul retient le dernier survivant, avec une hypothèse d'indépendance des durées de vie. Les bénéficiaires, la réversion de la rente et les droits d'occupation doivent ensuite être définis dans le contrat." },
  { question: "La simulation inclut-elle les frais et l'indexation ?", answer: "Non. Les montants affichés correspondent au bouquet et à une rente mensuelle initiale. Ils n'incluent pas les frais d'acquisition, les honoraires éventuels, les charges, les travaux ni l'évolution de la rente en cas d'indexation. Ces postes sont à examiner séparément avec le conseiller et le notaire." },
];
const container = "mx-auto max-w-[1200px] px-6 lg:px-10";
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.16em] text-text";
const heading = "text-3xl font-semibold leading-[1.2] tracking-tight text-secondary sm:text-4xl";
const textLink = "inline-flex items-center gap-3 rounded-sm text-sm font-semibold text-secondary underline decoration-primary/50 underline-offset-8 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function EstimationViagerMontpellierPage() {
  return <>
    <JsonLd data={[
      realEstateAgentJsonLd({ path: PATH, areaServed: "Montpellier", description: DESCRIPTION }),
      breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Estimation viager Montpellier", path: PATH }]), faqJsonLd(faqs),
    ]} />
    <Header />
    <main className="flex-1">
      <section aria-labelledby="estimation-heading" className="relative isolate overflow-hidden bg-secondary">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-80"><Image src="/images/hero-background-montpellier.webp" alt="" fill preload sizes="100vw" className="object-cover object-[65%_center] lg:object-center" /></div>
        <div className={`${container} pb-12 pt-6 lg:pb-16 lg:pt-7`}>
          <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[11px] text-white/65"><Link href="/" className="rounded-sm hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link><span aria-hidden="true" className="text-white/35">/</span><span aria-current="page">Estimation viager Montpellier</span></nav>
          <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16 xl:gap-20">
            <div className="min-w-0 lg:pt-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70"><span className="mr-3 text-primary">—</span>Mettre des chiffres sur votre projet</p>
              <h1 id="estimation-heading" className="mt-5 text-[38px] font-semibold leading-[1.13] tracking-tight text-white sm:text-5xl xl:text-[54px]">Estimation viager<br /><span className="font-serif font-normal italic">à Montpellier.</span></h1>
              <p className="mt-6 max-w-md text-base leading-[1.8] text-white/80 sm:text-lg">Quel capital au départ ? Quel revenu ensuite ? Explorez une première répartition entre bouquet et rente, puis faisons le point sur votre logement.</p>
              <div className="mt-8 flex items-start gap-4 border-t border-white/20 pt-6"><span aria-hidden="true" className="font-serif text-4xl text-primary">€</span><p className="max-w-xs text-sm leading-[1.8] text-white/75">Un calcul immédiat pour comparer.<br />Un conseiller pour préciser votre estimation.</p></div>
              <a href={`tel:${agency.telephone}`} className="mt-7 inline-flex items-center gap-3 rounded-sm text-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Icon name="phone" className="h-4 w-4 text-primary" />{agency.telephoneDisplay}</a>
            </div>
            <ViagerSimulator />
          </div>
        </div>
      </section>

      <section aria-labelledby="estimation-balance-heading" className="bg-white py-16 lg:py-24">
        <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.25fr] lg:items-start lg:gap-20`}>
          <div><p className={eyebrow}><span className="mr-3 text-primary">01</span>Lire votre simulation</p><h2 id="estimation-balance-heading" className={`mt-5 ${heading}`}>Un même bien.<br /><span className="font-serif font-normal italic">Plusieurs équilibres.</span></h2><p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Le bouquet et la rente se lisent ensemble. Augmenter le capital versé à la signature réduit la part convertie en revenu régulier.</p><SectionButton sectionId="simulateur-viager" className={`mt-7 ${textLink}`}>Comparer les répartitions<Icon name="arrowRight" className="h-4 w-4" /></SectionButton></div>
          <div className="divide-y divide-border border-t border-border">
            {[
              { label: "Le point de départ", title: "La valeur immobilière du logement", text: "Quartier, surface, état, étage, extérieur ou copropriété : une valeur saisie dans un simulateur ne remplace pas une évaluation de votre bien à Montpellier." },
              { label: "Les droits conservés", title: "Libre ou occupé, la base change", text: "Si vous restez dans le logement, l'occupation est valorisée et déduite dans cette simulation. Le droit conservé et ses modalités doivent ensuite être précisés." },
              { label: "Votre choix de paiement", title: "Du capital aujourd'hui, des revenus ensuite", text: "Vos besoins guident le choix du bouquet et de la rente. L'âge du ou des vendeurs et les hypothèses de calcul interviennent dans les montants simulés." },
            ].map(item => <div key={item.title} className="py-6 first:pt-0"><p className="pt-5 text-[11px] text-text">{item.label}</p><h3 className="mt-2 text-xl font-semibold text-secondary">{item.title}</h3><p className="mt-3 text-sm leading-[1.8] text-text sm:text-base">{item.text}</p></div>)}
          </div>
        </div>
      </section>

      <section aria-labelledby="estimation-study-heading" className="relative isolate overflow-hidden bg-secondary py-16 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-32 -z-10 w-[620px] text-white opacity-[0.09] lg:-right-12 lg:w-[760px]"><SellerWatermark className="h-auto w-full" /></div>
        <div className={container}>
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16"><div><p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65"><span className="mr-3 text-primary">02</span>Affiner avec l&apos;agence</p><h2 id="estimation-study-heading" className="mt-5 text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl">Des chiffres indicatifs<br />à une étude de votre bien.</h2></div><p className="max-w-sm text-base leading-[1.8] text-white/75">Nous relions les hypothèses de calcul à votre logement et à ce que vous souhaitez préparer.</p></div>
          <ol className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-3 lg:gap-10">{[
            { title: "Situer votre logement", text: "Une adresse, une surface et les particularités du bien. Un échange puis, si nécessaire, une visite permettent de vérifier sa valeur immobilière." },
            { title: "Préciser votre situation", text: "Votre souhait de rester ou de partir, la place d'un conjoint, vos besoins de capital et de revenus : ces éléments donnent un sens aux montants." },
            { title: "Expliquer les conditions", text: "Nous comparons les répartitions possibles. Droits d'occupation, charges, indexation et garanties seront précisés avec le notaire avant la signature." },
          ].map((item, index) => <li key={item.title} className="relative border-t border-white/20 pt-7"><span aria-hidden="true" className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-primary" /><span className="text-xs font-medium text-primary">0{index + 1}</span><h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3><p className="mt-4 text-sm leading-[1.8] text-white/75">{item.text}</p></li>)}</ol>
        </div>
      </section>

      <section id="demande-estimation" aria-labelledby="estimation-contact-heading" className="scroll-mt-28 bg-white py-16 lg:py-24">
        <div className={`${container} grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-16 xl:gap-24`}>
          <div><p className={eyebrow}><span className="mr-3 text-primary">03</span>Passer à votre estimation</p><h2 id="estimation-contact-heading" className={`mt-5 ${heading}`}>Votre logement mérite<br /><span className="font-serif font-normal italic">une étude à lui.</span></h2><p className="mt-5 max-w-lg text-base leading-[1.8] text-text">Un appartement dans l&apos;Écusson, un logement à Port Marianne, une maison dans la métropole : parlons de votre bien et des possibilités que vous souhaitez étudier.</p><p className="mt-4 max-w-lg text-sm leading-[1.8] text-text">Pour le premier échange, une description suffit. Gardez votre simulation comme repère ; nous reprendrons les informations du logement et les conditions de votre projet avec vous.</p><Link href="/vendre-en-viager-montpellier" className={`mt-7 ${textLink}`}>Préparer les étapes de ma vente<Icon name="arrowRight" className="h-4 w-4" /></Link></div>
          <MiniLeadForm appearance="hero" title="Faisons le point sur votre bien" description="Laissez vos coordonnées pour un premier échange et une estimation personnalisée, gratuite et sans engagement." subject="Demande d'estimation viager — Montpellier" submitLabel="Être rappelé pour mon estimation" />
        </div>
      </section>

      <section aria-labelledby="estimation-faq-heading" className="bg-white">
        <div className={`${container} grid gap-10 border-t border-border py-16 lg:grid-cols-[0.8fr_1.25fr] lg:gap-20 lg:py-24`}>
          <div><p className={eyebrow}><span className="mr-3 text-primary">04</span>Comprendre avant de choisir</p><h2 id="estimation-faq-heading" className={`mt-5 ${heading}`}>Vos questions<br />sur les montants.</h2><p className="mt-5 max-w-sm text-base leading-[1.8] text-text">Une simulation éclaire les possibilités. L&apos;étude personnalisée précise les hypothèses adaptées à votre vente.</p></div>
          <div><div className="border-t border-border">{faqs.map(item => <details key={item.question} name="estimation-questions" className="group border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden"><h3 className="text-base font-medium leading-relaxed text-secondary sm:text-lg">{item.question}</h3><span aria-hidden="true" className="relative h-5 w-5 shrink-0 text-primary"><span className="absolute inset-x-0 top-1/2 h-px bg-current" /><span className="absolute inset-y-0 left-1/2 w-px bg-current group-open:hidden" /></span></summary><p className="max-w-xl pb-6 pr-6 text-sm leading-[1.9] text-text sm:text-base">{item.answer}</p></details>)}</div>
            <details className="mt-6 text-xs leading-[1.8] text-text"><summary className="cursor-pointer rounded-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-primary">Méthode et références du simulateur</summary><p className="mt-3">Le calcul reprend la méthode et la table de mortalité intégrées au <a href="https://www.auguste-viager.com/calcul-viager/simulateur/" className="underline underline-offset-4 hover:text-secondary">simulateur Auguste Viager</a>. Il actualise des probabilités annuelles de survie pour convertir le capital en rente. Pour deux personnes, il suppose des durées de vie indépendantes et retient le dernier survivant. La table utilisée s&apos;arrête à 104 ans ; cette borne constitue une limite du calcul. Le millésime de la table n&apos;a pas pu être établi. L&apos;annuité est calculée avec des versements annuels anticipés, puis divisée par douze pour donner une rente mensuelle indicative.</p><p className="mt-3">L&apos;occupation est estimée par une approche économique fondée sur la valeur locative, sans application d&apos;un barème fiscal. Consultez aussi les <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F2762" className="underline underline-offset-4 hover:text-secondary">repères de Service Public sur la vente en viager</a>.</p></details>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
