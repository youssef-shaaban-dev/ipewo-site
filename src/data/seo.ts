import type { Metadata } from "next";

export interface SeoItem {
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  ogImage?: string;
}

export const SITE_URL = "https://ipewofilters.com";

export const pageSeoData: Record<string, SeoItem> = {
  // Home
  home: {
    titleAr: "فلاتر التكييف المركزي وتنقية الهواء في مصر | إبيو IPEWO",
    titleEn: "Central Air Conditioning & Air Filters in Egypt | IPEWO",
    descAr: "تصنيع وتوريد فلاتر التكييف المركزي وHEPA وULPA وحلول تنقية الهواء للشركات والقطاعات الحيوية في مصر.",
    descEn: "IPEWO manufactures, supplies and installs HVAC, HEPA and ULPA filters for industrial and critical applications in Egypt.",
    ogImage: "/ipewo-logo.webp",
  },

  // Main Products Catalog
  products: {
    titleAr: "كتالوج فلاتر الهواء والتكييف المركزي والصناعي | إبيو IPEWO",
    titleEn: "Air Filters Catalog & Industrial HVAC Filtration | IPEWO",
    descAr: "استعرض كتالوج فلاتر الهواء والتكييف المركزي من إبيو، فلاتر ابتدائية وباج وريجد وهيبا وألبا ومستلزمات تصنيع الفلاتر في مصر.",
    descEn: "Explore IPEWO's complete range of HVAC air filters, pre-filters, bag, rigid, HEPA, ULPA filters and industrial filtration equipment in Egypt.",
    ogImage: "/ipewo-logo.webp",
  },

  // Clients
  clients: {
    titleAr: "عملاؤنا في فلاتر الهواء والتكييف الصناعي | إبيو IPEWO",
    titleEn: "Our Clients | Industrial Air Filtration Solutions | IPEWO",
    descAr: "تعرف على أبرز عملاء إبيو في قطاعات الصناعة والمستشفيات والأدوية والأغذية والطاقة وحلول فلاتر وتنقية الهواء.",
    descEn: "Discover IPEWO clients across major industries and facilities relying on HVAC, HEPA and ULPA filtration solutions.",
    ogImage: "/images/clients/client-emaar.webp",
  },

  // Careers
  careers: {
    titleAr: "وظائف وفرص عمل في إبيو IPEWO | انضم إلى فريقنا",
    titleEn: "Careers at IPEWO | Join Our Engineering & Filtration Team",
    descAr: "اكتشف فرص العمل المتاحة في إبيو وانضم إلى فريق متخصص في فلاتر الهواء والتكييف والحلول الهندسية والصناعية.",
    descEn: "Explore career opportunities at IPEWO and join a team specialized in HVAC filters, air filtration and industrial engineering solutions.",
    ogImage: "/images/careers/careers.jpg",
  },

  // Contact
  contact: {
    titleAr: "تواصل مع إبيو IPEWO | فلاتر الهواء والتكييف في مصر",
    titleEn: "Contact IPEWO | HVAC & Air Filtration Solutions in Egypt",
    descAr: "تواصل مع إبيو للاستفسار عن فلاتر الهواء والتكييف وHEPA وULPA والحلول الصناعية وطلبات التوريد والتصنيع في مصر.",
    descEn: "Contact IPEWO for HVAC, HEPA and ULPA filters, industrial air filtration solutions, manufacturing and supply inquiries in Egypt.",
    ogImage: "/images/contact/hero.bmp",
  },

  // Categories
  "category/pre-filters": {
    titleAr: "فلاتر الترشيح الأولي لأنظمة التكييف والتهوية HVAC | إبيو IPEWO",
    titleEn: "Pre Filters for HVAC & Air Filtration Systems | IPEWO",
    descAr: "استكشف فلاتر الترشيح الأولي من إبيو لأنظمة التكييف والتبريد، بما في ذلك فلاتر الألومنيوم واللباد والكربون والفيبر جلاس والفان كويل.",
    descEn: "Explore IPEWO prefilters for HVAC and air filtration systems, including aluminum, felt, carbon, fiberglass and fan coil filters.",
    ogImage: "/images/catalog/pre-filters-1.webp",
  },

  "category/foam": {
    titleAr: "فلاتر فوم G3 وG4 قابلة للغسيل لأنظمة HVAC | إبيو IPEWO",
    titleEn: "Washable G3/G4 Foam Filters for HVAC Systems | IPEWO",
    descAr: "فلاتر فوم بولي يوريثان G3 وG4 قابلة للغسيل، بكفاءة 82–90% وفريم صاج أو ألومنيوم أو ستانلس حسب الطلب.",
    descEn: "Washable polyurethane G3/G4 foam filters for HVAC systems, available with aluminum, galvanized steel or stainless-steel frames.",
    ogImage: "/images/catalog/foam-1.webp",
  },

  "category/paint-booth-rolls": {
    titleAr: "رولات فلاتر كبائن الدهان Paint Booth Filters | إبيو IPEWO",
    titleEn: "Paint Booth Filter Rolls for Spray Booths | IPEWO",
    descAr: "رولات فلاتر لكبائن الدهان لالتقاط الغبار ورذاذ الطلاء وتحسين جودة الهواء، متاحة بمقاسات وكثافات مختلفة حسب الاستخدام.",
    descEn: "Paint booth filter rolls for capturing dust and paint overspray, available in different sizes and densities for spray booth applications.",
    ogImage: "/images/catalog/paint-booth-rolls-1.webp",
  },

  "category/filter-equipment": {
    titleAr: "مستلزمات ومهمات تصنيع الفلاتر الصناعية | إبيو IPEWO",
    titleEn: "Air Filter Components & Manufacturing Equipment | IPEWO",
    descAr: "توريد وتصنيع مستلزمات الفلاتر من الشبك والفريمات والصاج المشرح بمقاسات وخامات مختلفة لتصنيع فلاتر الهواء.",
    descEn: "Air filter components including frames, mesh and expanded metal for manufacturing HVAC and industrial air filtration products.",
    ogImage: "/images/catalog/filter-equipment-1.webp",
  },

  "category/cat-9": {
    titleAr: "استيراد وتوريد فلاتر التكييف المركزي والصناعية | إبيو IPEWO",
    titleEn: "Imported HVAC, HEPA & ULPA Filters in Egypt | IPEWO",
    descAr: "استيراد وتوريد فلاتر تكييف مركزي وHEPA وULPA من إيطاليا وتركيا والإمارات وأمريكا وماليزيا للشركات والقطاعات الحيوية.",
    descEn: "IPEWO imports HVAC, HEPA and ULPA filters from Italy, Turkey, UAE, USA and Malaysia for industrial and critical sectors.",
    ogImage: "/images/catalog/cat-9-1.webp",
  },

  "category/cat-11": {
    titleAr: "أنواع فلاتر التكييف ومعايير تنقية الهواء | إبيو IPEWO",
    titleEn: "Air Filter Types & Filtration Standards | IPEWO",
    descAr: "تعرف على أنواع فلاتر التكييف ومعايير ASHRAE وEN وتصنيفات HEPA المستخدمة في أنظمة تنقية وترشيح الهواء.",
    descEn: "Learn about air filter types and ASHRAE, EN 779, EN 16890 and EN 1822 standards for HVAC, HEPA and air filtration systems.",
    ogImage: "/images/catalog/cat-11-1.webp",
  },

  "category/bag-and-rigid": {
    titleAr: "فلاتر باج وريجد F5-F9 للتكييف المركزي | إبيو IPEWO",
    titleEn: "Bag & Rigid F5–F9 Filters for HVAC Systems | IPEWO",
    descAr: "فلاتر Bag وRigid بدرجات F5 إلى F9 لأنظمة التكييف المركزي، بمقاسات قياسية وخاصة وكفاءة عالية لتنقية الهواء.",
    descEn: "Bag and rigid filters from F5 to F9 for HVAC systems, available in standard and custom sizes for efficient air filtration.",
    ogImage: "/images/catalog/bag-and-rigid-1.webp",
  },

  "category/hepa": {
    titleAr: "فلاتر HEPA عالية الكفاءة لتنقية الهواء | إبيو IPEWO",
    titleEn: "High-Efficiency HEPA Filters for Air Filtration | IPEWO",
    descAr: "فلاتر HEPA بكفاءة تصل إلى 99.99% لاحتجاز الجسيمات الدقيقة وتنقية الهواء، مع تصنيع وتوريد للقطاعات الحيوية.",
    descEn: "HEPA filters with up to 99.99% efficiency for capturing fine particles in HVAC, cleanroom and critical air filtration systems.",
    ogImage: "/images/catalog/hepa-1.webp",
  },

  "category/dust-collectors": {
    titleAr: "فلاتر مجمعات الأتربة Dust Collector الصناعية | إبيو IPEWO",
    titleEn: "Dust Collector Filter Bags for Industrial Systems | IPEWO",
    descAr: "فلاتر لمجمعات الأتربة والمواد الدقيقة، تشمل Needle Felt Filter Bags بمقاسات وأنواع مختلفة للتطبيقات الصناعية.",
    descEn: "Dust collector filter bags for industrial dust and fine particle collection, available in multiple sizes and materials for demanding applications.",
    ogImage: "/images/catalog/dust-collectors-1.webp",
  },

  "category/cat-5": {
    titleAr: "خامات فلاتر الهواء والتكييف الصناعي | إبيو IPEWO",
    titleEn: "Air Filter Media & Materials for HVAC Filters | IPEWO",
    descAr: "خامات فلاتر لباد وباج وكربون وكرتون وألومنيوم وفوم وHEPA ورولات دهان بجودة عالية لتصنيع فلاتر الهواء والتكييف.",
    descEn: "Filter media and materials including felt, bag, carbon, aluminum, foam and HEPA media for HVAC and industrial air filter manufacturing.",
    ogImage: "/images/catalog/cat-5-1.webp",
  },

  "category/cat-10": {
    titleAr: "فلاتر الهواء للقطاعات الصناعية والحيوية | إبيو IPEWO",
    titleEn: "Air Filters for Industrial & Critical Sectors | IPEWO",
    descAr: "فلاتر تكييف وHEPA وULPA للمستشفيات ومصانع الأغذية والأدوية والبتروكيماويات ومحطات الطاقة والمباني الإدارية.",
    descEn: "HVAC, HEPA and ULPA filters for hospitals, food, pharma, petrochemical, power and commercial facilities.",
    ogImage: "/images/catalog/cat-10-1.webp",
  },

  // Sub-Products
  "product/pre-filters/aluminum": {
    titleAr: "فلاتر ألومنيوم G2 للتكييف المركزي | إبيو IPEWO",
    titleEn: "Aluminum G2 Pre Filters for HVAC Systems | IPEWO",
    descAr: "فلاتر ألومنيوم G2 للتكييف المركزي ووحدات AHU وDX، بمقاسات وفريمات متعددة وتصنيع حسب الطلب من إبيو",
    descEn: "Aluminum G2 pre filters for AHU, DX and HVAC systems, available in multiple sizes and frame options with custom manufacturing.",
    ogImage: "/images/catalog/pre-filters-aluminum-1.webp",
  },

  "product/pre-filters/felt": {
    titleAr: "فلاتر لباد G3/G4 للتكييف المركزي | إبيو IPEWO",
    titleEn: "Felt G3/G4 Pre Filters for HVAC & Fan Coil Units | IPEWO",
    descAr: "فلاتر لباد G3 وG4 للترشيح الأولي ووحدات Fan Coil، بألياف صناعية لرفع كفاءة جمع الغبار وتقليل الجسيمات الخشنة",
    descEn: "Felt G3/G4 pre filters for HVAC and fan coil units, designed to capture coarse dust and improve air filtration performance.",
    ogImage: "/images/catalog/pre-filters-felt-1.webp",
  },

  "product/pre-filters/cardboard": {
    titleAr: "فلاتر كرتون G4 للتكييف والتهوية HVAC | إبيو IPEWO",
    titleEn: "Cardboard G4 Pre Filters for HVAC Systems | IPEWO",
    descAr: "فلاتر كرتون G4 للترشيح الأولي في أنظمة HVAC، لحجز الغبار والجسيمات الخشنة وحماية فلاتر F7 وF9 وHEPA.",
    descEn: "Cardboard G4 pre filters for HVAC systems, designed to capture coarse dust and protect F7, F9 and HEPA filters.",
    ogImage: "/images/catalog/pre-filters-cardboard-1.webp",
  },

  "product/pre-filters/carbon": {
    titleAr: "فلاتر الكربون النشط لتنقية الهواء وإزالة الروائح | إبيو IPEWO",
    titleEn: "Activated Carbon Filters for Air Purification | IPEWO",
    descAr: "فلاتر كربون نشط لإزالة الروائح والغازات وVOCs من الهواء، مناسبة لأنظمة تنقية الهواء والتكييف المركزي.",
    descEn: "Activated carbon filters remove odors, gases, chlorine and VOCs from air purification and HVAC systems.",
    ogImage: "/images/catalog/pre-filters-carbon-1.webp",
  },

  "product/pre-filters/fan-coil": {
    titleAr: "فلاتر Fan Coil G2 وG3/G4 لوحدات التكييف | إبيو IPEWO",
    titleEn: "Fan Coil G2 & G3/G4 Filters for FCU Systems | IPEWO",
    descAr: "فلاتر Fan Coil G2 وG3/G4 لحجز الغبار وحماية الكويل والمروحة، بمقاومة منخفضة وتدفق هواء مناسب لوحدات FCU.",
    descEn: "Fan coil G2 and G3/G4 filters for FCU systems, designed to capture dust, protect coils and support efficient airflow.",
    ogImage: "/images/catalog/pre-filters-fan-coil-1.webp",
  },

  "product/pre-filters/fiberglass": {
    titleAr: "فلاتر فيبر جلاس G3 لأنظمة HVAC وكبائن الدهان | إبيو IPEWO",
    titleEn: "Fiberglass G3 Pre Filters for HVAC & Paint Booths | IPEWO",
    descAr: "فلاتر فيبر جلاس G3 للترشيح الأولي في أنظمة HVAC وكبائن الدهان، بفريم كرتون وكفاءة مناسبة لحجز الغبار والجسيمات.",
    descEn: "Fiberglass G3 pre filters for HVAC systems and paint booths, designed to capture dust and support efficient air filtration.",
    ogImage: "/images/catalog/pre-filters-fiberglass-1.webp",
  },

  "product/hepa/v-shape": {
    titleAr: "فلاتر HEPA V-Shape عالية التدفق للهواء | إبيو IPEWO",
    titleEn: "V-Shape HEPA Filters for High Airflow Systems | IPEWO",
    descAr: "فلاتر HEPA V-Shape عالية الكفاءة والتدفق لأنظمة HVAC والتطبيقات الصناعية، بمقاسات ومواصفات متعددة حسب الطلب.",
    descEn: "V-Shape HEPA filters for high airflow HVAC and industrial systems, delivering efficient filtration with compact design and low pressure drop.",
    ogImage: "/images/catalog/hepa-v-shape-1.webp",
  },

  "product/hepa/abslute-mini-plate": {
    titleAr: "فلاتر HEPA Absolute Mini Pleat عالية الكفاءة | إبيو IPEWO",
    titleEn: "HEPA Absolute Mini Pleat Filters for Cleanrooms | IPEWO",
    descAr: "فلاتر HEPA Mini Pleat لتنقية الهواء بكفاءة عالية وفرق ضغط منخفض، مناسبة للغرف النظيفة وأنظمة HVAC والتطبيقات الحساسة.",
    descEn: "HEPA Mini Pleat filters with high efficiency and low pressure drop for cleanrooms, HVAC systems and critical air filtration.",
    ogImage: "/images/catalog/hepa-abslute-mini-plate-1.webp",
  },

  "product/hepa/terminal": {
    titleAr: "فلاتر HEPA Terminal للغرف النظيفة والمستشفيات | إبيو IPEWO",
    titleEn: "HEPA Terminal Filters for Cleanrooms & Hospitals | IPEWO",
    descAr: "فلاتر HEPA Terminal للغرف النظيفة والمستشفيات والمختبرات، لتنقية الهواء بكفاءة عالية في التطبيقات الحساسة.",
    descEn: "HEPA terminal filters for cleanrooms, hospitals and laboratories, designed for high-efficiency air filtration in critical environments.",
    ogImage: "/images/catalog/hepa-terminal-1.webp",
  },

  "product/hepa/deep-plate": {
    titleAr: "فلاتر HEPA Deep Pleat عالية الكفاءة لتنقية الهواء | إبيو IPEWO",
    titleEn: "HEPA Deep Pleat Filters for HVAC & Cleanrooms | IPEWO",
    descAr: "فلاتر HEPA Deep Pleat بكفاءة عالية لاحتجاز الجسيمات الدقيقة، مناسبة لأنظمة HVAC والغرف النظيفة والتطبيقات الحساسة.",
    descEn: "HEPA Deep Pleat filters for HVAC, cleanrooms and critical applications, delivering high-efficiency filtration of fine particles.",
    ogImage: "/images/catalog/hepa-deep-plate-1.webp",
  },

  "product/hepa/high-temprature-filters": {
    titleAr: "فلاتر HEPA للحرارة العالية High Temperature | إبيو IPEWO",
    titleEn: "High-Temperature HEPA Filters for Industrial Systems | IPEWO",
    descAr: "فلاتر HEPA مقاومة للحرارة العالية للتطبيقات الصناعية والأفران وأنظمة تنقية الهواء التي تتطلب أداءً ثابتًا في درجات حرارة مرتفعة.",
    descEn: "High-temperature HEPA filters for ovens, industrial processes and air filtration systems requiring stable performance at elevated heat.",
    ogImage: "/images/catalog/hepa-high-temprature-filters-1.webp",
  },

  "product/hepa/ulpa-filters": {
    titleAr: "فلاتر ULPA فائقة الكفاءة لتنقية الهواء | إبيو IPEWO",
    titleEn: "ULPA Filters for Ultra-High Efficiency Air Filtration | IPEWO",
    descAr: "فلاتر ULPA عالية الكفاءة لاحتجاز أدق الجسيمات، مناسبة للغرف النظيفة والمختبرات والتطبيقات التي تتطلب أعلى مستويات تنقية الهواء.",
    descEn: "ULPA filters for cleanrooms, laboratories and critical environments requiring ultra-high efficiency filtration of extremely fine particles.",
    ogImage: "/images/catalog/hepa-ulpa-filters-1.webp",
  },
};

