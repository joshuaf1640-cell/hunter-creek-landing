import { config } from '../config'

export default function Contacts() {
  return (
    <div>
      <section className="bg-emerald-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-emerald-100 mt-2">Reach our management team</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Management Office</h2>

            <div className="space-y-8">
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

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Online Payments</h3>
                <p className="text-gray-700 mb-4">
                  Pay your HOA fees directly through AppFolio for fast and secure processing.
                </p>
                <a
                  href={config.appfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-700 text-white px-6 py-2 rounded hover:bg-emerald-800 transition font-medium"
                >
                  Go to AppFolio
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-700 text-white font-medium py-3 rounded-lg hover:bg-emerald-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-2"><span className="font-semibold">Monday - Friday:</span></p>
              <p className="text-gray-700">9:00 AM - 5:00 PM Mountain Time</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-2"><span className="font-semibold">Saturday - Sunday:</span></p>
              <p className="text-gray-700">Closed (Emergency contact available)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
