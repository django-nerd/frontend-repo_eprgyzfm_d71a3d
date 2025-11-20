import { Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-violet-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand + mission */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-500" />
              <span className="text-xl font-semibold text-violet-900">Jobs Territory</span>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-sm">
              Transforming the way companies hire across India. We connect exceptional talent with outstanding opportunities through innovative recruitment solutions.
            </p>
            <div className="mt-5 flex gap-6 text-violet-900/80">
              <div>
                <div className="text-2xl font-bold">15k</div>
                <div className="text-xs text-slate-500">Placements</div>
              </div>
              <div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-slate-500">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold">48 hrs</div>
                <div className="text-xs text-slate-500">Response Time</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-sm font-semibold text-violet-900">Our Services</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/fractional-hiring" className="text-slate-700 hover:text-violet-700">Fractional Hiring</Link></li>
              <li><Link to="/pay-per-hire" className="text-slate-700 hover:text-violet-700">Pay Per Hire</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-violet-900">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Mail size={16} /> careers@jobsterritory.com</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Bangalore</li>
            </ul>
            <div className="mt-6 text-sm font-semibold text-violet-900">Quick Links</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/about" className="text-slate-700 hover:text-violet-700">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-700 hover:text-violet-700">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-slate-700 hover:text-violet-700">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-700 hover:text-violet-700">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="text-sm font-semibold text-violet-900">Stay in the loop</div>
            <p className="mt-3 text-sm text-slate-600">Subscribe to hiring insights, trends and playbooks.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-full border border-violet-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400" />
              <button className="rounded-full bg-violet-600 text-white px-4 py-2 text-sm hover:bg-violet-700">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-violet-100 pt-6 text-xs text-slate-500">© 2024 Jobs Territory. All rights reserved.</div>
      </div>
    </footer>
  )
}
