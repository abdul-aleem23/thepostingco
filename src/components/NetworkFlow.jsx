import { useLanguage } from '../contexts/LanguageContext'
import { motion } from 'framer-motion'

function NetworkFlow() {
  const { t } = useLanguage()

  // Berlin riders for dispatch stage
  const riders = [
    { id: 1, name: 'Alex', district: 'Mitte', spots: 25 },
    { id: 2, name: 'Maria', district: 'Kreuzberg', spots: 20 },
    { id: 3, name: 'Hassan', district: 'P-Berg', spots: 30 },
    { id: 4, name: 'Lisa', district: 'Neukölln', spots: 18 },
    { id: 5, name: 'Tom', district: 'Charlottenburg', spots: 22 },
    { id: 6, name: 'Ana', district: 'Friedrichshain', spots: 28 }
  ]

  // Timeline stages
  const stages = [
    {
      id: 1,
      title: 'Business Request',
      subtitle: 'You submit',
      icon: '📝',
      description: 'Business details & target areas',
      color: '#F0CA00'
    },
    {
      id: 2, 
      title: 'ThePostingCo Hub',
      subtitle: 'We process',
      icon: '🏢',
      description: 'Design review, route planning & material preparation',
      color: '#F0CA00'
    },
    {
      id: 3,
      title: 'Rider Network',
      subtitle: 'Team deploys',
      icon: '🚴',
      description: '6 riders across Berlin districts',
      color: '#F0CA00'
    },
    {
      id: 4,
      title: 'Mission Complete',
      subtitle: 'Results delivered',
      icon: '📸',
      description: 'Photo proof & coverage report',
      color: '#F0CA00'
    }
  ]

  const stageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }

  const riderVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  }

  return (
    <div className="mt-16 p-4 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
      <motion.h3 
        className="font-cyber font-bold text-center mb-12"
        style={{ 
          fontSize: 'clamp(1.5rem, 5vw, 2rem)',
          color: '#F0CA00',
          textShadow: '0 0 10px #F0CA00'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        From Request to Streets: Linear Flow
      </motion.h3>

      <>
        {/* Mobile Linear Timeline */}
        <div className="block md:hidden relative">
        {/* Stages Grid - Mobile Vertical */}
        <div className="grid grid-cols-1 gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              className="relative"
              variants={stageVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Stage Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 text-center relative overflow-hidden">
                {/* Stage Number */}
                <div 
                  className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-cyber font-bold text-black"
                  style={{ backgroundColor: stage.color }}
                >
                  {stage.id}
                </div>

                {/* Icon */}
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stage.icon}
                </motion.div>

                {/* Title */}
                <h4 
                  className="font-cyber font-bold mb-2"
                  style={{ 
                    color: stage.color,
                    fontSize: 'clamp(1rem, 3vw, 1.25rem)'
                  }}
                >
                  {stage.title}
                </h4>

                {/* Subtitle */}
                <p 
                  className="text-white/80 font-pixel mb-3"
                  style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}
                >
                  {stage.subtitle}
                </p>

                {/* Description */}
                <p 
                  className="text-gray-300 font-pixel"
                  style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
                >
                  {stage.description}
                </p>

                {/* Special content for Hub stage */}
                {stage.id === 2 && (
                  <motion.div
                    className="mt-4 space-y-2 text-left"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {[
                      '• Flyer design consultation',
                      '• Optimal route mapping',
                      '• Strategic location planning',
                      '• High-quality printing'
                    ].map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="text-gray-300 font-pixel"
                        style={{ fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + itemIndex * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Special content for Rider Network stage */}
                {stage.id === 3 && (
                  <motion.div 
                    className="mt-4 grid grid-cols-2 gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {riders.map((rider, riderIndex) => (
                      <motion.div
                        key={rider.id}
                        className="flex items-center space-x-2 bg-white/5 rounded-lg p-2"
                        variants={riderVariants}
                        custom={riderIndex}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: 'rgba(240, 202, 0, 0.1)'
                        }}
                      >
                        <span className="text-lg">🚴</span>
                        <div className="text-left">
                          <div 
                            className="font-pixel font-bold"
                            style={{ 
                              color: '#F0CA00',
                              fontSize: 'clamp(0.7rem, 2vw, 0.8rem)' 
                            }}
                          >
                            {rider.name}
                          </div>
                          <div 
                            className="text-gray-400 font-pixel"
                            style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)' }}
                          >
                            {rider.district}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

              </div>

              {/* Mobile connector */}
              {index < stages.length - 1 && (
                <motion.div
                  className="flex justify-center my-4 text-2xl"
                  style={{ color: stage.color }}
                  animate={{
                    y: [0, 5, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.3 + 1
                  }}
                >
                  ↓
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop/Tablet Layout */}
      <div className="hidden md:block relative">
        {/* Timeline Line */}
        <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>
        
        {/* 4-Stage Horizontal Timeline */}
        <div className="grid grid-cols-4 gap-6 lg:gap-8 relative">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Stage Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 lg:p-6 text-center relative">
                {/* Stage Number */}
                <div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-cyber font-bold text-black z-10"
                  style={{ backgroundColor: stage.color }}
                >
                  {stage.id}
                </div>

                {/* Icon */}
                <motion.div 
                  className="text-4xl lg:text-5xl mb-3 lg:mb-4 mt-2"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.7
                  }}
                >
                  {stage.icon}
                </motion.div>

                {/* Title */}
                <h4 
                  className="font-cyber font-bold mb-2 text-sm lg:text-base"
                  style={{ color: stage.color }}
                >
                  {stage.title}
                </h4>

                {/* Subtitle */}
                <p className="text-white/80 font-pixel mb-2 text-xs lg:text-sm">
                  {stage.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-300 font-pixel text-xs lg:text-sm mb-3">
                  {stage.description}
                </p>

                {/* Special Content for Hub Stage */}
                {stage.id === 2 && (
                  <motion.div
                    className="mt-3 space-y-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {[
                      'Design review',
                      'Route planning', 
                      'Material prep'
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="text-gray-400 font-pixel text-xs bg-white/5 rounded px-2 py-1"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + idx * 0.1, duration: 0.2 }}
                        viewport={{ once: true }}
                      >
                        • {item}
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Special Content for Rider Network */}
                {stage.id === 3 && (
                  <motion.div 
                    className="mt-3 grid grid-cols-2 gap-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {riders.slice(0, 4).map((rider, riderIndex) => (
                      <motion.div
                        key={rider.id}
                        className="bg-white/5 rounded p-1 text-xs font-pixel"
                        variants={riderVariants}
                        custom={riderIndex}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: 'rgba(240, 202, 0, 0.1)'
                        }}
                      >
                        <div className="text-sm mb-1">🚴</div>
                        <div className="text-yellow-400 font-bold text-xs">{rider.name}</div>
                        <div className="text-gray-400 text-xs">{rider.district}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Connecting Arrows */}
                {index < stages.length - 1 && (
                  <motion.div
                    className="absolute -right-3 lg:-right-4 top-1/2 transform -translate-y-1/2 text-xl lg:text-2xl z-20"
                    style={{ color: stage.color }}
                    animate={{
                      x: [0, 8, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5 + 1
                    }}
                  >
                    →
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extended Rider Network Display */}
        <motion.div
          className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h4 className="font-cyber font-bold text-center mb-6" style={{ color: '#F0CA00' }}>
            Complete Berlin Rider Network
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {riders.map((rider, idx) => (
              <motion.div
                key={rider.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + idx * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(240, 202, 0, 0.5)',
                  backgroundColor: 'rgba(240, 202, 0, 0.05)'
                }}
              >
                <div className="text-2xl mb-2">🚴</div>
                <div className="font-pixel font-bold text-sm" style={{ color: '#F0CA00' }}>
                  {rider.name}
                </div>
                <div className="text-gray-300 font-pixel text-xs">{rider.district}</div>
                <div className="text-gray-400 font-pixel text-xs mt-1">
                  {rider.spots} spots
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Total Riders', value: riders.length, icon: '🚴' },
            { label: 'Berlin Districts', value: '6+', icon: '🗺️' },
            { label: 'Avg Spots/Rider', value: '24', icon: '📍' },
            { label: 'Success Rate', value: '99%', icon: '✅' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(240, 202, 0, 0.3)'
              }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div 
                className="font-cyber font-bold text-xl"
                style={{ color: '#F0CA00' }}
              >
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm font-pixel">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </>
    </div>
  )
}

export default NetworkFlow