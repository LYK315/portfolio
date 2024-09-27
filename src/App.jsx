import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Journey, Feedbacks, Hero, Navbar, Skills, Works, StarsCanvas, Connect } from './components';
import { useState, useEffect } from 'react';
import { arrowUp } from './assets';
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { StaticStarsCanvas } from './components/canvas'


const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];


const App = () => {
  const [opacity, setOpacity] = useState('opacity-0')
  const [hover, setHover] = useState(false)

  const changeOpacity = () => {
    if (window.scrollY >= 250) {
      setOpacity('opacity-50')
    } else {
      setOpacity('opacity-0')
    }
  }
  const trackHover = (e) => {
    if (e._reactName == 'onMouseEnter') {
      setHover(true)
    } else {
      setHover(false)
    }
  };

  window.addEventListener('scroll', changeOpacity)

  // Aurora Background
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(180% 150% at 13% 0%, #050816 50%, ${color})`
  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    })
  }, [])

  const backgroundImg = useMotionTemplate`radial-gradient(180% 150% at 13% 100%, #050816 50%, ${color})`
  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    })
  }, [])

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <motion.div
          style={{ backgroundImage }}
          className='bg-hero-pattern bg-cover bg-no-repeat bg-center'
        >
          <StaticStarsCanvas />
          <Navbar />
          <Hero />
        </motion.div>

        <motion.div
          style={{ backgroundImage: backgroundImg }}
        >
          <About />
        </motion.div>
        <Journey />
        <Skills />
        <Works />
        {/* <Feedbacks /> */}
        {/* <Contact /> */}
        <Connect />
        <StarsCanvas />

        <div className='w-full flex justify-center text-secondary text-[14px] mt-8 py-12'>
          © 2024 Liaw Yi Kai
        </div>

        {/* Scroll to Top Button */}
        <div className='fixed xs:bottom-2 bottom-10 w-full flex justify-center items-cente'>
          <div
            className={`w-10 h-10 rounded-full border-[2px] border-secondary bg-tertiary justify-center transition ease-in-out duration-[750ms] cursor-pointer ${hover ? 'animate-bounce' : 'animate-none'} ${hover ? 'opacity-100' : opacity} ${window.scrollY >= 200 ? 'block' : 'hidden'}`}
            onClick={() => window.scrollTo(0, 0)}
            onMouseEnter={(e) => trackHover(e)}
            onMouseLeave={(e) => trackHover(e)}
          >
            <img src={arrowUp} alt="arrow-up" className='object-contain p-2' />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
