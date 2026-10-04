import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { MapPin, Mail, PhoneCall, Printer, Smartphone, Globe } from "lucide-react";
import Image from "next/image";


export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations("contact");
  const isRtl = locale === "ar";

  return (
    <main className="min-h-screen bg-slate-50 pt-29 pb-16">
      {/* Map Section */}
      <div className="w-full h-100 md:h-125 relative">
        <Image
          src="/images/contact/hero.bmp"
          alt="Contact Hero"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Page Title Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-xl">
            {t("pageTitle")}
          </h1>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Address Card */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300">
            <div className="text-start">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t("addressTitle")}</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[200px]">
                {t("addressValue")}
              </p>
            </div>
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <MapPin className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300">
            <div className="text-start">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t("emailTitle")}</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[200px]">
                {t("emailValue")}
              </p>
            </div>
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300">
            <div className="text-start">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t("phoneTitle")}</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[200px]" dir="ltr">
                {t("phoneValue")}
              </p>
            </div>
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <PhoneCall className="w-8 h-8 text-white" />
            </div>
          </div>

        </div>
      </div>

      {/* Contact Details Full Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <p className="text-slate-500 font-bold mb-2">{t("stayConnected")}</p>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12">{t("contactHeading")}</h2>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-8 text-start">
          
          {/* Map Side */}
          <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-lg border border-slate-100 min-h-[400px] lg:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.6118501198!2d31.258464353492723!3d30.059611343360662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e29f3c1b3f5%3A0x868d4a4d6bc7dbb1!2sNasr%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1715000000000!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>

          {/* Cards Side */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 flex flex-col items-start gap-5 hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 mb-1">{t("addressTitle")}</p>
                <p className="text-base font-bold text-slate-800 leading-relaxed">{t("fullAddress").replace("العنوان : ", "").replace("Address: ", "")}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 flex flex-col items-start gap-5 hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                <Printer className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 mb-1">{isRtl ? "الهاتف / الفاكس" : "Phone / Fax"}</p>
                <p className="text-base font-bold text-slate-800" dir="ltr">{t("phoneFax").replace("تليفون/فاكس: ", "").replace("Phone/Fax: ", "")}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 flex flex-col items-start gap-5 hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Smartphone className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 mb-1">{isRtl ? "الهاتف المحمول" : "Mobile"}</p>
                <p className="text-base font-bold text-slate-800" dir="ltr">{t("mobile").replace("موبايل: ", "").replace("Mobile: ", "")}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 flex flex-col items-start gap-5 hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 mb-1">{isRtl ? "البريد الإلكتروني" : "Emails"}</p>
                <a href={`mailto:${t("email1").replace("E-mail: ", "")}`} className="block text-base font-bold text-slate-800 hover:text-blue-600 transition-colors" dir="ltr">
                  {t("email1").replace("E-mail: ", "")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
