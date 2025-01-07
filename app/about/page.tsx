import Button from "@/components/ui/Button";
import DefaultSection from "@/components/ui/DefaultSection";
import Image from "next/image";

export default function AboutPage() {
	return (
		<DefaultSection>
			{/* Hero Section */}
			<section className="relative py-12 md:py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-white mb-8">
						<h2 className="text-lg font-medium mb-2">Our Story</h2>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
							About Us
						</h1>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-6xl mx-auto">
						<Image
							src="/placeholder.svg?height=600&width=1200"
							alt="Happy dancers"
							width={1200}
							height={600}
							className="w-full rounded-lg mb-16"
						/>

						<div className="max-w-3xl mx-auto text-center mb-24">
							<p className="text-2xl md:text-3xl lg:text-4xl text-primary leading-relaxed">
								Dance isn&apos;t just about physical movement; it&apos;s a path to
								discovering your inner elegance. Issy Studio helps you
								find a healthier and happier version of yourself
								blossoming like a beautiful flower.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
									Achieve Positive Mind & Soul with Issy Studio.
								</h2>
								<Button href="#">Book a Trial Session</Button>
							</div>
							<div>
								<Image
									src="/placeholder.svg?height=600&width=800"
									alt="Dance practice"
									width={800}
									height={600}
									className="w-full rounded-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</DefaultSection>
	);
}
