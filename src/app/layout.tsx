import type { Metadata } from "next";
import { Tajawal, Inter } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "إيبويو - IPEWO Air Filtration & Industrial Solutions",
  description: "حلول متقدمة لفلترة الهواء والنقاء الصناعي - فلاتر هيبا وفلاتر التكييف المركزي",
  keywords: ["Air Filters", "HEPA Filters", "فلاتر هواء", "فلاتر هيبا", "IPEWO", "إيبويو"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className={`${tajawal.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
