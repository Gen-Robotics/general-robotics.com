import { Punchline } from "@/components/punchline";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div>
        <Punchline />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
