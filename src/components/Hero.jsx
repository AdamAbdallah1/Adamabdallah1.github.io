import React from 'react'
import { HERO_CONTENT } from '../constants/index.js'
import profilepic from '../assets/AdamAbdallahProfile.png'
import { motion } from "motion/react"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay },
    }
})

function Hero() {
  return (
    <div className='-border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start mt-[-100px]'>
                    <motion.h2 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='mt-[15px] pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Adam Abdallah</motion.h2>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                    <motion.p
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    className='lg:w-100 lg:mt-[-225px]  w-70 mt-[-130px]' src={profilepic} alt="Adam Abdallah Profile Pic" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero