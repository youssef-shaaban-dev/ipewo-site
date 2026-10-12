import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProductsGrid from "@/components/sections/ProductsGrid";
import { setRequestLocale } from "next-intl/server";

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
