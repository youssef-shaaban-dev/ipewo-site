"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Users, Building, Stethoscope, Factory, Wind, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function Clients() {
  const t = useTranslations("clients");
  const locale = useLocale();

  const sectors = [
    { icon: Stethoscope, name: locale === "ar" ? "المستشفيات والرعاية الطبية" : "Hospitals & Healthcare", color: "from-red-500 to-rose-600" },
    { icon: Factory, name: locale === "ar" ? "مصانع الأدوية والصيدلة" : "Pharmaceutical Plants", color: "from-blue-500 to-indigo-600" },
    { icon: Wind, name: locale === "ar" ? "أنظمة التكييف والتهوية HVAC" : "HVAC & Air Handling", color: "from-cyan-500 to-blue-600" },
    { icon: Building, name: locale === "ar" ? "كبائن الدهان والسيارات" : "Automotive Spray Booths", color: "from-amber-500 to-orange-600" },
    { icon: Sparkles, name: locale === "ar" ? "المصانع والقطاعات الثقيلة" : "Heavy Industrial Factories", color: "from-slate-500 to-slate-700" },
    { icon: Zap, name: locale === "ar" ? "الغرف النظيفة والمختبرات" : "Cleanrooms & Labs", color: "from-emerald-500 to-teal-600" },
  ];

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
    <section id="clients" className="py-28 relative bg-white overflow-hidden border-t border-slate-200/80">
      
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-100 border border-blue-200 text-sm font-extrabold text-blue-800 shadow-sm">
            <Users className="w-4 h-4 text-blue-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Client Sectors Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-16">
          {sectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl text-center flex flex-col items-center justify-center space-y-3 group hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 shadow-sm"
              >
                <div className={`p-3.5 rounded-xl bg-gradient-to-br ${sector.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {sector.name}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Client Logos Grid */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>{locale === "ar" ? "شركاء نعتز بالتعاون معهم" : "Partners We're Proud to Work With"}</span>
            </div>
          </div>

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
