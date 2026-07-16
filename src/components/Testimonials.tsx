import Image from "next/image";
import { testimonials } from "@/lib/site-data";
import { Icon } from "./Icon";

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Témoignages
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            Ils nous ont fait confiance
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-3xl bg-bg-gray p-7 ring-1 ring-border"
            >
              <div className="flex gap-1 text-[#F59E0B]">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-secondary/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-text">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
