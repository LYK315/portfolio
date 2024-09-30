import { motion } from "framer-motion"
import { Tilt } from 'react-tilt'
import { fadeIn } from "../../utils/motion"

interface IServiceCard {
  index: number,
  title: string,
  icon: string,
}

export default function CoreSkillsCard({ index, title, icon }: IServiceCard) {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn({ direction: 'right', type: 'spring', delay: 0.3 * index, duration: 0.75 })}
        className='w-fit h-fit green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] w-[14em] h-[14em] py-5 px-12 justify-evenly items-center flex flex-col'>
          <img src={icon} alt="title" className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt >
  )
}