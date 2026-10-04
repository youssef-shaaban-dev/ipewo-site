import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight, Home } from "lucide-react";

interface SectionHeroProps {
  title: string;
  imageSrc: string;
  isRtl: boolean;
  breadcrumb?: {
    label: string;
  };
}

export default function SectionHero({ title, imageSrc, isRtl, breadcrumb }: SectionHeroProps) {
  return (
    <div className="relative w-full h-[45vh] min-h-87.5 md:min-h-100 flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-xl tracking-tight">
          {title}
        </h1>
        {breadcrumb && (
          <div className="flex items-center justify-center gap-2 md:gap-3 text-white/90 text-sm md:text-base font-bold bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mt-2">
            <Link href="/" className="hover:text-cyan-300 transition-colors flex items-center">
              <Home size={18} className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <ChevronRight className={`w-4 h-4 md:w-5 md:h-5 text-white/70 ${isRtl ? "rotate-180" : ""}`} />
            <span className="text-cyan-300">{breadcrumb.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
