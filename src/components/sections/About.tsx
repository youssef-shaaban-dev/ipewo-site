"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Award, Layers, Globe2, CheckCircle2 } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  const pillars = [
    {
      title: t("pillar1Title"),
      desc: t("pillar1Desc"),
      icon: Award,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: t("pillar2Title"),
      desc: t("pillar2Desc"),
      icon: Layers,
      color: "from-cyan-600 to-blue-600",
    },
    {
      title: t("pillar3Title"),
      desc: t("pillar3Desc"),
      icon: Globe2,
      color: "from-sky-600 to-cyan-600",
    },
  ];

  return (
    <section id="about" className="py-28 relative bg-slate-50 overflow-hidden border-y border-slate-200/70">
      
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-100 border border-blue-200 text-sm font-extrabold text-blue-800 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-18">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white p-8 rounded-3xl relative overflow-hidden group border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${pillar.color}`} />
                
                <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 w-fit mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
