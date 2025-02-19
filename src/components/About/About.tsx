import { motion } from 'framer-motion'
import { textMotionVariant, fadeIn } from '@utils/motion'
import { styles } from '@styles/index'
import { CORE_SKILL } from '@constants/index'
import CoreSkillsCard from './CoreSkillsCard'
import SectionWrapper from '../../HOC/SectionWrapper'
import useAuroraBackground from '@hooks/useAuroraBackground'

function About() {
  // Use aurora background hook
  const { auroraBackground } = useAuroraBackground({gradientPosition: '10% 90%'});

  return (
    <motion.div
      style={{
        backgroundImage: auroraBackground,
      }}
      className='pt-12 px-[9%]'
    >
      <div className='z-10'>

        {/* About - Overview Title */}
        <motion.div variants={textMotionVariant()} className=''>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About &nbsp;Me</h2>
        </motion.div>

        {/* About - Details  */}
        <motion.p
          variants={fadeIn({ direction: "", type: "", delay: 0.5, duration: 1 })}
          className='mt-2 text-secondary text-[17px] max-w-[90%] leading-[30px] text-justify sm:mx-0 2xs:mx-auto'
        >
          I have solid experience in Full-Stack Web Development, with a preference for frameworks like React, Django, and Express. While I don't consider myself an expert, I know how to find solutions and solve problems. I also have experience with testing tools like Playwright and Puppeteer and am currently expanding my skills by learning Docker and Kubernetes for containerization and orchestration.
        </motion.p>

        {/* About - Cards  */}
        <div className='pt-10 flex flex-wrap gap-10 lg:justify-start 2xs:justify-center'>
          {CORE_SKILL.map((skill, index) => (
            <CoreSkillsCard key={skill.title} index={index} {...skill} />
          ))}
        </div>

      </div>
    </motion.div>
  )
}

const WrappedSkills = SectionWrapper(About, 'about');

export default WrappedSkills;