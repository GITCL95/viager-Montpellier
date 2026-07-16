import { Icon } from "./Icon";

export function Logo({
  variant = "onLight",
  size = "md",
}: {
  variant?: "onLight" | "onDark";
  size?: "md" | "lg";
}) {
  const isDark = variant === "onDark";
  const badgeSize = size === "lg" ? "h-12 w-12" : "h-11 w-11";
  const iconSize = size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <a href="#accueil" className="group flex items-center gap-3">
      <span
        className={`relative flex ${badgeSize} shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary via-cardinal to-primary text-white shadow-md shadow-cardinal/20 ring-1 ring-white/10 transition-transform duration-300 group-hover:rotate-3`}
      >
        <Icon name="crown" className={iconSize} />
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-primary ring-2 ring-white" />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-bold uppercase tracking-tight ${
            size === "lg" ? "text-2xl" : "text-lg"
          } ${isDark ? "text-white" : "text-secondary"}`}
        >
          Viager<span className="text-primary">Montpellier</span>
        </span>
        <span
          className={`mt-1 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.18em] ${
            isDark ? "text-white/50" : "text-text"
          }`}
        >
          by
          <span className="bg-gradient-to-r from-cardinal to-cardinal-light bg-clip-text font-semibold text-transparent">
            Patrimoine Cardinal
          </span>
        </span>
      </span>
    </a>
  );
}
