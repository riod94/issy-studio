import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <div className="bg-primary">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to start your dance journey?</span>
          <span className="block">Join Issy Studio today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-white/80">
          Experience the joy of dance in a supportive and inspiring environment. Sign up now for your first class!
        </p>
        <Button className="mt-8 w-full bg-white text-primary hover:bg-gray-100 sm:w-auto" size="lg">
          Get Started
        </Button>
      </div>
    </div>
  )
}

