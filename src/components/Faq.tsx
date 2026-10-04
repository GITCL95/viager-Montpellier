import Link from "next/link";
import type { ReactNode } from "react";
import type { FaqItem } from "@/lib/seo";
import { Icon } from "./Icon";

export function Faq({
  items,
  title,
  description = "Quelques repères pour commencer. Votre situation mérite un échange personnalisé avec notre équipe.",
  id = "faq",
  accordionName = "home-faq",
}: {
  items: FaqItem[];
  title?: ReactNode;
  description?: string;
  id?: string;
  accordionName?: string;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-24 bg-[#f7f7f5] py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.4fr] lg:gap-12 lg:px-10 xl:gap-16">
        <div className="flex flex-col">
          <div>
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
              <span aria-hidden="true" className="h-0.5 w-7 bg-primary" />
              Questions fréquentes
            </span>
            <h2
              id={headingId}
              className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-secondary sm:text-5xl xl:text-[56px]"
            >
              {title ?? (
                <>
                  <span className="block">Vos premières</span>
                  <span className="block">questions sur</span>
                  <span className="block">
                    le viager<span className="text-primary">.</span>
                  </span>
                </>
              )}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-text sm:text-lg">
              {description}
            </p>
          </div>

          <div className="mt-9 border-t border-border pt-7 lg:mt-auto lg:pt-8">
            <p className="text-base font-semibold text-secondary">
              Vous avez une autre question ?
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-14 items-center justify-center gap-4 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none sm:text-base"
            >
              Parlons de votre projet
              <Icon name="arrowRight" className="h-5 w-5 shrink-0" />
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          {items.map((item, index) => (
            <details
              key={item.question}
              name={accordionName}
              open={index === 0}
              className="group border-b border-border open:rounded-2xl open:border-transparent open:bg-secondary"
            >
              <summary className="grid cursor-pointer list-none grid-cols-[36px_minmax(0,1fr)_36px] items-center gap-3 px-4 py-6 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-secondary group-open:focus-visible:outline-primary sm:grid-cols-[44px_minmax(0,1fr)_40px] sm:gap-5 sm:px-7 sm:py-7 [&::-webkit-details-marker]:hidden">
                <span
                  aria-hidden="true"
                  className="border-r border-border py-1 pr-3 text-base font-medium tabular-nums text-text/60 group-open:border-white/20 group-open:text-primary sm:pr-4 sm:text-lg"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold leading-snug tracking-tight text-secondary group-open:text-white sm:text-xl xl:text-2xl">
                  {item.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary group-open:bg-primary group-open:text-white sm:h-10 sm:w-10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    className="h-5 w-5"
                    focusable="false"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" className="group-open:hidden" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-7 sm:pl-[92px] sm:pr-7">
                <p className="text-base leading-relaxed text-white/80">
                  {item.answer}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-5 block h-0.5 w-10 bg-primary"
                />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
