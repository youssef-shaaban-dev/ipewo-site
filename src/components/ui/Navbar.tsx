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
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productItems = [
    { name: t("primaryFilters"), href: "#products", icon: Filter },
    { name: t("hepaFilters"), href: "#products", icon: ShieldCheck },
    { name: t("paintRolls"), href: "#products", icon: Paintbrush },
    { name: t("manufacturingEquipment"), href: "#products", icon: Wrench },
    { name: t("sectors"), href: "#products", icon: Building2 },
    { name: t("import"), href: "#products", icon: Ship },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md py-3.5"
          : "bg-gradient-to-b from-white/95 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-16 w-36 overflow-hidden p-1 transition-all">
              <Image
                src="/ipewo-logo.webp"
                alt="IPEWO Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            <Link
              href="/"
              className="px-4 py-2.5 text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/80 rounded-xl transition-all"
            >
              {t("home")}
            </Link>

            <Link
              href="#about"
              className="px-4 py-2.5 text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/80 rounded-xl transition-all"
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
                className="flex items-center gap-1.5 px-4 py-2.5 text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/80 rounded-xl transition-all cursor-pointer"
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
                    } mt-2 w-80 p-2.5 rounded-2xl bg-white border border-slate-200 shadow-2xl z-50`}
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {productItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setProductsDropdownOpen(false)}
                            className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-blue-50 transition-all group"
                          >
                            <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-base font-bold text-slate-800 group-hover:text-blue-600">
                              {item.name}
                            </span>
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
              className="px-4 py-2.5 text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/80 rounded-xl transition-all"
            >
              {t("gallery")}
            </Link>

            <Link
              href="#clients"
              className="px-4 py-2.5 text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/80 rounded-xl transition-all"
            >
              {t("clients")}
            </Link>

            <Link
              href="#careers"
              className="px-4 py-2.5 text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/80 rounded-xl transition-all"
            >
              {t("careers")}
            </Link>
          </nav>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t("contact")}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-800 hover:text-blue-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-4 pb-6 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
              >
                {t("home")}
              </Link>
              
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
              >
                {t("about")}
              </Link>

              {/* Accordion Products Toggle */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-extrabold text-blue-600 hover:bg-blue-50 rounded-xl transition-all cursor-pointer"
                >
                  <span>{t("products")}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                      mobileProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden rtl:pr-3 ltr:pl-3 mt-1 space-y-1 border-r-2 rtl:border-r-blue-500 ltr:border-l-2 ltr:border-l-blue-500"
                    >
                      {productItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileProductsOpen(false);
                          }}
                          className="px-3.5 py-2.5 text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl flex items-center gap-3"
                        >
                          <item.icon className="w-4.5 h-4.5 text-blue-600" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
              >
                {t("gallery")}
              </Link>

              <Link
                href="#clients"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
              >
                {t("clients")}
              </Link>

              <Link
                href="#careers"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
              >
                {t("careers")}
              </Link>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 text-center py-3.5 rounded-xl text-base font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
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
