import Image from "next/image";
import { team } from "@/lib/site-data";
import { Icon } from "./Icon";

export function Team() {
  return (
    <section id="equipe" className="bg-bg-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Notre équipe
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            Des experts du viager à votre écoute
          </h2>
          <p className="mt-4 text-text">
            Une équipe pluridisciplinaire — immobilier, droit et négociation
            — pour sécuriser chaque étape de votre projet.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-3xl bg-white ring-1 ring-border transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="260px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-base font-bold text-secondary">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-primary">{member.role}</p>
                <div className="mt-3 flex items-center justify-center gap-2 text-secondary/50">
                  <Icon name="linkedin" className="h-4 w-4" />
                  <Icon name="mail" className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
