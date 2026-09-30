"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";

export default function Gallery() {
  const t = useTranslations("gallery");
  const locale = useLocale();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { src: "/images/products/primary/468511583_122165124332050465_5080404655674054655_n.jpg", title: locale === "ar" ? "فلاتر ابتدائية - ألومنيوم" : "Primary Aluminum Filters" },
    { src: "/images/products/hepa/704041974_122218616588050465_5342743417406722168_n.jpg", title: locale === "ar" ? "فلاتر هيبا عالية الكفاءة" : "High-Efficiency HEPA Filters" },
    { src: "/images/products/bag-rigid/16112651_1822365324689958_6686259729897216666_o.jpg", title: locale === "ar" ? "فلاتر الباج والريجد" : "Bag & Rigid Filters" },
    { src: "/images/products/paint/468125548_122165047682050465_4601384919979319396_n.jpg", title: locale === "ar" ? "رولات فلاتر كبائن الدهان" : "Paint Booth Filter Rolls" },
    { src: "/images/products/dust/custom_engineered_dust_collection_system_large.jpg", title: locale === "ar" ? "أنظمة حجز الغبار الصناعي" : "Industrial Dust Collection Systems" },
    { src: "/images/products/media/1630479804791.jpg", title: locale === "ar" ? "خامات ووسائط الفلترة" : "Filter Media & Raw Materials" },
    { src: "/images/products/foam/15b55f95-bbd4-41f9-ade6-47bddff53e40.jpg", title: locale === "ar" ? "فلاتر الفوم المتخصصة" : "Specialized Foam Filters" },
    { src: "/images/products/equipment/FB_IMG_1606945531264.jpg", title: locale === "ar" ? "مهمات تصنيع الفلاتر" : "Filter Manufacturing Equipment" },
    { src: "/images/products/primary/469279125_122166207350050465_7182114009012383809_n.jpg", title: locale === "ar" ? "فلاتر الكرتون المضغوط" : "Pleated Carton Filters" },
    { src: "/images/products/hepa/mgh-13gwh-galvanized-frame-hepa-filters-v-bank-design-292-mm (1).jpg", title: locale === "ar" ? "فلاتر V-Shape هيبا" : "V-Shape HEPA Filters" },
    { src: "/images/products/paint/187885988_2285688954900992_2197314563246218708_n.jpg", title: locale === "ar" ? "رولات فلاتر الدهان" : "Paint Filter Rolls" },
    { src: "/images/products/dust/91825180_2409734585793485_6559244943162867712_n.jpg", title: locale === "ar" ? "أكياس حجز الأتربة" : "Dust Collector Bags" },
  ];

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  }, [selectedIndex, images.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex, images.length]);

  return (
    <section id="gallery" className="py-28 relative bg-slate-50 overflow-hidden border-t border-slate-200/80">
      
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-100 border border-blue-200 text-sm font-extrabold text-blue-800 shadow-sm">
            <ImageIcon className="w-4 h-4 text-blue-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Gallery Grid - Masonry-like layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-16">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              onClick={() => setSelectedIndex(idx)}
              className={`relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md cursor-pointer group hover:shadow-xl hover:border-blue-400 transition-all duration-300 ${
                idx % 5 === 0 ? "sm:col-span-2 h-72 sm:h-80" : "h-64"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </span>
                <div className="p-2.5 rounded-full bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Image Modal Lightbox with Navigation */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-[80vh] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Nav arrows */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-all cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Caption bar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-sm font-bold shadow-lg">
                {images[selectedIndex].title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
