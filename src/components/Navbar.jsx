import { Menu, Search, Briefcase, CalendarDays } from "lucide-react";
import { useState } from "react";

function NavLink({ children }) {
  return (
    <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-600 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold text-lg tracking-tight">
              Jobs<span className="text-cyan-300">Territory</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink>Solutions</NavLink>
            <NavLink>Talent Network</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Case Studies</NavLink>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white/90 hover:text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <Search size={16} />
              Find Talent
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-slate-900 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:via-blue-500 hover:to-indigo-500 transition-colors shadow-lg shadow-blue-500/30">
              <CalendarDays size={16} />
              Book a demo
            </button>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
            <Menu />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 pt-4 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <a href="#" className="rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 px-4 py-3">Solutions</a>
              <a href="#" className="rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 px-4 py-3">Talent Network</a>
              <a href="#" className="rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 px-4 py-3">Pricing</a>
              <a href="#" className="rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 px-4 py-3">Case Studies</a>
            </div>
            <div className="flex gap-3 pt-3">
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-white/90 border border-white/10 bg-white/5">
                <Search size={16} /> Find Talent
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-slate-900 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600">
                <Briefcase size={16} /> Post a role
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
