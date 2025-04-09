import type React from "react"
import { Shield, Award, Cog } from "lucide-react"

export function ValuePropositionSection() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=800&width=1920"
          alt="Marcel robot in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Marcel is affordable, built to last, and to work hard. Not to show off.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AdvantageCard
            icon={<Cog className="w-8 h-8 text-emerald-400" />}
            title="Cutting-edge Technology"
            description="Luos + AI, powerful motors, modular design"
          />

          <AdvantageCard
            icon={<Award className="w-8 h-8 text-emerald-400" />}
            title="Made in Europe"
            description="World-class talents, EU compliance, EU market focus"
          />

          <AdvantageCard
            icon={<Shield className="w-8 h-8 text-emerald-400" />}
            title="Made for Industry"
            description="Rational design, industrial standards compliant, built to endure"
          />
        </div>
      </div>
    </section>
  )
}

interface AdvantageCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function AdvantageCard({ icon, title, description }: AdvantageCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white border border-white/20 transform transition-transform duration-300 hover:scale-105">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
      <p className="text-white/80 text-center">{description}</p>
    </div>
  )
}
