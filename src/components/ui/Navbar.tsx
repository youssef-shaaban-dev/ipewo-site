"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
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
  PhoneCall,
  Mail,
  Home,
  Info,
  Users,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

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

  const pathname = usePathname();
  const isForceSolid = pathname === "/contact";
  const isHeaderSolid = isScrolled || mobileMenuOpen || isForceSolid;

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
        isHeaderSolid
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md"
          : "bg-linear-to-b from-black/50 to-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className={`hidden lg:block border-b transition-all duration-300 ${
        isHeaderSolid ? "border-slate-200 bg-slate-50/50" : "border-white/10 bg-white/5 backdrop-blur-xs"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div></div>
            <div className={`flex items-center gap-6 text-sm font-medium ${isHeaderSolid ? "text-slate-600" : "text-white/90"}`}>
              <a href="tel:01014298465" className="flex items-center gap-2 hover:text-blue-600 transition-colors" dir="ltr">
                <span className="font-semibold tracking-wider">01014298465</span>
                <PhoneCall className={`w-4 h-4 ${isHeaderSolid ? "text-blue-600" : "text-cyan-400"}`} />
              </a>
              <a href="mailto:ipewo@yahoo.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors" dir="ltr">
                <span>ipewo@yahoo.com</span>
                <Mail className={`w-4 h-4 ${isHeaderSolid ? "text-blue-600" : "text-cyan-400"}`} />
              </a>
              <div className={`w-px h-4 ${isHeaderSolid ? "bg-slate-300" : "bg-white/30"}`}></div>
              <div className="flex items-center gap-4" dir="ltr">
                <a href="#" className={`hover:text-blue-600 transition-colors ${isHeaderSolid ? "text-slate-800" : "text-white"}`}>
                  <FacebookIcon className="w-4.5 h-4.5" />
                </a>
                <a href="#" className={`hover:text-blue-600 transition-colors ${isHeaderSolid ? "text-slate-800" : "text-white"}`}>
                  <LinkedinIcon className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isHeaderSolid ? "py-3.5" : "py-5"}`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-16 w-36 overflow-hidden p-1 transition-all">
              <Image
                src="/ipewo-logo.webp"
                alt="IPEWO Logo"
                fill
                className={`object-contain transition-all duration-300 ${isHeaderSolid ? "" : "brightness-0 invert"}`}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            <Link
              href="/"
              className={`px-4 py-2.5 text-base font-bold rounded-xl transition-all ${isHeaderSolid ? "text-slate-800 hover:text-blue-600 hover:bg-blue-50/80" : "text-white hover:text-cyan-300 hover:bg-white/10"}`}
            >
              {t("home")}
            </Link>

            <Link
              href="#about"
              className={`px-4 py-2.5 text-base font-bold rounded-xl transition-all ${isHeaderSolid ? "text-slate-800 hover:text-blue-600 hover:bg-blue-50/80" : "text-white hover:text-cyan-300 hover:bg-white/10"}`}
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
                className={`flex items-center gap-1.5 px-4 py-2.5 text-base font-bold rounded-xl transition-all cursor-pointer ${isHeaderSolid ? "text-slate-800 hover:text-blue-600 hover:bg-blue-50/80" : "text-white hover:text-cyan-300 hover:bg-white/10"}`}
              >
                <span>{t("products")}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsDropdownOpen ? (isHeaderSolid ? "rotate-180 text-blue-600" : "rotate-180 text-cyan-300") : ""
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
              href="#clients"
              className={`px-4 py-2.5 text-base font-bold rounded-xl transition-all ${isHeaderSolid ? "text-slate-800 hover:text-blue-600 hover:bg-blue-50/80" : "text-white hover:text-cyan-300 hover:bg-white/10"}`}
            >
              {t("clients")}
            </Link>

            <Link
              href="#careers"
              className={`px-4 py-2.5 text-base font-bold rounded-xl transition-all ${isHeaderSolid ? "text-slate-800 hover:text-blue-600 hover:bg-blue-50/80" : "text-white hover:text-cyan-300 hover:bg-white/10"}`}
            >
              {t("careers")}
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2.5 text-base font-bold rounded-xl transition-all ${isHeaderSolid ? "text-slate-800 hover:text-blue-600 hover:bg-blue-50/80" : "text-white hover:text-cyan-300 hover:bg-white/10"}`}
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center gap-4">
            <div className={isHeaderSolid ? "" : "opacity-90"}>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <div className={isHeaderSolid ? "" : "opacity-90"}>
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl focus:outline-none transition-colors ${isHeaderSolid ? "text-slate-800 hover:text-blue-600 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
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
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-4 pb-8 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2 max-h-[75vh] overflow-y-auto custom-scrollbar pr-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-4 px-3 py-3 rounded-2xl transition-all hover:bg-slate-50"
              >
                <div className="p-2.5 rounded-xl bg-slate-100/80 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <Home className="w-5 h-5" />
                </div>
                <span className="text-base font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{t("home")}</span>
              </Link>
              
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-4 px-3 py-3 rounded-2xl transition-all hover:bg-slate-50"
              >
                <div className="p-2.5 rounded-xl bg-slate-100/80 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <Info className="w-5 h-5" />
                </div>
                <span className="text-base font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{t("about")}</span>
              </Link>

              {/* Accordion Products Toggle */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="group w-full flex items-center justify-between px-3 py-3 rounded-2xl transition-all hover:bg-slate-50 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl transition-colors ${mobileProductsOpen ? "bg-blue-100 text-blue-600" : "bg-slate-100/80 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600"}`}>
                      <Filter className="w-5 h-5" />
                    </div>
                    <span className={`text-base transition-colors ${mobileProductsOpen ? "font-extrabold text-blue-600" : "font-bold text-slate-700 group-hover:text-blue-600"}`}>
                      {t("products")}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileProductsOpen ? "rotate-180 text-blue-600" : "text-slate-400 group-hover:text-blue-600"
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
                      className="overflow-hidden rtl:pr-14 ltr:pl-14 mt-1 space-y-1"
                    >
                      {productItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileProductsOpen(false);
                          }}
                          className="group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all hover:bg-blue-50"
                        >
                          <item.icon className="w-4.5 h-4.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                          <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors">{item.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="#clients"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-4 px-3 py-3 rounded-2xl transition-all hover:bg-slate-50"
              >
                <div className="p-2.5 rounded-xl bg-slate-100/80 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-base font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{t("clients")}</span>
              </Link>

              <Link
                href="#careers"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-4 px-3 py-3 rounded-2xl transition-all hover:bg-slate-50"
              >
                <div className="p-2.5 rounded-xl bg-slate-100/80 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-base font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{t("careers")}</span>
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-4 px-3 py-3 rounded-2xl transition-all hover:bg-slate-50"
              >
                <div className="p-2.5 rounded-xl bg-slate-100/80 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <span className="text-base font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{t("contact")}</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
