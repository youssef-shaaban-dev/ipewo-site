import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProductsGrid from "@/components/sections/ProductsGrid";
import Clients from "@/components/sections/Clients";
import Careers from "@/components/sections/Careers";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsGrid />
      <About />
      <Clients />
      <Careers />
    </>

  );
}
