import Image from "next/image";
import { Icon } from "./Icon";

const points = [
  "Estimation gratuite et personnalisée de votre bouquet et de votre rente",
  "Accompagnement juridique et notarial complet jusqu'à la signature",
];

export function About() {
  return (
    <section id="a-propos" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square w-2/3 overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=80"
              alt="Quartier résidentiel de Montpellier"
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 aspect-square w-1/2 overflow-hidden rounded-3xl ring-8 ring-white">
            <Image
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80"
              alt="Intérieur chaleureux d'un bien en viager"
              fill
              sizes="260px"
              className="object-cover"
            />
          </div>
          <div className="absolute -top-4 right-6 rounded-2xl bg-secondary px-5 py-4 text-white shadow-xl">
            <p className="text-xl font-bold">
              98<span className="text-primary">%</span>
            </p>
            <p className="text-xs text-white/70">clients satisfaits</p>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Depuis 2010 à Montpellier
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            Une agence viager de confiance, humaine et transparente
          </h2>
          <p className="mt-5 leading-relaxed text-text">
            Viager Montpellier est une agence indépendante spécialisée dans
            l&apos;accompagnement des ventes et achats en viager sur
            Montpellier et sa métropole. Nous combinons expertise
            immobilière, rigueur juridique et écoute pour construire des
            transactions justes, sécurisées et adaptées à chaque situation.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-secondary/90">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-secondary/90"
          >
            Contacter notre équipe
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
