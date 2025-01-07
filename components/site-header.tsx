"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 w-full z-50 bg-primary text-white backdrop-blur-sm">
			<div className="mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Link href="/">
							<Image
								src="/issy-studio.webp"
								alt="Issy Studio"
								width={120}
								height={40}
								className="h-8 w-auto sm:h-10"
							/>
						</Link>
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
						>
							<span className="sr-only">Open menu</span>
							{isOpen ? (
								<X className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>

					<nav className="hidden md:flex space-x-10">
						<Link
							href="/"
							className="text-base font-bold uppercase text-white hover:text-secondary"
						>
							Home
						</Link>
						<Link
							href="/classes"
							className="text-base font-bold uppercase text-white hover:text-secondary"
						>
							Classes
						</Link>
						<Link
							href="/location"
							className="text-base font-bold uppercase text-white hover:text-secondary"
						>
							Location
						</Link>
						<Link
							href="/about"
							className="text-base font-bold uppercase text-white hover:text-secondary"
						>
							About
						</Link>
					</nav>
					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						<a
							href="#"
							className="whitespace-nowrap text-base font-bold uppercase text-white hover:text-primary hover:bg-secondary px-4 py-2 border border-transparent rounded-md"
						>
							Sign in
						</a>
						<a
							href="#"
							className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-bold uppercase text-primary bg-secondary hover:bg-primary hover:text-secondary"
						>
							Sign up
						</a>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<div>
									<Image
										src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Issy%20Studio.pdf%202-0wHy5XjgPHD4JahA9UqbYtSdTDKZ4i.svg"
										alt="Issy Studio"
										width={120}
										height={40}
										className="h-8 w-auto"
									/>
								</div>
								<div className="-mr-2">
									<button
										onClick={() => setIsOpen(false)}
										className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
									>
										<span className="sr-only">Close menu</span>
										<X className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									<Link
										href="/"
										className="text-base font-medium text-gray-900 hover:text-primary"
									>
										Home
									</Link>
									<Link
										href="/classes"
										className="text-base font-medium text-gray-900 hover:text-primary"
									>
										Classes
									</Link>
									<Link
										href="/location"
										className="text-base font-medium text-gray-900 hover:text-primary"
									>
										Location
									</Link>
									<Link
										href="/about"
										className="text-base font-medium text-gray-900 hover:text-primary"
									>
										About
									</Link>
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<div>
								<a
									href="#"
									className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-[#b3a28e]"
								>
									Sign up
								</a>
								<p className="mt-6 text-center text-base font-medium text-gray-500">
									Existing customer?{" "}
									<a
										href="#"
										className="text-primary hover:text-[#b3a28e]"
									>
										Sign in
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
