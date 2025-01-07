import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black/10">
            <video
              className="w-full h-full object-cover"
              poster="/placeholder.svg?height=600&width=1000"
            >
              <source src="#" type="video/mp4" />
            </video>
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-primary" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

