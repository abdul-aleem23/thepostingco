import { useLanguage } from '../contexts/LanguageContext'
import { motion } from 'framer-motion'

function Pricing() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="py-20 px-4 max-sm:landscape:pt-16">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="bg-white/10 backdrop-blur-md border-2 rounded-2xl p-6 md:p-12 text-center relative overflow-hidden"
          style={{ borderColor: '#F0CA00' }}
          initial={{ opacity: 0, scale: 0.9, rotateZ: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Background Code Elements */}
          
          <div className="relative z-10">
            <motion.h2 
              className="font-cyber font-bold mb-6"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)' }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <span style={{ color: '#F0CA00', textShadow: '0 0 15px #F0CA00' }}>
                {t('pricing.price')}
              </span>
              <span className="text-white"> {t('pricing.title')}</span>
            </motion.h2>
            
            <motion.h3 
              className="font-pixel font-bold mb-8"
              style={{ 
                color: '#F0CA00',
                fontSize: 'clamp(1.25rem, 6vw, 2rem)'
              }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              &gt; {t('pricing.subtitle')}
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-6 max-w-2xl mx-auto font-pixel leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)' }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {t('pricing.description')}
            </motion.p>
            
            <motion.div 
              className="mb-8 font-mono border bg-white/10 backdrop-blur-md p-4 rounded-lg"
              style={{ 
                color: '#F0CA00',
                borderColor: '#F0CA00',
                fontSize: 'clamp(0.875rem, 3vw, 1.125rem)'
              }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              viewport={{ once: true }}
            >
              [ {t('pricing.includes')} ]
            </motion.div>
            
            <motion.button 
              className="text-black font-cyber font-bold rounded-lg transition-all duration-300 transform hover:scale-105 min-h-[44px]"
              style={{
                backgroundColor: '#F0CA00',
                boxShadow: '0 4px 15px rgba(240, 202, 0, 0.3)',
                fontSize: 'clamp(1rem, 4vw, 1.25rem)',
                padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 48px)'
              }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                backgroundColor: '#D4B000',
                boxShadow: "0 0 25px rgba(240, 202, 0, 0.8)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              &gt; {t('pricing.cta')}
            </motion.button>

            {/* Animated Decorative Elements */}
            <motion.div
              className="absolute -top-2 -left-2 w-4 h-4 rounded"
              style={{ backgroundColor: '#F0CA00' }}
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-4 h-4 rounded"
              style={{ backgroundColor: '#F0CA00' }}
              animate={{
                rotate: [360, 270, 180, 90, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing