import Image from "next/image";
import type { FaqItem } from "@/lib/seo";
import { Icon } from "./Icon";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1758686253677-d3af6c15186e?auto=format&fit=crop&w=900&q=80"
              alt="Couple de seniors souriants"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Questions fréquentes
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            Vos premières questions sur le viager
          </h2>
          <p className="mt-4 leading-relaxed text-text">
            Quelques repères pour commencer. Votre situation mérite un échange
            personnalisé avec notre équipe.
          </p>

          <div className="mt-8 space-y-3">
            {items.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="group overflow-hidden rounded-2xl bg-bg-gray ring-1 ring-border"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-secondary [&::-webkit-details-marker]:hidden">
                  <h3 className="text-sm font-semibold text-secondary">
                    {item.question}
                  </h3>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-180 motion-reduce:transition-none">
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
      </div>
    </section>
  );
}
