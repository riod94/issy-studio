import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ClassBadge } from "@/components/class-badge";
import { StarRating } from "@/components/star-rating";

const reviews = [
	{
		name: "Velishka Widitika",
		rating: 5,
		date: "1 month ago",
	},
	{
		name: "Anne Doherty",
		rating: 5,
		date: "1 month ago",
	},
	// Add more reviews...
];

export default function ClassDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	return (
		<main className="flex-1">
			{/* Breadcrumb */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<div className="flex items-center text-sm text-gray-500">
					<Link href="/classes" className="hover:text-gray-700">
						Classes
					</Link>
					<ChevronRight className="w-4 h-4 mx-2" />
					<span>Reformer Class - Strong Core</span>
				</div>
			</div>

			{/* Class Details */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid lg:grid-cols-[2fr,1fr] gap-8">
					{/* Main Content */}
					<div>
						<div className="rounded-lg overflow-hidden mb-8">
							<Image
								src="/placeholder.svg?height=600&width=1000"
								alt="Class"
								width={1000}
								height={600}
								className="w-full object-cover"
							/>
						</div>

						<div className="space-y-8">
							<section>
								<h2 className="text-xl font-bold mb-4">
									CLASS DETAILS
								</h2>
								<p className="text-gray-600">
									Enhance your Pilates workout with the 'Strong Core'.
									This class will concentrate on core and body strength
									training. These exercises will increase overall body
									strength, reducing the risk of injury.
								</p>
							</section>

							<section>
								<h2 className="text-xl font-bold mb-4">
									WHAT TO BRING
								</h2>
								<p className="text-gray-600">
									All Members are required to wear socks and gloves
									during the session, for health & safety protocols.
								</p>
							</section>

							<section>
								<h2 className="text-xl font-bold mb-4">
									REVIEWS ({reviews.length})
								</h2>
								<div className="space-y-6">
									{reviews.map((review, i) => (
										<div key={i} className="border-b pb-6">
											<div className="flex items-center justify-between mb-2">
												<h3 className="font-medium">
													{review.name}
												</h3>
												<span className="text-sm text-gray-500">
													Posted {review.date}
												</span>
											</div>
											<StarRating rating={review.rating} size="sm" />
										</div>
									))}
								</div>
							</section>
						</div>
					</div>

					{/* Sidebar */}
					<div className="bg-gray-50 p-6 rounded-lg h-fit">
						<ClassBadge type="GROUP CLASS" className="mb-4" />
						<h1 className="text-2xl font-bold mb-2">
							Reformer Class - Strong Core
						</h1>
						<div className="text-sm text-gray-600 mb-4">
							50 minutes | Up to 10 People | For Advanced
						</div>
						<div className="flex items-center gap-2 mb-6">
							<StarRating rating={4.96} showScore />
						</div>
						<Link
							href="/classes/schedule"
							className="block w-full text-center px-4 py-2 bg-primary text-white rounded-md hover:bg-[#b3a28e] transition-colors duration-300"
						>
							VIEW SCHEDULE
						</Link>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<section className="bg-primary py-16 md:py-24 mt-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto text-center text-white">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
							Achieve Positive Mind & Soul
							<br />
							with Issy Studio.
						</h2>
						<Link
							href="#"
							className="inline-block px-6 py-3 text-lg font-medium bg-white text-primary rounded-md hover:bg-gray-100 transition-colors duration-300"
						>
							Book a Trial Session
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
