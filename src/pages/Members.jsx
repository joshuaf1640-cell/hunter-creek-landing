import { config } from '../config'

export default function Members() {
  return (
    <div>
      <section className="bg-emerald-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Resident Portal</h1>
          <p className="text-emerald-100 mt-2">Resources for HOA members</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-lg p-8">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Documents</h3>
            <p className="text-gray-700">Access HOA documents, bylaws, and important notices.</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-lg p-8">
            <div className="text-3xl mb-4">📢</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Announcements</h3>
            <p className="text-gray-700">Stay informed with community announcements and updates.</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-lg p-8">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Directory</h3>
            <p className="text-gray-700">Connect with neighbors and management contact info.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold mb-4">AppFolio Resident Portal</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Access your account, view statements, make payments, and submit maintenance requests all in one place.
          </p>
          <a
            href={config.appfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Log In to AppFolio
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Member Resources</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-2">HOA Bylaws & Covenants</h3>
              <p className="text-gray-700 text-sm">Community rules and regulations</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-2">Architectural Guidelines</h3>
              <p className="text-gray-700 text-sm">Requirements for modifications and improvements</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-2">Meeting Minutes</h3>
              <p className="text-gray-700 text-sm">Past board and member meeting records</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-2">Assessment Information</h3>
              <p className="text-gray-700 text-sm">Current fees and payment details</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-2">Community Directory</h3>
              <p className="text-gray-700 text-sm">Contact information for management and board members</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 mb-2">Maintenance Requests</h3>
              <p className="text-gray-700 text-sm">Submit and track maintenance issues via AppFolio</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border-l-4 border-emerald-700 p-8 rounded">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Getting Started</h2>
            <p className="text-gray-700 mb-4">
              As an HOA member, you have access to all community documents, announcements, and your account
              information through AppFolio. If you haven't already, log in to create your account or reset
              your password.
            </p>
            <p className="text-gray-700">
              For assistance accessing the portal, please contact our management office during business hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
