import Link from "next/link";
import { agency } from "@/lib/seo";
import { Icon } from "./Icon";
import { MiniLeadForm } from "./MiniLeadForm";

export function HomeContact() {
  return (
    <section
      id="parlons-de-votre-projet"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-[#0b3545] py-16 lg:pb-8"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12 xl:gap-16">
          <div>
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
              <span aria-hidden="true" className="h-0.5 w-8 bg-primary" />
              Un premier échange
            </span>
            <h2
              id="contact-heading"
              className="mt-5 text-5xl font-bold leading-[1.03] tracking-[-0.04em] text-white sm:text-[64px] lg:text-[68px] xl:text-[104px]"
            >
              <span className="block">Parlons de</span>
              <span className="block">
                votre projet<span className="text-primary">.</span>
              </span>
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Vous envisagez de vendre, d&apos;acheter ou vous souhaitez connaître
              les possibilités pour votre logement ? Laissez vos coordonnées :
              un conseiller vous recontacte sous 48 h ouvrées, sans engagement.
            </p>
            <p className="mt-6 text-sm text-white/75 sm:text-base">
              Vous préférez nous appeler ?
            </p>
            <a
              href={`tel:${agency.telephone}`}
              className="mt-2 inline-flex items-center gap-3 text-3xl font-bold tracking-tight text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:gap-4 sm:text-4xl"
            >
              <Icon name="phone" className="h-7 w-7 shrink-0 text-primary" />
              {agency.telephoneDisplay}
            </a>
            <div className="mt-5">
              <Link
                href="/estimation-viager-montpellier"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Préparer une demande d&apos;estimation
                <Icon name="arrowRight" className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-14">
          <MiniLeadForm
            layout="wide"
            title="Être rappelé par un conseiller"
            description="Vos coordonnées suffisent pour organiser un premier échange sur votre projet."
            subject="Demande de rappel depuis l'accueil — Viager Montpellier"
          />
        </div>
      </div>
    </section>
  );
}
