export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-600 mb-3" />
            <div className="text-white font-semibold">JobsTerritory</div>
            <p className="mt-2 text-slate-400">The modern marketplace for ambitious talent.</p>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Product</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-slate-200">Browse jobs</a></li>
              <li><a href="#" className="hover:text-slate-200">Companies</a></li>
              <li><a href="#" className="hover:text-slate-200">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Resources</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-slate-200">Blog</a></li>
              <li><a href="#" className="hover:text-slate-200">Guides</a></li>
              <li><a href="#" className="hover:text-slate-200">Support</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Company</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-slate-200">About</a></li>
              <li><a href="#" className="hover:text-slate-200">Careers</a></li>
              <li><a href="#" className="hover:text-slate-200">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-slate-500 text-xs">© {new Date().getFullYear()} JobsTerritory. All rights reserved.</div>
      </div>
    </footer>
  )
}
