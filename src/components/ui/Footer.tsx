"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("nav");
  const locale = useLocale();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-200 pt-20 pb-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-36 rounded-2xl overflow-hidden bg-white border border-slate-700 p-2 shadow-lg hover:scale-105 transition-all">
                <Image
                  src="/ipewo-logo.webp"
                  alt="IPEWO Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </Link>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-md">
              {t("aboutText")}
            </p>

            <div className="flex items-center gap-2.5 text-sm text-blue-400 font-bold">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Certified Industrial Filtration Standard</span>
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
                <Link href="#about" className="hover:text-cyan-400 transition-colors">
                  {navT("about")}
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-cyan-400 transition-colors">
                  {navT("products")}
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-cyan-400 transition-colors">
                  {navT("gallery")}
                </Link>
              </li>
              <li>
                <Link href="#careers" className="hover:text-cyan-400 transition-colors">
                  {navT("careers")}
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
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-semibold text-slate-400">
          <div>{t("rights")}</div>
        </div>

      </div>
    </footer>
  );
}
