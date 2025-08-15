
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RiderNetwork from './components/RiderNetwork'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <RiderNetwork />
        <HowItWorks />
        <Pricing />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
