import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import SectionHero from "@/components/ui/SectionHero";

export default function ClientsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations("clients");
  const isRtl = locale === "ar";

  // List of all 19 client logos available in the public folder
  const clientLogos = [
    { src: "/images/clients/emaar.png", name: "Emaar" },
    { src: "/images/clients/aa6b2_citystars properties.jpg", name: "Citystars" },
    { src: "/images/clients/the-arab-contractors-logo.jpg", name: "Arab Contractors" },
    { src: "/images/clients/lamar-ar.png", name: "Lamar" },
    { src: "/images/clients/El-zomoruda for corn production.png", name: "El Zomoruda" },
    { src: "/images/clients/FB_IMG_1434568759548.jpg", name: "Client" },
    { src: "/images/clients/203357082884.jpg", name: "Client" },
    { src: "/images/clients/a64c4b24c3cbd29877ad409ebef06489.jpg", name: "Client" },
    { src: "/images/clients/images (1).png", name: "Client" },
    { src: "/images/clients/images (2).png", name: "Client" },
    { src: "/images/clients/images.png", name: "Client" },
    { src: "/images/clients/images.jpg", name: "Client" },
    { src: "/images/clients/165938_438370736241236_1700502331_n.jpg", name: "Client" },
    { src: "/images/clients/download (1).png", name: "Client" },
    { src: "/images/clients/download (2).png", name: "Client" },
    { src: "/images/clients/images (1).jpg", name: "Client" },
    { src: "/images/clients/images (2).jpg", name: "Client" },
    { src: "/images/clients/images (3).jpg", name: "Client" },
    { src: "/images/clients/images (4).jpg", name: "Client" },
    { src: "/images/clients/cairo-air-airport.jpeg", name: "Client" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      
      {/* Hero Section */}
      <SectionHero
        title={t("badge")}
        isRtl={isRtl}
        breadcrumb={{ label: t("badge") }}
      />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">{t("title")}</h2>
            <p className="text-lg md:text-xl font-medium text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {clientLogos.map((client, idx) => (
              <div 
                key={idx} 
                className="group relative h-40 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 flex items-center justify-center p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={client.src}
                  alt={`Client Logo ${idx + 1}`}
                  fill
                  className="object-contain p-6 transition-all duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

    </main>
  );
}
