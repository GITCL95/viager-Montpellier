import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
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
