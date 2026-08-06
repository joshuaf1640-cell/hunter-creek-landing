import { config } from '../config'

export default function Location() {
  return (
    <div>
      <section className="bg-emerald-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Find Us</h1>
          <p className="text-emerald-100 mt-2">Hunter Creek Condominiums</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
            <p className="text-gray-700 mb-4">
              Located in the heart of Aspen, Colorado, Hunter Creek Condominiums offers convenient access to
              world-class skiing, dining, shopping, and entertainment.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-700">{config.address}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <a href={`tel:${config.phone}`} className="text-emerald-700 hover:text-emerald-800 transition font-medium">
                  {config.phone}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a href={`mailto:${config.email}`} className="text-emerald-700 hover:text-emerald-800 transition font-medium">
                  {config.email}
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting There</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-emerald-700">→</span>
                <span>Easily accessible from downtown Aspen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-700">→</span>
                <span>Close to Aspen Airport (30 minutes)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-700">→</span>
                <span>Near Aspen Mountain and hiking trails</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-700">→</span>
                <span>Walking distance to restaurants and shops</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <iframe
            src={config.googleMapsEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Community Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="font-semibold text-gray-900 mb-2">3-Phase Community</h3>
              <p className="text-gray-600 text-sm">Multiple buildings and residences</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">🅿️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Ample Parking</h3>
              <p className="text-gray-600 text-sm">Convenient parking for residents and guests</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Entry</h3>
              <p className="text-gray-600 text-sm">Professional security systems throughout</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">🌳</div>
              <h3 className="font-semibold text-gray-900 mb-2">Well-Maintained Grounds</h3>
              <p className="text-gray-600 text-sm">Beautiful landscaping and outdoor spaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">🏔️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Mountain Views</h3>
              <p className="text-gray-600 text-sm">Scenic Colorado mountain backdrop</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-semibold text-gray-900 mb-2">Community Events</h3>
              <p className="text-gray-600 text-sm">Regular resident gatherings and activities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
