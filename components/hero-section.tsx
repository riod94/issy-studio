import Image from "next/image";

export function HeroSection() {
	return (
		<div className="relative min-h-screen flex items-center bg-primary">
			<div className="absolute inset-0">
				<Image
					src="/placeholder.svg?height=1080&width=1920"
					alt="Hero background with women"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-amber-700/40" />
			</div>
			<div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-items-start">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
						&quot;Elevate Your Movement, Transform Your Life.&quot;
					</h1>
					<p className="text-white text-lg sm:text-xl mb-12 max-w-lg text-center">
						Personalized Pilates & Yoga for Strength, Balance, and
						Well-Being—Designed to Empower Your Body and Mind.
					</p>
					<a
						href="#"
						className="inline-block px-6 py-3 text-lg font-medium text-primary bg-white rounded-md hover:bg-gray-100 transition-colors duration-300 uppercase"
					>
						Book a Trial Session
					</a>
				</div>
			</div>
		</div>
	);
}
