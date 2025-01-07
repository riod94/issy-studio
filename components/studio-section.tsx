import Image from "next/image"

export function StudioSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6">THE STUDIO</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6">
                Master your body and mind through precise movements, controlled breathing, and proper form. 
                Our expert instructors will guide you through each session.
              </p>
              <a 
                href="#" 
                className="inline-block px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Studio space"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

