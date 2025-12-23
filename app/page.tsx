import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValuePropsSection } from "@/components/ValuePropsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { ModeTransition } from "@/components/ModeTransition";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ModeTransition />
      <Header />
      <Hero />
      <ValuePropsSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
