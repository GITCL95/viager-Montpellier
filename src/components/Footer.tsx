import { nav, sectorLinks } from "@/lib/site-data";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const legal = ["Mentions légales", "Politique de confidentialité", "CGU"];

export function Footer() {
  return (
    <footer className="bg-[#0a1e28] pt-16 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo variant="onDark" size="lg" />
          <p className="mt-5 text-sm leading-relaxed">
            Votre agence de confiance pour vendre ou acheter un bien en
            viager à Montpellier et dans sa métropole.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {(["facebook", "instagram", "linkedin"] as const).map((social) => (
              <a
                key={social}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary"
                aria-label={social}
              >
                <Icon name={social} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Navigation
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Nos services
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {sectorLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              12 Rue de la République, 34000 Montpellier
            </li>
            <li className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-primary" />
              04 67 00 00 00
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-primary" />
              contact@viager-montpellier.fr
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/40 sm:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()} Viager Montpellier by Patrimoine
            Cardinal. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            {legal.map((item) => (
              <a key={item} href="#" className="transition-colors hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
