import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";

const commitments = [
  {
    icon: "local",
    title: "Une expertise locale",
    description: "Votre bien, votre quartier et son environnement.",
  },
  {
    icon: "people",
    title: "Un accompagnement humain",
    description: "Un conseiller à vos côtés, à votre rythme.",
  },
  {
    icon: "calculator",
    title: "Des calculs expliqués",
    description:
      "Valeur du bien, bouquet, rente et charges : tout est présenté clairement.",
  },
  {
    icon: "document",
    title: "Un dossier préparé avec le notaire",
    description: "Les modalités sont précisées avant la signature.",
  },
] as const;

function CommitmentIcon({
  name,
}: {
  name: (typeof commitments)[number]["icon"];
}) {
  if (name === "local" || name === "calculator") {
    return (
      <Icon
        name={name === "local" ? "mapPin" : "calculator"}
        className="h-9 w-9 text-primary"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9 text-primary"
      aria-hidden="true"
      focusable="false"
    >
      {name === "people" ? (
        <>
          <circle cx="9" cy="7" r="4" />
          <path d="M2 21v-2a7 7 0 0 1 14 0v2M16 4a4 4 0 0 1 0 8M18 15a6 6 0 0 1 4 6" />
        </>
      ) : (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
          <path d="M14 2v6h6M8 12h8M8 16h8M8 19h5" />
        </>
      )}
    </svg>
  );
}

function KeysIllustration() {
  return (
    <svg
      viewBox="0 0 220 132"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-auto w-full max-w-44 text-white/55"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="115" cy="38" r="28" />
      <circle cx="115" cy="38" r="24" />
      <path d="M96 57c-10 3-17 11-15 22L34 112l-12-3-6-10 16-11 4 6 9-6-4-6 11-8 4 6 17-12c0-10 10-18 23-18M85 68l-60 41" />
      <path d="M110 63c-11 7-12 20-6 28l-27 32 5 6 12-5 3-9 8-2 3-9 8-3 6-9c13-2 20-15 14-26M109 94l-25 29" />
      <circle cx="124" cy="78" r="7" />
      <path d="m140 69 28-27 31 30v51h-60V72l-8 3-7-8M137 66l31-30 37 36M151 123V95h17v28M178 85h12v14h-12zM148 78h11v10h-11z" />
      <path d="M139 53c-11 4-18 8-19 15M143 42c7 1 12 4 17 9" />
    </svg>
  );
}

function ArchitecturalWatermark() {
  return (
    <svg
      viewBox="0 0 230 360"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      className="pointer-events-none absolute -bottom-9 -left-10 h-72 w-52 text-secondary/[0.08] lg:h-96 lg:w-64"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M53 356V112l17-35 9 24V74l12-16 12 16v26l9-23 17 35v244M50 111h82M59 111l12-30M122 111l-11-30M70 105h43M72 111v43h36v-43M78 117v31h24v-31M90 58V39M86 47h8M65 165h54M66 165v21h53v-21M53 199h76M65 210v31h19v-31M101 210v31h19v-31M58 246h69M54 259h74M66 274v43h19v-43M102 274v43h18v-43" />
      <path d="m0 263 152 61v33M1 276l151 61M13 289v25l19 8v-25M45 302v26l19 8v-26M77 315v25l19 8v-25M151 324l77-25M153 337l75-26M166 333v23M190 325v31M214 317v40M132 319V177l8-14 6 14v144M126 177h27" />
    </svg>
  );
}

export function About() {
  return (
    <section
      id="a-propos"
      aria-labelledby="agency-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#f7f7f5] py-16 lg:py-20"
    >
      <ArchitecturalWatermark />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-10">
        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl bg-secondary lg:max-w-none">
          <div className="relative aspect-[6/5]">
            <Image
              src="/images/agency-montpellier.webp"
              alt=""
              fill
              loading="lazy"
              sizes="(min-width: 1280px) 576px, (min-width: 1024px) calc((100vw - 128px) / 2), (min-width: 624px) 576px, calc(100vw - 48px)"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-5 px-6 py-6 text-white sm:gap-7 sm:px-8">
            <div>
              <p className="text-5xl font-bold leading-none tracking-tight sm:text-7xl">
                98<span className="text-primary">%</span>
              </p>
              <p className="mt-2 text-base text-white/80 sm:text-lg">
                clients satisfaits
              </p>
            </div>
            <div className="border-l border-white/30 pl-5 sm:pl-7">
              <KeysIllustration />
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
            Patrimoine Cardinal
          </span>
          <h2
            id="agency-heading"
            className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-secondary sm:text-4xl xl:text-[40px]"
          >
            Une agence à vos côtés, de la réflexion à la signature
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text sm:text-lg">
            À Montpellier et dans sa région, nous prenons le temps de comprendre
            votre situation pour construire un projet cohérent avec vos besoins.
          </p>

          <div className="mt-6 grid sm:grid-cols-2">
            {commitments.map((commitment, index) => (
              <div
                key={commitment.title}
                className={`py-5 ${index < 3 ? "border-b border-border" : ""} ${
                  index % 2 === 0
                    ? "sm:border-r sm:pr-5"
                    : "sm:pl-5"
                } ${index === 2 ? "sm:border-b-0" : ""}`}
              >
                <CommitmentIcon name={commitment.icon} />
                <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-secondary">
                  {commitment.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-text">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-14 items-center justify-center gap-5 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none sm:text-base"
          >
            Contacter notre équipe
            <Icon name="arrowRight" className="h-5 w-5 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
