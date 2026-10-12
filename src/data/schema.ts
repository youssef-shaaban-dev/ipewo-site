export const arabicSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ipewofilters.com/#organization",
      "name": "IPEWO",
      "alternateName": [
        "International Company for Projects & Engineering Works",
        "الشركة الدولية للمشروعات والأعمال الهندسية",
        "إبيو"
      ],
      "url": "https://ipewofilters.com/",
      "foundingDate": "2010",
      "description": "IPEWO is an Egyptian company specialized in manufacturing, supplying, importing and installing air filters for central air conditioning, HVAC systems and industrial air filtration applications.",
      "email": [
        "info@ipewofilters.com",
        "ipewo@yahoo.com"
      ],
      "telephone": "+201014298465",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mostorod",
        "addressRegion": "Cairo",
        "addressCountry": {
          "@type": "Country",
          "name": "Egypt"
        }
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Egypt"
        },
        {
          "@type": "Place",
          "name": "Middle East"
        }
      ],
      "knowsAbout": [
        "Air Filters",
        "HVAC Filters",
        "Industrial Air Filtration",
        "Central Air Conditioning Filters",
        "HEPA Filters",
        "ULPA Filters",
        "Bag Filters",
        "Rigid Filters",
        "Carbon Filters",
        "Dust Collector Filters",
        "Air Filtration Systems"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+201014298465",
        "email": "info@ipewofilters.com",
        "contactType": "sales",
        "areaServed": "EG",
        "availableLanguage": [
          "Arabic",
          "English"
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://ipewofilters.com/#website",
      "url": "https://ipewofilters.com/",
      "name": "IPEWO",
      "alternateName": "IPEWO Filters",
      "publisher": {
        "@id": "https://ipewofilters.com/#organization"
      },
      "inLanguage": [
        "ar",
        "en"
      ]
    }
  ]
};

export const englishSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ipewofilters.com/#organization",
      "name": "IPEWO",
      "alternateName": [
        "International Company for Projects & Engineering Works",
        "الشركة الدولية للمشروعات والأعمال الهندسية",
        "إبيو"
      ],
      "url": "https://ipewofilters.com/",
      "foundingDate": "2010",
      "description": "IPEWO is an Egyptian company specialized in manufacturing, supplying, importing and installing air filters for HVAC systems, central air conditioning and industrial air filtration applications.",
      "email": "info@ipewofilters.com",
      "telephone": "+201014298465",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mostorod",
        "addressCountry": "EG"
      },
      "knowsAbout": [
        "Air Filters",
        "HVAC Filters",
        "Industrial Air Filtration",
        "HEPA Filters",
        "ULPA Filters",
        "Bag Filters",
        "Rigid Filters",
        "Carbon Filters",
        "Dust Collector Filters"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://ipewofilters.com/#website",
      "url": "https://ipewofilters.com/",
      "name": "IPEWO",
      "publisher": {
        "@id": "https://ipewofilters.com/#organization"
      },
      "inLanguage": [
        "en",
        "ar"
      ]
    }
  ]
};

export function getStructuredData(locale: string) {
  return locale === "ar" ? arabicSchema : englishSchema;
}
