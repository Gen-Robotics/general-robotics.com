"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Lightbulb, Cpu, FlaskRoundIcon as Flask, RefreshCw } from "lucide-react"

export function AICapabilitiesSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const radius = Math.min(centerX, centerY) - 50

        // Animation variables
        let angle = 0
        let animationFrameId: number

        const drawCircle = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw outer circle
            ctx.beginPath()
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
            ctx.strokeStyle = "#10b981"
            ctx.lineWidth = 3
            ctx.stroke()

            // Draw connecting lines
            const steps = 4
            const angleStep = (2 * Math.PI) / steps

            for (let i = 0; i < steps; i++) {
                const pointAngle = i * angleStep + angle
                const nextPointAngle = ((i + 1) % steps) * angleStep + angle

                const x1 = centerX + radius * Math.cos(pointAngle)
                const y1 = centerY + radius * Math.sin(pointAngle)
                const x2 = centerX + radius * Math.cos(nextPointAngle)
                const y2 = centerY + radius * Math.sin(nextPointAngle)

                ctx.beginPath()
                ctx.moveTo(x1, y1)
                ctx.lineTo(x2, y2)
                ctx.strokeStyle = "#10b981"
                ctx.lineWidth = 2
                ctx.stroke()
            }

            // Animate
            angle += 0.005
            animationFrameId = requestAnimationFrame(drawCircle)
        }

        drawCircle()

        return () => {
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Physical AI Zero-Shot Transfer</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-square">
                        <canvas ref={canvasRef} width={500} height={500} className="w-full h-full"></canvas>
                    </div>

                    <div className="space-y-8">
                        <AIProcessStep
                            icon={<Lightbulb className="w-6 h-6 text-emerald-600" />}
                            title="Conception"
                            description="LUOS, actuators, mechanical parts, sensors"
                            step={1}
                        />

                        <AIProcessStep
                            icon={<Cpu className="w-6 h-6 text-emerald-600" />}
                            title="Generate AI"
                            description="Advanced algorithms and learning"
                            step={2}
                        />

                        <AIProcessStep
                            icon={<Flask className="w-6 h-6 text-emerald-600" />}
                            title="Test in Real Conditions"
                            description="Practical application"
                            step={3}
                        />

                        <AIProcessStep
                            icon={<RefreshCw className="w-6 h-6 text-emerald-600" />}
                            title="Repeat"
                            description="Continuous improvement cycle"
                            step={4}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

interface AIProcessStepProps {
    icon: React.ReactNode
    title: string
    description: string
    step: number
}

function AIProcessStep({ icon, title, description, step }: AIProcessStepProps) {
    return (
        <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600">
                    {icon}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
        </div>
    )
}
