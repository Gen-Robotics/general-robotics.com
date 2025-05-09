"use client";

import type React from "react";

import Image from "next/image";
import { ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "../hooks/use-scroll-position";
import { useRef, useEffect, useState } from "react";

const HUMA_SCALE = 0.3;
const DOG_SCALE_ISO = 0.6;
const ARM_SCALE_A = 0.4;
const ARM_SCALE_B = 0.6;
// Define multiple configurations
const CONFIGURATIONS = [
  //Humanoid_A
  {
    id: "Huma_front",
    IMAGE_SCALE: HUMA_SCALE,
    IMAGE_START_POSITION: { x: 0, y: 130, orientation: 0 },
    IMAGE_END_POSITION: { x: 0, y: 600, orientation: 0 },
    ANIMATION_START: 30,
    ANIMATION_END: 300,
    IMAGES: [
      {
        id: "main",
        src: "robot_parts/huma/torso.png",
        alt: "Humanoid torso",
        width: 561,
        height: 1418,
        startPosition: {
          x: 0,
          y: 40,
          scale: HUMA_SCALE,
          zIndex: 0,
          orientation: 0,
        },
        endPosition: {
          x: 0,
          y: -200,
          scale: HUMA_SCALE,
          zIndex: 0,
          orientation: 0,
        },
      },
      {
        id: "left-arm",
        src: "robot_parts/huma/arm_L_B.png",
        alt: "Humanoid left arm",
        width: 380,
        height: 821,
        startPosition: {
          x: -278,
          y: 10,
          scale: HUMA_SCALE,
          zIndex: 10,
          orientation: 0,
        },
        endPosition: {
          x: -118,
          y: 41,
          scale: HUMA_SCALE,
          zIndex: 10,
          orientation: 0,
        },
      },
      {
        id: "left_tool",
        src: "robot_parts/huma/hand_L_B.png",
        alt: "Humanoid left hand",
        width: 566,
        height: 323,
        startPosition: {
          x: -300,
          y: 400,
          scale: HUMA_SCALE,
          zIndex: 35,
          orientation: 0,
        },
        endPosition: {
          x: -52,
          y: 365,
          scale: HUMA_SCALE,
          zIndex: 35,
          orientation: 0,
        },
      },
      {
        id: "right-arm",
        src: "robot_parts/huma/arm_R_A.png",
        alt: "Humanoid right arm",
        width: 351,
        height: 910,
        startPosition: {
          x: 270,
          y: -3,
          scale: HUMA_SCALE,
          zIndex: 10,
          orientation: 0,
        },
        endPosition: {
          x: 114.5,
          y: 11,
          scale: HUMA_SCALE,
          zIndex: 10,
          orientation: 0,
        },
      },
      {
        id: "right_tool",
        src: "robot_parts/huma/hand_R_A.png",
        alt: "Humanoid right hand",
        width: 415,
        height: 594,
        startPosition: {
          x: 300,
          y: 400,
          scale: HUMA_SCALE,
          zIndex: 35,
          orientation: 0,
        },
        endPosition: {
          x: 88,
          y: 338,
          scale: HUMA_SCALE,
          zIndex: 35,
          orientation: 0,
        },
      },
      {
        id: "left_leg",
        src: "robot_parts/huma/leg_L.png",
        alt: "Humanoid left leg",
        width: 392,
        height: 1955,
        startPosition: {
          x: -150,
          y: 350,
          scale: HUMA_SCALE,
          zIndex: 5,
          orientation: 0,
        },
        endPosition: {
          x: -78,
          y: -53,
          scale: HUMA_SCALE,
          zIndex: 5,
          orientation: 0,
        },
      },
      {
        id: "right_leg",
        src: "robot_parts/huma/leg_R.png",
        alt: "Humanoid right leg",
        width: 399,
        height: 1957,
        startPosition: {
          x: 156,
          y: 350,
          scale: HUMA_SCALE,
          zIndex: 5,
          orientation: 0,
        },
        endPosition: {
          x: 72,
          y: -53,
          scale: HUMA_SCALE,
          zIndex: 5,
          orientation: 0,
        },
      },
      {
        id: "head",
        src: "robot_parts/huma/head_A.png",
        alt: "Humanoid head",
        width: 472,
        height: 502,
        startPosition: {
          x: 0,
          y: -80,
          scale: HUMA_SCALE,
          zIndex: 30,
          orientation: 0,
        },
        endPosition: {
          x: 2.5,
          y: 16,
          scale: HUMA_SCALE,
          zIndex: 30,
          orientation: 0,
        },
      },
    ],
  },
  //Dog
  {
    id: "dog_iso",
    IMAGE_SCALE: DOG_SCALE_ISO,
    IMAGE_START_POSITION: { x: 0, y: 0, orientation: 0 },
    IMAGE_END_POSITION: { x: 0, y: 550, orientation: 0 },
    ANIMATION_START: 20,
    ANIMATION_END: 500,
    IMAGES: [
      {
        id: "main",
        src: "robot_parts/dog/body_iso.png",
        alt: "Dog torso",
        width: 831,
        height: 406,
        startPosition: {
          x: 0,
          y: 40,
          scale: DOG_SCALE_ISO,
          zIndex: 20,
          orientation: 0,
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
        src: "robot_parts/dog/leg_left_iso.png",
        alt: "Dog front left",
        width: 710,
        height: 844,
        startPosition: {
          x: -300,
          y: 250,
          scale: DOG_SCALE_ISO,
          zIndex: 30,
          orientation: 0,
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
        src: "robot_parts/dog/leg_right_iso.png",
        alt: "Dog front right",
        width: 730,
        height: 856,
        startPosition: {
          x: 600,
          y: 200,
          scale: DOG_SCALE_ISO,
          zIndex: 5,
          orientation: 0,
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
        src: "robot_parts/dog/leg_left_iso.png",
        alt: "Dog back left",
        width: 710,
        height: 844,
        startPosition: {
          x: -600,
          y: 100,
          scale: DOG_SCALE_ISO,
          zIndex: 25,
          orientation: 0,
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
        src: "robot_parts/dog/leg_right_iso.png",
        alt: "Dog back right",
        width: 730,
        height: 856,
        startPosition: {
          x: 200,
          y: 100,
          scale: DOG_SCALE_ISO,
          zIndex: 10,
          orientation: 0,
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
  //Arm A
  {
    id: "arm_A",
    IMAGE_SCALE: DOG_SCALE_ISO,
    IMAGE_START_POSITION: { x: 0, y: 0, orientation: 0 },
    IMAGE_END_POSITION: { x: 0, y: 650, orientation: 0 },
    ANIMATION_START: 20,
    ANIMATION_END: 500,
    IMAGES: [
      {
        id: "main",
        src: "robot_parts/arm/base.png",
        alt: "Arm base",
        width: 307,
        height: 262,
        startPosition: {
          x: 400,
          y: 500,
          scale: ARM_SCALE_A,
          zIndex: 10,
          orientation: 0,
        },
        endPosition: {
          x: 0,
          y: 600,
          scale: ARM_SCALE_A,
          zIndex: 10,
          orientation: 0,
        },
      },
      {
        id: "arm",
        src: "robot_parts/arm/A.png",
        alt: "Arm A",
        width: 563,
        height: 1068,
        startPosition: {
          x: -300,
          y: -150,
          scale: ARM_SCALE_A,
          zIndex: 5,
          orientation: 0,
        },
        endPosition: {
          x: 58,
          y: -53,
          scale: ARM_SCALE_A,
          zIndex: 5,
          orientation: 0,
        },
      },
      {
        id: "tool",
        src: "robot_parts/arm/tool_A.png",
        alt: "Arm tool A",
        width: 559,
        height: 453,
        startPosition: {
          x: 600,
          y: 200,
          scale: ARM_SCALE_A,
          zIndex: 15,
          orientation: 0,
        },
        endPosition: {
          x: 195,
          y: 25,
          scale: ARM_SCALE_A,
          zIndex: 15,
          orientation: 0,
        },
      },
    ],
  },
  //Arm B
  {
    id: "arm_B",
    IMAGE_SCALE: DOG_SCALE_ISO,
    IMAGE_START_POSITION: { x: 0, y: 0, orientation: 0 },
    IMAGE_END_POSITION: { x: 0, y: 650, orientation: 0 },
    ANIMATION_START: 20,
    ANIMATION_END: 500,
    IMAGES: [
      {
        id: "main",
        src: "robot_parts/arm/base.png",
        alt: "Arm base",
        width: 307,
        height: 262,
        startPosition: {
          x: -400,
          y: 500,
          scale: ARM_SCALE_B,
          zIndex: 10,
          orientation: 0,
        },
        endPosition: {
          x: 0,
          y: 600,
          scale: ARM_SCALE_B,
          zIndex: 10,
          orientation: 0,
        },
      },
      {
        id: "arm",
        src: "robot_parts/arm/B.png",
        alt: "Arm B",
        width: 563,
        height: 1068,
        startPosition: {
          x: 350,
          y: 100,
          scale: ARM_SCALE_B,
          zIndex: 5,
          orientation: 0,
        },
        endPosition: {
          x: 100,
          y: -85,
          scale: ARM_SCALE_B,
          zIndex: 5,
          orientation: 0,
        },
      },
      {
        id: "tool",
        src: "robot_parts/arm/tool_B.png",
        alt: "Arm tool B",
        width: 372,
        height: 689,
        startPosition: {
          x: 700,
          y: 200,
          scale: ARM_SCALE_B,
          zIndex: 15,
          orientation: 0,
        },
        endPosition: {
          x: 285,
          y: 120,
          scale: ARM_SCALE_B,
          zIndex: 15,
          orientation: 0,
        },
      },
    ],
  },
  //Arm C
  {
    id: "arm_C",
    IMAGE_SCALE: DOG_SCALE_ISO,
    IMAGE_START_POSITION: { x: 0, y: 0, orientation: 0 },
    IMAGE_END_POSITION: { x: 0, y: 650, orientation: 0 },
    ANIMATION_START: 20,
    ANIMATION_END: 500,
    IMAGES: [
      {
        id: "main",
        src: "robot_parts/arm/base.png",
        alt: "Arm base",
        width: 307,
        height: 262,
        startPosition: {
          x: -400,
          y: 800,
          scale: ARM_SCALE_B,
          zIndex: 10,
          orientation: 0,
        },
        endPosition: {
          x: 0,
          y: 600,
          scale: ARM_SCALE_B,
          zIndex: 10,
          orientation: 0,
        },
      },
      {
        id: "arm",
        src: "robot_parts/arm/B.png",
        alt: "Arm B",
        width: 563,
        height: 1068,
        startPosition: {
          x: 450,
          y: 100,
          scale: ARM_SCALE_B,
          zIndex: 5,
          orientation: 0,
        },
        endPosition: {
          x: 100,
          y: -85,
          scale: ARM_SCALE_B,
          zIndex: 5,
          orientation: 0,
        },
      },
      {
        id: "tool",
        src: "robot_parts/arm/tool_C.png",
        alt: "Arm tool B",
        width: 500,
        height: 840,
        startPosition: {
          x: 0,
          y: 0,
          scale: ARM_SCALE_B,
          zIndex: 15,
          orientation: 0,
        },
        endPosition: {
          x: 312,
          y: -41,
          scale: ARM_SCALE_B,
          zIndex: 15,
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

  const reloadRobot = () => {
    setImagesLoaded(false);
    const randomIndex = Math.floor(Math.random() * CONFIGURATIONS.length);
    const randomConfig = { ...CONFIGURATIONS[randomIndex] };
    randomConfig.IMAGES = randomConfig.IMAGES.map((image) => ({
      ...image,
      startPosition: {
        ...image.startPosition,
        orientation: Math.random() * 60 - 30,
      },
    }));
    setSelectedConfig(randomConfig);
    setTimeout(() => {
      setImagesLoaded(true);
    }, 100);
  };

  // Select a random configuration and set random orientations on component mount
  useEffect(() => {
    // Use a fixed index for initial render to avoid hydration mismatch
    const config = { ...CONFIGURATIONS[0] };

    // Add random orientations to each image's start position
    config.IMAGES = config.IMAGES.map((image) => ({
      ...image,
      startPosition: {
        ...image.startPosition,
        orientation: 0, // Start with no rotation to avoid hydration mismatch
      },
    }));

    setSelectedConfig(config);

    // After initial render, update with random configuration
    const randomIndex = Math.floor(Math.random() * CONFIGURATIONS.length);
    const randomConfig = { ...CONFIGURATIONS[randomIndex] };
    randomConfig.IMAGES = randomConfig.IMAGES.map((image) => ({
      ...image,
      startPosition: {
        ...image.startPosition,
        orientation: Math.random() * 60 - 30, // Random orientation between -30 and 30 degrees
      },
    }));

    // Use setTimeout to ensure this happens after hydration
    setTimeout(() => {
      setSelectedConfig(randomConfig);
    }, 0);
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
      document.querySelector("[data-section='hero']")?.clientHeight || 0;
    const problemSection = document.querySelector("[data-section='problem']");

    if (problemSection && heroHeight) {
      const problemHeight = problemSection.clientHeight;
      // Set height to cover hero + problem section exactly, adding a small buffer
      setHeight(`${heroHeight + problemHeight + 1}px`);
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
        data-section="hero"
        className="relative h-[1400px] flex items-center justify-center z-10"
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
          <div className="flex flex-col items-center justify-center gap-4 mb-48 -mt-16">
            <p className="text-xl md:text-3xl text-white/90">
              Modular AI Robots for Industrial Applications
            </p>
            <Button
              onClick={reloadRobot}
              size="lg"
              variant="outline"
              className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white group relative pl-12 bg-white/50"
            >
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Image
                  src="/logo_black_anim_transparent.gif"
                  alt="Rebuild Robot"
                  width={32}
                  height={32}
                  className="group-hover:hidden"
                />
                <Image
                  src="/logo_white_anim_transparent_bg.gif"
                  alt="Rebuild Robot"
                  width={32}
                  height={32}
                  className="hidden group-hover:block"
                />
              </div>
              Rebuild a Robot
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