export function buildPageMetadata({
  locale,
  path = "",
  seoKey,
  fallbackTitle,
  fallbackDesc,
  fallbackImage,
}: {
  locale: string;
  path?: string;
  seoKey?: string;
  fallbackTitle?: string;
  fallbackDesc?: string;
  fallbackImage?: string;
}): Metadata {
  const isAr = locale === "ar";
  const seo = (seoKey && pageSeoData[seoKey]) ? pageSeoData[seoKey] : undefined;

  const title = seo
    ? (isAr ? seo.titleAr : seo.titleEn)
    : (fallbackTitle || (isAr ? "إبيو - IPEWO Air Filtration & Industrial Solutions" : "IPEWO - Air Filtration & Industrial Solutions"));

  const description = seo
    ? (isAr ? seo.descAr : seo.descEn)
    : (fallbackDesc || (isAr ? "تصنيع وتوريد فلاتر التكييف المركزي وأنظمة تنقية الهواء في مصر" : "HVAC and industrial air filtration manufacturing and supply in Egypt"));

  const rawImage = seo?.ogImage || fallbackImage || "/ipewo-logo.webp";
  const ogImageUrl = rawImage.startsWith("http")
    ? rawImage
    : `${SITE_URL}${rawImage.startsWith("/") ? rawImage : `/${rawImage}`}`;

  // Normalized path with trailing slash
  const cleanPath = path ? path.replace(/^\/+|\/+$/g, "") : "";
  const arUrl = cleanPath ? `${SITE_URL}/ar/${cleanPath}/` : `${SITE_URL}/ar/`;
  const enUrl = cleanPath ? `${SITE_URL}/en/${cleanPath}/` : `${SITE_URL}/en/`;
  const canonicalUrl = isAr ? arUrl : enUrl;

  const defaultKeywords = isAr
    ? [
        "فلاتر تكييف مركزي",
        "فلاتر هواء",
        "فلاتر هيبا",
        "فلاتر HEPA",
        "فلاتر ULPA",
        "فلاتر AHU",
        "فلاتر Fan Coil",
        "تنقية الهواء",
        "إبيو",
        "IPEWO",
        "مصر",
      ]
    : [
        "HVAC filters",
        "Air filters Egypt",
        "HEPA filters",
        "ULPA filters",
        "AHU filters",
        "Fan coil filters",
        "Air filtration systems",
        "IPEWO",
        "IPEWO filters",
      ];

  return {
    title,
    description,
    keywords: defaultKeywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: arUrl,
        en: enUrl,
        "x-default": arUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: isAr ? "إبيو IPEWO" : "IPEWO Filters",
      locale: isAr ? "ar_EG" : "en_US",
      alternateLocale: isAr ? ["en_US"] : ["ar_EG"],
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
