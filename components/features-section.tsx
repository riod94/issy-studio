import { CheckCircle } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    "Expert instructors with years of experience",
    "Classes for all skill levels, from beginners to advanced",
    "State-of-the-art facilities and equipment",
    "Flexible class schedules to fit your lifestyle",
    "Supportive and inclusive dance community",
    "Regular performances and showcases"
  ]

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Issy Studio?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At Issy Studio, we're committed to providing the best dance education and experience for our students.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature} className="relative">
                <dt>
                  <CheckCircle className="absolute h-6 w-6 text-primary" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature}</p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

