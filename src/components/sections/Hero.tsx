"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");

  const sliderImages = [
    { url: "/images/hero/slide-2.webp" },
    { url: "/images/hero/slide-3.webp" },
    { url: "/images/hero/slide-4.webp" },
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
    <section className="relative h-[60vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        {sliderImages.map((slide, idx) => (
          <div
            key={slide.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.url}
              alt="IPEWO Hero Slide"
              fill
              sizes="100vw"
              className="object-fill md:object-cover object-center opacity-90 md:opacity-100"
              priority={idx === 0}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>


      {/* Main Content Center Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mx-auto -translate-y-8 md:-translate-y-16">
        
        {/* Logo - Static (No rotation, bounce, or position shifting) */}
        <div className="relative w-56 h-28 md:w-72 md:h-36 mb-4">
          {/* White Logo */}
          <div className="w-full h-full relative" style={{ filter: "brightness(0) invert(1) drop-shadow(0 4px 4px rgba(0,0,0,0.5))" }}>
            <Image
              src="/ipewo-logo.webp"
              alt="IPEWO Logo"
              fill
              sizes="(max-width: 768px) 224px, 288px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Text Lines */}
        <div className="w-full relative flex justify-center h-0 pointer-events-none">
          <AnimatePresence initial={false}>
            {currentIndex === 0 && (
              <motion.div
                key="hero-text-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 flex flex-col items-center w-full px-4 gap-2 sm:gap-3"
              >
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/95 drop-shadow-md leading-tight text-center max-w-4xl tracking-wide">
                  {t("title")}
                </h1>
                <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 drop-shadow-md leading-tight text-center max-w-4xl tracking-wide">
                  {t("subtitle")}
                </h1>
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
        <ChevronLeft className="w-12 h-12 drop-shadow-md font-light stroke-[1.5] text-black bg-gray-100/50 rounded-full p-2" />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-20 cursor-pointer hidden sm:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-12 h-12 drop-shadow-md font-light stroke-[1.5] text-black bg-gray-100/50 rounded-full p-2" />
      </button>

      {/* Pagination Dots Bottom Center */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
