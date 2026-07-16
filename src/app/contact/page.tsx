import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import {
  absoluteUrl,
  agency,
  breadcrumbJsonLd,
  realEstateAgentJsonLd,
} from "@/lib/seo";

const PATH = "/contact";
const TITLE = "Contact | Viager Montpellier by Patrimoine Cardinal";
const DESCRIPTION =
  "Contactez notre agence viager à Montpellier : demandez votre estimation gratuite, posez vos questions, un conseiller vous répond sous 48 h.";

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

const mapQuery = encodeURIComponent(
  `${agency.street}, ${agency.postalCode} ${agency.locality}`
);

export default function ContactPage() {
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
            { name: "Contact", path: PATH },
          ]),
        ]}
      />

      <Header />

      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="Contactez notre agence viager à Montpellier"
          description="Un conseiller étudie votre demande et vous répond sous 48 h, sans engagement : estimation de bouquet et de rente, question sur le fonctionnement du viager ou prise de rendez-vous."
          breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
          stats={[
            { value: "48h", label: "délai moyen de réponse à toute demande" },
            { value: "0 €", label: "coût de l'estimation, sans engagement" },
            { value: "100%", label: "confidentiel et sans obligation" },
          ]}
        />

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <SectionHeading
                  eyebrow="Formulaire de contact"
                  title="Parlez-nous de votre projet"
                  description="Que vous souhaitiez vendre, acheter ou simplement comprendre le fonctionnement du viager, décrivez-nous votre situation : nous vous recontactons rapidement."
                />
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="rounded-3xl bg-bg-gray p-6 ring-1 ring-border">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary">
                    Nos coordonnées
                  </h3>
                  <ul className="mt-5 space-y-4 text-sm text-text">
                    <li className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon name="mapPin" className="h-4 w-4" />
                      </span>
                      <span>
                        {agency.street}
                        <br />
                        {agency.postalCode} {agency.locality}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon name="phone" className="h-4 w-4" />
                      </span>
                      <a
                        href="tel:+33467000000"
                        className="font-semibold text-secondary transition-colors hover:text-primary"
                      >
                        04 67 00 00 00
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon name="mail" className="h-4 w-4" />
                      </span>
                      <a
                        href="mailto:contact@viager-montpellier.fr"
                        className="font-semibold text-secondary transition-colors hover:text-primary"
                      >
                        contact@viager-montpellier.fr
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon name="clock" className="h-4 w-4" />
                      </span>
                      <span>
                        Lundi – Vendredi : 9h – 18h30
                        <br />
                        Samedi : sur rendez-vous
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-border">
                  <iframe
                    title="Localisation de notre agence viager à Montpellier"
                    src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Étapes suivantes"
              title="Comment se déroule votre demande ?"
              align="center"
            />

            <ProcessSteps
              steps={[
                {
                  icon: "mail",
                  title: "Vous nous écrivez",
                  description:
                    "Vous décrivez votre projet via le formulaire ou par téléphone : vente, achat ou simple question sur le viager.",
                },
                {
                  icon: "phone",
                  title: "Nous vous rappelons sous 48 h",
                  description:
                    "Un conseiller dédié échange avec vous pour comprendre votre situation et répondre à vos premières questions.",
                },
                {
                  icon: "key",
                  title: "Rendez-vous et estimation",
                  description:
                    "Si besoin, une visite est organisée pour établir une estimation chiffrée de votre bouquet et de votre rente, sans engagement.",
                },
              ]}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
