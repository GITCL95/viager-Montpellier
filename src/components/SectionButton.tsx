"use client";

import type { ReactNode } from "react";

export function SectionButton({
  sectionId,
  className,
  children,
}: {
  sectionId: string;
  className?: string;
  children: ReactNode;
}) {
  function scrollToSection() {
    const section = document.getElementById(sectionId);
    if (!section) return;

    if (!section.hasAttribute("tabindex")) section.tabIndex = -1;
    section.focus({ preventScroll: true });
    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  }

  return (
    <button
      type="button"
      data-section-target={sectionId}
      onClick={scrollToSection}
      className={className}
    >
      {children}
    </button>
  );
}
