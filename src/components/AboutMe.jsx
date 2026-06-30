import React from 'react'
import aboutme from "../assets/linux.jpg"
import { ABOUT_TEXT } from '../constants';
import { motion } from "motion/react"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
})

const AboutMe = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
         variants={container(2)}
        initial="hidden"
        animate="visible"
        className="my-20 text-center text-4xl">
        About
            <span className="text-neutral-500 "> Me </span>
        </motion.h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8 ">
                <div className="flex items-center justify-center ">
                    <motion.img
                      variants={container(2.5)}
                        initial="hidden"
                        animate="visible" 
                    src={aboutme} 
                    className="rounded-2xl w-80"
                     />    
                </div>         
            </div>
            <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p
                        variants={container(2.5)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-lx text-2xl py-6">{ABOUT_TEXT}
                        </motion.p>
                    </div>
                </div>   
        </div>
    </div>
  );
}

export default AboutMe
