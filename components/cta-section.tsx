import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-emerald-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Forging the Future of Work, One Robot at a Time</h2>

        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
          Join us in revolutionizing the industrial workforce with Marcel, Europe's first generalized industrial robot.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
            Schedule Demo
          </Button>

          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Apply to A Position
          </Button>

          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Join our board
          </Button>
        </div>
      </div>
    </section>
  )
}
