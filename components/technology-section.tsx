"use client"

import type React from "react"

import { useState } from "react"
import { Server, Cpu, Layers } from "lucide-react"

export function TechnologySection() {
    return (
        <section id="technology" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Cutting-Edge Technology</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TechCard
                        icon={<Server className="w-12 h-12 text-emerald-600" />}
                        title="Operating System: Luos"
                        features={[
                            "World's most advanced OS for physical AI",
                            "Highly modular allowing quick iteration",
                            "Fast and real-time",
                            "Remote updates and AI data feedback",
                        ]}
                    />

                    <TechCard
                        icon={<Cpu className="w-12 h-12 text-emerald-600" />}
                        title="Motors"
                        features={[
                            "Zero shot Sim2Real",
                            "High torque to weight ratio",
                            "Low cost and durable",
                            "Patented technology",
                        ]}
                    />

                    <TechCard
                        icon={<Layers className="w-12 h-12 text-emerald-600" />}
                        title="Advanced Frame & Integration"
                        features={[
                            "Modular design to fit your needs",
                            "Generalizable control algorithms to fit your application",
                            "Easy task reconfiguration in a few minutes",
                            "Can adapt to your environment and existing infrastructure",
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

interface TechCardProps {
    icon: React.ReactNode
    title: string
    features: string[]
}

function TechCard({ icon, title, features }: TechCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`
        bg-white rounded-lg shadow-lg p-8 h-full
        transition-all duration-300
        ${isHovered ? "transform scale-105 shadow-xl" : ""}
      `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex justify-center mb-6">{icon}</div>
            <h3 className="text-xl font-bold text-center mb-6">{title}</h3>

            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <span className="mr-2 text-emerald-600 font-bold">•</span>
                        <span className="text-gray-700">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
