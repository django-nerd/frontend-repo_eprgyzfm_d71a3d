import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './index.css'

import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import FractionalPage from './pages/FractionalPage'
import PPHPage from './pages/PPHPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'

function Layout() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route path="/" element={<HomePage />} />
          <Route path="/fractional-hiring" element={<FractionalPage />} />
          <Route path="/pay-per-hire" element={<PPHPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
