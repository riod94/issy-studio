import Image from "next/image";
import Link from "next/link";

export function ClassesPreview() {
	const classes = [
		{
			title: "Private, Duo, or Group Class For Level Up",
			image: "/placeholder.svg?height=300&width=300",
			description:
				"Experience personalized attention and guidance tailored to your needs.",
		},
		{
			title: "From Beginner to Advance For All Level",
			image: "/placeholder.svg?height=300&width=300",
			description:
				"Start your journey with us, no matter your experience level.",
		},
	];

	return (
		<section className="py-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl font-bold text-primary mb-12">
						THE CLASSES
					</h2>
					<div className="grid md:grid-cols-2 gap-12">
						{classes.map((classItem, index) => (
							<div key={index} className="text-center">
								<div className="relative w-48 h-48 mx-auto mb-6">
									<Image
										src={classItem.image}
										alt={classItem.title}
										fill
										className="object-cover rounded-full"
									/>
								</div>
								<h3 className="text-lg font-bold mb-4">
									{classItem.title}
								</h3>
								<p className="text-gray-600 mb-6 max-w-sm mx-auto">
									{classItem.description}
								</p>
							</div>
						))}
					</div>
					<div className="flex items-center justify-center">
						<Link
							href="/classes"
							className="outline outline-primary py-2 px-4 rounded hover:bg-primary hover:text-white transition-colors duration-300"
						>
							Book A Trial Session
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
