import Image from "next/image";
import { heroStats } from "@/lib/site-data";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-secondary">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Agence viager à Montpellier
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[52px] lg:leading-[1.1]">
            Vendez votre bien en{" "}
            <span className="text-primary">viager</span> et sécurisez votre
            avenir
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
            Notre agence accompagne les propriétaires et les investisseurs de
            Montpellier et sa région à chaque étape d&apos;une vente ou d&apos;un
            achat en viager : estimation, négociation, suivi juridique et
            notarial, en toute transparence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark"
            >
              Estimation gratuite
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a
              href="#biens"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Nos biens en viager
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {heroStats.map((stat) => (
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
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Maison à Montpellier proposée en viager"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -left-6 top-8 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon name="shield" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-secondary">Vente sécurisée</p>
              <p className="text-xs text-text">Acte notarié garanti</p>
            </div>
          </div>

          <div className="absolute -bottom-6 right-2 rounded-2xl bg-white p-5 shadow-xl sm:-right-8">
            <p className="text-3xl font-bold text-secondary">
              15<span className="text-primary">+</span>
            </p>
            <p className="mt-1 text-xs text-text">
              années d&apos;expertise
              <br /> en viager à Montpellier
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
