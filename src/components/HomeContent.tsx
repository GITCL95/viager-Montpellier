import type { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

function Section({
  bg,
  title,
  children,
}: {
  bg: "white" | "gray";
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      className={
        bg === "white" ? "bg-white py-20 lg:py-28" : "bg-bg-gray py-20 lg:py-28"
      }
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-secondary sm:text-4xl">{title}</h2>
        <div className="mt-6 max-w-3xl space-y-4">{children}</div>
      </div>
    </section>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-text">{children}</p>;
}

function ContentLink({
  href,
  children,
  pending,
}: {
  href: string;
  children: ReactNode;
  pending?: boolean;
}) {
  const link = (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
    >
      {children}
      <Icon name="arrowRight" className="h-4 w-4" />
    </Link>
  );

  if (!pending) return <p className="pt-2">{link}</p>;

  return (
    <p className="pt-2">
      {/* page à créer */}
      {link}
    </p>
  );
}

const communes = [
  {
    href: "/viager-herault",
    label: "Viager dans l'Hérault",
    text: "tout le département",
  },
  {
    href: "/viager-sete",
    label: "Viager à Sète",
    text: "le littoral et l'étang de Thau",
  },
  {
    href: "/viager-beziers",
    label: "Viager à Béziers",
    text: "le Biterrois",
  },
  {
    href: "/viager-nimes",
    label: "Viager à Nîmes",
    text: "le Gard",
  },
];

export function HomeContent() {
  return (
    <>
      <Section bg="white" title="Le viager à Montpellier, comment ça marche">
        <Paragraph>
          Le viager est une vente immobilière classique, avec un paiement
          étalé. L&apos;acheteur verse au vendeur un capital de départ, le
          bouquet, puis une rente tous les mois jusqu&apos;au décès du vendeur.
          En échange, le vendeur peut souvent rester chez lui.
        </Paragraph>
        <Paragraph>
          Trois éléments fixent le prix : la valeur du bien, l&apos;âge du
          vendeur et le fait qu&apos;il occupe ou non le logement. Plus le
          vendeur est âgé, plus la rente monte. S&apos;il reste dans les lieux,
          le prix baisse d&apos;une décote d&apos;occupation.
        </Paragraph>
        <Paragraph>
          À Montpellier, le mètre carré tourne autour de 3 400 € pour un
          appartement et 4 100 € pour une maison au deuxième semestre 2026. Le
          marché s&apos;est stabilisé après deux années de légère baisse, porté
          par la croissance de la ville et la demande étudiante. Pour un
          vendeur senior, c&apos;est un contexte favorable : la demande
          d&apos;acquéreurs en viager reste forte sur la métropole, en
          particulier sur les petites surfaces proches des facultés et les
          maisons de l&apos;ouest montpelliérain.
        </Paragraph>
      </Section>

      <Section bg="gray" title="Vendre en viager à Montpellier">
        <Paragraph>
          Vendre en viager transforme votre logement en revenus, sans
          déménager. Vous touchez le bouquet à la signature, puis une rente
          chaque mois, indexée. Vous gardez l&apos;usage de votre bien et vous
          n&apos;avez plus à supporter les gros travaux ni la taxe foncière :
          ils passent à l&apos;acheteur.
        </Paragraph>
        <Paragraph>
          C&apos;est une solution pour un propriétaire qui a un patrimoine mais
          peu de trésorerie. Elle demande une vraie réflexion familiale : nous
          en parlons toujours avec vous, et avec vos enfants si vous le
          souhaitez.
        </Paragraph>
        <ContentLink href="/vendre-en-viager-montpellier" pending>
          vendre en viager à Montpellier
        </ContentLink>
      </Section>

      <Section bg="white" title="Acheter en viager à Montpellier">
        <Paragraph>
          Acheter en viager, c&apos;est acquérir un bien en dessous de sa
          valeur, sans crédit bancaire lourd. La décote d&apos;occupation peut
          atteindre 30 à 50 % selon l&apos;âge du vendeur. Vous étalez le
          paiement sur la durée, et vous ne gérez aucun locataire.
        </Paragraph>
        <Paragraph>
          C&apos;est un placement de long terme, avec une part d&apos;aléa
          qu&apos;il faut accepter. Nous sélectionnons les dossiers et nous
          vous donnons les chiffres avant que vous vous engagiez.
        </Paragraph>
        <ContentLink href="/acheter-en-viager-montpellier" pending>
          acheter en viager à Montpellier
        </ContentLink>
      </Section>

      <Section bg="gray" title="Le viager occupé à Montpellier">
        <Paragraph>
          C&apos;est la formule la plus courante. Vous vendez, mais vous restez
          chez vous jusqu&apos;à la fin. L&apos;acheteur ne récupère le
          logement qu&apos;à votre décès, ce qui justifie une décote sur le
          prix. Vous percevez un bouquet plus une rente, et vous gardez vos
          habitudes, votre quartier, vos voisins.
        </Paragraph>
        <ContentLink href="/viager-occupe-montpellier">
          viager occupé à Montpellier
        </ContentLink>
      </Section>

      <Section bg="white" title="Le viager libre à Montpellier">
        <Paragraph>
          Ici, le vendeur libère le logement dès la vente. L&apos;acheteur peut
          y habiter ou le louer immédiatement. Pas de décote d&apos;occupation,
          donc un prix plus élevé, mais un rendement tout de suite. À
          Montpellier, cette formule concerne souvent des biens déjà vides : un
          logement locatif, ou celui d&apos;un propriétaire parti en résidence
          ou chez ses proches.
        </Paragraph>
        <ContentLink href="/viager-libre-montpellier">
          viager libre à Montpellier
        </ContentLink>
      </Section>

      <Section bg="gray" title="La vente à terme à Montpellier">
        <Paragraph>
          La vente à terme ressemble au viager, avec une différence : la durée
          est fixée à l&apos;avance. Vous recevez un capital, puis des
          mensualités sur une période convenue, dix ans par exemple. Aucun aléa
          sur la durée de vie. C&apos;est souvent la bonne formule quand le
          vendeur est encore jeune, ou quand la famille veut un cadre précis.
        </Paragraph>
        <ContentLink href="/vente-a-terme-montpellier" pending>
          vente à terme à Montpellier
        </ContentLink>
      </Section>

      <Section bg="white" title="Estimer votre bien en viager à Montpellier">
        <Paragraph>
          Avant tout, il faut un chiffre. Nous estimons gratuitement votre bien
          et nous vous montrons ce que donnerait la vente : bouquet, rente, et
          ce qu&apos;il reste à votre charge. L&apos;estimation prend en compte
          la valeur de marché de votre quartier, votre âge et le mode
          d&apos;occupation choisi. Réponse sous 48 heures, sans frais ni
          engagement.
        </Paragraph>
        <ContentLink href="/estimation-viager-montpellier" pending>
          estimation viager à Montpellier
        </ContentLink>
      </Section>

      <Section
        bg="gray"
        title="Le rôle du notaire dans une vente en viager à Montpellier"
      >
        <Paragraph>
          Une vente en viager passe obligatoirement par un acte notarié. Le
          notaire vérifie les calculs, rédige les clauses qui vous protègent et
          publie la vente. Deux clauses comptent : le privilège du vendeur et
          la clause résolutoire. Si l&apos;acheteur cesse de payer la rente,
          elles vous permettent de récupérer votre bien, en conservant ce qui a
          déjà été versé.
        </Paragraph>
        <Paragraph>
          Nous travaillons avec des notaires de l&apos;Hérault habitués au
          viager, et nous préparons le dossier avec eux avant le rendez-vous de
          signature.
        </Paragraph>
      </Section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
            Montpellier et les communes que nous couvrons
          </h2>
          <div className="mt-6 max-w-3xl space-y-4">
            <Paragraph>
              Nous intervenons sur Montpellier et toute sa métropole :
              Castelnau-le-Lez, Lattes, Juvignac, Pérols, Saint-Jean-de-Védas,
              Clapiers, Jacou et Mauguio. Nous connaissons les écarts de prix
              d&apos;un quartier à l&apos;autre, de l&apos;Écusson à Port
              Marianne, de la Croix d&apos;Argent aux Hôpitaux-Facultés. Un
              même bien ne se valorise pas de la même façon selon la rue.
            </Paragraph>
            <Paragraph>
              Nous couvrons aussi le reste du département et le littoral.
            </Paragraph>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {communes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-3xl bg-bg-gray p-6 ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="mapPin" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-secondary">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text">
                  {item.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {item.label}
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
