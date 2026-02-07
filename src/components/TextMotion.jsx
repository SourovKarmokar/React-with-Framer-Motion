import { motion } from "framer-motion";
import React from 'react'

const TextMotion = () => {
    const message = "We Are Enjoying Reactive Accelarator . Is Awesome!!!";

    const wordArray = message.split(" ");

  return (
    <div className='text-2xl m-4 text-center'>
      {
        wordArray.map((word,index) => (
            <div>
                <motion.span 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                duration: 1,
                delay: index/10,
            }}
            key={index}>
                {word} {' '}
            </motion.span>
            </div>

            

            
        ))
      }
    </div>
  )
}

export default TextMotion
