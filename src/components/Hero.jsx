import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { useState, useEffect, useRef } from 'react'
import BouncingBall from './BouncingBall'
import { ComputersCanvas } from './canvas'
import Marquee from 'react-fast-marquee'

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
            I'm passionate in developing & learning<br className='sm:block hidden' />Full-Stack Web Applications.
          </p>
        </div>
      </div>

      {/* <Marquee className="absolute bottom-48 place-self-center" speed={50} pauseOnHover>
        <div className='text-white font-serif md:text-[20px] sm:text-[30px] xs:text-[20px] text-[20px] '>
          Challenges will only fuel my adrenaline and push me to new heights.     
        </div>
      </Marquee> */}

      {/* Bouncing Ball */}
      <div className='absolute bottom-36 w-full h-full flex justify-center items-end'>
        <div className="ball-box w-1/2 lg:h-1/3 md:h-1/4">
          <BouncingBall />
        </div>
      </div>


      {/* <ComputersCanvas /> */}
      {/* <div className={`${styles.paddingX} absolute inset-0 top-[370px] max-w-3xl mx-auto`}
      >
        <img src='src/assets/Selfie.png' alt="selfie" />
      </div> */}

      {/* Scroll Down Animation Button */}
      <div className='absolute xs:bottom-8 bottom-10 w-full flex justify-center'>
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
