"use client";

import { useState } from "react";
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
  const [openIndex, setOpenIndex] = useState(0);

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
          {items.map((item, index) => {
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
    </section>
  );
}
