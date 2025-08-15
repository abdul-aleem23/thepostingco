import { useLanguage } from '../contexts/LanguageContext'
import { motion } from 'framer-motion'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white/10 backdrop-blur-md border-t-2 py-8 md:py-12 px-4 max-sm:landscape:pt-12" style={{ borderColor: '#F0CA00' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.div 
            className="font-cyber font-bold mb-4"
            style={{ 
              color: '#F0CA00', 
              textShadow: '0 0 10px #F0CA00',
              fontSize: 'clamp(1.25rem, 5vw, 1.5rem)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            &gt; ThePostingCo.
          </motion.div>
          
          <motion.div 
            className="text-gray-300 space-y-2 mb-6 font-pixel"
            style={{ fontSize: 'clamp(0.875rem, 3vw, 1rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>📧 hello@thepostingco.berlin</p>
            <p>📞 +49 157 XXX XXXX</p>
          </motion.div>
          
          <motion.div 
            className="text-gray-500 space-y-1 font-pixel"
            style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>© 2025 ThePostingCo. {t('footer.rights')}</p>
            <p>{t('footer.tagline')}</p>
            <p>{t('footer.berlin')}</p>
          </motion.div>

          {/* Decorative Code Elements - Desktop Only */}
          <motion.div
            className="absolute bottom-4 left-4 font-mono text-xs opacity-30 hidden lg:block"
            style={{ color: '#F0CA00' }}
            animate={{
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            &lt;/berlin_network&gt;
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer