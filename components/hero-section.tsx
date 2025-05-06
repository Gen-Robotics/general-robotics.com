"use client";

import type React from "react";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "../hooks/use-scroll-position";
import { useRef, useEffect, useState } from "react";

const HUMA_SCALE = 0.6;
const DOG_SCALE_ISO = 0.6;

// Define multiple configurations
const CONFIGURATIONS = [
  {
    id: "Huma_front",
    IMAGE_SCALE: HUMA_SCALE,
    IMAGE_START_POSITION: { x: 0, y: 100, orientation: 0 },
    IMAGE_END_POSITION: { x: 0, y: 370, orientation: 0 },
    ANIMATION_START: 30,
    ANIMATION_END: 250,
    IMAGES: [
      {
        id: "main",
        src: "robot_parts/torso.png",
        alt: "Marcel torso",
        width: 260,
        height: 679,
        startPosition: {
          x: 0,
          y: 40,
          scale: HUMA_SCALE,
          zIndex: 20,
          orientation: Math.random() * 20 - 20 / 2,
        },
        endPosition: {
          x: 0,
          y: 0,
          scale: HUMA_SCALE,
          zIndex: 20,
          orientation: 0,
        },
      },
      {
        id: "top-left",
        src: "robot_parts/left_arm.png",
        alt: "Marcel left arm",
        width: 229,
        height: 639,
        startPosition: {
          x: -278,
          y: 10,
          scale: HUMA_SCALE,
          zIndex: 10,
          orientation: Math.random() * 40 - 40 / 2,
        },
        endPosition: {
          x: -138,
          y: 30,
          scale: HUMA_SCALE,
          zIndex: 10,
          orientation: 0,
        },
      },
      {
        id: "top-right",
        src: "robot_parts/right_arm.png",
        alt: "Marcel right arm",
        width: 205,
        height: 710,
        startPosition: {
          x: 270,
          y: -3,
          scale: HUMA_SCALE,
          zIndex: 10,
          orientation: Math.random() * 40 - 40 / 2,
        },
        endPosition: {
          x: 130,
          y: 17,
          scale: HUMA_SCALE,
          zIndex: 10,
          orientation: 0,
        },
      },
      {
        id: "bottom-left",
        src: "robot_parts/left_leg.png",
        alt: "Marcel left leg",
        width: 198,
        height: 996,
        startPosition: {
          x: -150,
          y: 350,
          scale: HUMA_SCALE,
          zIndex: 5,
          orientation: Math.random() * 40 - 40 / 2,
        },
        endPosition: {
          x: -79,
          y: 260,
          scale: HUMA_SCALE,
          zIndex: 5,
          orientation: 0,
        },
      },
      {
        id: "bottom-right",
        src: "robot_parts/right_leg.png",
        alt: "Marcel right leg",
        width: 228,
        height: 1001,
        startPosition: {
          x: 156,
          y: 350,
          scale: HUMA_SCALE,
          zIndex: 5,
          orientation: Math.random() * 40 - 40 / 2,
        },
        endPosition: {
          x: 85,
          y: 260,
          scale: HUMA_SCALE,
          zIndex: 5,
          orientation: 0,
        },
      },
      {
        id: "center-top",
        src: "robot_parts/head.png",
        alt: "Marcel head",
        width: 215,
        height: 236,
        startPosition: {
          x: 0,
          y: -80,
          scale: HUMA_SCALE,
          zIndex: 30,
          orientation: Math.random() * 60 - 60 / 2,
        },
        endPosition: {
          x: 0,
          y: -30,
          scale: HUMA_SCALE,
          zIndex: 30,
          orientation: 0,
        },
      },
    ],
  },
  {
    id: "dog_iso",
    IMAGE_SCALE: DOG_SCALE_ISO,
    IMAGE_START_POSITION: { x: 0, y: 0, orientation: 0 },
    IMAGE_END_POSITION: { x: 0, y: 500, orientation: 0 },
    ANIMATION_START: 20,
    ANIMATION_END: 400,
    IMAGES: [
      {
        id: "main",
        src: "robot_parts/dog_body_iso.png",
        alt: "Dog torso",
        width: 831,
        height: 406,
        startPosition: {
          x: 0,
          y: 40,
          scale: DOG_SCALE_ISO,
          zIndex: 20,
          orientation: Math.random() * 20 - 20 / 2,
        },
        endPosition: {
          x: 0,
          y: 180,
          scale: DOG_SCALE_ISO,
          zIndex: 20,
          orientation: 0,
        },
      },
      {
        id: "front-left",
        src: "robot_parts/dog_leg_left_iso.png",
        alt: "Dog front left",
        width: 710,
        height: 844,
        startPosition: {
          x: -300,
          y: 250,
          scale: DOG_SCALE_ISO,
          zIndex: 30,
          orientation: Math.random() * 20 - 20 / 2,
        },
        endPosition: {
          x: -100,
          y: 165,
          scale: DOG_SCALE_ISO,
          zIndex: 30,
          orientation: 0,
        },
      },
      {
        id: "front-right",
        src: "robot_parts/dog_leg_right_iso.png",
        alt: "Dog front right",
        width: 730,
        height: 856,
        startPosition: {
          x: 600,
          y: 200,
          scale: DOG_SCALE_ISO,
          zIndex: 5,
          orientation: Math.random() * 20 - 20 / 2,
        },
        endPosition: {
          x: 120,
          y: 150,
          scale: DOG_SCALE_ISO,
          zIndex: 5,
          orientation: 0,
        },
      },
      {
        id: "back-left",
        src: "robot_parts/dog_leg_left_iso.png",
        alt: "Dog back left",
        width: 710,
        height: 844,
        startPosition: {
          x: -600,
          y: 100,
          scale: DOG_SCALE_ISO,
          zIndex: 25,
          orientation: Math.random() * 20 - 20 / 2,
        },
        endPosition: {
          x: -365,
          y: 165,
          scale: DOG_SCALE_ISO,
          zIndex: 25,
          orientation: 0,
        },
      },
      {
        id: "back-right",
        src: "robot_parts/dog_leg_right_iso.png",
        alt: "Dog back right",
        width: 730,
        height: 856,
        startPosition: {
          x: 200,
          y: 100,
          scale: DOG_SCALE_ISO,
          zIndex: 10,
          orientation: Math.random() * 20 - 20 / 2,
        },
        endPosition: {
          x: -160,
          y: 150,
          scale: DOG_SCALE_ISO,
          zIndex: 10,
          orientation: 0,
        },
      },
    ],
  },
  // Add more configurations as needed
];

