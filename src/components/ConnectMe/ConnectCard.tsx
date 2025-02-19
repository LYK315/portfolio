import { motion } from "framer-motion";
import { fadeIn } from "utils/motion";
import { Tilt } from "react-tilt";

interface IConnectCard {
  index: number,
  connect: {
    name: string,
    icon: string,
    source_code_link: string,
  }
}

export default function ConnectCard({ index, connect }: IConnectCard) {
  return (
    <motion.div
      variants={fadeIn({ direction: 'down', type: 'spring', delay: index * 0.5 * 0.75, duration: 1 })}
    >
      <div
        onClick={() => window.open(connect.source_code_link, '_blank')}
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
            src={connect.icon}
            alt={connect.name}
            className='min-w-2 min-h-2 max-w-20 max-h-20 object-contain'
          />
        </Tilt>
      </div>
    </motion.div>
  );
}