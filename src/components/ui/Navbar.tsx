"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Filter, 
  ShieldCheck, 
  Paintbrush, 
  Wrench, 
  Building2, 
  Ship, 
  PhoneCall 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productItems = [
    { name: t("primaryFilters"), href: "#products", icon: Filter, desc: "فلاتر ابتدائية تنقية عالية" },
    { name: t("hepaFilters"), href: "#products", icon: ShieldCheck, desc: "فلاتر غرف نظيفة ومستشفيات" },
    { name: t("paintRolls"), href: "#products", icon: Paintbrush, desc: "وسائط لكبائن الدهان" },
    { name: t("manufacturingEquipment"), href: "#products", icon: Wrench, desc: "خامات وتجهيزات التصنيع" },
    { name: t("sectors"), href: "#products", icon: Building2, desc: "القطاعات المستفيدة" },
    { name: t("import"), href: "#products", icon: Ship, desc: "خدمات التوريد والاستيراد" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md py-3"
          : "bg-gradient-to-b from-white/95 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-blue-100 p-1 bg-white shadow-sm group-hover:border-blue-500 transition-all">
              <Image
                src="/ipewo2.jpeg"
                alt="IPEWO Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                IPEWO
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 uppercase font-semibold">
                {isRtl ? "إيبويو للفلاتر" : "Air Filtration"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-all"
            >
              {t("home")}
            </Link>

            <Link
              href="#about"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-all"
            >
              {t("about")}
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-all cursor-pointer"
              >
                <span>{t("products")}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsDropdownOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {productsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full ${
                      isRtl ? "right-0" : "left-0"
                    } mt-2 w-80 p-2 rounded-2xl bg-white border border-slate-200 shadow-2xl z-50`}
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {productItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setProductsDropdownOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-all group"
                          >
                            <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-800 group-hover:text-blue-600">
                                {item.name}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#gallery"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-all"
            >
              {t("gallery")}
            </Link>

            <Link
              href="#clients"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-all"
            >
              {t("clients")}
            </Link>

            <Link
              href="#careers"
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-all"
            >
              {t("careers")}
            </Link>
          </nav>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{t("contact")}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-4 pb-6 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
              >
                {t("home")}
              </Link>
              
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
              >
                {t("about")}
              </Link>

              <div className="px-4 py-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {t("products")}
                </span>
                <div className="grid grid-cols-1 gap-1 mt-2">
                  {productItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg flex items-center gap-2"
                    >
                      <item.icon className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
              >
                {t("gallery")}
              </Link>

              <Link
                href="#clients"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
              >
                {t("clients")}
              </Link>

              <Link
                href="#careers"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
              >
                {t("careers")}
              </Link>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md"
              >
                {t("contact")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
