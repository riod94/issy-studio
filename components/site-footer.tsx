import Link from "next/link"
import { Instagram } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-white py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* First Column */}
          <div>
            <h3 className="text-primary text-xl font-medium mb-6">ISSY STUDIO</h3>
            <nav className="space-y-4">
              <Link href="/classes" className="block text-gray-600 hover:text-gray-900">
                Classes
              </Link>
              <Link href="/location" className="block text-gray-600 hover:text-gray-900">
                Location
              </Link>
            </nav>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="text-primary text-xl font-medium mb-6">ABOUT US</h3>
            <nav className="space-y-4">
              <Link href="/about" className="block text-gray-600 hover:text-gray-900">
                About Issy Studio
              </Link>
              <Link href="/terms" className="block text-gray-600 hover:text-gray-900">
                Terms & Condition
              </Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Third Column */}
          <div>
            <h3 className="text-primary text-xl font-medium mb-6">VISIT</h3>
            <p className="text-gray-600 mb-4">
              Setiabudi building lt 1, Jl. HR Rasuna said, Jakarta Selatan
            </p>
            <Link 
              href="/location" 
              className="text-gray-600 hover:text-gray-900 underline"
            >
              See on the map
            </Link>
          </div>
        </div>

        {/* Connected Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-primary text-xl font-medium mb-6">CONNECTED</h3>
          <Link 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-gray-600 hover:text-gray-900"
          >
            <Instagram className="w-8 h-8" />
            <span className="sr-only">Follow us on Instagram</span>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-sm">
          © PT. PACIFIC NOMOR PERTAMA {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

