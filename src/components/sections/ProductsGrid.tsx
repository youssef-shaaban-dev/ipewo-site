"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import { useState } from "react";

export default function ProductsGrid() {
  const t = useTranslations("products");
  const [activeCategory, setActiveCategory] = useState("all");

  const productsList = [
    { key: "aluminum", category: "primary", title: t("items.aluminum"), image: "/images/products/all/image1.jpeg" },
    { key: "bag", category: "primary", title: t("items.bag"), image: "/images/products/all/image2.jpeg" },
    { key: "carton", category: "primary", title: t("items.carton"), image: "/images/products/all/image3.jpeg" },
    { key: "rigid", category: "primary", title: t("items.rigid"), image: "/images/products/all/image4.jpeg" },
    { key: "foam", category: "primary", title: t("items.foam"), image: "/images/products/all/image5.jpeg" },
    { key: "fiberglass", category: "primary", title: t("items.fiberglass"), image: "/images/products/all/image6.jpeg" },
    { key: "carbon", category: "primary", title: t("items.carbon"), image: "/images/products/all/image7.jpeg" },
    { key: "carbon2", category: "primary", title: t("items.carbon2"), image: "/images/products/all/image8.jpeg" },
    { key: "dustCollector", category: "primary", title: t("items.dustCollector"), image: "/images/products/all/image9.jpeg" },
    
    { key: "hepaMini", category: "hepa", title: t("items.hepaMini"), image: "/images/products/all/image10.jpeg" },
    { key: "terminal", category: "hepa", title: t("items.terminal"), image: "/images/products/all/image11.jpeg" },
    { key: "vShape", category: "hepa", title: t("items.vShape"), image: "/images/products/all/image12.jpeg" },
    { key: "hepaDeep", category: "hepa", title: t("items.hepaDeep"), image: "/images/products/all/image13.jpeg" },

    { key: "rollBag", category: "materials", title: t("items.rollBag"), image: "/images/products/all/image14.jpeg" },
    { key: "rollAluminum", category: "materials", title: t("items.rollAluminum"), image: "/images/products/all/image15.png" },
  ];

  const categories = [
    { key: "all", label: t("categories.all") },
    { key: "primary", label: t("categories.primary") },
    { key: "hepa", label: t("categories.hepa") },
    { key: "materials", label: t("categories.materials") },
  ];

  const filteredProducts = activeCategory === "all"
    ? productsList
    : productsList.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-28 relative bg-white overflow-hidden">
      
      {/* Soft Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-sm font-extrabold text-cyan-800 shadow-sm">
            <Filter className="w-4 h-4 text-cyan-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-slate-100 text-slate-800 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          <AnimatePresence mode="wait">
            {filteredProducts.map((item, idx) => {
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 flex flex-col group hover:bg-white hover:border-blue-300 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
                >
                  {/* Image Box */}
                  <div className="relative h-64 w-full overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain object-center group-hover:scale-110 transition-transform duration-500 p-4"
                    />
                  </div>

                  {/* Content Box */}
                  <div className="p-6 flex items-center justify-center bg-white border-t border-slate-100">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors text-center">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
