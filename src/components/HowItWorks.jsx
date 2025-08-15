import { useLanguage } from '../contexts/LanguageContext'
import { motion } from 'framer-motion'

function HowItWorks() {
  const { t } = useLanguage()
  const steps = t('howItWorks.steps')

  const pixelIcons = ['📁', '⚡', '🚴']

  return (
    <section id="how-it-works" className="py-20 px-4 relative max-sm:landscape:pt-16">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="font-cyber font-bold text-center mb-16"
          style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span style={{ color: '#F0CA00', textShadow: '0 0 10px #F0CA00' }}>
            {t('howItWorks.title.part1')}
          </span>{' '}
          <span className="text-white">{t('howItWorks.title.part2')}</span>
        </motion.h2>
        
        {/* Mobile: Single column */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl relative border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(240, 202, 0, 0.3)"
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-center">
                  <div 
                    className="mb-2 filter drop-shadow-lg"
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)' }}
                  >
                    {pixelIcons[index]}
                  </div>
                  <div 
                    className="font-pixel" 
                    style={{ 
                      color: '#F0CA00',
                      fontSize: 'clamp(1rem, 4vw, 1.25rem)'
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 
                    className="font-cyber font-bold text-white mb-3"
                    style={{ fontSize: 'clamp(1.25rem, 5vw, 1.75rem)' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-gray-300 font-pixel leading-relaxed"
                    style={{ fontSize: 'clamp(1rem, 3.5vw, 1.25rem)' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="bg-white/10 backdrop-blur-md p-8 rounded-xl relative border border-white/20 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(240, 202, 0, 0.3)"
              }}
            >
              <div className="mb-6">
                <div 
                  className="mb-3 filter drop-shadow-lg"
                  style={{ fontSize: '4rem' }}
                >
                  {pixelIcons[index]}
                </div>
                <div 
                  className="font-pixel" 
                  style={{ 
                    color: '#F0CA00',
                    fontSize: '1.25rem'
                  }}
                >
                  {step.number}
                </div>
              </div>

              <div>
                <h3 
                  className="font-cyber font-bold text-white mb-4"
                  style={{ fontSize: '1.75rem' }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-gray-300 font-pixel leading-relaxed"
                  style={{ fontSize: '1.25rem' }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks