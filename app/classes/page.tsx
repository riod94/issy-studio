"use client";

import { ClassBadge } from "@/components/class-badge";
import DefaultSection from "@/components/ui/DefaultSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const classes = [
	{
		id: "reformer-class-sweetest-stretch",
		title: "Reformer Class - Sweetest Stretch",
		type: "GROUP CLASS",
		duration: "50 minutes",
		people: "Up to 10 People",
		level: "For Beginner",
		image: "/placeholder.svg?height=400&width=600",
	},
	{
		id: "chair-class-sweetest-stretch",
		title: "Chair Class - Sweetest Stretch",
		type: "CHAIR CLASS",
		duration: "50 minutes",
		people: "Up to 6 People",
		level: "For Beginner",
		image: "/placeholder.svg?height=400&width=600",
	},
	// Add more classes...
];

export default function ClassesPage() {
	const [activeTab, setActiveTab] = useState("all");

	return (
		<DefaultSection>
			{/* Hero Section */}
			<section className="relative py-12 md:py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
						CLASSES
					</h1>
				</div>
			</section>

			{/* Classes Section */}
			<section className="py-12 md:py-24">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					{/* Filter Tabs */}
					<div className="mb-12">
						<div className="flex justify-center space-x-2">
							<div className="bg-white p-2 rounded-md">
								{["all", "beginner", "intermediate", "advance"].map(
									(tab) => (
										<button
											key={tab}
											onClick={() => setActiveTab(tab)}
											className={`px-4 py-2 font-medium rounded-md ${
												activeTab === tab
													? "bg-primary text-white"
													: "bg-white text-gray-700 hover:bg-gray-200"
											}`}
										>
											{tab.toUpperCase()}
										</button>
									)
								)}
							</div>
						</div>
					</div>

					{/* Classes Grid */}
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{classes.map((classItem) => (
							<Link
								key={classItem.id}
								href={`/classes/${classItem.id}`}
								className="group block bg-white rounded-lg overflow-hidden shadow-lg"
							>
								<div className="relative aspect-[4/3] overflow-hidden">
									<Image
										src={classItem.image}
										alt={classItem.title}
										fill
										className="object-cover transition-transform group-hover:scale-105"
									/>
									<div className="absolute top-4 left-4">
										<ClassBadge
											type={
												classItem.type as
													| "GROUP CLASS"
													| "CHAIR CLASS"
											}
										/>
									</div>
								</div>
								<div className="p-6">
									<h3 className="font-bold text-xl mb-2">
										{classItem.title}
									</h3>
									<p className="text-gray-600 text-sm">
										{classItem.duration} | {classItem.people} |{" "}
										{classItem.level}
									</p>
								</div>
							</Link>
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
