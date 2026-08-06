import { config } from '../config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-white mb-4">Hunter Creek</h3>
            <p className="text-sm">{config.description}</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <p className="text-sm">{config.address}</p>
            <p className="text-sm">{config.phone}</p>
            <p className="text-sm">{config.email}</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/contacts" className="hover:text-white transition">Contacts</a></li>
              <li><a href="/members" className="hover:text-white transition">Members</a></li>
              <li><a href={config.kioskUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Residents Portal</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Hunter Creek Condominiums. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
