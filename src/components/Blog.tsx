import Image from "next/image";
import { blogPosts } from "@/lib/site-data";
import { Icon } from "./Icon";

export function Blog() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Actualités
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">
            Nos derniers articles sur le viager
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-3xl ring-1 ring-border transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 400px, 90vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-semibold text-primary">
                  <span>{post.category}</span>
                  <span className="text-border">•</span>
                  <span className="text-text">{post.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug text-secondary">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary"
                >
                  Lire l&apos;article
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
