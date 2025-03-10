import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "utils/motion";
import { Other } from "assets/index";
import { useAppDispatch } from "stores/hook";
import { setModalOpen, setVideo } from "@stores/Slices/VideoModalSlice";

interface IProjectCard {
  index: number;
  project: {
    name: string;
    description: string;
    tags: Itag[];
    image: string;
    video: string;
    source_code_link: string;
  };
}

interface Itag {
  name: string;
  color: string;
}

export default function ProjectCard({ index, project }: IProjectCard) {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      variants={fadeIn({
        direction: "up",
        type: "spring",
        delay: index * 0.5 * 0.75,
        duration: 1,
      })}
      className="z-10"
    >
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 450,
          perspective: 1200,
        }}
        className="bg-tertiary p-5 rounded-2xl md:w-[23rem] 2xs:w-[19rem] h-fit"
      >
        {/* Example Image & GitHub Link */}
        <div className="relative w-full h-[200px]">
          {/* Example Image or Video */}
          {project.video ? (
            <video
              src={project.video}
              className="w-full h-full object-cover rounded-2xl cursor-zoom-in"
              onClick={() => {
                dispatch(setModalOpen(true));
                dispatch(setVideo(project.video));
              }}
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          )}

          {/* GitHub Link */}
          {project.source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 pointer-events-none">
              <div
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto"
              >
                <img
                  src={Other.github}
                  alt="github"
                  className="w-7 h-7 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Project Title & Description */}
        <div className="mt-5">
          <h3 className="font-bold text-white text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {project.description}
          </p>
        </div>

        {/* Project Hash Tags */}
        <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
          {project.tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}
