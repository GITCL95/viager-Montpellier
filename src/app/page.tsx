import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeContent } from "@/components/HomeContent";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { Properties } from "@/components/Properties";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Partners } from "@/components/Partners";
import { Faq } from "@/components/Faq";
import { Blog } from "@/components/Blog";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/site-data";
import {
  SITE_URL,
  agency,
  faqJsonLd,
  realEstateAgentJsonLd,
} from "@/lib/seo";

const CHAPO =
  "Vous voulez vendre votre logement en viager sans quitter Montpellier ? Ou acheter un bien décoté dans la métropole ? Notre agence vous suit du premier rendez-vous jusqu'à la signature chez le notaire. Estimation gratuite, calculs transparents, aucun engagement.";

export default function Home() {
  return (
    <>
      <link rel="canonical" href={`${SITE_URL}/`} />
      <JsonLd
        data={{
          ...realEstateAgentJsonLd({
            path: "/",
            areaServed: ["Montpellier", "Hérault", "Gard"],
            description: CHAPO,
          }),
          email: agency.email,
        }}
      />
      {"\n"}
      <JsonLd data={faqJsonLd(faqs)} />
      <Header />
      <main className="flex-1">
        <Hero />
        <HomeContent />
        <About />
        <Services />
        <WhyChoose />
        <Properties />
        <Team />
        <Testimonials />
        <Partners />
        <Faq />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
