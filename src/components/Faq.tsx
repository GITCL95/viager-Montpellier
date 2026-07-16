"use client";

import { useState } from "react";
import Image from "next/image";
import { faqs } from "@/lib/site-data";
import { Icon } from "./Icon";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-bg-gray py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative order-2 mx-auto hidden w-full max-w-md lg:order-1 lg:block lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1758686253677-d3af6c15186e?auto=format&fit=crop&w=900&q=80"
              alt="Couple de seniors souriant, propriétaires de leur maison à Montpellier"
              fill
              sizes="480px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Questions fréquentes
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            Tout savoir sur la vente en viager
          </h2>
          <p className="mt-4 text-text">
            Les réponses aux questions les plus posées par nos clients à
            Montpellier. Une question spécifique ? Contactez-nous directement.
          </p>

          <div className="mt-8 space-y-3">
            {faqs.map((item, index) => {
              const isOpen = index === openIndex;
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl bg-white ring-1 ring-border"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-secondary">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <Icon name="chevronDown" className="h-4 w-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-text">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
