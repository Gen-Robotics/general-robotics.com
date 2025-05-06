"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center relative">
        <div className="absolute left-0">
          <Image
            src="/GR_Logotype.svg"
            alt="General Robotics Logo"
            width={150}
            height={80}
            className="mr-2"
          />
        </div>

        <div className="flex-1 flex justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
            onClick={() =>
              window.open(
                "mailto:contact@general-robotics.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Ask for a Pitch
          </Button>
        </div>
      </div>
    </header>
  );
}
