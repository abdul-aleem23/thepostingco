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
      className="ascii-logo font-mono leading-none overflow-hidden w-full max-w-full"
      style={{
        fontSize: 'clamp(0.3rem, 1.5vw, 1.0rem)'
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.pre 
        className="whitespace-pre font-bold w-full max-w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          color: 'rgba(255, 255, 255, 0.9)',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
          filter: 'brightness(1.1)'
        }}
      >
        {logoText}
      </motion.pre>
    </motion.div>
  )
}

export default ASCIILogo