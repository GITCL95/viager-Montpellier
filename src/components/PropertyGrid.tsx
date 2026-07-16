import Image from "next/image";
import { Icon } from "./Icon";

export type PropertyItem = {
  image: string;
  alt: string;
  tag1: string;
  tag2: string;
  title: string;
  description: string;
  ctaLabel?: string;
};

export function PropertyGrid({
  items,
  ctaHref = "/#contact",
  ctaLabel = "En savoir plus",
}: {
  items: PropertyItem[];
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {items.map((property) => (
        <div
          key={property.title}
          className="overflow-hidden rounded-3xl ring-1 ring-border transition-shadow hover:shadow-xl"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={property.image}
              alt={property.alt}
              fill
              sizes="(min-width: 1024px) 400px, 90vw"
              className="object-cover"
            />
            <div className="absolute left-4 top-4 flex flex-col gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-secondary shadow">
                {property.tag1}
              </span>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow">
                {property.tag2}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-secondary">
              {property.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text">
              {property.description}
            </p>
            <a
              href={ctaHref}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              {property.ctaLabel ?? ctaLabel}
              <Icon name="arrowRight" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
