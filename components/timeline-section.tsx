"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineEvent {
  year: string
  title: string
  description: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "Now",
    title: "Marcel v0.1 Prototype",
    description: "First functional prototype with basic mobility and manipulation capabilities",
  },
  {
    year: "2026",
    title: "Marcel v0.2",
    description: "Enhanced capabilities with improved AI learning and advanced sensor integration",
  },
  {
    year: "2027",
    title: "Marcel v1.0 Industrial Launch",
    description: "Full commercial launch with industrial-grade durability and comprehensive task capabilities",
  },
  {
    year: "2030",
    title: "Mainstream Humanoid Working Robots",
    description: "Widespread adoption across multiple industries with specialized variants",
  },
]

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % timelineEvents.length)
          }, 3000)

          return () => clearInterval(interval)
        }
      },
      { threshold: 0.1 },
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current)
      }
    }
  }, [])

  return (
    <section ref={timelineRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Perfect Timing</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-gray-200"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <TimelineItem
                  key={index}
                  event={event}
                  index={index}
                  isActive={index === activeIndex}
                  position={index % 2 === 0 ? "left" : "right"}
                  onHover={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  event: TimelineEvent
  index: number
  isActive: boolean
  position: "left" | "right"
  onHover: () => void
}

function TimelineItem({ event, index, isActive, position, onHover }: TimelineItemProps) {
  const commonClasses = `
    relative z-10 md:w-[calc(50%-20px)] 
    bg-white rounded-lg shadow-lg p-6
    border-2 transition-all duration-300
    ${isActive ? "border-emerald-500 scale-105" : "border-transparent"}
  `

  const leftClasses = `ml-8 md:ml-0 md:mr-auto ${position === "left" ? "block" : "md:hidden"}`
  const rightClasses = `ml-8 md:ml-auto ${position === "right" ? "block" : "md:hidden"}`

  return (
    <div
      className={`
        flex flex-col md:flex-row items-start md:items-center
        ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
      `}
    >
      <div className={`${commonClasses} ${position === "left" ? leftClasses : rightClasses}`} onMouseEnter={onHover}>
        <div className="flex items-center mb-4">
          <span className="text-emerald-600 font-bold text-xl">{event.year}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600">{event.description}</p>
      </div>

      {/* Timeline point */}
      <div className="absolute left-[-5px] md:left-1/2 md:transform md:translate-x-[-50%]">
        <div
          className={`
            w-[11px] h-[11px] rounded-full
            transition-all duration-300
            ${isActive ? "bg-emerald-500 scale-150" : "bg-gray-400"}
          `}
        ></div>
      </div>
    </div>
  )
}
