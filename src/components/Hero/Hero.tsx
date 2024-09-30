import { useState } from "react"
import { motion } from "framer-motion";
import { styles } from "../../styles/index"
import { QuestionProvider } from "../../contexts/contextQuestion";
import BouncingBall from "../BouncingBall/BouncingBall"
import PlayMusicBall from "../PlayMusic/PlayMusic";
import QuestionBoard from "../QuestionBoard/QuestionBoard"
import ScrollDownBtn from "./ScrollDownBtn"
import StaticStarsCanvas from "../../canvas/StarStatic";
import useAuroraBackground from "../../hooks/useAuroraBackground";

export default function Hero() {
  const [opacity, setOpacity] = useState<string>('opacity-100');

  // Use aurora background hook
  const { auroraBackground } = useAuroraBackground();

  // Change Scroll Down Button Opacity
  function changeOpacity() {
    if (window.scrollY >= 110) {
      setOpacity('opacity-0')
    } else {
      setOpacity('opacity-100')
    }
  }

  // Track windows scroll
  window.addEventListener('scroll', changeOpacity)

  return (
    <motion.div
      style={{ backgroundImage: auroraBackground }}
      className="min-w-full min-h-screen relative"
    >

      {/* Title */}
      <div className="px-[9%] pt-28 flex flex-row md:gap-10 2xs:gap-7">
        {/* Vertical Slider */}
        <div className='flex flex-col justify-center items-center'>
          {/* Slider Circle */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />

          {/* Slider Bar */}
          <div className='w-1 h-[18rem] violet-gradient' />
        </div>

        {/* Title */}
        <div>
          {/* Title */}
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className='text-[#915eff]'>Kai</span>
          </h1>

          {/* Sub Title */}
          <div className={`${styles.heroSubText} pt-3 text-white max-w-[70%]`}>
            I'm passionate about developing & learning Full-Stack Applications.
          </div>
        </div>
      </div>

      {/* Question Game */}
      <QuestionProvider>
        {/* Bouncing Balls */}
        <div className='absolute bottom-36 w-full h-full flex justify-center items-end z-10'>
          <div className="flex-[0.70] 2xl:h-[16em] xl:h-[10em] lg:h-[10em] md:h-[12em] sm:h-[12em] xs:h-[13em] h-[20em]"
          >
            <BouncingBall />
            <PlayMusicBall />
          </div>
        </div>

        {/* Pop Up */}
        <QuestionBoard />
      </QuestionProvider>

      {/* Scroll Down Animation Button */}
      <ScrollDownBtn opacity={opacity} />

      {/* Static Glaxy Stars */}
      <StaticStarsCanvas />

    </motion.div>
  )
}