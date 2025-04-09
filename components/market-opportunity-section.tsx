"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { BadgeEuro, Lightbulb, Award } from "lucide-react"

export function MarketOpportunitySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Europe? The Perfect Market</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square lg:aspect-auto lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=500&width=500"
              alt="Map of Europe with industrial centers"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <MarketFeature
              icon={<BadgeEuro className="w-6 h-6 text-emerald-600" />}
              title="Demand"
              description="Protectionist policies and reshoring drive the need for local automation"
            />

            <MarketFeature
              icon={<Lightbulb className="w-6 h-6 text-emerald-600" />}
              title="Talent"
              description="World-class engineers at a fraction of U.S. costs"
            />

            <MarketFeature
              icon={<Award className="w-6 h-6 text-emerald-600" />}
              title="Opportunity"
              description="No dominant EU player in a massive, untapped market"
            />

            <div className="pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                <MarketStat
                  value={isVisible ? 12 : 0}
                  label="Trillion"
                  description="worldwide addressable market"
                  plus
                />

                <MarketStat
                  value={isVisible ? 1.8 : 0}
                  label="Trillion"
                  description="addressable market in Europe alone"
                  plus
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface MarketFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function MarketFeature({ icon, title, description }: MarketFeatureProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

interface MarketStatProps {
  value: number
  label: string
  description: string
  plus?: boolean
}

function MarketStat({ value, label, description, plus }: MarketStatProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (value > 0) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepTime = duration / steps
      const increment = value / steps
      let currentStep = 0

      const interval = setInterval(() => {
        currentStep++
        setCount(Math.min(increment * currentStep, value))
        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepTime)

      return () => clearInterval(interval)
    }
  }, [value])

  return (
    <div>
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-emerald-600">${count.toFixed(1)}</span>
        {plus && <span className="text-2xl font-bold text-emerald-600">+</span>}
        <span className="text-xl ml-1 text-gray-800">${label}</span>
      </div>
      <p className="text-gray-600">${description}</p>
    </div>
  )
}
