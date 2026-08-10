"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { PhoneCall, MapPin, Mail, Clock, MessageSquare, ShieldCheck } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24 relative bg-white overflow-hidden border-t border-slate-200/80">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

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

        {/* Direct Action Buttons & Contact Line (Enlarged Fonts) */}
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
            className="inline-flex items-center gap-3.5 px-9 py-5 rounded-2xl font-extrabold text-base sm:text-lg bg-emerald-600 text-white shadow-xl shadow-emerald-500/25 hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquare className="w-6 h-6" />
            <span>محادثة واتساب المبيعات</span>
          </a>

          <a
            href="mailto:info@ipewo.com"
            className="inline-flex items-center gap-3.5 px-9 py-5 rounded-2xl font-extrabold text-base sm:text-lg bg-slate-900 text-white shadow-xl hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Mail className="w-6 h-6" />
            <span>info@ipewo.com</span>
          </a>
        </div>

        {/* Address & Working Hours Bar (Enlarged Fonts) */}
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
            <span>الدعم 24/7</span>
          </div>
        </div>

      </div>
    </section>
  );
}
