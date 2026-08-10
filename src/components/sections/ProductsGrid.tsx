"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Filter, ShieldCheck, Paintbrush, Wrench, Building2, Ship, ArrowUpRight, Flame, Wind } from "lucide-react";
import { useState } from "react";

export default function ProductsGrid() {
  const t = useTranslations("products");
  const [activeCategory, setActiveCategory] = useState("all");

  const productsList = [
    {
      key: "primary",
      category: "primary",
      title: t("items.primary.title"),
      desc: t("items.primary.desc"),
      image: "/images/docx_media/image1.jpeg",
      icon: Filter,
      badge: "فلاتر ألومنيوم • لباد • باج • كرتون • ريجد • فوم • فيبر جلاس",
    },
    {
      key: "hepa",
      category: "hepa",
      title: t("items.hepa.title"),
      desc: t("items.hepa.desc"),
      image: "/images/docx_media/image3.jpeg",
      icon: ShieldCheck,
      badge: "تتحمل حتى 360°م • Absolute & Terminal & V-Shape",
      highlight: true,
    },
    {
      key: "carbon",
      category: "carbon",
      title: t("items.carbon.title"),
      desc: t("items.carbon.desc"),
      image: "/images/docx_media/image10.jpeg",
      icon: Wind,
      badge: "امتصاص الروائح • Dust Collector Bags",
    },
    {
      key: "paint",
      category: "supplies",
      title: t("items.paint.title"),
      desc: t("items.paint.desc"),
      image: "/images/docx_media/image6.jpeg",
      icon: Paintbrush,
      badge: "رولات كبائن الدهان وفلاتر الباج",
    },
    {
      key: "equipment",
      category: "supplies",
      title: t("items.equipment.title"),
      desc: t("items.equipment.desc"),
      image: "/images/docx_media/image8.jpeg",
      icon: Wrench,
      badge: "خامات • رولات ألومنيوم • إطارات",
    },
    {
      key: "import",
      category: "import",
      title: t("items.import.title"),
      desc: t("items.import.desc"),
      image: "/images/docx_media/image12.jpeg",
      icon: Ship,
      badge: "تستورد وتورد لجميع أنحاء العالم",
    },
  ];

  const filteredProducts = activeCategory === "all"
    ? productsList
    : productsList.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 relative bg-white overflow-hidden">
      
      {/* Soft Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-xs font-bold text-cyan-800 shadow-sm">
            <Filter className="w-3.5 h-3.5 text-cyan-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            {t("title")}
          </h2>
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            جميع المنتجات
          </button>
          <button
            onClick={() => setActiveCategory("primary")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === "primary"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t("categories.primary")}
          </button>
          <button
            onClick={() => setActiveCategory("hepa")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === "hepa"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t("categories.hepa")}
          </button>
          <button
            onClick={() => setActiveCategory("carbon")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === "carbon"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t("categories.carbon")}
          </button>
          <button
            onClick={() => setActiveCategory("supplies")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === "supplies"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {t("categories.supplies")}
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProducts.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col group hover:bg-white hover:border-blue-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                {/* Image Box */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* High Temp Feature Badge */}
                  {item.highlight && (
                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 rounded-full bg-amber-500 text-white text-[10px] font-extrabold flex items-center gap-1 shadow-md">
                      <Flame className="w-3 h-3" />
                      <span>تتحمل حتى 360°م</span>
                    </div>
                  )}

                  {/* Category Tag */}
                  <div className="absolute bottom-3 right-4 rtl:right-auto rtl:left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/40 text-[11px] font-bold text-slate-800 shadow-sm">
                    {item.badge}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wide">
                      <Icon className="w-4 h-4" />
                      <span>IPEWO Filtration</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                      {t("viewDetails")}
                    </span>
                    <div className="p-2 rounded-full bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <ArrowUpRight className="w-4 h-4 rtl:-rotate-90" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
