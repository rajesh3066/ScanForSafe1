import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import FloatingCTA from './components/FloatingCTA'
import QrCodeForm from './components/QrCodeForm'

// Import standalone pages
import FeaturesPage from './pages/FeaturesPage'
import ProductsPage from './pages/ProductsPage'
import UseCasesPage from './pages/UseCasesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import TestimonialsPage from './pages/TestimonialsPage'
import LoginPage from './pages/LoginPage'


export default function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  return (
    <div className="min-h-screen flex flex-col">
      {!isLoginPage && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/qr-form" element={<QrCodeForm />} />
        </Routes>
      </main>
      {!isLoginPage && <Footer />}
      {!isLoginPage && <FloatingCTA />}
    </div>
  )
}

