import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles';
import { journeys } from '../constant';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const JourneyCard = ({ journey }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '8px solid #232631' }}
      date={journey.date}
      iconStyle={{ background: journey.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={journey.icon}
            alt={journey.company_name}
            className='w-full h-full object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        {/* Working Journey - Work Title */}
        <h3 className='text-white text-[24px] font-bold'>
          {journey.title}
        </h3>

        {/* Working Journey - Company Name  */}
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {journey.company_name}
        </p>
      </div>

      {/* Working Journey - Details in ponit form */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {journey.points.map((point, index) => (
          <li
            key={`journey-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

const Journey = () => {
  return (
    <>
      {/* Working journey - Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>My Journey</h2>
      </motion.div>

      {/* Working Experiene - Details */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {journeys.map((journey, index) => (
            <JourneyCard key={index} journey={journey} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Journey, 'journey');