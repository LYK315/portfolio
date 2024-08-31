import React from 'react'
import { SectionWrapper } from '../hoc';
import { skills } from '../constant';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { useState } from 'react';
import { RiArrowDownDoubleFill, RiArrowUpDoubleFill } from "react-icons/ri";


const SkillCard = ({ name, icon, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2 * 0.3)}
    >
      <div className='w-14 h-14 flex flex-col items-center gap-1'>
        <Tilt
          options={{
            max: 45,
            scale: 1.2,
            speed: 450,
            perspective: 100
          }}
        >
          <div className='min-w-14 min-h-14 flex justify-center items-center border-[1.5px] border-secondary rounded-full'>
            <img className='w-8 h-8 object-contain' src={icon} alt={name} />
          </div>
        </Tilt>
        <div
          className='text-[14px] text-secondary text-center'
        >
          {name}
        </div>
      </div>
    </motion.div>
  );
}

const Skills = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      {/* Skills - Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My abilities</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      {/* Display All Skiils */}
      <div className='flex flex-col'>
        {/* First 16 skills */}
        <div className='w-full flex flex-row justify-center'>
          <div className="flex flex-row flex-wrap justify-start gap-x-[60px] gap-y-[70px] ml-[4rem] max-w-4xl py-8">
            {skills.slice(0, 16).map((skill, index) => (
              <SkillCard
                key={`skill-${index}}`}
                index={index}
                {...skill}
              />
            ))}
          </div>
        </div>

        {/* Skills 16 and above */}
        <motion.div
          animate={showMore ? "show" : "hidden"}
        >
          <div className={`w-full flex flex-row justify-center ${showMore ? "visible" : "hidden"}`}>
            <div className="flex flex-row flex-wrap justify-start gap-x-[60px] gap-y-[70px] ml-[4rem] max-w-4xl py-8">
              {skills.slice(16, -1).map((skill, index) => (
                <SkillCard
                  key={`skill-${index}}`}
                  index={index}
                  {...skill}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Show More */}
        <motion.div
          variants={fadeIn('up', 'spring', 0, 1)}
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
          variants={fadeIn('down', 'spring', 0, 1)}
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
    </>
  );
}

export default SectionWrapper(Skills, '');
