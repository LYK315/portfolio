import { motion } from "framer-motion";
import { useState } from "react";
import { JOURNEY } from "constants/index";
import { fadeIn, textMotionVariant } from "utils/motion";
import { styles } from "styles/index";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { RiArrowDownDoubleFill, RiArrowUpDoubleFill } from "react-icons/ri";
import SectionWrapper from "../../hoc/SectionWrapper";
import JourneyCard from "./JourneyCard";

function Journey() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="pt-[8rem] px-[9%]">
      {/* Working journey - Title */}
      <motion.div variants={textMotionVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>My Journey</h2>
      </motion.div>

      {/* Working Experiene - Details */}
      <div className="2xs:w-[89%] lg:w-full mx-auto 2xs:pt-9 md:pt-12 flex flex-col justify-center items-center">
        <VerticalTimeline layout="2-columns">
          {(showMore ? JOURNEY : JOURNEY.slice(0, 3)).map((journey, index) => (
            <JourneyCard key={index} journey={journey} />
          ))}
        </VerticalTimeline>

        {/* Show More */}
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "spring",
            delay: 0,
            duration: 1,
          })}
          initial="hidden"
          animate={showMore ? "hidden" : "show"}
          className={`mx-auto ${showMore ? "hidden" : "visible"}`}
        >
          <button
            className="mt-[3rem] mx-auto inline-flex items-center text-sm text-slate-500 font-mono font-semibold hover:text-slate-400"
            onClick={() => setShowMore(true)}
          >
            Show More
            <RiArrowDownDoubleFill className="text-lg" />
          </button>
        </motion.div>

        {/* Show Less */}
        <motion.div
          variants={fadeIn({
            direction: "down",
            type: "spring",
            delay: 0,
            duration: 1,
          })}
          animate={showMore ? "show" : "hidden"}
          className={`mx-auto ${showMore ? "visible" : "hidden"}`}
        >
          <button
            className="mt-[3rem] mx-auto inline-flex items-end text-sm text-slate-500 font-mono font-semibold hover:text-slate-400"
            onClick={() => setShowMore(false)}
          >
            Show Less
            <RiArrowUpDoubleFill className="text-lg" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

const WrappedSkills = SectionWrapper(Journey, 'journey');

export default WrappedSkills;
