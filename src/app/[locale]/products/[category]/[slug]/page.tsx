import { productsData } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

// Dynamic route

export default async function SubProductPage({ params }: { params: Promise<{ locale: string; category: string; slug: string }> }) {
  const { locale, category, slug } = await params;
  const catData = productsData.find((c) => c.id === category);
  if (!catData) notFound();

  const productData = catData.subProducts?.find((s) => s.id === slug);
  if (!productData) notFound();

  const isRtl = locale === "ar";
  const title = isRtl ? productData.nameAr : productData.nameEn;

  return (
    <main className="min-h-screen bg-slate-50">
   

      <section className="py-20 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-12 text-sm font-medium text-slate-500 flex items-center gap-2">
            <Link href={`/${locale}/products`} className="hover:text-blue-600 transition-colors">
              {isRtl ? "المنتجات والخدمات" : "Products & Services"}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/products/${category}`} className="hover:text-blue-600 transition-colors">
              {isRtl ? catData.nameAr : catData.nameEn}
            </Link>
            <span>/</span>
            <span className="text-slate-800">{title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Product Images Gallery */}
            <div className="space-y-6 sticky top-24">
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-100">
                {productData.images && productData.images.length > 0 ? (
                  <Image
                    src={productData.images[0]}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image src="/ipewo-logo.webp" alt="IPEWO Logo" width={200} height={100} className="opacity-20 grayscale" />
                  </div>
                )}
              </div>
              
              {productData.images && productData.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {productData.images.slice(1, 5).map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-sm border border-slate-200">
                      <Image src={img} alt={`${title} ${idx + 2}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
                  {title}
                </h1>
                <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8"></div>
                
                <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                  <p>
                    {isRtl 
                      ? `هذه الصفحة مخصصة لمنتج ${title}. نحن نقدم أفضل الحلول لضمان جودة الهواء باستخدام أحدث تقنيات الفلاتر في العالم.`
                      : `This page is dedicated to the ${title} product. We provide the best solutions for air quality using the latest filter technologies in the world.`}
                  </p>
                </div>
              </div>

              <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {isRtl ? "المواصفات العامة" : "General Specifications"}
                </h3>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">
                        {isRtl ? "كفاءة ترشيح عالية ومقاومة للرطوبة ودرجات الحرارة" : "High filtration efficiency, moisture and temperature resistant"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <Link 
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto"
                >
                  {isRtl ? "طلب تسعير / استفسار" : "Request Quote / Inquiry"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
