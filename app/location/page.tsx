import DefaultSection from "@/components/ui/DefaultSection";
import Image from "next/image";
import Link from "next/link";

const locations = [
	{
		id: "setiabudi-one",
		name: "Setiabudi One",
		image: "/placeholder.svg?height=400&width=600",
		address: "Setiabudi building lt 1, Jl. HR Rasuna said, Jakarta Selatan",
	},
	{
		id: "south-quarter",
		name: "South Quarter",
		image: "/placeholder.svg?height=400&width=600",
		address:
			"Jl. R.A. Kartini No.Kav 8, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430",
	},
	{
		id: "sedayu-kelapa-gading",
		name: "Sedayu Kelapa Gading",
		image: "/placeholder.svg?height=400&width=600",
		address:
			"Jl. Sedayu Boulevard Raya, RT.3/RW.9, Cakung Bar., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13910",
	},
	{
		id: "tsm-cibubur",
		name: "TSM Cibubur",
		image: "/placeholder.svg?height=400&width=600",
		address:
			"Trans Studio Mall Cibubur, Jl. Alternatif Cibubur No.230 A, Harjamukti, Kec. Cimanggis, Kota Depok, Jawa Barat 16454",
	},
];

export default function LocationPage() {
	return (
		<DefaultSection>
			{/* Hero Section */}
			<section className="relative py-12 md:py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
						LOCATION
					</h1>
				</div>
			</section>

			{/* Locations Grid */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid gap-8 md:grid-cols-2">
						{locations.map((location) => (
							<div
								key={location.id}
								className="bg-white rounded-lg overflow-hidden shadow-lg"
							>
								<div className="relative h-64">
									<Image
										src={location.image}
										alt={location.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">
										{location.name}
									</h3>
									<p className="text-gray-600 mb-4 text-sm">
										{location.address}
									</p>
									<Link
										href={`/location/${location.id}`}
										className="inline-block px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
									>
										See Details
									</Link>
								</div>
							</div>
						))}
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
