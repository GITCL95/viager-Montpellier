"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { formulaLinks, projectLinks, sectorLinks } from "@/lib/site-data";
import { agency } from "@/lib/seo";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const groups = [
  { id: "project", label: "Votre projet", links: projectLinks },
  { id: "formula", label: "Les formules", links: formulaLinks },
  { id: "sector", label: "Nos secteurs", links: sectorLinks },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  function closeMenus() {
    setOpen(false);
    setOpenGroup(null);
  }

  useEffect(() => {
    if (!open && !openGroup) return;

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setOpenGroup(null);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const trigger = document.getElementById(
        open ? "mobile-menu-button" : `menu-button-${openGroup}`
      );
      setOpen(false);
      setOpenGroup(null);
      trigger?.focus();
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, openGroup]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-border/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden items-center gap-5 lg:flex">
          <Link href="/" onClick={closeMenus} className="text-sm font-medium text-secondary/80 hover:text-primary">
            Accueil
          </Link>
          {groups.map((group) => (
            <div key={group.id} className="relative">
              <button
                id={`menu-button-${group.id}`}
                type="button"
                aria-expanded={openGroup === group.id}
                aria-controls={`menu-${group.id}`}
                onClick={() => setOpenGroup((current) => current === group.id ? null : group.id)}
                className="flex items-center gap-1.5 text-sm font-medium text-secondary/80 hover:text-primary"
              >
                {group.label}
                <Icon name="chevronDown" className={`h-3.5 w-3.5 transition-transform ${openGroup === group.id ? "rotate-180" : ""}`} />
              </button>
              <ul
                id={`menu-${group.id}`}
                hidden={openGroup !== group.id}
                className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-border"
              >
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={closeMenus} className="block rounded-xl px-4 py-2.5 text-sm font-medium text-secondary/80 hover:bg-bg-gray hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link href="/contact" onClick={closeMenus} className="text-sm font-medium text-secondary/80 hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={`tel:${agency.telephone}`} className="hidden items-center gap-2 text-sm font-semibold text-secondary xl:flex">
            <Icon name="phone" className="h-4 w-4 text-primary" />
            {agency.telephoneDisplay}
          </a>
          <Link href="/estimation-viager-montpellier" className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark">
            Estimation gratuite
          </Link>
        </div>

        <button
          id="mobile-menu-button"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-secondary lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      <nav id="mobile-navigation" aria-label="Navigation mobile" hidden={!open} className="max-h-[75vh] overflow-y-auto border-t border-border bg-white px-6 py-5 lg:hidden">
        <div className="flex gap-6">
          <Link href="/" onClick={closeMenus} className="py-2 font-semibold text-secondary">Accueil</Link>
          <Link href="/contact" onClick={closeMenus} className="py-2 font-semibold text-secondary">Contact</Link>
        </div>
        {groups.map((group) => (
          <div key={group.id} className="mt-4 border-t border-border pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary/60">{group.label}</p>
            <ul className="mt-2">
              {group.links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={closeMenus} className="block py-2.5 text-sm font-medium text-secondary/80 hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Link href="/estimation-viager-montpellier" onClick={closeMenus} className="mt-5 block rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark">
          Estimation gratuite
        </Link>
      </nav>
    </header>
  );
}
