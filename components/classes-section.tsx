import Image from "next/image";
import Link from "next/link";

export function ClassesSection() {
	return (
		<section className="py-20 bg-secondary">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center text-center space-y-4 mb-12">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Our Classes
					</h2>
					<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Explore our range of dance classes for all skill levels
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{[1, 2, 3].map((i) => (
						<div
							key={i}
							className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
						>
							<Image
								src={`/placeholder.svg?height=400&width=600`}
								alt="Dance Class"
								width={600}
								height={400}
								className="object-cover w-full h-48 transition-transform group-hover:scale-105"
							/>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">
									Dance Class {i}
								</h3>
								<p className="text-gray-500 mb-4">
									Perfect for beginners to advanced dancers
								</p>
								<Link
									href="/classes"
									className="outline outline-primary py-2 px-4 rounded hover:bg-primary hover:text-white transition-colors duration-300"
								>
									Learn More
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
