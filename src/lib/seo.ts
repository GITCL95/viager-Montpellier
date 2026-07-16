export const SITE_URL = "https://www.viager-montpellier.fr";

export const agency = {
  name: "Viager Montpellier by Patrimoine Cardinal",
  telephone: "+33467000000",
  street: "12 Rue de la République",
  locality: "Montpellier",
  postalCode: "34000",
  region: "Occitanie",
  country: "FR",
};

export type FaqItem = { question: string; answer: string };
export type BreadcrumbItem = { name: string; path: string };

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

export function realEstateAgentJsonLd({
  path,
  areaServed,
  description,
}: {
  path: string;
  areaServed: string | string[];
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: agency.name,
    description,
    url: absoluteUrl(path),
    telephone: agency.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: agency.street,
      addressLocality: agency.locality,
      postalCode: agency.postalCode,
      addressRegion: agency.region,
      addressCountry: agency.country,
    },
    areaServed: Array.isArray(areaServed)
      ? areaServed.map((name) => ({ "@type": "City", name }))
      : { "@type": "City", name: areaServed },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
