"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2, Building2, Target } from "lucide-react";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <section id="about" className="py-24 relative bg-slate-50 overflow-hidden border-y border-slate-200/70">
      
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

           {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: locale === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full min-h-87.5 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-[6px] border-white"
          >
            <Image
              src="/images/hero/slide-1.jpg"
              alt={t("title")}
              fill
              className="object-cover"
            />
          </motion.div>

        </div>

        {/* Products List (Text based as requested) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-slate-200/80 shadow-2xl shadow-blue-900/5 transition-all mt-16 max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Subtle decoration inside the box */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

          <div className="flex items-center gap-4 mb-10 relative z-10">
            <div className="w-1.5 h-8 bg-blue-600 rounded-full" />
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-relaxed">{t("productsListTitle")}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-slate-700 font-semibold text-lg relative z-10">
            
            {/* Column 1 */}
            <div className="space-y-10">
              {/* Product 1 */}
              <div>
                <p className="font-extrabold text-blue-900 text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
                  {t("product1Title").replace("1-", "").trim()}
                </p>
                <ul className="grid grid-cols-2 gap-3 px-2">
                  {t.raw("product1Items").map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 whitespace-nowrap text-slate-600 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue-400">
                      {item.replace("-", "").trim()}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product 2 */}
              <p className="font-extrabold text-blue-900 text-lg flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">2</span>
                {t("product2").replace("2-", "").trim()}
              </p>
            </div>

            {/* Column 2 */}
            <div className="space-y-10">
              {/* Product 3 */}
              <div>
                <p className="font-extrabold text-blue-900 text-lg mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">3</span>
                  {t("product3Title").replace("3-", "").trim()}
                </p>
                <div className="flex flex-wrap gap-2 px-2">
                  {t.raw("product3Items").map((item: string, idx: number) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold border border-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Products 4, 5, 6 */}
              <div className="space-y-6">
                {[
                  { text: t("product4"), num: "4" },
                  { text: t("product5"), num: "5" },
                  { text: t("product6"), num: "6" }
                ].map((prod, idx) => (
                  <p key={idx} className="font-extrabold text-blue-900 text-lg flex items-start gap-3 leading-snug">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-sm mt-0.5">{prod.num}</span>
                    <span className="pt-1">{prod.text.replace(/^[4-6]-/, "").trim()}</span>
                  </p>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
