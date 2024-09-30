import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { github } from "../../assets";

interface IProjectCard {
  index: number,
  project: {
    name: string,
    description: string,
    tags: Itag[],
    image: string,
    source_code_link: string,
  }
}

interface Itag {
  name: string,
  color: string,
}

export default function ProjectCard({ index, project }: IProjectCard) {
  return (
    <motion.div
      variants={fadeIn({ direction: 'up', type: 'spring', delay: index * 0.5 * 0.75, duration: 1 })}
      className="z-10"
    >
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 450,
          perspective: 1200
        }}
        className='bg-tertiary p-5 rounded-2xl md:w-[23rem] 2xs:w-[19rem] h-fit'
      >
        {/* Example Image & GitHub Link */}
        <div className='relative w-full h-[200px]'>
          {/* Example Image */}
          <img src={project.image} alt={project.name} className='w-full h-full object-cover rounded-2xl' />

          {/* GitHub Link */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(project.source_code_link, '_blank')}
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
          <h3 className='font-bold text-white text-[24px]'>{project.name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
        </div>

        {/* Project Hash Tags */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
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
