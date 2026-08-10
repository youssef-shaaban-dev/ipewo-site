"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, CheckCircle } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function Careers() {
  const t = useTranslations("careers");

  const positions = [
    { title: "مهندس جودة وااختبارات فلاتر", type: "دوام كامل", dept: "قسم الجودة والتصنيع" },
    { title: "فني تصنيع وتجميع فلاتر هيبا", type: "دوام كامل", dept: "خط الإنتاج" },
    { title: "مسؤول مبيعات وتوريدات صناعية", type: "دوام كامل", dept: "قسم المبيعات" },
  ];

  return (
    <section id="careers" className="py-24 relative bg-slate-50 overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-xs font-bold text-cyan-800 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            {t("title")}
          </h2>
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Positions Cards */}
        <div className="max-w-4xl mx-auto space-y-4 mt-12">
          {positions.map((pos, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>{pos.title}</span>
                </div>
                <div className="text-xs text-slate-500 font-medium flex items-center gap-3">
                  <span>{pos.dept}</span>
                  <span>•</span>
                  <span className="text-blue-600 font-bold">{pos.type}</span>
                </div>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-600 hover:text-white transition-all w-fit shadow-sm"
              >
                <span>{t("applyNow")}</span>
                <ArrowUpRight className="w-3.5 h-3.5 rtl:-rotate-90" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
