"use client"

import { useRef, useState, useEffect } from "react"

// Configuration for the animation
interface AnimationConfig {
    rotationSpeed: number; // degrees per second
    zoomDuration: number; // milliseconds
    pauseDuration: number; // milliseconds to pause at each step
    zoomStrength: number; // scale factor (1.0 = normal size, 1.2 = 20% larger)
    triggerAngles: {
        conception: number;
        generateAi: number;
        testInRealConditions: number;
        repeat: number;
    };
}

export function AICapabilitiesSection() {
    const circleRef = useRef<HTMLDivElement>(null)
    const [rotationAngle, setRotationAngle] = useState(0)
    const [activeStep, setActiveStep] = useState<string | null>(null)
    const [isPaused, setIsPaused] = useState(false)
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    // Configurable animation parameters - can be adjusted as needed
    const config: AnimationConfig = {
        rotationSpeed: 280, // degrees per second
        zoomDuration: 100, // milliseconds
        pauseDuration: 100, // pause for 1.2 seconds at each step
        zoomStrength: 1.20, // 15% larger when zoomed
        triggerAngles: {
            conception: 0, // top
            generateAi: 90, // right
            testInRealConditions: 180, // bottom
            repeat: 270, // left
        },
    }

    // Get ordered list of steps and their angles
    const steps = [
        { name: 'conception', angle: config.triggerAngles.conception },
        { name: 'generateAi', angle: config.triggerAngles.generateAi },
        { name: 'testInRealConditions', angle: config.triggerAngles.testInRealConditions },
        { name: 'repeat', angle: config.triggerAngles.repeat }
    ]

    // Handle the step-by-step rotation animation
    useEffect(() => {
        if (isPaused) return; // Don't animate while paused

        // Get the target angle (next step)
        const targetStep = steps[currentStepIndex]
        const targetAngle = targetStep.angle

        // Calculate the shortest path to the target angle
        const calculateShortestPath = (current: number, target: number) => {
            const diff = ((target - current) % 360 + 360) % 360
            return diff > 180 ? diff - 360 : diff
        }

        // Set up the animation interval
        const interval = setInterval(() => {
            setRotationAngle(prev => {
                // Calculate the angle difference and movement amount
                const angleDiff = calculateShortestPath(prev, targetAngle)
                const moveAmount = config.rotationSpeed / 20

                // If we're close enough to the target angle, stop and trigger zoom
                if (Math.abs(angleDiff) < moveAmount) {
                    clearInterval(interval)

                    // Activate the zoom effect
                    setActiveStep(targetStep.name)
                    setIsPaused(true)

                    // Schedule the end of the pause
                    setTimeout(() => {
                        setActiveStep(null)

                        // After zoom effect ends, move to next step
                        setTimeout(() => {
                            setIsPaused(false)
                            setCurrentStepIndex((currentStepIndex + 1) % steps.length)
                        }, config.zoomDuration)

                    }, config.pauseDuration)

                    return targetAngle // Snap to exact target
                }

                // Otherwise, continue moving toward target
                return prev + (angleDiff > 0 ? Math.min(moveAmount, angleDiff) : Math.max(-moveAmount, angleDiff))
            })
        }, 50)

        return () => clearInterval(interval)
    }, [config, currentStepIndex, isPaused])

    // Apply scale transform based on whether the step is active
    const getStepStyle = (stepName: string) => {
        return {
            transform: activeStep === stepName
                ? `scale(${config.zoomStrength}) translate3d(0, 0, 0)`
                : 'scale(1) translate3d(0, 0, 0)',
            transition: `transform ${config.zoomDuration}ms ease-in-out`
        }
    }

    return (
        <section id="capabilities" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-32">Physical AI Zero-Shot Transfer</h2>
                <div className="max-w-3xl mx-auto">
                    <div className="relative mb-32">
                        <div className="w-64 h-64 md:w-96 md:h-96 mx-auto relative">
                            {/* Rotating circle with gradient - using JS-controlled rotation */}
                            <div
                                ref={circleRef}
                                className="w-full h-full"
                                style={{ transform: `rotate(${rotationAngle}deg)` }}
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    {/* Define gradient that fades to transparency */}
                                    <defs>
                                        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>

                                    {/* Background circle */}
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="2" />

                                    {/* Orange circle with gradient */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="url(#orangeGradient)"
                                        strokeWidth="3"
                                        strokeDasharray="283"
                                        strokeDashoffset="70"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            {/* Center text with improved readability - larger area */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="text-center bg-white/90 rounded-full p-6 w-64 h-64 flex items-center justify-center backdrop-blur-sm shadow-sm">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800">AI Learning Cycle</h3>
                                        <p className="text-xs text-gray-600">Continuous Improvement</p>
                                    </div>
                                </div>
                            </div>

                            {/* Conception - moved further out */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[80px]">
                                <div style={getStepStyle('conception')}>
                                    <div className="mt-2 text-center">
                                        <p className="text-xs text-gray-600">Actuators, sensors, electronics, and mechanical parts design</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-full shadow-lg">
                                        <div className="bg-orange-100 p-2 rounded-full flex items-center">
                                            <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                />
                                            </svg>
                                            <span className="ml-2 font-semibold text-sm whitespace-nowrap">Conception</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Generate AI - moved further out */}
                            <div className="absolute top-1/2 right-0 transform translate-x-[150px] -translate-y-1/2">
                                <div style={getStepStyle('generateAi')}>
                                    <div className="bg-white p-3 rounded-full shadow-lg">
                                        <div className="bg-orange-100 p-2 rounded-full flex items-center">
                                            <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                            <span className="ml-2 font-semibold text-sm whitespace-nowrap">Generate AI</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 text-center">
                                        <p className="text-xs text-gray-600">Advanced algorithms and learning</p>
                                    </div>
                                </div>
                            </div>

                            {/* Test in Real Conditions - moved further out */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[64px]">
                                <div style={getStepStyle('testInRealConditions')}>
                                    <div className="bg-white p-3 rounded-full shadow-lg">
                                        <div className="bg-orange-100 p-2 rounded-full flex items-center">
                                            <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                />
                                            </svg>
                                            <span className="ml-2 font-semibold text-sm whitespace-nowrap">Test in Real Conditions</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 text-center">
                                        <p className="text-xs text-gray-600">Practical application</p>
                                    </div>
                                </div>
                            </div>

                            {/* Repeat - moved further out */}
                            <div className="absolute top-1/2 left-0 transform -translate-x-[134px] -translate-y-1/2">
                                <div style={getStepStyle('repeat')}>
                                    <div className="bg-white p-3 rounded-full shadow-lg">
                                        <div className="bg-orange-100 p-2 rounded-full flex items-center">
                                            <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                />
                                            </svg>
                                            <span className="ml-2 font-semibold text-sm whitespace-nowrap">Repeat</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 text-center">
                                        <p className="text-xs text-gray-600">Continuous improvement cycle</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Our Physical AI Zero-Shot Transfer technology allows to generate synthetic data that will represent the real world.
                            Marcel can then learn and adapt to new tasks without extensive programming.
                            Through continuous cycles of conception, AI generation, real-world testing, and refinement, Marcel becomes more capable with each iteration.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
