import React from 'react'
import {motion} from "framer-motion"

const FadeInAnim = ({delay, children}) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{delay:delay}}
        viewport={{ once: true }}
        >
        {children}
    </motion.div>    
  )
}

export default FadeInAnim