import { Link } from 'react-router-dom'
import { config } from '../config'

export default function Home() {
  return (
    <div>
      <section className="relative h-96 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-transparent"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">{config.name}</h1>
            <p className="text-xl text-emerald-200">{config.description}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/contacts"
            className="p-6 bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-lg hover:shadow-lg transition hover:border-emerald-400"
          >
            <div className="text-3xl mb-2">📞</div>
            <h3 className="font-semibold text-gray-900 mb-2">Contact Office</h3>
            <p className="text-sm text-gray-600">Reach our management team</p>
          </Link>

          <Link
            to="/members"
            className="p-6 bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-lg hover:shadow-lg transition hover:border-emerald-400"
          >
            <div className="text-3xl mb-2">👥</div>
            <h3 className="font-semibold text-gray-900 mb-2">Resident Portal</h3>
            <p className="text-sm text-gray-600">Members-only resources</p>
          </Link>

          <a
            href={config.appfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-lg hover:shadow-lg transition hover:border-emerald-400"
          >
            <div className="text-3xl mb-2">💳</div>
            <h3 className="font-semibold text-gray-900 mb-2">Pay Online</h3>
            <p className="text-sm text-gray-600">Access AppFolio</p>
          </a>

          <Link
            to="/location"
            className="p-6 bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-lg hover:shadow-lg transition hover:border-emerald-400"
          >
            <div className="text-3xl mb-2">📍</div>
            <h3 className="font-semibold text-gray-900 mb-2">Find Us</h3>
            <p className="text-sm text-gray-600">Location & map</p>
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Hunter Creek</h2>
              <p className="text-gray-700 mb-4">
                Hunter Creek Condominiums is a premier 3-phase community nestled in Aspen, Colorado.
                Our community is designed to provide residents with exceptional living standards and
                top-tier amenities.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you're here to explore our community or manage your residence, we're here to help.
                Our professional management team is committed to maintaining our properties and serving
                all residents.
              </p>
              <p className="text-gray-700">
                Use the links above to find contact information, access resident resources, or pay your
                association fees.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Key Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-200">✓</span>
                  <span>Professional property management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-200">✓</span>
                  <span>Online payment options via AppFolio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-200">✓</span>
                  <span>Resident portal for documents and notices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-200">✓</span>
                  <span>Convenient Aspen location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-200">✓</span>
                  <span>Responsive management team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
