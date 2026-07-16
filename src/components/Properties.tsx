import Image from "next/image";
import { properties } from "@/lib/site-data";
import { Icon } from "./Icon";

export function Properties() {
  return (
    <section id="biens" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              Nos biens
            </span>
            <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
              Nos biens actuellement en viager
            </h2>
            <p className="mt-4 text-text">
              Une sélection de biens à Montpellier et alentours, avec bouquet
              et rente calculés en toute transparence.
            </p>
          </div>
          <a
            href="/nos-biens"
            className="inline-flex items-center gap-2 rounded-full border border-secondary/20 px-6 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white"
          >
            Voir tous les biens
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.title}
              className="overflow-hidden rounded-3xl ring-1 ring-border transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={property.image}
                  alt={property.title}
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
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  En savoir plus
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
