export const SITE_URL = "https://viager-montpellier.fr";

export const agency = {
  name: "Viager Montpellier by Patrimoine Cardinal",
  telephone: "+33483584386",
  telephoneDisplay: "04 83 58 43 86",
  email: "contact@viager-montpellier.fr",
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

const administrativeAreas = new Set(["Hérault", "Gard"]);

function servedAreaJsonLd(name: string) {
  return {
    "@type": administrativeAreas.has(name) ? "AdministrativeArea" : "City",
    name,
  };
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
    "@id": absoluteUrl("/#agence"),
    name: agency.name,
    description,
    url: absoluteUrl("/"),
    mainEntityOfPage: absoluteUrl(path),
    logo: absoluteUrl("/apple-icon"),
    image: absoluteUrl("/images/hero-home.png"),
    telephone: agency.telephone,
    email: agency.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: agency.street,
      addressLocality: agency.locality,
      postalCode: agency.postalCode,
      addressRegion: agency.region,
      addressCountry: agency.country,
    },
    areaServed: Array.isArray(areaServed)
      ? areaServed.map(servedAreaJsonLd)
      : servedAreaJsonLd(areaServed),
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: "Viager Montpellier",
    alternateName: agency.name,
    url: absoluteUrl("/"),
    inLanguage: "fr-FR",
    publisher: { "@id": absoluteUrl("/#agence") },
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
