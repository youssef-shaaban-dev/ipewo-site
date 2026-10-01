"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function Clients() {
  const t = useTranslations("clients");


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

  return (
    <section id="clients" className="py-16 relative bg-white overflow-hidden border-t border-slate-200/80">
      
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge Only */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-100 border border-blue-200 text-sm font-extrabold text-blue-800 shadow-sm">
            <Users className="w-4 h-4 text-blue-600" />
            <span>{t("badge")}</span>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="mt-10">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="relative h-20 sm:h-24 bg-white rounded-2xl border border-slate-200/90 p-3 flex items-center justify-center hover:border-blue-300 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain p-3 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
