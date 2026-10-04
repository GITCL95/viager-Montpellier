import Link from "next/link";
import { Icon } from "./Icon";

const projects = [
  {
    icon: "key",
    title: "Je souhaite vendre",
    description:
      "Faites le point sur vos objectifs : rester chez vous, compléter vos revenus ou libérer votre logement. Découvrez les étapes d'une vente en viager.",
    points: ["Choisir la formule adaptée", "Préparer votre vente"],
    href: "/vendre-en-viager-montpellier",
    label: "Vendre mon bien en viager",
  },
  {
    icon: "search",
    title: "Je souhaite acheter",
    description:
      "Comprenez le budget à prévoir, la durée du paiement et les droits d'occupation avant de vous engager dans un achat en viager.",
    points: ["Définir votre projet", "Évaluer le budget et les risques"],
    href: "/acheter-en-viager-montpellier",
    label: "Préparer mon achat en viager",
  },
  {
    icon: "calculator",
    title: "Je souhaite une estimation",
    description:
      "Découvrez ce que votre logement pourrait représenter en bouquet et en rente, selon sa valeur et le mode d'occupation envisagé.",
    points: ["Une étude personnalisée", "Gratuite et sans engagement"],
    href: "/estimation-viager-montpellier",
    label: "Demander une estimation",
  },
] as const;

export function Services() {
  return (
    <section id="votre-projet" className="scroll-mt-24 bg-bg-gray py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Votre projet, votre parcours
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            Quel est votre projet ?
          </h2>
          <p className="mt-4 leading-relaxed text-text">
            Choisissez votre point de départ. Chaque parcours vous aide à
            comprendre les démarches et à préparer votre premier échange.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transform-none motion-reduce:transition-none lg:p-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon name={project.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-secondary">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text">
                {project.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-secondary/80"
                  >
                    <Icon name="check" className="h-4 w-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline">
                {project.label}
                <Icon name="arrowRight" className="h-4 w-4 shrink-0" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
