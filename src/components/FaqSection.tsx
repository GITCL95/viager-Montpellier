import { Icon } from "./Icon";
import type { FaqItem } from "@/lib/seo";

export function FaqSection({
  eyebrow = "Questions fréquentes",
  title,
  description,
  items,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FaqItem[];
  id?: string;
}) {
  return (
    <section id={id} className="bg-bg-gray py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-4 text-text">{description}</p>}
        </div>

        <div className="mt-10 space-y-3">
          {items.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="group overflow-hidden rounded-2xl bg-white ring-1 ring-border"
              >
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-secondary [&::-webkit-details-marker]:hidden"
                >
                  <h3 className="text-sm font-semibold text-secondary">
                    {item.question}
                  </h3>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-180 motion-reduce:transition-none"
                  >
                    <Icon name="chevronDown" className="h-4 w-4" />
                  </span>
                </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-text">
                    {item.answer}
                  </p>
              </details>
          ))}
        </div>
      </div>
    </section>
  );
}
