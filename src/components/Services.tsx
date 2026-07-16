import { services } from "@/lib/site-data";
import { Icon } from "./Icon";

export function Services() {
  return (
    <section className="bg-bg-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Nos solutions
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            Des solutions en viager adaptées à votre projet
          </h2>
          <p className="mt-4 text-text">
            Que vous souhaitiez vendre, acheter ou simplement estimer un
            bien, nos experts vous accompagnent avec méthode et
            transparence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon name={service.icon as "key" | "search" | "calculator"} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-secondary">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-secondary/80"
                  >
                    <Icon name="check" className="h-4 w-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
