import { productsData } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

// Dynamic route

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
  const { locale, category } = await params;
  const catData = productsData.find((c) => c.id === category);

  if (!catData) {
    notFound();
  }

  const isRtl = locale === "ar";
  const title = isRtl ? catData.nameAr : catData.nameEn;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <main className="min-h-screen bg-slate-50">
   

      {catData.subProducts && catData.subProducts.length > 0 ? (
        // Has sub-products: Show grid
        <section className="py-20 px-4 pt-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {catData.subProducts.map((sub) => (
                <Link
                  key={sub.id}
                  href={`/${locale}/products/${category}/${sub.id}`}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 flex items-center justify-center p-6">
                    {sub.images && sub.images.length > 0 ? (
                      <Image
                        src={sub.images[0]}
                        alt={isRtl ? sub.nameAr : sub.nameEn}
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
                      {isRtl ? sub.nameAr : sub.nameEn}
                    </h3>
                    <div className="mt-auto pt-4 flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700">
                      <span>{isRtl ? "عرض التفاصيل" : "View Details"}</span>
                      <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
      <section className="py-20 px-4 pt-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Product Images Gallery */}
              <div className="space-y-6 sticky top-24">
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-100">
                  {catData.images && catData.images.length > 0 ? (
                    <Image
                      src={catData.images[0]}
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
                
                {catData.images && catData.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {catData.images.slice(1, 5).map((img, idx) => (
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
                        ? `هذه الصفحة مخصصة لمنتجات ${title}. يتم تصنيع منتجاتنا بأعلى معايير الجودة لتلبية احتياجاتك في أنظمة التكييف المركزي وتنقية الهواء.`
                        : `This page is dedicated to ${title}. Our products are manufactured with the highest quality standards to meet your needs in central HVAC and air purification systems.`}
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {isRtl ? "المميزات الرئيسية" : "Key Features"}
                  </h3>
                  <ul className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">
                          {isRtl ? "جودة تصنيع عالية ومطابقة للمواصفات القياسية" : "High manufacturing quality conforming to standard specifications"}
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
      )}
    </main>
  );
}
