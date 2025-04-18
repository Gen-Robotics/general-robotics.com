import { ArrowRight, Check } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Introducing Marcel: The Industrial Humanoid Revolution
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/Marcel_global.png?height=600&width=600"
              alt="Marcel humanoid robot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">
              Why Humanoids Are Inevitable:
            </h3>

            <div className="space-y-8">
              <BenefitItem
                title="Scalable"
                description="Physical AI models learn and adapt using human data"
              />

              <BenefitItem
                title="Relatable"
                description="Humans prefer humanoid robots for their familiar design"
              />

              <BenefitItem
                title="Compatible"
                description="Perfect fit for human-centric environments"
              />
            </div>

            <div className="mt-12">
              <a
                href="#technology"
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                Explore our technology
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BenefitItemProps {
  title: string;
  description: string;
}

function BenefitItem({ title, description }: BenefitItemProps) {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600">
          <Check className="w-5 h-5" />
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
