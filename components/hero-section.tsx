"use client"

import type React from "react"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollPosition } from "../hooks/use-scroll-position"
import { useRef, useEffect, useState } from "react"

// Define image positions for easy customization
const IMAGE_SCALE = 0.6
const IMAGE_START_POSITION = { x: 0, y: -300 }
const IMAGE_END_POSITION = { x: 0, y: -20 }
const IMAGES = [
    {
        id: "main",
        src: "/marcel_torso.png",
        alt: "Marcel torso",
        width: 260,
        height: 679,
        startPosition: { x: IMAGE_START_POSITION.x, y: IMAGE_START_POSITION.y + 40, scale: IMAGE_SCALE, zIndex: 20 },
        endPosition: { x: IMAGE_END_POSITION.x, y: IMAGE_END_POSITION.y, scale: IMAGE_SCALE, zIndex: 20 },
    },
    {
        id: "top-left",
        src: "/marcel_left_arm.png",
        alt: "Marcel left arm",
        width: 229,
        height: 639,
        startPosition: { x: IMAGE_START_POSITION.x - 278, y: IMAGE_START_POSITION.y + 10, scale: IMAGE_SCALE, zIndex: 10 },
        endPosition: { x: IMAGE_END_POSITION.x - 138, y: IMAGE_END_POSITION.y + 10, scale: IMAGE_SCALE, zIndex: 10 },
    },
    {
        id: "top-right",
        src: "/marcel_right_arm.png",
        alt: "Marcel right arm",
        width: 205,
        height: 710,
        startPosition: { x: IMAGE_START_POSITION.x + 270, y: IMAGE_START_POSITION.y + 30, scale: IMAGE_SCALE, zIndex: 10 },
        endPosition: { x: IMAGE_END_POSITION.x + 130, y: IMAGE_END_POSITION.y + 30, scale: IMAGE_SCALE, zIndex: 10 },
    },
    {
        id: "bottom-left",
        src: "/marcel_left_leg.png",
        alt: "Marcel left leg",
        width: 198,
        height: 996,
        startPosition: { x: IMAGE_START_POSITION.x - 150, y: IMAGE_START_POSITION.y + 450, scale: IMAGE_SCALE, zIndex: 5 },
        endPosition: { x: IMAGE_END_POSITION.x - 79, y: IMAGE_END_POSITION.y + 420, scale: IMAGE_SCALE, zIndex: 5 },
    },
    {
        id: "bottom-right",
        src: "/marcel_right_leg.png",
        alt: "Marcel right leg",
        width: 228,
        height: 1001,
        startPosition: { x: IMAGE_START_POSITION.x + 156, y: IMAGE_START_POSITION.y + 450, scale: IMAGE_SCALE, zIndex: 5 },
        endPosition: { x: IMAGE_END_POSITION.x + 85, y: IMAGE_END_POSITION.y + 420, scale: IMAGE_SCALE, zIndex: 5 },
    },
    {
        id: "center-top",
        src: "/marcel_head.png",
        alt: "Marcel head",
        width: 215,
        height: 236,
        startPosition: { x: IMAGE_START_POSITION.x, y: IMAGE_START_POSITION.y - 280, scale: IMAGE_SCALE, zIndex: 30 },
        endPosition: { x: IMAGE_END_POSITION.x, y: IMAGE_END_POSITION.y - 252, scale: IMAGE_SCALE, zIndex: 30 },
    },
]

// Animation configuration
const ANIMATION_START = 30 // scroll position where animation starts
const ANIMATION_END = 250 // scroll position where animation ends

export function HeroSection() {
    const scrollPosition = useScrollPosition()
    const [imagesLoaded, setImagesLoaded] = useState(false)
    const heroRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState("200vh")

    // Calculate animation progress (0 to 1)
    const animationProgress = Math.min(
        Math.max((scrollPosition - ANIMATION_START) / (ANIMATION_END - ANIMATION_START), 0),
        1,
    )

    // Handle image loading and measure height
    useEffect(() => {
        const loadImages = async () => {
            // Simulate image loading
            await new Promise((resolve) => setTimeout(resolve, 100))
            setImagesLoaded(true)
        }

        loadImages()

        // Find problem statement section to set exact height
        const heroHeight = document.querySelector("section.h-screen")?.clientHeight || 0
        const problemSection = document.querySelector("section.bg-gray-50")

        if (problemSection && heroHeight) {
            const problemHeight = problemSection.clientHeight
            // Set height to cover hero + problem section exactly
            setHeight(`${heroHeight + problemHeight}px`)
        }
    }, [])

    return (
        <div className="relative">
            {/* Robot images as the background - limited to hero + problem statement */}
            <div className="absolute inset-0 z-0 flex items-center justify-center" style={{ height }}>
                <div className="relative w-full max-w-6xl mx-auto px-4 h-[1000px]">
                    {/* Render all robot images */}
                    {IMAGES.map((image) => {
                        // Calculate current position based on animation progress
                        const currentX = image.startPosition.x + (image.endPosition.x - image.startPosition.x) * animationProgress
                        const currentY = image.startPosition.y + (image.endPosition.y - image.startPosition.y) * animationProgress
                        const currentScale =
                            image.startPosition.scale + (image.endPosition.scale - image.startPosition.scale) * animationProgress
                        const currentZ =
                            image.startPosition.zIndex + (image.endPosition.zIndex - image.startPosition.zIndex) * animationProgress

                        return (
                            <div
                                key={image.id}
                                className="absolute transition-opacity duration-500"
                                style={{
                                    left: "50%",
                                    top: "50%",
                                    transform: `translate(-50%, -50%) translate(${currentX}px, ${currentY}px) scale(${currentScale})`,
                                    zIndex: Math.round(currentZ),
                                    opacity: imagesLoaded ? 1 : 0,
                                }}
                            >
                                <div className="relative" style={{ width: image.width, height: image.height }}>
                                    <Image
                                        src={image.src || "/placeholder.svg"}
                                        alt={image.alt}
                                        fill
                                        className="object-contain"
                                        sizes={`${Math.max(image.width, image.height)}px`}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Dark overlay for text readability - limited to hero + problem statement */}
            <div className="absolute inset-0 bg-black/50 z-5" style={{ height }}></div>

            {/* Hero content */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center z-10">
                <div className="container mx-auto px-4 text-center relative">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Forging the Future of Work, One Robot at a Time
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-48">World's First Specialized Generalized Industrial Robot</p>
                </div>
            </section>
        </div>
    )
}
