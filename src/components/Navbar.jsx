import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

function PillLink({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-4 py-2 rounded-full text-sm transition-colors border ${
          isActive
            ? 'bg-violet-600 text-white border-violet-500 shadow'
            : 'bg-white text-violet-900/90 hover:bg-violet-100 border-violet-200'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-violet-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-500 shadow-md" />
            <span className="text-xl font-semibold tracking-tight text-violet-900">Jobs Territory</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-3">
            <PillLink to="/">Home</PillLink>
            <PillLink to="/fractional-hiring">Fractional Hiring</PillLink>
            <PillLink to="/pay-per-hire">Pay Per Hire</PillLink>
            <PillLink to="/contact">Hire Now</PillLink>
            <PillLink to="/resources">Resources</PillLink>
            <PillLink to="/about">About Us</PillLink>
          </nav>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-violet-900 hover:bg-violet-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid grid-cols-2 gap-2">
              <PillLink to="/" onClick={() => setOpen(false)}>Home</PillLink>
              <PillLink to="/fractional-hiring" onClick={() => setOpen(false)}>Fractional Hiring</PillLink>
              <PillLink to="/pay-per-hire" onClick={() => setOpen(false)}>Pay Per Hire</PillLink>
              <PillLink to="/contact" onClick={() => setOpen(false)}>Hire Now</PillLink>
              <PillLink to="/resources" onClick={() => setOpen(false)}>Resources</PillLink>
              <PillLink to="/about" onClick={() => setOpen(false)}>About Us</PillLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
