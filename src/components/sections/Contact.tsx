"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { PhoneCall, MapPin, Mail, Clock, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");

  const contactCards = [
    {
      icon: PhoneCall,
      title: t("phoneLabel"),
      subtitle: "تواصل مباشر وحجز الاستشارات الفنية",
      value: "+20 100 000 0000",
      altValue: "+20 120 000 0000",
      actionText: "اتصل بنا الآن",
      href: "tel:+201000000000",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50 text-blue-600",
    },
    {
      icon: MessageSquare,
      title: "واتساب التوريد والمبيعات",
      subtitle: "استفسارات الأسعار والعروض الرسمية",
      value: "+20 100 000 0000",
      actionText: "محادثات واتساب",
      href: "https://wa.me/201000000000",
      color: "from-emerald-600 to-teal-600",
      bgColor: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: Mail,
      title: t("emailLabel"),
      subtitle: "المراسلات الرسمية وطلبات المناقصات",
      value: "info@ipewo.com",
      actionText: "إرسال بريد إلكتروني",
      href: "mailto:info@ipewo.com",
      color: "from-indigo-600 to-blue-600",
      bgColor: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: MapPin,
      title: t("address"),
      subtitle: "المقر الرئيسي والمصانع",
      value: t("addressVal"),
      actionText: "موقع المصنع",
      href: "#",
      color: "from-cyan-600 to-blue-700",
      bgColor: "bg-cyan-50 text-cyan-600",
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-white overflow-hidden border-t border-slate-200/80">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700 shadow-sm">
            <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            {t("title")}
          </h2>
          <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 flex flex-col justify-between space-y-6 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm group"
              >
                <div className="space-y-4">
                  <div className={`p-3.5 rounded-2xl ${card.bgColor} w-fit group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {card.subtitle}
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="text-sm font-extrabold text-slate-900" dir="ltr">
                      {card.value}
                    </div>
                    {card.altValue && (
                      <div className="text-xs text-slate-600 font-semibold mt-0.5" dir="ltr">
                        {card.altValue}
                      </div>
                    )}
                  </div>
                </div>

                <a
                  href={card.href}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors pt-4 border-t border-slate-200/80"
                >
                  <span>{card.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Working Hours Bar */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border border-blue-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-md">
              <Clock className="w-5 h-5" />
            </div>
            <div className="rtl:text-right ltr:text-left">
              <div className="text-xs font-bold text-slate-900">{t("workingHours")}</div>
              <div className="text-xs text-slate-600 font-medium">{t("workingHoursVal")}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>الدعم الفني والخدمات العاجلة متوفرة 24/7</span>
          </div>
        </div>

      </div>
    </section>
  );
}