export function HeroSection() {
  const scrollPosition = useScrollPosition();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("200vh");
  const [selectedConfig, setSelectedConfig] = useState<
    (typeof CONFIGURATIONS)[0] | null
  >(null);

  // Select a random configuration on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * CONFIGURATIONS.length);
    setSelectedConfig(CONFIGURATIONS[randomIndex]);
  }, []);

  // Calculate animation progress (0 to 1)
  const animationProgress = selectedConfig
    ? Math.min(
        Math.max(
          (scrollPosition - selectedConfig.ANIMATION_START) /
            (selectedConfig.ANIMATION_END - selectedConfig.ANIMATION_START),
          0
        ),
        1
      )
    : 0;

  // Handle image loading and measure height
  useEffect(() => {
    const loadImages = async () => {
      // Simulate image loading
      await new Promise((resolve) => setTimeout(resolve, 100));
      setImagesLoaded(true);
    };

    loadImages();

    // Find problem statement section to set exact height
    const heroHeight =
      document.querySelector("section.h-screen")?.clientHeight || 0;
    const problemSection = document.querySelector("section.bg-gray-50");

    if (problemSection && heroHeight) {
      const problemHeight = problemSection.clientHeight;
      // Set height to cover hero + problem section exactly
      setHeight(`${heroHeight + problemHeight}px`);
    }
  }, []);

  if (!selectedConfig) return null;

  return (
    <div className="relative">
      {/* Robot images as the background - limited to hero + problem statement */}
      <div
        className="absolute inset-0 z-0 flex items-start justify-center"
        style={{ height }}
      >
        <div className="relative w-full max-w-6xl mx-auto px-4 h-[1000px]">
          {/* Render all robot images */}
          {selectedConfig.IMAGES.map((image) => {
            // Calculate current position based on animation progress
            const currentX =
              selectedConfig.IMAGE_START_POSITION.x +
              image.startPosition.x +
              (selectedConfig.IMAGE_END_POSITION.x +
                image.endPosition.x -
                (selectedConfig.IMAGE_START_POSITION.x +
                  image.startPosition.x)) *
                animationProgress;
            const currentY =
              selectedConfig.IMAGE_START_POSITION.y +
              image.startPosition.y +
              (selectedConfig.IMAGE_END_POSITION.y +
                image.endPosition.y -
                (selectedConfig.IMAGE_START_POSITION.y +
                  image.startPosition.y)) *
                animationProgress;
            const currentScale =
              image.startPosition.scale +
              (image.endPosition.scale - image.startPosition.scale) *
                animationProgress;
            const currentZ =
              image.startPosition.zIndex +
              (image.endPosition.zIndex - image.startPosition.zIndex) *
                animationProgress;
            const currentOrientation =
              image.startPosition.orientation +
              (image.endPosition.orientation -
                image.startPosition.orientation) *
                animationProgress;

            return (
              <div
                key={image.id}
                className="absolute transition-opacity duration-500"
                style={{
                  left: "50%",
                  top: "0",
                  transform: `translateX(-50%) translate(${currentX}px, ${currentY}px) scale(${currentScale}) rotate(${currentOrientation}deg)`,
                  zIndex: Math.round(currentZ),
                  opacity: imagesLoaded ? 1 : 0,
                }}
              >
                <div
                  className="relative"
                  style={{ width: image.width, height: image.height }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes={`${Math.max(image.width, image.height)}px`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dark overlay for text readability - limited to hero + problem statement */}
      <div
        className="absolute inset-0 bg-black/50 z-5"
        style={{ height }}
      ></div>

      {/* Hero content */}
      <section
        ref={heroRef}
        className="relative min-h-[130vh] flex items-center justify-center z-10"
      >
        <div className="container mx-auto px-4 text-center relative">
          <div className="relative w-full max-w-3xl mx-auto">
            <Image
              src="/GR_White_Logotype.svg"
              alt="General Robotics"
              width={800}
              height={200}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-xl md:text-2xl text-white/90 mb-48">
            Modular AI Robots for Industrial Applications
          </p>
        </div>
      </section>
    </div>
  );
}
