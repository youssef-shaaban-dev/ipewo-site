"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, CheckCircle, Users, Zap } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function Careers() {
  const t = useTranslations("careers");
  const locale = useLocale();

  const positions = [
    {
      title: locale === "ar" ? "مهندس جودة واختبارات فلاتر" : "Filter Quality & Testing Engineer",
      type: locale === "ar" ? "دوام كامل" : "Full Time",
      dept: locale === "ar" ? "قسم الجودة والتصنيع" : "Quality & Manufacturing",
    },
    {
      title: locale === "ar" ? "فني تصنيع وتجميع فلاتر هيبا" : "HEPA Filter Assembly Technician",
      type: locale === "ar" ? "دوام كامل" : "Full Time",
      dept: locale === "ar" ? "خط الإنتاج" : "Production Line",
    },
    {
      title: locale === "ar" ? "مسؤول مبيعات وتوريدات صناعية" : "Industrial Sales & Supply Manager",
      type: locale === "ar" ? "دوام كامل" : "Full Time",
      dept: locale === "ar" ? "قسم المبيعات" : "Sales Department",
    },
  ];

  return (
    <section id="careers" className="py-28 relative bg-slate-50 overflow-hidden border-t border-slate-200/80">

      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-sm font-extrabold text-cyan-800 shadow-sm">
            <Briefcase className="w-4 h-4 text-cyan-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Positions Cards */}
        <div className="max-w-4xl mx-auto space-y-5 mt-14">
          {positions.map((pos, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
            >
              <div className="space-y-2">
                <div className="text-xl font-black text-slate-900 flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{pos.title}</span>
                </div>
                <div className="text-sm text-slate-500 font-semibold flex items-center gap-3 rtl:pr-8 ltr:pl-8">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {pos.dept}
                  </span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span className="text-blue-600 font-bold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" />
                    {pos.type}
                  </span>
                </div>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all w-fit shadow-sm"
              >
                <span>{t("applyNow")}</span>
                <ArrowUpRight className="w-4 h-4 rtl:-rotate-90" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
