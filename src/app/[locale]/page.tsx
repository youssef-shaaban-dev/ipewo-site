import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProductsGrid from "@/components/sections/ProductsGrid";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/data/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  return buildPageMetadata({ locale, path: "", seoKey: "home" });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ProductsGrid />
      <About />
    </>
  );
}
