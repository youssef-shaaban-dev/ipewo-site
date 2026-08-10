"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function Hero() {
  const t = useTranslations("hero");

  const sliderImages = [
    {
      url: "/images/hero/4_5789386688308446281 (2).jpg",
      tag: "فلاتر هيبا فائقة الكفاءة",
      badge: "ISO 9001 Certified Quality",
    },
    {
      url: "/images/hero/510465542_122187413426050465_8951695654285290265_n.jpg",
      tag: "أنظمة الفلترة الصناعية المتكاملة",
      badge: "Cleanrooms & Hospitals Standard",
    },
    {
      url: "/images/hero/634211589_122149209200973946_4627636532742139568_n (1).jpg",
      tag: "وسائط ومستلزمات تصنيع الفلاتر",
      badge: "Custom Engineering & Import",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center bg-linear-to-b from-blue-50/60 via-white to-slate-50 overflow-hidden">

      {/* Background Lighting & Soft Orbs */}
      <div className="absolute top-1/4 -right-20 w-125 h-125 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-125 h-125 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center rtl:lg:text-right ltr:lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-200 text-xs font-bold text-blue-700 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              <span>{t("badge")}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {t("title")}{" "}
              <span className="text-gradient-cyan block mt-2">
                IPEWO Air Systems
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto rtl:lg:mr-0 ltr:lg:ml-0 leading-relaxed font-normal">
              {t("subtitle")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center rtl:lg:justify-start ltr:lg:justify-start gap-4 pt-2">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>{t("ctaPrimary")}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm bg-white border border-slate-200 text-slate-800 shadow-md hover:bg-slate-50 hover:border-slate-300 hover:text-blue-600 transition-all duration-200"
              >
                <span>{t("ctaSecondary")}</span>
              </Link>
            </div>

          </motion.div>

          {/* Hero Image Slider Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Soft Light Frame Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-blue-400/30 to-cyan-400/30 blur-2xl pointer-events-none" />

              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 p-3 shadow-2xl">

                {/* Slider Container */}
                <div className="relative h-80 sm:h-105 w-full rounded-2xl overflow-hidden bg-slate-900">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6 }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={sliderImages[currentIndex].url}
                        alt="IPEWO Hero Slider Image"
                        fill
                        className="object-cover object-center"
                        priority
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Slider Controls (Next/Prev Arrows) */}
                  <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-3 -translate-y-1/2 p-2.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all cursor-pointer z-20"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-3 -translate-y-1/2 p-2.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all cursor-pointer z-20"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                  </button>

                  {/* Slide Indicators / Dots */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                    {sliderImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex
                            ? "w-8 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/80"
                          }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Floating Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-between z-20">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-blue-600 text-white shadow-md">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">
                          {sliderImages[currentIndex].tag}
                        </div>
                        <div className="text-[10px] text-slate-300">
                          {sliderImages[currentIndex].badge}
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      <Award className="w-3.5 h-3.5" />
                      <span>Certified</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
