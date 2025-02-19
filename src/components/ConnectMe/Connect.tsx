import { motion } from "framer-motion";
import { slideIn } from "utils/motion";
import { CONNECT } from "@constants/index";
import { styles } from "@styles/index";
import ConnectCard from "./ConnectCard";
import StarSphereCanvas from "../../Canvas/StarSphere";
import SectionWrapper from '../../HOC/SectionWrapper'

function Connect() {
  return (
    <div className='relative mt-[8em] xl:flex-row flex gap-10 justify-center overflow-visible'>
      {/* Connect Details */}
      <motion.div
        variants={slideIn({ direction: 'left', type: 'tween', delay: 0.2, duration: 1 })}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl z-10'
      >
        <div className='flex xs:flex-col sm:flex-row ml-2 flex-col items-center sm:gap-8 2xs:gap-5'>
          <div>
            {/* Connect - Title */}
            <p className={styles.sectionSubText}>Get in touch with me</p>
            <h3 className={styles.sectionHeadText}>Connect</h3>
          </div>

          {/* Get in Touch Links */}
          <div className='sm:ml-16 flex flex-row gap-8'>
            {CONNECT.map((connect: any, index: number) => (
              <ConnectCard
                key={`connect-${index}`}
                index={index}
                connect={connect}
              />
            ))}
          </div>
        </div>

      </motion.div>

      {/* Stars Sphere Canvas */}
      <StarSphereCanvas />
    </div>
  );
}

const WrappedSkills = SectionWrapper(Connect, 'connect');

export default WrappedSkills;


