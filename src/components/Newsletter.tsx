"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icon";

const FORM_ENDPOINT = "https://formspree.io/f/xgogavvr";

type Status = "idle" | "loading" | "success" | "error";

export function Newsletter() {
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

  return (
    <section id="newsletter" className="bg-secondary py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-secondary-dark p-8 sm:p-10 lg:flex-row">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Recevez nos nouvelles opportunités en viager
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Estimation gratuite, biens exclusifs et actualités du viager à
              Montpellier, directement dans votre boîte mail.
            </p>
            {status === "error" && (
              <p className="mt-3 text-sm text-red-300">
                Une erreur est survenue, merci de réessayer.
              </p>
            )}
          </div>

          {status === "success" ? (
            <p className="flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-sm font-semibold text-white lg:justify-start">
              <Icon name="check" className="h-4 w-4 text-primary" />
              Merci, votre inscription est confirmée !
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input type="hidden" name="_subject" value="Nouvelle inscription newsletter — Viager Montpellier" />
              <input
                type="email"
                name="email"
                required
                placeholder="Votre adresse e-mail"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Envoi..." : "S'inscrire"}
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
