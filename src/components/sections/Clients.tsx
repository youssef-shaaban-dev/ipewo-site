"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Users } from "lucide-react";

export default function Clients() {
  const t = useTranslations("clients");
  const locale = useLocale();
  const isRtl = locale === "ar";


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
  ];

  // Duplicate the logos to create an infinite scroll effect
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="py-16 relative bg-slate-50 overflow-hidden border-t border-slate-200/80">
      
      {/* Custom CSS for Marquee Animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(33.3333%); }
        }
        .animate-marquee {
          animation: ${isRtl ? 'scroll-right' : 'scroll-left'} 45s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full relative z-10 overflow-hidden">
        
        {/* Header Badge Only */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 text-sm font-extrabold text-blue-800 shadow-sm">
            <Users className="w-4 h-4 text-blue-600" />
            <span>{t("badge")}</span>
          </div>
        </div>

        {/* Client Logos Marquee */}
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 sm:gap-6 animate-marquee pause-on-hover w-max px-4">
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={idx}
                className="relative shrink-0 w-32 sm:w-40 h-20 sm:h-24 bg-white rounded-2xl border border-slate-200/90 p-4 flex items-center justify-center hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
