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
    { src: "/images/clients/client-emaar.webp", name: "Emaar" },
    { src: "/images/clients/client-citystars.webp", name: "Citystars" },
    { src: "/images/clients/client-arab-contractors.webp", name: "Arab Contractors" },
    { src: "/images/clients/client-lamar.webp", name: "Lamar" },
    { src: "/images/clients/client-el-zomoruda.webp", name: "El Zomoruda" },
    { src: "/images/clients/client-06.webp", name: "Client" },
    { src: "/images/clients/client-07.webp", name: "Client" },
    { src: "/images/clients/client-08.webp", name: "Client" },
    { src: "/images/clients/client-09.webp", name: "Client" },
    { src: "/images/clients/client-10.webp", name: "Client" },
    { src: "/images/clients/client-11.webp", name: "Client" },
    { src: "/images/clients/client-12.webp", name: "Client" },
    { src: "/images/clients/client-13.webp", name: "Client" },
    { src: "/images/clients/client-14.webp", name: "Client" },
    { src: "/images/clients/client-15.webp", name: "Client" },
    { src: "/images/clients/client-16.webp", name: "Client" },
    { src: "/images/clients/client-17.webp", name: "Client" },
    { src: "/images/clients/client-18.webp", name: "Client" },
    { src: "/images/clients/client-19.webp", name: "Client" },
    { src: "/images/clients/client-cairo-airport.webp", name: "Client" },
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
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
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
