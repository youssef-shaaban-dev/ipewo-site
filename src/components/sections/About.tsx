"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2, Building2, Target, PackageSearch } from "lucide-react";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <section id="about" className="py-24 relative bg-slate-50 border-y border-slate-200/70">
      
      {/* Subtle Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-100 border border-blue-200 text-sm font-extrabold text-blue-800 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            {t("title")}
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: locale === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full min-h-[350px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-[6px] border-white"
          >
            <Image
              src="/images/hero/slide-1.jpg"
              alt={t("title")}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: locale === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Company Summary */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{t("companySummaryTitle")}</h3>
              </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">{t("companySummaryDesc")}</p>
            </div>

            {/* Company Goal */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{t("companyGoalTitle")}</h3>
              </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">{t("companyGoalDesc")}</p>
            </div>

          </motion.div>

        </div>

        {/* Company Products Section */}
        <div className="mt-28">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-sm font-bold text-blue-700">
              <PackageSearch className="w-4 h-4" />
              <span>{t("companyProductsTitle")}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: num * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all group flex items-start gap-4"
              >
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 group-hover:scale-110 group-hover:text-blue-600 transition-transform" />
                </div>
                <h4 className="text-base font-bold text-slate-800 leading-relaxed group-hover:text-blue-700 transition-colors">
                  {t(`product${num}`)}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
