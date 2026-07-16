import { partners } from "@/lib/site-data";

export function Partners() {
  const items = [...partners, ...partners];

  return (
    <section className="border-y border-border bg-bg-gray py-10">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-10">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-text">
          Ils nous font confiance
        </p>
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-lg font-bold uppercase tracking-wide text-secondary/30"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
