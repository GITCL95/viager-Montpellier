import { Icon } from "./Icon";

export function SectorCard({
  name,
  description,
  href,
  ctaLabel = "Découvrir",
}: {
  name: string;
  description: string;
  href?: string;
  ctaLabel?: string;
}) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={`group flex flex-col rounded-3xl bg-white p-6 ring-1 ring-border transition-all ${
        href ? "hover:-translate-y-1 hover:shadow-lg" : ""
      }`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon name="mapPin" className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-secondary">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text">{description}</p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {ctaLabel}
          <Icon
            name="arrowRight"
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
          />
        </span>
      )}
    </Wrapper>
  );
}
