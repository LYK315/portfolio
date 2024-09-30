import { motion } from 'framer-motion'

interface IScrollDownBtn {
  opacity: string;
}

export default function ScrollDownBtn({ opacity }: IScrollDownBtn) {
  return (
    <div className='absolute xs:bottom-8 bottom-10 w-full flex justify-center z-10'>
      <a href="#about">
        <div className={`w-[28px] h-[53px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2 ${opacity} transition ease-in-out duration-[888ms]`}>
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, reapeatType: 'loop' }}
            className='w-2 h-2 rounded-full bg-secondary mb-1'
          />
        </div>
      </a>
    </div>
  )
}