import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { styles } from "@styles/index"
import { textMotionVariant } from "utils/motion"
import SkillCard from "./SkillCard"
import { fadeIn } from "utils/motion"
import { TECH_SKILLS } from "@constants/index"
import { RiArrowDownDoubleFill, RiArrowUpDoubleFill } from "react-icons/ri"
import SectionWrapper from "../../HOC/SectionWrapper"


function Skills() {
  const [showMore, setShowMore] = useState<boolean>(false)
  const initialShowSkill = 17;

  return (
    <div className="pt-[7rem] px-[9%]">

      {/* Skills - Title */}
      <motion.div variants={textMotionVariant()}>
        <p className={styles.sectionSubText}>My abilities</p>
        <h2 className={styles.sectionHeadText}>Tech. Skills</h2>
      </motion.div>

      {/* Display All Skiils */}
      <div className='flex flex-col'>
        {/* Display skills list */}
        <div className='w-full flex flex-row justify-center'>
          <motion.div className="flex flex-row flex-wrap justify-center gap-x-[3.8rem] gap-y-[4.38rem] 2xs:max-w-[90%] md:max-w-[80%] py-8"
          >
            <AnimatePresence>
            {TECH_SKILLS.slice(0, showMore ? -1 : initialShowSkill).map((skill, index) => (
              <SkillCard
                key={`skill-${skill.name}}`}
                index={index}
                showMore={showMore}
                {...skill}
              />
            ))}
            </AnimatePresence>
          </motion.div >
        </div>

        {/* Show More */}
        <motion.div
          variants={fadeIn({ direction: 'up', type: 'spring', delay: 0, duration: 1 })}
          initial="hidden"
          animate={showMore ? "hidden" : "show"}
          className={`mx-auto ${showMore ? "hidden" : "visible"}`}
        >
          <button
            className='mt-[3rem] mx-auto inline-flex items-center text-sm text-slate-500 font-mono font-semibold hover:text-slate-400'
            onClick={() => setShowMore(true)}
          >
            Show More<RiArrowDownDoubleFill className='text-lg' />
          </button>
        </motion.div>

        {/* Show Less */}
        <motion.div
          variants={fadeIn({ direction: 'down', type: 'spring', delay: 0, duration: 1 })}
          animate={showMore ? "show" : "hidden"}
          className={`mx-auto ${showMore ? "visible" : "hidden"}`}
        >
          <button
            className='mt-[3rem] mx-auto inline-flex items-end text-sm text-slate-500 font-mono font-semibold hover:text-slate-400'
            onClick={() => setShowMore(false)}
          >
            Show Less<RiArrowUpDoubleFill className='text-lg' />
          </button>
        </motion.div>
      </div >

    </div >
  )
}

const WrappedSkills = SectionWrapper(Skills, '');

export default WrappedSkills;