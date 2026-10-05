import type { Metadata } from "next";
import { Tajawal, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  return {
    title: "إبيو - IPEWO Air Filtration & Industrial Solutions",
    description: t("subtitle"),
    keywords: ["Air Filters", "HEPA Filters", "فلاتر هواء", "فلاتر هيبا", "IPEWO", "إبيو"],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  const messages = await getMessages({ locale });
  const isRtl = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${tajawal.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className={`min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white ${isRtl ? "font-arabic" : ""}`}>
        <main className="min-h-screen flex flex-col">
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Navbar />
            <main className="py-10">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
