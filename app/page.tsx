import { HeroSection } from "@/components/hero-section"
import { ProblemStatementSection } from "@/components/problem-statement-section"
import { SolutionSection } from "@/components/solution-section"
import { TechnologySection } from "@/components/technology-section"
import { AICapabilitiesSection } from "@/components/ai-capabilities-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { TeamSection } from "@/components/team-section"
import { MarketOpportunitySection } from "@/components/market-opportunity-section"
import { TimelineSection } from "@/components/timeline-section"
import { ROISection } from "@/components/roi-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <ProblemStatementSection />
            <SolutionSection />
            <TechnologySection />
            <AICapabilitiesSection />
            <ValuePropositionSection />
            {/* <TeamSection /> */}
            <MarketOpportunitySection />
            <TimelineSection />
            {/* <ROISection /> */}
            {/* <CTASection /> */}
            <Footer />
        </main>
    )
}
