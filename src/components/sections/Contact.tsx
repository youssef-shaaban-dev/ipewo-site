"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { PhoneCall, MapPin, Mail, Clock, MessageSquare, ShieldCheck, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();

  return (
    <section id="contact" className="py-28 relative bg-white overflow-hidden border-t border-slate-200/80">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-100 border border-blue-200 text-sm font-extrabold text-blue-800 shadow-sm">
            <PhoneCall className="w-4 h-4 text-blue-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Direct Action Buttons */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
          <a
            href="tel:+201000000000"
            className="inline-flex items-center gap-3.5 px-9 py-5 rounded-2xl font-extrabold text-base sm:text-lg bg-blue-600 text-white shadow-xl shadow-blue-500/25 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <PhoneCall className="w-6 h-6" />
            <span dir="ltr">+20 100 000 0000</span>
          </a>

          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 px-9 py-5 rounded-2xl font-extrabold text-base sm:text-lg bg-emerald-600 text-white shadow-xl shadow-emerald-500/25 hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquare className="w-6 h-6" />
            <span>{locale === "ar" ? "محادثة واتساب المبيعات" : "WhatsApp Sales Chat"}</span>
          </a>

          <a
            href="mailto:info@ipewo.com"
            className="inline-flex items-center gap-3.5 px-9 py-5 rounded-2xl font-extrabold text-base sm:text-lg bg-slate-900 text-white shadow-xl hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Mail className="w-6 h-6" />
            <span>info@ipewo.com</span>
          </a>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg"
        >
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{t("name")}</label>
                <input
                  type="text"
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all"
                  placeholder={t("name")}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{t("phone")}</label>
                <input
                  type="tel"
                  dir="ltr"
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all"
                  placeholder="+20 1XX XXX XXXX"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{t("email")}</label>
                <input
                  type="email"
                  dir="ltr"
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{t("subject")}</label>
                <input
                  type="text"
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all"
                  placeholder={t("subject")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{t("message")}</label>
              <textarea
                rows={4}
                className="w-full px-5 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all resize-none"
                placeholder={t("message")}
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-black text-base bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-5 h-5" />
              <span>{t("send")}</span>
            </button>
          </form>
        </motion.div>

        {/* Address & Working Hours Bar */}
        <div className="mt-12 max-w-5xl mx-auto bg-slate-50 border-2 border-slate-200/90 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-right shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-blue-100 text-blue-600 shadow-sm">
              <MapPin className="w-7 h-7" />
            </div>
            <div className="rtl:text-right ltr:text-left space-y-0.5">
              <div className="text-base font-extrabold text-slate-900">{t("address")}</div>
              <div className="text-sm sm:text-base text-slate-600 font-semibold">{t("addressVal")}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-blue-100 text-blue-600 shadow-sm">
              <Clock className="w-7 h-7" />
            </div>
            <div className="rtl:text-right ltr:text-left space-y-0.5">
              <div className="text-base font-extrabold text-slate-900">{t("workingHours")}</div>
              <div className="text-sm sm:text-base text-slate-600 font-semibold">{t("workingHoursVal")}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-sm font-extrabold text-emerald-800 bg-emerald-100 px-5 py-3 rounded-full border border-emerald-300 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>{locale === "ar" ? "الدعم 24/7" : "24/7 Support"}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
