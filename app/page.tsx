import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValuePropsSection } from "@/components/ValuePropsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { AnimatedGlowBox } from "@/components/AnimatedGlowBox";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
// import { ModeTransition } from "@/components/ModeTransition"; // Desactivado temporalmente

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <ModeTransition /> */}
      <Header />
      <Hero />
      
      {/* Carrusel de testimonios - justo debajo del Hero */}
      <TestimonialsCarousel />
      
      {/* Caja con esquinas redondeadas - efecto de profundidad hacia dentro */}
      <AnimatedGlowBox>
        <ValuePropsSection />
      </AnimatedGlowBox>
      
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
