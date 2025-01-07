"use client";

import { useState } from "react";
import { CalendarCell } from "@/components/calendar-cell";
import { ClassScheduleItem } from "@/components/class-schedule-item";
import Link from "next/link";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
const mockSchedule = [
	{
		time: "7:00 AM",
		duration: "50",
		name: "Reformer Class - Strong Core",
		type: "Group Class",
		availability: {
			status: "available" as const,
			slots: 6,
			total: 10,
		},
	},
	{
		time: "10:00 AM",
		duration: "50",
		name: "Reformer Class - Strong Core",
		type: "Group Class",
		availability: {
			status: "full" as const,
		},
	},
	{
		time: "6:00 PM",
		duration: "50",
		name: "Reformer Class - Strong Core",
		type: "Group Class",
		availability: {
			status: "available" as const,
			slots: 3,
			total: 10,
		},
	},
];

export default function SchedulePage() {
	const [selectedDate, setSelectedDate] = useState(7);
	const [selectedMonth, setSelectedMonth] = useState("january");

	return (
		<main className="flex-1">
			{/* Hero Section */}
			<section className="relative bg-primary py-16 md:py-24">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
						SCHEDULE
					</h1>
				</div>
			</section>

			{/* Schedule Section */}
			<section className="py-12">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						{/* Month Selector */}
						<div className="flex items-center justify-between mb-8">
							<select
								value={selectedMonth}
								onChange={(e) => setSelectedMonth(e.target.value)}
								className="w-[180px] p-2 border rounded-md"
							>
								<option value="january">January 2025</option>
								<option value="february">February 2025</option>
								<option value="march">March 2025</option>
							</select>

							<div className="flex items-center gap-4">
								<button className="p-2 rounded-full hover:bg-gray-100">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 19l-7-7 7-7"
										/>
									</svg>
								</button>
								<button className="p-2 rounded-full hover:bg-gray-100">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</button>
							</div>
						</div>

						{/* Calendar */}
						<div className="grid grid-cols-6 gap-2 mb-12">
							{days.map((day, i) => (
								<CalendarCell
									key={day}
									date={i + 4}
									day={day}
									isSelected={i + 4 === selectedDate}
									isToday={i + 4 === 7}
									onClick={() => setSelectedDate(i + 4)}
								/>
							))}
						</div>

						{/* Schedule List */}
						<div className="space-y-2">
							{mockSchedule.map((item, i) => (
								<ClassScheduleItem key={i} {...item} />
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
