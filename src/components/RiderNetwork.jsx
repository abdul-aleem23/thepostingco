import { useLanguage } from '../contexts/LanguageContext'
import { motion } from 'framer-motion'

function RiderNetwork() {
  const { t } = useLanguage()

  const districts = [
    { id: 1, name: 'Mitte', spots: 25 },
    { id: 2, name: 'Kreuzberg', spots: 20 },
    { id: 3, name: 'Prenzlauer Berg', spots: 30 },
    { id: 4, name: 'Neukölln', spots: 18 },
    { id: 5, name: 'Charlottenburg', spots: 22 },
    { id: 6, name: 'Friedrichshain', spots: 28 }
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl relative border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 30px rgba(240, 202, 0, 0.3)"
          }}
        >
          <motion.div
            className="mb-6 p-4 bg-white/5 rounded-lg border-l-4 border-yellow-400 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-white font-pixel font-bold mb-2" style={{ color: '#F0CA00', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)' }}>
              🤝 Supporting Berlin's Hardworking Community
            </p>
            <p className="text-gray-300 font-pixel leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}>
              When you choose us, you're not just promoting your business – you're supporting Berlin's dedicated delivery riders who keep our city moving. Every campaign directly benefits local workers.
            </p>
          </motion.div>

          {/* District Coverage Grid - Mobile */}
          <div className="md:hidden grid grid-cols-2 gap-3 mb-6">
            {districts.map((district, index) => (
              <motion.div
                key={district.id}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.6 + index * 0.1, 
                  duration: 0.3 
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  borderColor: 'rgba(240, 202, 0, 0.5)',
                  backgroundColor: 'rgba(240, 202, 0, 0.05)'
                }}
              >
                <div className="text-xl mb-2">🏙️</div>
                <div 
                  className="font-pixel font-bold text-sm mb-1"
                  style={{ color: '#F0CA00' }}
                >
                  {district.name}
                </div>
                <div className="text-gray-400 font-pixel text-xs">
                  {district.spots} locations
                </div>
              </motion.div>
            ))}
          </div>

          {/* District Coverage Grid - Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-4 mb-6">
            {districts.map((district, index) => (
              <motion.div
                key={district.id}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.6 + index * 0.1, 
                  duration: 0.3 
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(240, 202, 0, 0.5)',
                  backgroundColor: 'rgba(240, 202, 0, 0.05)'
                }}
              >
                <div className="text-lg mb-2">🏙️</div>
                <div 
                  className="font-pixel font-bold text-sm mb-1"
                  style={{ color: '#F0CA00' }}
                >
                  {district.name}
                </div>
                <div className="text-gray-400 font-pixel text-xs">
                  {district.spots} locations
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center bg-white/5 rounded-lg p-4 border border-white/10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="font-pixel mb-2" style={{ color: '#F0CA00', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}>
              📊 Network Coverage: {districts.reduce((acc, district) => acc + district.spots, 0)} locations
            </div>
            <div className="font-pixel text-gray-400" style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1rem)' }}>
              Our network covers these 6 key Berlin districts
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default RiderNetwork