"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { ShieldCheck, PhoneCall, Mail, MapPin, Info } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("nav");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [showPartnership, setShowPartnership] = useState(false);

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-200 pt-20 pb-14 relative overflow-hidden">

      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-36 rounded-2xl overflow-hidden bg-white border border-slate-700 p-2 shadow-lg hover:scale-105 transition-all">
                <Image
                  src="/ipewo-logo.webp"
                  alt="IPEWO Logo"
                  fill
                  sizes="144px"
                  className="object-contain p-1"
                />
              </div>
            </Link>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-md">
              {t("aboutText")}
            </p>

            <div className="flex items-center gap-2.5 text-sm text-blue-400 font-bold">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>{locale === "ar" ? "معيار تصنيع فلاتر صناعية معتمد" : "Certified Industrial Filtration Standard"}</span>
            </div>

            {/* Contact info */}
            <div className="space-y-2 pt-2">
              <a href="tel:01014298465" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <PhoneCall className="w-4 h-4" />
                <span dir="ltr">01014298465</span>
              </a>
              <a href="mailto:ipewo@yahoo.com" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>ipewo@yahoo.com</span>
              </a>

              <a href="mailto:info@ipewofilters.com" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@ipewofilters.com</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>{locale === "ar" ? " مصر - المنطقة الصناعية بمسطرد" : "Egypt - Industrial Zone in Mostrod"}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm sm:text-base font-black text-white uppercase tracking-wider">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3 text-sm sm:text-base font-semibold text-slate-300">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  {navT("home")}
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-cyan-400 transition-colors">
                  {navT("products")}
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-cyan-400 transition-colors">
                  {navT("clients")}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-cyan-400 transition-colors">
                  {navT("careers")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  {navT("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm sm:text-base font-black text-white uppercase tracking-wider">
              {t("productsList")}
            </h4>
            <ul className="space-y-3 text-sm sm:text-base font-semibold text-slate-300">
              <li>
                <Link href="#products" className="hover:text-cyan-400 transition-colors">
                  {navT("primaryFilters")}
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-cyan-400 transition-colors">
                  {navT("hepaFilters")}
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-cyan-400 transition-colors">
                  {navT("paintRolls")}
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-cyan-400 transition-colors">
                  {navT("manufacturingEquipment")}
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-cyan-400 transition-colors">
                  {navT("import")}
                </Link>
              </li>
            </ul>

            {/* Language Switcher */}
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
          </div>

        </div>

        {/* Bottom Credits & Partnership */}
        <div className="pt-8 border-t border-slate-800 flex flex-col items-center justify-center text-center space-y-3">
        
          {/* Copyright */}
          <p className="max-w-4xl text-xs sm:text-[13px] font-semibold text-slate-400 leading-relaxed">
            {isRtl
              ? "© 2026 إبيو (IPEWO) - جميع الحقوق محفوظة. يُحظر تماماً الاستخدام غير المصرح به، بما في ذلك تدريب نماذج الذكاء الاصطناعي، أو إعادة الإنتاج، أو الاستغلال التجاري."
              : "© 2026 IPEWO - All content is copyrighted. Unauthorized use, including AI training, reproduction, or commercial exploitation, is strictly prohibited."}
          </p>

          {/* Crafted in Egypt & Developed by MRCO */}
          <p className="text-xs sm:text-sm font-semibold text-slate-300">
            {isRtl ? "صُنع بكل حب في مصر ❤️ " : "Proudly Crafted in Egypt with Love ❤️ "}
            <a
              href="https://mrco-egypt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4 font-bold"
            >
              {isRtl ? "تطوير الموقع من خلال شركة ميركو ايجيبت" : "Website developed by MRCO-Egypt"}
            </a>
          </p>

          {/* MRCO-Egypt Partnership Tooltip */}
          <div className="pt-2">
            <div
              className="inline-flex flex-wrap items-center justify-center gap-2 group relative cursor-help text-center select-none"
              onClick={() => setShowPartnership(!showPartnership)}
            >
              <p
                dir="ltr"
                className="text-xs sm:text-[13px] text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed max-w-[320px] sm:max-w-none border-b border-dashed border-slate-600 group-hover:border-cyan-400 pb-0.5 font-medium"
              >
                <span className="text-white font-bold">IPEWO | </span>
                <a
                  href="https://mrco-egypt.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors font-bold"
                >
                  Growth & Marketing by MRCO-Egypt
                </a>
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors font-medium">
                  {" "}a strategy-driven digital marketing and brand communication agency in Egypt
                </span>
              </p>

              <Info
                className={`w-4 h-4 transition-colors flex-shrink-0 inline-block ${
                  showPartnership ? "text-cyan-400" : "text-cyan-500 group-hover:text-cyan-400"
                }`}
              />

              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[90vw] sm:w-[460px] p-4 sm:p-5 bg-slate-950 rounded-xl border border-cyan-500/30 shadow-2xl transition-all duration-300 z-50 text-left pointer-events-none ${
                  showPartnership
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0"
                }`}
                dir="ltr"
              >
                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                  <span className="text-cyan-400 font-bold text-sm tracking-wide">Growth & Marketing</span>
                </div>
                <p className="text-xs sm:text-[13px] font-normal text-slate-300 leading-relaxed mb-3">
                  IPEWO - Growth & Marketing by MRCO-Egypt, a strategy-driven digital marketing and brand communication agency in Egypt, for brand strategy, digital marketing, and web development.
                </p>
                <p className="text-xs sm:text-[13px] font-normal text-slate-300 leading-relaxed">
                  MRCO-Egypt specializes in brand strategy, brand identity, web development, SEO, Generative Engine Optimization (GEO), and AI Optimization (AIO), helping businesses build distinctive brands and achieve measurable digital growth.
                </p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[7px] border-transparent border-t-cyan-500/30"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-950 -mt-[1px]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
