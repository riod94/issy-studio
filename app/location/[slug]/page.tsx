import DefaultSection from "@/components/ui/DefaultSection";
import { FacilityIcon } from "@/components/facility-icon";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const facilities = [
	"toilet",
	"locker",
	"changing-room",
	"pantry",
	"body-wash",
	"rental-towel",
] as const;

export default function LocationDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	// This would normally fetch based on the Slug
	const location = {
		name: "Sedayu Kelapa Gading",
		address:
			"Jl. Sedayu Boulevard Raya, RT.3/RW.9, Cakung Bar., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13910",
		images: ["/placeholder.svg?height=600&width=1200"],
	};

	return (
		<DefaultSection>
			{/* Breadcrumb */}
			<div className="mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center text-sm text-white">
					<Link href="/location" className="hover:text-secondary">
						Locations
					</Link>
					<ChevronRight className="w-4 h-4 mx-2" />
					<span>{location.name}</span>
				</div>
			</div>

			{/* Hero Image */}
			<div className="mx-auto px-4 sm:px-6 lg:px-8 relative h-[400px] md:h-[600px]">
				<Image
					src={location.images[0]}
					alt={location.name}
					fill
					className="object-cover"
				/>
			</div>

			{/* Location Info */}
			<section className="py-12">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-3xl font-bold mb-4">{location.name}</h1>
						<p className="text-gray-600 mb-6">{location.address}</p>
						{/* Button removed here */}
					</div>
				</div>
			</section>

			{/* Facilities */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-2xl font-bold text-center mb-4">
							STUDIO FACILITIES
						</h2>
						<p className="text-gray-600 text-center mb-12">
							We take pride in providing exceptional facilities that
							enhance your Pilates experience from the moment you step
							through our doors
						</p>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
							{facilities.map((facility) => (
								<FacilityIcon key={facility} type={facility} />
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-primary py-16 md:py-24">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto text-center text-white">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
							Achieve Positive Mind & Soul
							<br />
							with Issy Studio.
						</h2>
						<a
							href="#"
							className="inline-block px-6 py-3 text-lg font-medium bg-white text-primary rounded-md hover:bg-gray-100 transition-colors duration-300"
						>
							Book a Trial Session
						</a>
					</div>
				</div>
			</section>
		</DefaultSection>
	);
}
