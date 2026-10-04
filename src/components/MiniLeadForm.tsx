"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icon";
import { agency } from "@/lib/seo";

const FORM_ENDPOINT = "https://formspree.io/f/xgogavvr";

type Status = "idle" | "loading" | "success" | "error";

export function MiniLeadForm({
  title = "Une estimation gratuite de votre bien",
  description = "Laissez-nous vos coordonnées, un conseiller vous recontacte sous 48 h, sans engagement.",
  subject = "Nouvelle demande rapide — Viager Montpellier",
  context = "callback",
}: {
  title?: string;
  description?: string;
  subject?: string;
  context?: "callback" | "estimation";
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("source", window.location.href);

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
      <div role="status" className="rounded-3xl bg-bg-gray p-6 ring-1 ring-border sm:p-7">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-base font-bold text-secondary">
          Merci, votre demande est envoyée
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text">
          Un conseiller vous recontacte sous 48 h ouvrées. En cas
          d&apos;urgence, appelez-nous au {agency.telephoneDisplay}.
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
      <input type="hidden" name="request_type" value={context} />

      <h3 className="text-base font-bold text-secondary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text">{description}</p>

      <div className="mt-5 grid gap-3">
        <label className="grid gap-1.5 text-sm font-medium text-secondary">
          Votre nom
          <input
          required
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Votre nom"
          className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-secondary placeholder:text-muted focus:border-primary focus:outline-none"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-secondary">
          Votre téléphone
          <input
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Votre téléphone"
          className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-secondary placeholder:text-muted focus:border-primary focus:outline-none"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-secondary">
          Votre e-mail
          <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Votre e-mail"
          className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-secondary placeholder:text-muted focus:border-primary focus:outline-none"
          />
        </label>
        {context === "estimation" && (
          <>
            <label className="grid gap-1.5 text-sm font-medium text-secondary">
              Commune du bien
              <input required type="text" name="property_city" autoComplete="address-level2" placeholder="Montpellier, Sète..." className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-normal text-secondary focus:border-primary focus:outline-none" />
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-medium text-secondary">
                Type de bien
                <select required name="property_type" defaultValue="" className="min-w-0 rounded-xl border border-border bg-white px-4 py-3 text-sm font-normal text-secondary focus:border-primary focus:outline-none">
                  <option value="" disabled>Choisir</option>
                  <option>Appartement</option>
                  <option>Maison</option>
                  <option>Autre</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm font-medium text-secondary">
                Surface (m², facultatif)
                <input type="number" name="property_surface" min="1" step="any" inputMode="decimal" placeholder="Ex. 75" className="min-w-0 rounded-xl border border-border bg-white px-4 py-3 text-sm font-normal text-secondary focus:border-primary focus:outline-none" />
              </label>
            </div>
            <label className="grid gap-1.5 text-sm font-medium text-secondary">
              Occupation du logement
              <select name="property_occupation" defaultValue="À préciser" className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-normal text-secondary focus:border-primary focus:outline-none">
                <option>À préciser</option>
                <option>J&apos;y habite</option>
                <option>Libre de toute occupation</option>
                <option>Loué</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-medium text-secondary">
              Votre projet (facultatif)
              <textarea name="property_details" rows={3} placeholder="Quartier, état du bien, souhait de rester dans le logement..." className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-normal text-secondary focus:border-primary focus:outline-none" />
            </label>
          </>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-3 text-xs leading-relaxed text-red-600">
          Une erreur est survenue, merci de réessayer ou de nous appeler au
          {agency.telephoneDisplay}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Envoi..." : context === "estimation" ? "Demander mon estimation" : "Être recontacté"}
        <Icon name="arrowRight" className="h-4 w-4" />
      </button>

      <p className="mt-3 text-[11px] leading-relaxed text-muted">
        Vos informations servent à traiter votre demande et à vous recontacter.
        L&apos;envoi est assuré par Formspree. Réponse sous 48 h ouvrées,
        sans engagement.
      </p>
    </form>
  );
}
