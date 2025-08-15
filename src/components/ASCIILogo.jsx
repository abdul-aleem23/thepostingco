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
      className="ascii-logo font-mono leading-none overflow-hidden w-full max-w-full flex justify-center"
      style={{
        fontSize: 'clamp(0.25rem, 1.2vw, 0.9rem)'
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.pre 
        className="whitespace-pre font-bold max-w-full overflow-hidden text-center mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          color: 'rgba(255, 255, 255, 0.9)',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
          filter: 'brightness(1.1)',
          transform: 'scale(1)',
          transformOrigin: 'center'
        }}
      >
        {logoText}
      </motion.pre>
    </motion.div>
  )
}

export default ASCIILogo