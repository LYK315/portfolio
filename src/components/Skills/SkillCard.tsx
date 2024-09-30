import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion"

interface ISkillCard {
  name: string,
  icon: string,
  showMore: boolean;
  index: number;
}

export default function SkillCard({ name, icon, showMore, index }: ISkillCard) {
  const delayValue = showMore ? 0 : index * 0.2 * 0.3;
  return (
    <motion.div
      // initial={{ opacity: 0, x: -50, y: -10 }}
      // animate={{ opacity: 1, x: 0, y: 0 }}
      // exit={{ opacity: 0, x: -50, y: -10 }}
      // transition={{ duration: 0.5, delay: index * 0.1 }}
      variants={fadeIn({ direction: 'up', type: 'spring', delay: delayValue, duration: 1 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
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
  )
}