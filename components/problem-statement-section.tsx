"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { CurrencyIcon as CurrencyDollar, AlertTriangle, Users } from "lucide-react"

export function ProblemStatementSection() {
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
    <section ref={sectionRef} className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Today, Physical Work Is:</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProblemCard
            icon={<CurrencyDollar className="w-12 h-12 text-emerald-600" />}
            title="Expensive"
            value={isVisible ? 21 : 0}
            unit="trillion"
            description="/year tied to manual labor costs"
          />

          <ProblemCard
            icon={<AlertTriangle className="w-12 h-12 text-emerald-600" />}
            title="Dangerous"
            value={isVisible ? 395 : 0}
            unit="million"
            description="accidents and 3M deaths/year"
          />

          <ProblemCard
            icon={<Users className="w-12 h-12 text-emerald-600" />}
            title="Scarce"
            value={isVisible ? 50 : 0}
            unit="million"
            description="worker shortage by the end of 2030"
          />
        </div>
      </div>
    </section>
  )
}

interface ProblemCardProps {
  icon: React.ReactNode
  title: string
  value: number
  unit: string
  description: string
}

function ProblemCard({ icon, title, value, unit, description }: ProblemCardProps) {
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
        setCount(Math.min(Math.ceil(increment * currentStep), value))
        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepTime)

      return () => clearInterval(interval)
    }
  }, [value])

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="flex justify-center items-baseline mb-4">
        <span className="text-4xl font-bold text-emerald-600">${count}</span>
        <span className="text-2xl ml-1 text-emerald-600">{unit}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
