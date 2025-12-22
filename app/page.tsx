import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValuePropsSection } from "@/components/ValuePropsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValuePropsSection />
    </main>
  );
}
