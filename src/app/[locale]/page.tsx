import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProductsGrid from "@/components/sections/ProductsGrid";
import Gallery from "@/components/sections/Gallery";
import Clients from "@/components/sections/Clients";
import Careers from "@/components/sections/Careers";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProductsGrid />
      <Gallery />
      <Clients />
      <Careers />
      <Contact />
      <Footer />
    </>

  );
}
