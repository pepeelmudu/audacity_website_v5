import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValuePropsSection } from "@/components/ValuePropsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValuePropsSection />
      <HowItWorksSection />
    </main>
  );
}
