import { Icon } from "./Icon";

export function Newsletter() {
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
          </div>

          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Votre adresse e-mail"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              S&apos;inscrire
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
