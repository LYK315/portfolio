import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constant'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5 * 0.75)}
    >
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 450,
          perspective: 1200
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[356px] w-full'
      >
        {/* Example Image & GitHub Link */}
        <div className='relative w-full h-[200px]'>
          {/* Example Image */}
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />

          {/* GitHub Link */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt="github"
                className='w-7 h-7 object-contain'
              />
            </div>
          </div>
        </div>

        {/* Project Title & Description */}
        <div className='mt-5'>
          <h3 className='font-bold text-white text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/* Project Hash Tags */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  );
}

const Works = () => {
  return (
    <>
      {/* Previous Works - Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* Previous Works - Abstract */}
      <div className='w-full flex'>
        <motion.p
          variant={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through previous projects. Each project includes a brief description, links to code repositories, and demonstration videos where available. These projects reflect my ability to adapt to different technologies and manage projects efficiently.
        </motion.p>
      </div>

      {/* Previous Works - Details */}
      <div className='mt-16 flex flex-wrap gap-8 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works, '');