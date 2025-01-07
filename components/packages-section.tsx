export function PackagesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">THE PACKAGES</h2>
          <p className="text-gray-600 mb-12">
            Experience our carefully curated package options designed to suit your preferences and goals.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-sm">
              <thead className="border-b">
                <tr>
                  <th className="py-4 px-6 text-left font-medium">TYPE</th>
                  <th className="py-4 px-6 text-center font-medium">WEEKLY</th>
                  <th className="py-4 px-6 text-center font-medium">PRIVATE/DUO/MIXED AND ALL REFORMER/CHAIR LIVE</th>
                  <th className="py-4 px-6 text-center font-medium">THREE MONTHS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6">Single Trial</td>
                  <td className="py-4 px-6 text-center">150.000</td>
                  <td className="py-4 px-6 text-center">-</td>
                  <td className="py-4 px-6 text-center">-</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">4 Sessions</td>
                  <td className="py-4 px-6 text-center">500.000</td>
                  <td className="py-4 px-6 text-center">2.000.000</td>
                  <td className="py-4 px-6 text-center">5.000.000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">8 Sessions</td>
                  <td className="py-4 px-6 text-center">900.000</td>
                  <td className="py-4 px-6 text-center">3.500.000</td>
                  <td className="py-4 px-6 text-center">9.000.000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6">12 Sessions</td>
                  <td className="py-4 px-6 text-center">1.200.000</td>
                  <td className="py-4 px-6 text-center">5.000.000</td>
                  <td className="py-4 px-6 text-center">12.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

