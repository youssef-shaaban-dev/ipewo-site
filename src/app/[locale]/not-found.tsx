import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  // We can use a raw translation here, or just hardcode some basic Arabic/English if it's missing in messages
  const t = useTranslations("nav"); // Just grabbing 'home' from nav if possible

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="bg-slate-100 p-6 rounded-full mb-6">
        <AlertCircle className="w-16 h-16 text-slate-400" />
      </div>
      <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-6">
        عذراً، الصفحة غير موجودة
      </h2>
      <p className="text-slate-500 max-w-md mx-auto mb-8 text-lg">
        الصفحة التي تبحث عنها قد تكون محذوفة، أو تم تغيير اسمها، أو غير متاحة مؤقتاً.
      </p>
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 hover:shadow-lg"
      >
        <Home className="w-5 h-5" />
        <span>العودة للرئيسية</span>
      </Link>
    </div>
  );
}
