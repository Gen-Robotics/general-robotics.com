import { HeroSection } from "@/components/hero-section";
import { ProblemStatementSection } from "@/components/problem-statement-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div>
        <HeroSection />
        <ProblemStatementSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
