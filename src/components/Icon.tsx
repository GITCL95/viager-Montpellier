export type IconName =
  | "key"
  | "search"
  | "calculator"
  | "user"
  | "clock"
  | "shield"
  | "check"
  | "star"
  | "mail"
  | "phone"
  | "mapPin"
  | "chevronDown"
  | "arrowRight"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "menu"
  | "close"
  | "crown";

const paths: Record<IconName, React.ReactNode> = {
  key: (
    <path d="M15.5 7.5a4.5 4.5 0 1 1-4.36 5.61L3 21l-1-1 1-3 1 1 2-2-1-1 2-2-1-1 2-2 1 1 1.89-1.89A4.5 4.5 0 0 1 15.5 7.5Z" />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />,
  check: <path d="M5 12.5 9.5 17 19 7.5" />,
  star: <path d="M12 3.5 14.7 9l6 .9-4.4 4.2 1 6-5.3-2.9-5.3 2.9 1-6-4.4-4.2 6-.9L12 3.5Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  phone: (
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1.2 1.2 0 0 1 1.2-.3c1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.6 21.2 2.8 13.4 2.8 3.4 2.8 2.7 3.3 2.2 4 2.2h3.3c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2L6.6 10.8Z" />
  ),
  mapPin: (
    <>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </>
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
  arrowRight: <path d="M5 12h14m-6-7 7 7-7 7" />,
  facebook: (
    <path d="M14 8.5h2.5V5.5H14c-2 0-3.5 1.5-3.5 3.5v2H8.5v3H10.5V19h3v-5h2.3l.7-3H13.5v-1c0-.6.4-1.5 1-1.5Z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5V17M8 7.8v.01M12 17v-4c0-1.2.8-2.2 2-2.2s2 1 2 2.2V17" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  crown: (
    <>
      <path d="m3 6 3.2 10h11.6L21 6l-5.4 5-3.6-6-3.6 6L3 6Z" />
      <path d="M6 20h12" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
