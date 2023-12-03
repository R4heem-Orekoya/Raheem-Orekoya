import React from 'react'
import { motion } from 'framer-motion'

const FadeInAnimation = ({ children }) => {
  return (
     <motion.div
          initial="hidden"
          whileInView="visible"
          exit='visible'
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{
               visible: { opacity: 1, scale: 1 },
               hidden: { opacity: 0, scale: 0 }
          }}
     >
          {children}
     </motion.div>
  )
}

export default FadeInAnimation
