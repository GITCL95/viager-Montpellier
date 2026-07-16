import Image from "next/image";
import { whyChooseFeatures, whyChooseHighlights } from "@/lib/site-data";
import { Icon } from "./Icon";

export function WhyChoose() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=900&q=80"
              alt="Conseiller viager échangeant avec un couple de propriétaires"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl bg-white p-5 shadow-xl">
            <div className="grid grid-cols-3 gap-3">
              {whyChooseHighlights.map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon name={item.icon as "user" | "clock" | "shield"} className="h-5 w-5" />
                  </span>
                  <p className="mt-2 text-[11px] font-medium leading-tight text-secondary">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Pourquoi nous choisir
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Votre partenaire viager nouvelle génération à Montpellier
          </h2>
          <p className="mt-5 leading-relaxed text-white/70">
            Nous réinventons l&apos;accompagnement en viager : plus humain,
            plus transparent, plus rapide. Chaque dossier bénéficie d&apos;un
            suivi personnalisé et d&apos;outils de simulation clairs.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {whyChooseFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
              >
                <h3 className="text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
