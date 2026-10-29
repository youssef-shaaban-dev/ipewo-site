import type { Metadata } from "next";
import { Tajawal, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { getStructuredData } from "@/data/schema";

import { buildPageMetadata, SITE_URL } from "@/data/seo";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);

  const baseMeta = buildPageMetadata({ locale, path: "", seoKey: "home" });
  return {
    metadataBase: new URL(SITE_URL),
    ...baseMeta,
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

  setRequestLocale(locale);

  const messages = await getMessages({ locale });
  const isRtl = locale === "ar";
  const jsonLd = getStructuredData(locale);

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      data-scroll-behavior="smooth"
      className={`${tajawal.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-N6T4GSWZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
      </head>
      <body className={`min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white ${isRtl ? "font-arabic" : ""}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
