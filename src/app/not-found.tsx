import { Tajawal, Inter } from "next/font/google";
import "./globals.css";
import { Link } from "@/i18n/routing";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function GlobalNotFound() {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-arabic">
        <main className="min-h-screen flex flex-col items-center justify-center p-4">
          <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slate-700 mb-6">عذراً، الصفحة غير موجودة</h2>
          <p className="text-slate-500 mb-8 text-center max-w-md">
            يبدو أن الرابط الذي اتبعته غير صحيح أو أن الصفحة قد تم نقلها.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all">
            العودة للرئيسية
          </Link>
        </main>
      </body>
    </html>
  );
}
