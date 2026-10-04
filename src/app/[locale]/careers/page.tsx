import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Briefcase, ChevronRight, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function CareersPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations("careers");
  const isRtl = locale === "ar";

  // Create an array for the jobs from the translation object
  // Since next-intl doesn't return objects directly easily if it's an array without raw, 
  // we can use raw() or just map it.
  const jobs = t.raw("jobs") as Array<{ title: string; desc: string }>;

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/careers/careers.jpg"
            alt="Careers Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-md">
            {t("badge")}
          </h1>
          <div className="flex items-center justify-center gap-3 text-white/90 text-sm md:text-base font-medium">
            <Link href="/" className="hover:text-cyan-300 transition-colors">
              {locale === "ar" ? "الرئيسية" : "Home"}
            </Link>
            <ChevronRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
            <span className="text-cyan-300">{t("badge")}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">{t("title")}</h2>
            <p className="text-lg font-medium text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50/50 hover:border-blue-100 transition-colors group flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-slate-100 text-center">
            <p className="text-slate-500 font-bold mb-6">{t("contactText")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${t("whatsappNumber").replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-1 transition-all w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                <span dir="ltr">{t("whatsappNumber")}</span>
              </a>
              <a
                href={`mailto:${t("emailValue")}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                <span>{t("emailValue")}</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
