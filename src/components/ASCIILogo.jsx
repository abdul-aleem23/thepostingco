import { motion } from 'framer-motion'

function ASCIILogo() {
  const logoText = `████████╗██╗  ██╗███████╗    ██████╗  ██████╗ ███████╗████████╗██╗███╗   ██╗ ██████╗ 
╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██║████╗  ██║██╔════╝ 
   ██║   ███████║█████╗      ██████╔╝██║   ██║███████╗   ██║   ██║██╔██╗ ██║██║  ███╗
   ██║   ██╔══██║██╔══╝      ██╔═══╝ ██║   ██║╚════██║   ██║   ██║██║╚██╗██║██║   ██║
   ██║   ██║  ██║███████╗    ██║     ╚██████╔╝███████║   ██║   ██║██║ ╚████║╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝      ╚═════╝ ╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝ 

    ██████╗ ██████╗    
   ██╔════╝██╔═══██╗   
   ██║     ██║   ██║   
   ██║     ██║   ██║   
   ╚██████╗╚██████╔╝██╗
    ╚═════╝ ╚═════╝ ╚═╝`

  return (
    <motion.div 
      className="ascii-logo font-mono leading-none w-full flex justify-center items-center"
      style={{
        fontSize: 'clamp(0.25rem, 1.2vw, 1rem)',
        maxWidth: '95vw',
        overflow: 'hidden',
        width: '100%'
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div className="relative w-full flex justify-center">
        <motion.pre 
          className="whitespace-pre font-bold block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
            filter: 'brightness(1.1)',
            transform: 'scale(1)',
            transformOrigin: 'center top',
            margin: '0',
            width: 'max-content',
            maxWidth: '95vw'
          }}
        >
          {logoText}
        </motion.pre>
      </motion.div>
    </motion.div>
  )
}

export default ASCIILogo