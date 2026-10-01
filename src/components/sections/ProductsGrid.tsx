"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ShieldCheck, Paintbrush, Wrench, Ship, Wind } from "lucide-react";
import { useState } from "react";

export default function ProductsGrid() {
  const t = useTranslations("products");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");

  const productsList = [
    {
      key: "primary",
      category: "primary",
      title: t("items.primary.title"),
      desc: t("items.primary.desc"),
      image: "/images/products/primary/468511583_122165124332050465_5080404655674054655_n.jpg",
      icon: Filter,
      badge: locale === "ar" ? "ألومنيوم • لباد • باج • كرتون • ريجد • فوم • فيبر جلاس" : "Aluminum • Felt • Bag • Carton • Rigid • Foam • Fiberglass",
    },
    {
      key: "hepa",
      category: "hepa",
      title: t("items.hepa.title"),
      desc: t("items.hepa.desc"),
      image: "/images/products/hepa/704041974_122218616588050465_5342743417406722168_n.jpg",
      icon: ShieldCheck,
      badge: locale === "ar" ? "تتحمل حتى 360°م • Absolute & Terminal & V-Shape" : "Up to 360°C • Absolute & Terminal & V-Shape",
      highlight: true,
    },
    {
      key: "carbon",
      category: "carbon",
      title: t("items.carbon.title"),
      desc: t("items.carbon.desc"),
      image: "/images/products/dust/China-Factory-Price-Dust-Collector-Filter-Bag-for-Filtration.jpg",
      icon: Wind,
      badge: locale === "ar" ? "امتصاص الروائح • Dust Collector Bags" : "Odor Absorption • Dust Collector Bags",
    },
    {
      key: "paint",
      category: "supplies",
      title: t("items.paint.title"),
      desc: t("items.paint.desc"),
      image: "/images/products/paint/468125548_122165047682050465_4601384919979319396_n.jpg",
      icon: Paintbrush,
      badge: locale === "ar" ? "رولات كبائن الدهان وفلاتر الباج" : "Spray Booth Rolls & Bag Filters",
    },
    {
      key: "equipment",
      category: "supplies",
      title: t("items.equipment.title"),
      desc: t("items.equipment.desc"),
      image: "/images/products/equipment/FB_IMG_1606945531264.jpg",
      icon: Wrench,
      badge: locale === "ar" ? "خامات • رولات ألومنيوم • إطارات" : "Materials • Aluminum Rolls • Frames",
    },
    {
      key: "import",
      category: "import",
      title: t("items.import.title"),
      desc: t("items.import.desc"),
      image: "/images/products/import/1630548953131.jpg",
      icon: Ship,
      badge: locale === "ar" ? "نستورد ونورد لجميع أنحاء العالم" : "Global Import & Export",
    },
  ];

  const categories = [
    { key: "all", label: locale === "ar" ? "جميع المنتجات" : "All Products" },
    { key: "primary", label: t("categories.primary") },
    { key: "hepa", label: t("categories.hepa") },
    { key: "carbon", label: t("categories.carbon") },
    { key: "supplies", label: t("categories.supplies") },
    { key: "import", label: locale === "ar" ? "الاستيراد" : "Import" },
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
              const Icon = item.icon;
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
                  <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Box */}
                  <div className="p-6 flex items-center justify-center bg-white">
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
