import { Link } from 'react-router-dom'
import { config } from '../config'

export default function Header() {
  return (
    <header className="bg-white border-b border-emerald-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-emerald-700">
          Hunter Creek
        </Link>
        <nav className="flex gap-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-emerald-700 transition">Home</Link>
          <Link to="/contacts" className="text-gray-700 hover:text-emerald-700 transition">Contacts</Link>
          <Link to="/members" className="text-gray-700 hover:text-emerald-700 transition">Members</Link>
          <Link to="/location" className="text-gray-700 hover:text-emerald-700 transition">Location</Link>
          <a
            href={config.appfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition"
          >
            AppFolio
          </a>
        </nav>
      </div>
    </header>
  )
}
