import React from 'react'
import { motion } from "framer-motion";

const ButtonTop = () => {
  return (
    
    <div > 
      <motion.button
        
        className='bg-black text-white p-2  border rounded-md m-2 '
        whileTap={{ scale: 0.5 }}
        whileHover={{
          scale: 1.1,
        }}
        
        style={{ display: 'inline-block' }} 
      >
        Tap Me
      </motion.button>

      <motion.button
        
        className='bg-black text-white p-2  border rounded-md m-2 '
        whileTap={{ scale: 0.5 }}
        whileHover={{
          scale: 1.1,
          transition: {yoyo: Infinity}
        }}
        
        style={{ display: 'inline-block' }} 
      >
        Tap Me
      </motion.button>
    </div>
  )
}

export default ButtonTop