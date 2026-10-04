import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";

const commitments = [
  {
    title: "Une expertise locale",
    description:
      "L'évaluation tient compte de votre logement, de son quartier et de son environnement.",
  },
  {
    title: "Un accompagnement humain",
    description:
      "Un conseiller vous aide à poser vos questions et à avancer à votre rythme.",
  },
  {
    title: "Des calculs expliqués",
    description:
      "La valeur du bien, le bouquet, la rente et les charges sont présentés ensemble.",
  },
  {
    title: "Un dossier préparé avec le notaire",
    description:
      "Les modalités de paiement et d'occupation sont précisées avant la signature.",
  },
];

export function About() {
  return (
    <section id="a-propos" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square w-2/3 overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=80"
              alt="Intérieur lumineux d'un logement"
              fill
              sizes="(min-width: 1024px) 400px, 60vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 aspect-square w-1/2 overflow-hidden rounded-3xl ring-8 ring-white">
            <Image
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80"
              alt="Maison entourée de verdure"
              fill
              sizes="(min-width: 1024px) 300px, 45vw"
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
            Patrimoine Cardinal
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            Une agence à vos côtés, de la réflexion à la signature
          </h2>
          <p className="mt-5 leading-relaxed text-text">
            Viager Montpellier by Patrimoine Cardinal accompagne les
            propriétaires et les acquéreurs à Montpellier et dans sa région.
            Nous prenons le temps de comprendre votre situation pour construire
            un projet cohérent avec vos besoins.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {commitments.map((commitment) => (
              <div key={commitment.title} className="rounded-2xl bg-bg-gray p-5">
                <h3 className="text-sm font-semibold text-secondary">
                  {commitment.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-secondary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Contacter notre équipe
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
