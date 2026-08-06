import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Contacts from './pages/Contacts.jsx'
import Members from './pages/Members.jsx'
import Location from './pages/Location.jsx'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/members" element={<Members />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
