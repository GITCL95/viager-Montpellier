import type { ReactNode } from "react";

type SectorIconName = "herault" | "sete" | "nimes" | "beziers";

const landmarks: Record<SectorIconName, ReactNode> = {
  herault: (
    <>
      <path d="M6 28h28M9 25h22M11 25V12h18v13M8 12h24L20 5 8 12Z" />
      <path d="M15 14v9M20 14v9M25 14v9M6 32h28" />
      <path d="M18 9h4" />
    </>
  ),
  sete: (
    <>
      <path d="M5 22c3-3 5-3 8 0s5 3 8 0 5-3 8 0 5 3 7 0M5 28c3-3 5-3 8 0s5 3 8 0 5-3 8 0 5 3 7 0M5 34c3-3 5-3 8 0s5 3 8 0 5-3 8 0 5 3 7 0" />
      <path d="M21 18V6l-8 10h8M23 9l7 8h-7M12 19h18l-3 4" />
    </>
  ),
  nimes: (
    <>
      <path d="M5 11h30M5 15h30M5 26h30M5 31h30M7 11V8h26v3M7 15v16M33 15v16" />
      <path d="M10 25v-5a3 3 0 0 1 6 0v5M17 25v-5a3 3 0 0 1 6 0v5M24 25v-5a3 3 0 0 1 6 0v5M11 9v2M16 9v2M21 9v2M26 9v2M30 9v2M10 31v4M16 31v4M23 31v4M30 31v4" />
    </>
  ),
  beziers: (
    <>
      <path d="m5 19 15-13 15 13M9 16v18h22V16M5 34h30M26 11V7h4v8" />
      <path d="M17 34V23h7v11M13 19h4v5h-4M25 19h4v5h-4" />
    </>
  ),
};

export function SectorIcon({
  kind,
  className = "h-8 w-8",
}: {
  kind: SectorIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {landmarks[kind]}
    </svg>
  );
}

export function SectorCompass() {
  return (
    <svg
      viewBox="0 0 84 84"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-14 w-14 text-primary sm:h-20 sm:w-20"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="42" cy="45" r="28" opacity={0.7} />
      <circle cx="42" cy="45" r="24" opacity={0.4} />
      <path d="M42 15v-4M42 79v-4M12 45H8M76 45h-4M21 24l-3-3M66 69l-3-3M21 66l-3 3M66 21l-3 3" />
      <path d="M39 9V3l6 6V3" />
      <path d="m42 24 7 21-7 21-7-21 7-21Z" />
      <path d="m42 24 7 21h-7V24Z" fill="currentColor" stroke="none" />
      <path d="M42 66V45h-7l7 21Z" fill="currentColor" stroke="none" opacity={0.45} />
      <circle cx="42" cy="45" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
