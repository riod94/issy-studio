import { FacilityIcon } from "@/components/facility-icon"

export function FacilitiesSection() {
  const facilities = [
    'toilet',
    'locker',
    'changing-room',
    'pantry',
    'body-wash',
    'rental-towel'
  ] as const

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">FACILITIES</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            We take pride in providing exceptional facilities that enhance your Pilates experience.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {facilities.map((facility) => (
              <FacilityIcon key={facility} type={facility} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

