import Link from "next/link";
import { nav, projectLinks, formulaLinks, sectorLinks } from "@/lib/site-data";
import { agency } from "@/lib/seo";
import { Icon } from "./Icon";

const footerLinkClass =
  "rounded-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none";

const socialLinks = [
  { icon: "facebook", label: "Facebook", href: "#" },
  { icon: "instagram", label: "Instagram", href: "#" },
  { icon: "linkedin", label: "LinkedIn", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#06232f] pt-14 text-[#b6cbd4] lg:pt-10">
      <div className="mx-auto grid max-w-7xl gap-y-8 px-6 pb-8 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_0.85fr_1.2fr] lg:gap-y-0 lg:px-10">
        <div className="min-w-0 sm:pr-8">
          <Link
            href="/"
            aria-label="Viager Montpellier — Accueil"
            className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Icon name="crown" className="h-12 w-12 shrink-0 text-primary" />
            <span className="flex min-w-0 flex-col">
              <span className="text-2xl font-bold uppercase leading-[1.05] tracking-tight text-white">
                Viager
              </span>
              <span className="mt-1 text-2xl font-bold uppercase leading-[1.05] tracking-tight text-primary">
                Montpellier
              </span>
              <span className="mt-2 text-[9px] font-medium uppercase tracking-[0.14em] text-white/85">
                by Patrimoine Cardinal
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Votre agence de confiance pour vendre ou acheter un bien en
            viager à Montpellier et dans sa métropole.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/65 text-white transition-colors hover:border-primary hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
                aria-label={social.label}
              >
                <Icon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="min-w-0 border-t border-[#456779]/45 pt-8 sm:border-l sm:border-t-0 sm:px-8 sm:pt-0">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Votre projet
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed">
            {[...projectLinks, ...formulaLinks].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={footerLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 border-t border-[#456779]/45 pt-8 sm:pr-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Nos secteurs
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed">
            {sectorLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={footerLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 border-t border-[#456779]/45 pt-8 sm:border-l sm:pl-8 lg:border-t-0 lg:pt-0">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-5 space-y-5 text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <Icon name="mapPin" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <address className="min-w-0 not-italic">
                {agency.street}
                <br />
                {agency.postalCode} {agency.locality}
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-primary" />
              <a href={`tel:${agency.telephone}`} className={footerLinkClass}>
                {agency.telephoneDisplay}
              </a>
            </li>
            <li className="flex min-w-0 items-start gap-3">
              <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <a
                href={`mailto:${agency.email}`}
                className={`min-w-0 break-all ${footerLinkClass}`}
              >
                {agency.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-5 border-t border-[#456779]/45 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>Viager Montpellier — Patrimoine Cardinal</p>
          <nav aria-label="Navigation de pied de page">
            <ul className="flex items-center divide-x divide-[#456779]/70">
              {nav.map((item, index) => (
                <li
                  key={item.href}
                  className={index === 0 ? "pr-5" : "pl-5"}
                >
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
