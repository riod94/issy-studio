import Image from "next/image"

export function ComingSoon() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Coming soon</h2>
            <p className="text-gray-600 mb-8">
              VORME MOBILE APP
            </p>
            <a 
              href="#"
              className="inline-block px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Join Waitlist
            </a>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg?height=800&width=400"
              alt="Mobile app preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

