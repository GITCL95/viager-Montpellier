import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Stat = { value: string; label: string };
type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  stats,
  breadcrumbs,
  primaryCtaLabel = "Estimation gratuite",
  primaryCtaHref = "/#contact",
  secondaryCtaLabel,
  secondaryCtaHref,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  stats?: Stat[];
  breadcrumbs?: Crumb[];
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/50"
          >
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="transition-colors hover:text-white"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[48px] lg:leading-[1.15]">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={primaryCtaHref}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark"
          >
            {primaryCtaLabel}
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
          {secondaryCtaLabel && secondaryCtaHref && (
            <a
              href={secondaryCtaHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {secondaryCtaLabel}
            </a>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
