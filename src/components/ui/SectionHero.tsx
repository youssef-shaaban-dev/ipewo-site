import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight, Home } from "lucide-react";

interface SectionHeroProps {
  title: string;
  imageSrc?: string;
  isRtl: boolean;
  breadcrumb?: {
    label: string;
  };
}

export default function SectionHero({ title, imageSrc, isRtl, breadcrumb }: SectionHeroProps) {
  return (
    <div className="relative w-full h-[45vh] min-h-87.5 md:min-h-100 flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0 bg-slate-50">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-center opacity-10 grayscale"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-slate-50/90" />
      </div>
      
      <div className="relative z-10 text-center px-4 flex flex-col items-center mt-10">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 drop-shadow-sm tracking-tight">
          {title}
        </h1>
        {breadcrumb && (
          <div className="flex items-center justify-center gap-2 md:gap-3 text-slate-600 text-sm md:text-base font-bold bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-200 shadow-sm">
            <Link href="/" className="hover:text-blue-600 transition-colors flex items-center">
              <Home size={18} className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <ChevronRight className={`w-4 h-4 md:w-5 md:h-5 text-slate-400 ${isRtl ? "rotate-180" : ""}`} />
            <span className="text-blue-600">{breadcrumb.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
