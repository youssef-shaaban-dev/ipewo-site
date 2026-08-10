"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Image as ImageIcon, Eye, X } from "lucide-react";
import { useState } from "react";

export default function Gallery() {
  const t = useTranslations("gallery");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/images/products/218308012_3611979768902288_2757719070187334027_n.jpg", title: "مرحلة تجميع الهياكل الفولاذية" },
    { src: "/images/products/218333536_3611980808902184_822794396412408802_n.jpg", title: "اختبارات الجودة وضغط الهواء" },
    { src: "/images/products/9275e558-8321-4019-a2f8-7ea0e8be6d1a.jpg", title: "فلاتر الأكياس لحجز الغبار" },
    { src: "/images/products/95897740_2545185825742313_5780224234575888384_n.jpg", title: "وسائط الفلترة عالية النقاء" },
    { src: "/images/products/Cq9xEONf95daoEZ1wgewmvb96tFze2tZeUkMvmj2.jpeg", title: "تصنيع الفلاتر الدقيقة" },
    { src: "/images/products/14522687_660286504144533_7098677189200325737_n.jpg", title: "منتجات التوريد والاستيراد" },
  ];

  return (
    <section id="gallery" className="py-24 relative bg-slate-50 overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700 shadow-sm">
            <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            {t("title")}
          </h2>
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item.src)}
              className="relative h-64 rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md cursor-pointer group hover:shadow-xl hover:border-blue-400 transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              
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

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-[80vh] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl p-2">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={selectedImage}
                alt="Expanded preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
