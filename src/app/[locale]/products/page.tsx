import { useTranslations } from "next-intl";
import { productsData } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProductsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("Index");
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-20 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
              {locale === "ar" ? "منتجاتنا وخدماتنا" : "Our Products & Services"}
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productsData.map((category) => (
              <Link
                key={category.id}
                href={`/${locale}/products/${category.id}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 flex items-center justify-center p-6">
                  {category.images && category.images.length > 0 ? (
                    <Image
                      src={category.images[0]}
                      alt={locale === "ar" ? category.nameAr : category.nameEn}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <Image
                      src="/ipewo-logo.webp"
                      alt="IPEWO Logo"
                      width={120}
                      height={60}
                      className="object-contain opacity-30 grayscale"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {locale === "ar" ? category.nameAr : category.nameEn}
                  </h3>
                  
                  <div className="mt-auto pt-4 flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700">
                    <span>{locale === "ar" ? "تصفح القسم" : "View Section"}</span>
                    <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
