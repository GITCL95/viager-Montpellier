import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";

const projects = [
  {
    number: "01",
    category: "Vendre",
    image: "/images/project-sell.webp",
    title: "Vendre en viager",
    description:
      "Restez chez vous et préparez la suite avec sérénité.",
    points: ["Choisir la formule adaptée", "Préparer votre vente"],
    href: "/vendre-en-viager-montpellier",
    label: "Découvrir mon parcours",
  },
  {
    number: "02",
    category: "Acheter",
    image: "/images/project-buy.webp",
    title: "Acheter en viager",
    description:
      "Construisez votre projet immobilier avec une vision claire.",
    points: ["Définir votre projet", "Comprendre le budget"],
    href: "/acheter-en-viager-montpellier",
    label: "Préparer mon achat",
  },
] as const;

function EstimationIllustration() {
  return (
    <svg
      viewBox="0 0 360 245"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full text-white/80"
      aria-hidden="true"
      focusable="false"
    >
      <g opacity={0.35}>
        <path d="M71 35h250M85 29v13M308 27v192M302 211h12M22 207h323M91 234h246M105 229v10M330 229v10" />
        <path d="M270 62h30M284 47v31M36 174h20M46 164v21" />
      </g>
      <path d="m73 102 99-50 99 50-4 8-95-48-95 48-4-8Z" />
      <path d="M84 107v99h172V107M92 110v89h156v-89M96 199h154M104 206v7h148" />
      <path d="M215 74V51h12v29M212 51h18v-5h-18v5Z" />
      <circle cx="172" cy="85" r="7" />
      <path d="M155 205v-65h33v65M160 201v-57h23v57M177 172h1" />
      <path d="M108 115h27v39h-27zM113 120h17v29h-17zM121.5 120v29M110 159h24M108 176h27v13h-27M111 179h21" />
      <path d="M207 115h26v39h-26zM212 120h16v29h-16zM220 120v29M208 159h23" />
      <path d="M47 203v-32M42 191c-12-8-9-26-6-36 2-9 1-18 4-27 1-5 1-12 4-15 4 3 3 12 5 16 3 9 2 16 5 25 4 11 5 30-4 37M42 190l5-9" />
      <path d="M62 204c-7-5-4-13 2-14-2-6 4-12 9-8 7-7 16-1 15 7 7 1 9 9 4 15M63 203h30" />
      <path d="M104 204c-5-5-1-12 4-13-2-7 5-13 11-10 7-6 15-1 15 6 8-1 14 6 11 12 6 1 8 5 5 9M109 207h37" />
      <rect
        x="232"
        y="123"
        width="89"
        height="108"
        rx="10"
        className="fill-secondary"
      />
      <rect x="241" y="133" width="71" height="24" rx="4" />
      <g>
        <rect x="242" y="168" width="14" height="11" rx="2" />
        <rect x="269" y="168" width="14" height="11" rx="2" />
        <rect x="296" y="168" width="14" height="11" rx="2" />
        <rect x="242" y="187" width="14" height="11" rx="2" />
        <rect x="269" y="187" width="14" height="11" rx="2" />
        <rect x="296" y="187" width="14" height="31" rx="2" />
        <rect x="242" y="207" width="14" height="11" rx="2" />
        <rect x="269" y="207" width="14" height="11" rx="2" />
      </g>
    </svg>
  );
}

export function Services() {
  return (
    <section
      id="votre-projet"
      aria-labelledby="project-heading"
      className="scroll-mt-24 bg-[#f7f7f5] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
              Votre projet, votre parcours
            </span>
            <h2
              id="project-heading"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-secondary sm:text-4xl lg:text-5xl"
            >
              Quel est votre projet ?
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-text sm:text-lg lg:justify-self-end lg:pb-1">
            Un accompagnement adapté à votre situation, à chaque étape de votre
            projet.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border/50 transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none"
            >
              <div className="relative aspect-[8/5] overflow-hidden">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 384px, (min-width: 1024px) calc((100vw - 128px) / 3), calc(100vw - 48px)"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                />
                <span className="absolute left-6 top-6 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase text-secondary sm:text-sm">
                  {project.number} — {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-2xl font-bold leading-tight tracking-tight text-secondary xl:text-[28px]">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-text">
                  {project.description}
                </p>
                <ul className="mt-5 space-y-3 border-t border-border pt-5">
                  {project.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-text sm:text-base"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-secondary px-4 py-3 text-center text-sm font-semibold text-secondary transition-colors group-hover:bg-secondary group-hover:text-white motion-reduce:transition-none">
                  {project.label}
                  <Icon name="arrowRight" className="h-5 w-5 shrink-0" />
                </span>
              </div>
            </Link>
          ))}

          <Link
            href="/estimation-viager-montpellier"
            className="group flex flex-col overflow-hidden rounded-3xl bg-secondary text-white shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none"
          >
            <div className="relative aspect-[8/5]">
              <span className="absolute left-6 top-6 rounded-full border border-white/80 px-5 py-2 text-xs font-medium uppercase text-white sm:text-sm">
                03 — Estimer
              </span>
              <div className="absolute inset-x-5 bottom-0 top-16 sm:inset-x-7">
                <EstimationIllustration />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="max-w-xs text-2xl font-bold leading-tight tracking-tight xl:text-[28px]">
                Combien vaut
                <br />
                votre bien&nbsp;?
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-white/75">
                Obtenez une étude personnalisée de votre logement et de votre
                projet.
              </p>
              <ul className="mt-5 space-y-3 border-t border-white/20 pt-5">
                {["Étude personnalisée", "Gratuite et sans engagement"].map(
                  (point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-white/90 sm:text-base"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      />
                      {point}
                    </li>
                  ),
                )}
              </ul>
              <span className="mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white transition-colors group-hover:bg-primary-dark motion-reduce:transition-none">
                Estimer mon bien
                <Icon name="arrowRight" className="h-5 w-5 shrink-0" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
