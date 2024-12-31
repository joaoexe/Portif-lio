import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { motion } from 'framer-motion'
import { FaGitAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";


const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [28, -28],
    transition: {
      duration: duration,
      ease: "linear",  
      repeat: Infinity, 
      repeatType: "reverse",  
    }
  }
})


const Technologs = () => {
  return (
    <div className="boder-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400 '/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className='text-7xl text-red-700'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className='text-7xl text-blue-700'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className='text-7xl text-orange-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiNodejs className='text-7xl text-green-600'/>
            </motion.div>

        </div>
    </div>
  )
}

export default Technologs

