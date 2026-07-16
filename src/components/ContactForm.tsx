"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icon";

const projectOptions = ["Vendre en viager", "Acheter en viager", "Simple question"];
const FORM_ENDPOINT = "https://formspree.io/f/xgogavvr";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
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
      <div className="rounded-3xl bg-white p-8 text-center ring-1 ring-border sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-secondary">
          Merci, votre demande a bien été envoyée
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text">
          Un conseiller vous recontacte sous 48 h ouvrées pour étudier votre
          projet. En cas d&apos;urgence, vous pouvez aussi nous appeler
          directement au 04 67 00 00 00.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-3xl bg-white p-8 ring-1 ring-border sm:p-10"
    >
      <input type="hidden" name="_subject" value="Nouvelle demande — Viager Montpellier" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold text-secondary">
          Nom complet
          <input
            required
            type="text"
            name="name"
            placeholder="Jeanne Dupont"
            className="rounded-xl border border-border px-4 py-3 text-sm font-normal text-secondary placeholder:text-muted focus:border-primary focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-secondary">
          Téléphone
          <input
            required
            type="tel"
            name="phone"
            placeholder="06 12 34 56 78"
            className="rounded-xl border border-border px-4 py-3 text-sm font-normal text-secondary placeholder:text-muted focus:border-primary focus:outline-none"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-semibold text-secondary">
        Adresse e-mail
        <input
          required
          type="email"
          name="email"
          placeholder="jeanne.dupont@email.fr"
          className="rounded-xl border border-border px-4 py-3 text-sm font-normal text-secondary placeholder:text-muted focus:border-primary focus:outline-none"
        />
      </label>

      <div>
        <p className="text-sm font-semibold text-secondary">Votre projet</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {projectOptions.map((option, index) => (
            <label
              key={option}
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
            >
              <input
                type="radio"
                name="project"
                value={option}
                defaultChecked={index === 0}
                className="h-3.5 w-3.5 accent-primary"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <label className="flex flex-col gap-2 text-sm font-semibold text-secondary">
        Votre message
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Décrivez votre bien ou votre projet en quelques lignes (adresse, type de bien, âge, échéance souhaitée...)."
          className="rounded-xl border border-border px-4 py-3 text-sm font-normal text-secondary placeholder:text-muted focus:border-primary focus:outline-none"
        />
      </label>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          Une erreur est survenue lors de l&apos;envoi. Merci de réessayer ou
          de nous appeler directement au 04 67 00 00 00.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
        <Icon name="arrowRight" className="h-4 w-4" />
      </button>

      <p className="text-xs leading-relaxed text-muted">
        En soumettant ce formulaire, vous acceptez d&apos;être recontacté par
        notre équipe au sujet de votre demande. Vos données ne sont jamais
        transmises à des tiers.
      </p>
    </form>
  );
}
