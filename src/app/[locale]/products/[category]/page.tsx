import { productsData } from "@/data/products";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ui/ProductGallery";
import ParsedText from "@/components/ui/ParsedText";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/data/seo";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    productsData.map((cat) => ({
      locale,
      category: cat.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  setRequestLocale(locale);
  const catData = productsData.find((c) => c.id === category);

  const fallbackTitle = catData
    ? (locale === "ar" ? `${catData.nameAr} | إبيو IPEWO` : `${catData.nameEn} | IPEWO`)
    : undefined;
  const fallbackDesc = catData
    ? (locale === "ar" ? catData.descAr?.replace(/\s+/g, " ").trim().slice(0, 160) : catData.descEn?.replace(/\s+/g, " ").trim().slice(0, 160))
    : undefined;
  const fallbackImage = catData?.images?.[0];

  return buildPageMetadata({
    locale,
    path: `products/${category}`,
    seoKey: `category/${category}`,
    fallbackTitle,
    fallbackDesc,
    fallbackImage,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
  const { locale, category } = await params;
  setRequestLocale(locale);
  const catData = productsData.find((c) => c.id === category);

  if (!catData) {
    notFound();
  }

  const isRtl = locale === "ar";
  const title = isRtl ? catData.nameAr : catData.nameEn;

  return (
    <main className="bg-white pt-32 pb-16">
      <section className="px-4">

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ProductGallery images={catData.images} title={title} />
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
                  {title}
                </h1>

                <ParsedText text={isRtl
                  ? (catData.descAr!)
                  : (catData.descEn!)}
                />
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </main>
  );
}
