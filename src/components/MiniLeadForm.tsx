"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icon";

const FORM_ENDPOINT = "https://formspree.io/f/xgogavvr";

type Status = "idle" | "loading" | "success" | "error";

export function MiniLeadForm({
  title = "Une estimation gratuite de votre bien",
  description = "Laissez-nous vos coordonnées, un conseiller vous recontacte sous 48 h, sans engagement.",
  subject = "Nouvelle demande rapide — Viager Montpellier",
}: {
  title?: string;
  description?: string;
  subject?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-bg-gray p-6 ring-1 ring-border sm:p-7">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-base font-bold text-secondary">
          Merci, votre demande est envoyée
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text">
          Un conseiller vous recontacte sous 48 h ouvrées. En cas
          d&apos;urgence, appelez-nous au 04 67 00 00 00.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-bg-gray p-6 ring-1 ring-border sm:p-7"
    >
      <input type="hidden" name="_subject" value={subject} />

      <h3 className="text-base font-bold text-secondary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text">{description}</p>

      <div className="mt-5 grid gap-3">
        <input
          required
          type="text"
          name="name"
          placeholder="Votre nom"
          className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-secondary placeholder:text-muted focus:border-primary focus:outline-none"
        />
        <input
          required
          type="tel"
          name="phone"
          placeholder="Votre téléphone"
          className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-secondary placeholder:text-muted focus:border-primary focus:outline-none"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Votre e-mail"
          className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-secondary placeholder:text-muted focus:border-primary focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="mt-3 text-xs leading-relaxed text-red-600">
          Une erreur est survenue, merci de réessayer ou de nous appeler au
          04 67 00 00 00.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Envoi..." : "Être recontacté"}
        <Icon name="arrowRight" className="h-4 w-4" />
      </button>

      <p className="mt-3 text-[11px] leading-relaxed text-muted">
        Réponse sous 48 h, sans engagement.
      </p>
    </form>
  );
}
