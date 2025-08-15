import { useLanguage } from '../contexts/LanguageContext'
import { motion } from 'framer-motion'

function ContactForm() {
  const { t } = useLanguage()
  const businessTypes = t('contact.form.businessTypes')

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-cyber font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span style={{ color: '#F0CA00', textShadow: '0 0 10px #F0CA00' }}>
            {t('contact.title').split(' ')[0]}
          </span>{' '}
          <span className="text-white">{t('contact.title').split(' ').slice(1).join(' ')}</span>
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-300 mb-12 text-lg font-pixel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t('contact.subtitle')}
        </motion.p>
        
        <motion.div
          className="bg-white/10 backdrop-blur-md border-2 rounded-2xl p-8"
          style={{ borderColor: '#F0CA00' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form className="space-y-6" netlify="true" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-pixel font-semibold mb-2" style={{ color: '#F0CA00' }}>
                &gt; {t('contact.form.businessName')}
              </label>
              <input 
                type="text" 
                name="business-name"
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all"
                style={{ 
                  focusBorderColor: '#F0CA00',
                  boxShadow: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#F0CA00'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                required
              />
            </div>
            <div>
              <label className="block font-pixel font-semibold mb-2" style={{ color: '#F0CA00' }}>
                &gt; {t('contact.form.contactName')}
              </label>
              <input 
                type="text" 
                name="contact-name"
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all"
                onFocus={(e) => e.target.style.borderColor = '#F0CA00'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                required
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-pixel font-semibold mb-2" style={{ color: '#F0CA00' }}>
                &gt; {t('contact.form.email')}
              </label>
              <input 
                type="email" 
                name="email"
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all"
                onFocus={(e) => e.target.style.borderColor = '#F0CA00'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                required
              />
            </div>
            <div>
              <label className="block font-pixel font-semibold mb-2" style={{ color: '#F0CA00' }}>
                &gt; {t('contact.form.phone')}
              </label>
              <input 
                type="tel" 
                name="phone"
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all"
                onFocus={(e) => e.target.style.borderColor = '#F0CA00'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block font-pixel font-semibold mb-2" style={{ color: '#F0CA00' }}>
              &gt; {t('contact.form.businessType')}
            </label>
            <select 
              name="business-type"
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none transition-all"
              style={{
                color: 'white'
              }}
              onFocus={(e) => e.target.style.borderColor = '#F0CA00'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
              required
            >
              <option value="" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>Select business type</option>
              <option value="restaurant" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>{businessTypes.restaurant}</option>
              <option value="retail" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>{businessTypes.retail}</option>
              <option value="services" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>{businessTypes.services}</option>
              <option value="fitness" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>{businessTypes.fitness}</option>
              <option value="entertainment" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>{businessTypes.entertainment}</option>
              <option value="other" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>{businessTypes.other}</option>
            </select>
          </div>
          
          <div>
            <label className="block font-pixel font-semibold mb-2" style={{ color: '#F0CA00' }}>
              &gt; {t('contact.form.targetAreas')}
            </label>
            <input 
              type="text" 
              name="target-areas"
              placeholder={t('contact.form.targetAreasPlaceholder')}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all"
              onFocus={(e) => e.target.style.borderColor = '#F0CA00'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
              required
            />
          </div>
          
          <div>
            <label className="block font-pixel font-semibold mb-2" style={{ color: '#F0CA00' }}>
              &gt; {t('contact.form.notes')}
            </label>
            <textarea 
              name="notes"
              rows="4"
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all resize-none"
              placeholder={t('contact.form.notesPlaceholder')}
              onFocus={(e) => e.target.style.borderColor = '#F0CA00'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
            ></textarea>
          </div>
          
          <motion.button 
            type="submit"
            className="w-full text-black font-cyber font-bold rounded-lg transition-all duration-300 transform hover:scale-105 min-h-[44px]"
            style={{
              backgroundColor: '#F0CA00',
              boxShadow: '0 4px 15px rgba(240, 202, 0, 0.3)',
              fontSize: 'clamp(1rem, 4vw, 1.25rem)',
              padding: 'clamp(12px, 3vw, 16px)'
            }}
            whileHover={{ 
              backgroundColor: '#D4B000',
              boxShadow: "0 0 25px rgba(240, 202, 0, 0.8)",
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
          >
            &gt; {t('contact.form.submit')}
          </motion.button>
        </form>
        
        <motion.p 
          className="text-center text-gray-400 mt-6 font-pixel"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Got it. We'll be in touch within 24 hours.
        </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm