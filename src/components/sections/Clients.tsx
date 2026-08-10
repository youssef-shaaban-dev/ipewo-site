"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Users, Building, Stethoscope, Factory, Wind, Sparkles } from "lucide-react";

export default function Clients() {
  const t = useTranslations("clients");

  const sectors = [
    { icon: Stethoscope, name: "المستشفيات والرعاية الطبية", enName: "Hospitals & Healthcare" },
    { icon: Factory, name: "مصانع الأدوية والصيدلة", enName: "Pharmaceutical Plants" },
    { icon: Wind, name: "أنظمة التكييف والتهوية HVAC", enName: "HVAC & Air Handling" },
    { icon: Building, name: "كبائن الدهان والسيارات", enName: "Automotive Spray Booths" },
    { icon: Sparkles, name: "المصانع والقطاعات الثقيلة", enName: "Heavy Industrial Factories" },
  ];

  return (
    <section id="clients" className="py-24 relative bg-white overflow-hidden border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700 shadow-sm">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            {t("title")}
          </h2>
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Client Sectors Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
          {sectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl text-center flex flex-col items-center justify-center space-y-3 group hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 shadow-sm"
              >
                <div className="p-3.5 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {sector.name}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {sector.enName}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
