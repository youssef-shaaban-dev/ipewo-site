import { productsData } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGallery from "@/components/ui/ProductGallery";
import ParsedText from "@/components/ui/ParsedText";

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
            <ProductGallery images={productData.images} title={title} />

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
                  {title}
                </h1>
                <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8"></div>
                
                <ParsedText text={isRtl 
                  ? (productData.descAr || `هذه الصفحة مخصصة لمنتج ${title}. نحن نقدم أفضل الحلول لضمان جودة الهواء باستخدام أحدث تقنيات الفلاتر في العالم.`)
                  : (productData.descEn || `This page is dedicated to the ${title} product. We provide the best solutions for air quality using the latest filter technologies in the world.`)} 
                />
              </div>


            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
