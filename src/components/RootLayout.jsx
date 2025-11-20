import Navbar from './Navbar'
import Footer from './Footer'

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
