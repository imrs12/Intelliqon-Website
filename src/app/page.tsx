import { AboutSection } from "@/components/homepage/about-section";
import { CTABanner } from "@/components/homepage/cta-banner";
import { HeroSection } from "@/components/homepage/hero-section";
import { ProductsSection } from "@/components/homepage/products-section";
import { ServicesSection } from "@/components/homepage/services-section";
import { TestimonialsSection } from "@/components/homepage/testimonials-section";
import { WhyChooseUsSection } from "@/components/homepage/why-choose-us-section";
import { Footer } from "@/components/homepage/footer";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProductsSection />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
