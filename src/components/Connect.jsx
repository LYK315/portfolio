import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { connect } from '../constant';
import { fadeIn } from '../utils/motion';

const ConnectCard = ({ index, name, icon, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn('down', 'spring', index * 0.5 * 0.75)}
    >
      <div
        onClick={() => window.open(source_code_link, '_blank')}
        className='cursor-pointer'
      >
        <Tilt
          options={{
            max: 30,
            scale: 1.5,
            perspective: 1000
          }}
        >
          <img
            src={icon}
            alt={name}
            className='min-w-2 min-h-2 max-w-20 max-h-20 object-contain'
          />
        </Tilt>
      </div>
    </motion.div>
  );
}

const Connect = () => {
  return (
    <div className='xl:mt-4 xl:flex-row flex gap-10 overflow-hidden justify-center'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
      >
        <div className='flex xs:flex-col sm:flex-row ml-2 flex-col items-center gap-8'>
          <div>
            {/* Connect - Title */}
            <p className={styles.sectionSubText}>Get in touch with me</p>
            <h3 className={styles.sectionHeadText}>Connect</h3>
          </div>

          <div className='sm:ml-16 flex flex-row gap-8'>
            {connect.map((source, index) => (
              <ConnectCard
                key={`connect-${index}`}
                index={index}
                {...source}
              />
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default SectionWrapper(Connect, 'connect');