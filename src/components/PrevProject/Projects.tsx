import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { styles } from "styles/index";
import { textMotionVariant } from "utils/motion";
import { fadeIn } from "utils/motion";
import { PROJECTS } from "constants/index";
import SectionWrapper from "../../hoc/SectionWrapper";

function Projects() {
  return (
    <div className="pt-[7rem] px-[9%]">
      {/* Previous Works - Title */}
      <motion.div variants={textMotionVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      {/* Previous Works - Abstract */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn({
            direction: "",
            type: "",
            delay: 0.1,
            duration: 1,
          })}
          className="mt-3 text-secondary text-[17px] max-w-[90%] lg:max-w-[80%] leading-[30px] text-justify  sm:mx-0 2xs:mx-auto"
        >
          Following projects showcases my skills and experience through previous
          projects. Each project includes a brief description, links to code
          repositories, and{" "}
          <a className="text-purple-600 font-black">demonstration videos</a>{" "}
          where available. These projects reflect my ability to adapt to
          different technologies and manage projects efficiently.
        </motion.p>
      </div>

      {/* Previous Works - Details */}
      <div className="mt-10 flex flex-wrap gap-8 justify-center lg:gap-x-14 xl:gap-x-8 md:w-full xs:w-[90%] mx-auto">
        {PROJECTS.map((project: any, index: number) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

const WrappedSkills = SectionWrapper(Projects, "projects");

export default WrappedSkills;
