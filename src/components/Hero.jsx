import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { useState } from 'react'

const Hero = () => {
  const [opacity, setOpacity] = useState('opacity-100')

  const changeOpacity = () => {
    if (window.scrollY >= 110) {
      setOpacity('opacity-0')
    } else {
      setOpacity('opacity-100')
    }
  }

  window.addEventListener('scroll', changeOpacity)

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* Vertical Slider */}
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Slider Circle */}

          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          {/* Slider Bar */}
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Title */}
        <div>
          {/* Title */}
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm  <span className='text-[#915eff]'>Kai</span>
          </h1>

          {/* Sub Title */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm passionate in developing Full-Stack <br className='sm:block hidden' /> Web Applications.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      {/* <div className={`${styles.paddingX} absolute inset-0 top-[370px] max-w-3xl mx-auto`}
      >
        <img src='src/assets/Selfie.png' alt="selfie" />
      </div> */}

      {/* Scroll Down Animation Button */}
      <div className='absolute xs:bottom-8 bottom-10 w-full flex justify-center items-center'>
        <a href="#about">
          <div className={`w-[28px] h-[53px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2 ${opacity} transition ease-in-out duration-[888ms]`}>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, reapeatType: 'loop' }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;