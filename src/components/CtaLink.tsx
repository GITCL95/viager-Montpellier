import type { ReactNode } from "react";
import { SectionButton } from "./SectionButton";

export function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (href.startsWith("#")) {
    return (
      <SectionButton sectionId={href.slice(1)} className={className}>
        {children}
      </SectionButton>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
