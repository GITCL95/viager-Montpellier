import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import {
  HomeFormulas,
  HomeSectors,
  HomeUnderstanding,
  homeFaqs,
} from "@/components/HomeContent";
import { Faq } from "@/components/Faq";
import { HomeContact } from "@/components/HomeContact";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import {
  absoluteUrl,
  agency,
  faqJsonLd,
  realEstateAgentJsonLd,
} from "@/lib/seo";

const TITLE = "Agence viager Montpellier | Patrimoine Cardinal";
const DESCRIPTION =
  "Votre agence viager à Montpellier : choisissez votre parcours vendeur ou acheteur, découvrez les formules et demandez une estimation gratuite.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/"),
    siteName: agency.name,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: absoluteUrl("/images/hero-home.png"),
        alt: "Viager Montpellier by Patrimoine Cardinal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [absoluteUrl("/images/hero-home.png")],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          ...realEstateAgentJsonLd({
            path: "/",
            areaServed: ["Montpellier", "Hérault", "Gard"],
            description: DESCRIPTION,
          }),
          email: agency.email,
        }}
      />
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <HomeFormulas />
        <HomeSectors />
        <HomeUnderstanding />
        <Faq items={homeFaqs} />
        <HomeContact />
      </main>
      <Footer />
    </>
  );
}
