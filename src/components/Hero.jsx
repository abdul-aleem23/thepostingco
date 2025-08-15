import { useLanguage } from '../contexts/LanguageContext'
import { motion } from 'framer-motion'
import ASCIILogo from './ASCIILogo'

function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden scanlines py-8 sm:py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-black spray-paint"></div>
      
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full flex flex-col justify-center min-h-0">
        {/* ASCII Logo */}
        <motion.div 
          className="mb-2 sm:mb-4 md:mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ASCIILogo />
        </motion.div>
        
        {/* Main Tagline */}
        <motion.h1 
          className="font-cyber font-bold mb-2 sm:mb-4 md:mb-6"
          style={{
            fontSize: 'clamp(1.5rem, 6vw, 5rem)',
            lineHeight: '1.1'
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-white" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.8)' }}>
            {t('hero.title.part1')}
          </span>
          <br />
          <span style={{ 
            color: '#F0CA00', 
            textShadow: '0 0 15px #F0CA00' 
          }}>
            {t('hero.title.part2')}
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto font-pixel leading-relaxed"
          style={{ 
            color: '#D1D5DB',
            fontSize: 'clamp(0.875rem, 3vw, 1.25rem)'
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        
        {/* CTA Button */}
        <motion.button 
          className="text-black font-cyber font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px] px-6 sm:px-8 md:px-8 mx-auto w-fit"
          style={{
            backgroundColor: '#F0CA00',
            boxShadow: '0 4px 15px rgba(240, 202, 0, 0.3)',
            fontSize: 'clamp(1rem, 4vw, 1.25rem)',
            padding: 'clamp(12px, 3vw, 16px) clamp(24px, 4vw, 32px)'
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          whileHover={{ 
            backgroundColor: '#D4B000',
            boxShadow: "0 0 25px rgba(240, 202, 0, 0.6)",
            textShadow: "0 0 5px rgba(0, 0, 0, 0.8)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          {t('hero.cta')}
        </motion.button>

        {/* Floating Element - Desktop Only */}
        <motion.div
          className="absolute bottom-20 right-10 font-mono text-sm opacity-50 hidden lg:block"
          style={{ color: '#3D5A80' }}
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          &lt; flyer_distribution_active /&gt;
        </motion.div>
      </div>
    </section>
  )
}

export default Hero