import React from 'react'
import { SectionWrapper } from '../hoc';
import { skills } from '../constant';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

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
  return (
    <>
      {/* Skills - Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My abilities</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      {/* Display All Skiils */}
      <div className="flex flex-row flex-wrap justify-center gap-y-[80px] gap-x-[60px] max-w-4xl mx-auto py-8">
        {skills.map((skill, index) => (
          <SkillCard
            key={`skill-${index}}`}
            index={index}
            {...skill}
          />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Skills, '');
