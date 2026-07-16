"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { nav, sectorLinks } from "@/lib/site-data";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const sectorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectorsOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        sectorsRef.current &&
        !sectorsRef.current.contains(event.target as Node)
      ) {
        setSectorsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sectorsOpen]);

  const midpoint = Math.ceil(nav.length / 2);
  const navStart = nav.slice(0, midpoint);
  const navEnd = nav.slice(midpoint);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navStart.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-secondary/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}

          <div ref={sectorsRef} className="relative">
            <button
              type="button"
              onClick={() => setSectorsOpen((v) => !v)}
              className="flex items-center gap-1.5 text-[15px] font-medium text-secondary/80 transition-colors hover:text-primary"
              aria-expanded={sectorsOpen}
            >
              Nos secteurs
              <Icon
                name="chevronDown"
                className={`h-3.5 w-3.5 transition-transform ${
                  sectorsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {sectorsOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-border">
                {sectorLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setSectorsOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-secondary/80 transition-colors hover:bg-bg-gray hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navEnd.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-secondary/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:+33467000000"
            className="flex items-center gap-2 text-sm font-semibold text-secondary"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon name="phone" className="h-4 w-4" />
            </span>
            04 67 00 00 00
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            Estimation gratuite
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-secondary/80 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Nos secteurs
              </p>
              <div className="mt-3 flex flex-col gap-3">
                {sectorLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-[15px] font-medium text-secondary/80 hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Estimation gratuite
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
