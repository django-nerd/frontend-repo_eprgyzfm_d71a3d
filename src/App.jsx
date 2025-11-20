import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FractionalPage from './pages/FractionalPage'
import PPHPage from './pages/PPHPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function AppWrapper({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default function App() {
  return null
}
