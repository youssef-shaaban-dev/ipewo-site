"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function Hero() {
  const t = useTranslations("hero");

  const sliderImages = [
    { url: "/images/hero/slide-1.jpg" },
    { url: "/images/hero/slide-2.jpg" },
    { url: "/images/hero/slide-3.jpg" },
    { url: "/images/hero/slide-4.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  }, [sliderImages.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  }, [sliderImages.length]);

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={sliderImages[currentIndex].url}
              alt="IPEWO Hero Slide"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-slate-900/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Center Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-16">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-72 h-36 md:w-96 md:h-48 mb-6"
        >
          <Image
            src="/ipewo-logo.webp"
            alt="IPEWO Logo"
            fill
            className="object-contain brightness-0 invert drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
            priority
          />
        </motion.div>

        {/* Text Lines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-md leading-tight"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl font-bold text-blue-400 mb-10 drop-shadow-md"
        >
          {t("title")}
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors shadow-lg"
          >
            <span>{t("ctaPrimary")}</span>
            <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
          </Link>
        </motion.div>
      </div>

      {/* Edge Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-20 cursor-pointer hidden sm:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-12 h-12 drop-shadow-md font-light stroke-[1.5]" />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-20 cursor-pointer hidden sm:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-12 h-12 drop-shadow-md font-light stroke-[1.5]" />
      </button>

      {/* Pagination Dots Bottom Center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer border border-white/80 ${
              idx === currentIndex
                ? "bg-transparent scale-110"
                : "bg-white/90"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
