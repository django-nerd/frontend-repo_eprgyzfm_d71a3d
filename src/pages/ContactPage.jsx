export default function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-violet-200 via-fuchsia-100 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-violet-900">Contact Us</h1>
          <p className="mt-3 text-slate-700 text-lg">We’d love to hear from you. Our friendly team is always here to chat.</p>

          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            <div className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6 lg:col-span-1">
              <div className="text-sm font-semibold text-violet-900">Reach Us</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Email: hello@jobsterritory.co</li>
                <li>Location: Bangalore</li>
                <li>Phone Hours: Mon–Fri, 8 am–5 pm</li>
              </ul>
              <p className="mt-4 text-xs text-slate-600">By submitting the form, you consent to contact via SMS and agree to our <a href="/privacy" className="text-violet-700 underline">privacy policy</a>.</p>
            </div>

            <form className="rounded-3xl bg-white border border-violet-200 shadow-sm p-6 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-violet-900">First Name *</label>
                <input required className="mt-1 w-full rounded-full border border-violet-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400" />
              </div>
              <div>
                <label className="text-xs font-medium text-violet-900">Last Name *</label>
                <input required className="mt-1 w-full rounded-full border border-violet-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-violet-900">Email *</label>
                <input type="email" required className="mt-1 w-full rounded-full border border-violet-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400" />
              </div>
              <div>
                <label className="text-xs font-medium text-violet-900">Phone Number</label>
                <input className="mt-1 w-full rounded-full border border-violet-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400" />
              </div>
              <div>
                <label className="text-xs font-medium text-violet-900">Company Name</label>
                <input className="mt-1 w-full rounded-full border border-violet-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-violet-900">Job Title</label>
                <input className="mt-1 w-full rounded-full border border-violet-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400" />
              </div>
              <div className="sm:col-span-2 flex justify-end">
                <button className="rounded-full bg-violet-600 text-white px-6 py-2 text-sm hover:bg-violet-700">Get in Touch</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
