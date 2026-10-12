import { productsData } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGallery from "@/components/ui/ProductGallery";
import ParsedText from "@/components/ui/ParsedText";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function generateStaticParams({
  params,
}: {
  params?: { locale?: string; category?: string };
} = {}) {
  if (params?.category) {
    const cat = productsData.find((c) => c.id === params.category);
    if (!cat || !cat.subProducts) return [];
    return cat.subProducts.map((sub) => ({ slug: sub.id }));
  }

  const result: { locale: string; category: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const cat of productsData) {
      if (cat.subProducts) {
        for (const sub of cat.subProducts) {
          result.push({
            locale,
            category: cat.id,
            slug: sub.id,
          });
        }
      }
    }
  }
  return result;
}

export default async function SubProductPage({ params }: { params: Promise<{ locale: string; category: string; slug: string }> }) {
  const resolvedParams = await params;
  console.error(">>> SUBPRODUCT PARAMS:", JSON.stringify(resolvedParams));
  const { locale, category, slug } = resolvedParams;
  setRequestLocale(locale);
  const catData = productsData.find((c) => c.id === category);
  if (!catData) notFound();

  const productData = catData.subProducts?.find((s) => s.id === slug);
  if (!productData) notFound();

  const isRtl = locale === "ar";
  const title = isRtl ? productData.nameAr : productData.nameEn;

  return (
    <main className="min-h-screen bg-slate-50 pt-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </main>
  );
}
