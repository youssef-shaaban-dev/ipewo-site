"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, CheckCircle, Users, Zap, Mail, MessageCircle } from "lucide-react";

export default function Careers() {
  const t = useTranslations("careers");

  return (
    <section id="careers" className="py-16 relative bg-slate-50 overflow-hidden border-t border-slate-200/80">

      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-sm font-extrabold text-cyan-800 shadow-sm">
            <Briefcase className="w-4 h-4 text-cyan-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Main Job Announcement Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-200/80 shadow-2xl shadow-cyan-900/5 mt-12 relative overflow-hidden"
        >
          {/* Card Header (Job Title) */}
          <div className="border-b border-slate-100 pb-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-cyan-50 rounded-2xl text-cyan-600 shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">{t("jobTitle")}</h3>
                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                  {t("jobDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Requirements & Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Assistants */}
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                {t("req1Title")}
              </h4>
              <p className="text-slate-600 font-medium leading-relaxed pr-7 rtl:pr-7 ltr:pl-7">
                {t("req1Desc")}
              </p>
            </div>

            {/* Technicians */}
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                {t("req2Title")}
              </h4>
              <p className="text-slate-600 font-medium leading-relaxed pr-7 rtl:pr-7 ltr:pl-7">
                {t("req2Desc")}
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-2 md:col-span-2 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                {t("benefitsTitle")}
              </h4>
              <p className="text-slate-700 font-bold leading-relaxed pr-7 rtl:pr-7 ltr:pl-7">
                {t("benefitsDesc")}
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl shadow-blue-900/20">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10 text-center md:text-start w-full md:w-auto">
              <p className="text-blue-100 font-bold mb-5 flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {t("contactText")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                {/* Email Box */}
                <a href="mailto:ipewo@yahoo.com" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all p-4 rounded-2xl border border-white/10 backdrop-blur-sm group">
                  <div className="p-2.5 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div className="text-start">
                    <p className="text-xs text-blue-200 font-medium mb-0.5">{t("emailLabel")}</p>
                    <p className="text-base sm:text-lg font-bold tracking-wide">{t("emailValue")}</p>
                  </div>
                </a>

                {/* Phone Box */}
                <a href="https://wa.me/201014298465" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-all p-4 rounded-2xl border border-white/10 backdrop-blur-sm group">
                  <div className="p-2.5 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-green-300" />
                  </div>
                  <div className="text-start">
                    <p className="text-xs text-blue-200 font-medium mb-0.5">{t("whatsappLabel")}</p>
                    <p className="text-base sm:text-lg font-bold tracking-wider" dir="ltr">{t("whatsappNumber")}</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* CTA Button */}
            <a 
              href="https://wa.me/201014298465"
              target="_blank"
              rel="noreferrer"
              className="relative z-10 shrink-0 bg-white text-blue-700 px-8 py-4 rounded-2xl font-black hover:bg-cyan-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl w-full md:w-auto"
            >
              <span className="text-lg">{t("contactText").replace(":", "")}</span>
              <div className="p-1 bg-blue-100 rounded-full">
                <ArrowUpRight className="w-5 h-5 rtl:-rotate-90" />
              </div>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
