import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedJobs from './components/FeaturedJobs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B1220] selection:bg-cyan-400/30 selection:text-white">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <FeaturedJobs />
      <Footer />
    </div>
  )
}

export default App
