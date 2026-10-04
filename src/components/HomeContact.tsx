import Link from "next/link";
import { agency } from "@/lib/seo";
import { Icon } from "./Icon";
import { MiniLeadForm } from "./MiniLeadForm";

export function HomeContact() {
  return (
    <section id="parlons-de-votre-projet" className="scroll-mt-24 bg-secondary py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Un premier échange
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Parlons de votre projet
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-white/80">
            Vous envisagez de vendre, d&apos;acheter ou vous souhaitez connaître
            les possibilités pour votre logement ? Laissez vos coordonnées :
            un conseiller vous recontacte sous 48 h ouvrées, sans engagement.
          </p>
          <a
            href={`tel:${agency.telephone}`}
            className="mt-7 inline-flex items-center gap-3 text-xl font-bold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Icon name="phone" className="h-5 w-5 text-primary" />
            {agency.telephoneDisplay}
          </a>
          <div className="mt-7">
            <Link
              href="/estimation-viager-montpellier"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Préparer une demande d&apos;estimation
              <Icon name="arrowRight" className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
        <MiniLeadForm
          title="Être rappelé par un conseiller"
          description="Vos coordonnées suffisent pour organiser un premier échange sur votre projet."
          subject="Demande de rappel depuis l'accueil — Viager Montpellier"
        />
      </div>
    </section>
  );
}
