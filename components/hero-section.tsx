import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Marcel robot in industrial setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Forging the Future of Work, One Robot at a Time
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">Europe&apos;s First Generalized Industrial Robot</p>
          <Link href="mailto:info@generalrobotics.com">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
