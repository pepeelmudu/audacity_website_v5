import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValuePropsSection } from "@/components/ValuePropsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { AnimatedGlowBox } from "@/components/AnimatedGlowBox";
import { GlobeSection } from "@/components/GlobeSection";
// import { ModeTransition } from "@/components/ModeTransition"; // Desactivado temporalmente

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <ModeTransition /> */}
      <Header />
      <Hero />
      
      {/* Título de introducción a la sección */}
      <div className="text-center pt-8 pb-4 md:pt-12 md:pb-6" style={{ backgroundColor: '#ECECEC' }}>
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl text-black mb-2 leading-tight"
          style={{ fontFamily: 'var(--font-aeonik-bold)' }}
        >
          What we do for teams.
        </h2>
        <p 
          className="text-base md:text-lg text-gray-600"
          style={{ fontFamily: 'var(--font-aeonik-regular)' }}
        >
          We hunt for humans already excelling in their field.
        </p>
      </div>
      
      {/* Caja con esquinas redondeadas - efecto de profundidad hacia dentro */}
      <AnimatedGlowBox>
        <ValuePropsSection />
      </AnimatedGlowBox>
      
      <HowItWorksSection />
      
      {/* Globo interactivo */}
      <GlobeSection />
      
      <FAQSection />
      <Footer />
    </main>
  );
}
