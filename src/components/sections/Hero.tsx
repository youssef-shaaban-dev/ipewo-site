"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");

  const sliderImages = [
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
    <section className="relative h-[60vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-white md:bg-slate-900">
      
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
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
              className="object-contain md:object-cover object-center opacity-90 md:opacity-100"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Gradient for Mobile Navbar Visibility */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-900/60 to-transparent z-10 md:hidden pointer-events-none" />

      {/* Main Content Center Overlay */}
      <div className={`relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mx-auto transition-transform duration-700 ${
        currentIndex === 0 ? "-translate-y-8 md:-translate-y-24" : "translate-y-0"
      }`}>
        
        {/* Logo */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
          className="relative w-56 h-28 md:w-72 md:h-36 mb-4"
        >
          {/* Desktop White Logo */}
          <div className="hidden md:block w-full h-full relative" style={{ filter: "brightness(0) invert(1) drop-shadow(0 4px 4px rgba(0,0,0,0.5))" }}>
            <Image
              src="/ipewo-logo.webp"
              alt="IPEWO Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Mobile Original Logo */}
          <div className="block md:hidden w-full h-full relative drop-shadow-md">
            <Image
              src="/ipewo-logo.webp"
              alt="IPEWO Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Text Lines */}
        <div className="w-full relative flex justify-center h-0 pointer-events-none">
          <AnimatePresence>
            {currentIndex === 0 && (
              <motion.div
                key="hero-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 flex flex-col items-center w-full px-4"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-800 md:text-white/95 md:drop-shadow-md leading-tight text-center max-w-4xl tracking-wide"
                >
                  {t("title")}
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Edge Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-20 cursor-pointer hidden sm:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-12 h-12 drop-shadow-md font-light stroke-[1.5] bg-black/70" />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-20 cursor-pointer hidden sm:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-12 h-12 drop-shadow-md font-light stroke-[1.5] bg-black/70" />
      </button>

      {/* Pagination Dots Bottom Center */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? "bg-blue-600 md:bg-white scale-125"
                : "bg-slate-300 hover:bg-slate-400 md:bg-white/40 md:hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
