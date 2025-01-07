import { Star } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our community of dancers
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col p-6 bg-secondary rounded-lg">
              <div className="flex mb-4">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="flex-1 mb-4">
                <p className="text-gray-500">
                  "Amazing instructors and great atmosphere. I've learned so much since joining Issy Studio!"
                </p>
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-primary/10 w-12 h-12" />
                <div>
                  <p className="font-medium">Student {i}</p>
                  <p className="text-sm text-gray-500">Dance Enthusiast</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

