"use client";

import Image from "next/image";

export function Punchline() {
  return (
    <section className="py-20 bg-gradient-to-bl from-gray-700 to-black text-white relative border-b-4 border-yellow-600 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/motor.png"
          alt="Motor background"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <div className="relative w-full max-w-2xl mx-auto mb-12">
          <Image
            src="/GR_White_Logotype.svg"
            alt="General Robotics"
            width={600}
            height={150}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          AI-First Actuators for General Purpose Robotics
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto">
          The Future of Robotics is Here
        </p>
      </div>
    </section>
  );
}
