"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold bg-slate-100 border border-slate-200 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-all duration-200 cursor-pointer disabled:opacity-50 shadow-sm"
      aria-label="Switch Language"
    >
      <Globe className="w-4 h-4 text-blue-600 animate-spin-slow" />
      <span>{locale === "ar" ? "English" : "العربية"}</span>
    </button>
  );
}
