import { motion } from "framer-motion"
import SectionWrapper from "../../hoc/SectionWrapper"
import { textMotionVariant } from "../../utils/motion"
import { styles } from "../../styles"
import { VerticalTimeline } from 'react-vertical-timeline-component'
import JourneyCard from "./JourneyCard"
import { JOURNEY } from "../../constants"

function Journey() {
  return (
    <div className="pt-[8rem] px-[9%]">

      {/* Working journey - Title */}
      <motion.div variants={textMotionVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>My Journey</h2>
      </motion.div>

      {/* Working Experiene - Details */}
      <div className="2xs:w-[89%] lg:w-full mx-auto 2xs:pt-9 md:pt-12">
        <VerticalTimeline
          layout="2-columns"
        >
          {JOURNEY.map((journey, index) => (
            <JourneyCard key={index} journey={journey} />
          ))}
        </VerticalTimeline>
      </div>

    </div>
  )
}

export default SectionWrapper(Journey, 'journey')