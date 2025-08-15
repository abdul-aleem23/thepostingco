import { useLanguage } from '../contexts/LanguageContext'
import { motion } from 'framer-motion'
import { useState } from 'react'

function Navbar() {
  const { t, switchLanguage, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      className="bg-white/10 backdrop-blur-md fixed w-full top-0 z-50 border-b-2"
      style={{ borderColor: '#F0CA00' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="font-cyber font-bold"
            style={{ 
              color: '#F0CA00',
              fontSize: 'clamp(1rem, 4vw, 1.25rem)'
            }}
            whileHover={{ 
              textShadow: "0 0 10px #F0CA00",
              scale: 1.05 
            }}
          >
            <span className="font-mono">&gt;</span> ThePostingCo.
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">{t('nav.home')}</NavLink>
            <NavLink href="#how-it-works">{t('nav.howItWorks')}</NavLink>
            <NavLink href="#pricing">{t('nav.pricing')}</NavLink>
            <NavLink href="#contact">{t('nav.contact')}</NavLink>
            <motion.button 
              onClick={switchLanguage}
              className="ml-4 px-3 py-1 border-2 text-black transition-all rounded font-pixel text-sm min-h-[44px] min-w-[44px]"
              style={{
                borderColor: '#F0CA00',
                backgroundColor: '#F0CA00'
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 15px rgba(240, 202, 0, 0.5)",
                backgroundColor: '#D4B000'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? 'DE' : 'EN'}
            </motion.button>
          </div>
          
          {/* Mobile Language Toggle + Hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button 
              onClick={switchLanguage}
              className="px-2 py-1 border-2 text-black transition-all rounded font-pixel text-xs min-h-[44px] min-w-[44px]"
              style={{
                borderColor: '#F0CA00',
                backgroundColor: '#F0CA00'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 10px rgba(240, 202, 0, 0.5)",
                backgroundColor: '#D4B000'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? 'DE' : 'EN'}
            </motion.button>
            <motion.button
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
            <motion.span 
              className="w-6 h-0.5"
              style={{ backgroundColor: '#F0CA00' }}
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0
              }}
            />
            <motion.span 
              className="w-6 h-0.5"
              style={{ backgroundColor: '#F0CA00' }}
              animate={{
                opacity: isOpen ? 0 : 1
              }}
            />
            <motion.span 
              className="w-6 h-0.5"
              style={{ backgroundColor: '#F0CA00' }}
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0
              }}
            />
          </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="py-4 space-y-4">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>
              {t('nav.home')}
            </MobileNavLink>
            <MobileNavLink href="#how-it-works" onClick={() => setIsOpen(false)}>
              {t('nav.howItWorks')}
            </MobileNavLink>
            <MobileNavLink href="#pricing" onClick={() => setIsOpen(false)}>
              {t('nav.pricing')}
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
              {t('nav.contact')}
            </MobileNavLink>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children }) {
  return (
    <motion.a 
      href={href} 
      className="text-gray-300 transition-colors font-pixel relative min-h-[44px] flex items-center"
      style={{ fontSize: 'clamp(0.875rem, 3vw, 1.125rem)' }}
      whileHover={{ 
        scale: 1.05,
        color: '#F0CA00',
        textShadow: "0 0 8px #F0CA00"
      }}
    >
      <span className="font-mono text-xs absolute -left-3 top-1/2 transform -translate-y-1/2 opacity-50" style={{ color: '#F0CA00' }}>&gt;</span>
      {children}
    </motion.a>
  )
}

function MobileNavLink({ href, children, onClick }) {
  return (
    <motion.a 
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-gray-300 font-pixel text-lg min-h-[44px] flex items-center"
      whileHover={{ 
        color: '#F0CA00',
        x: 10,
        textShadow: "0 0 8px #F0CA00"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="font-mono text-sm mr-2" style={{ color: '#F0CA00' }}>&gt;</span>
      {children}
    </motion.a>
  )
}

export default Navbar