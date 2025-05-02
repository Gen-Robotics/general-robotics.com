"use client";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-emerald-700 text-white relative z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Join us in revolutionizing the industrial workforce.
        </h2>

        <div className="flex justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-emerald-700 hover:bg-white/10"
            onClick={() =>
              window.open(
                "mailto:contact@general-robotics.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
