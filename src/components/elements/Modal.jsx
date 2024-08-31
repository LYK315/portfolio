import { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { motion, animate, useMotionValue, useMotionTemplate } from 'framer-motion'
import { slideIn } from "../../utils/motion";
import { questions } from '../../constant';

const Answer = ({ question, answered, ans }) => {
  return (
    <div className='text-center text-gray-800'>
      <div className='mx-auto my-auto'>
        {/* Question */}
        <div className={`${answered ? "hidden" : "visible"}`}>
          <h3 className='text-lg font-black -mb-5'>Is this Kai ?</h3>
          <p className='text-lg font-mono font-semibold my-8'>{question.question}</p>
        </div>

        {/* Answer Explanation */}
        <div className={`${answered ? "visible" : "hidden"}`}>
          {/* Correct */}
          <div className={`${ans ? "visible" : "hidden"}`}>
            <h3 className='text-xl font-black'>Correct ✅</h3>
            <p className='text-lg font-mono font-semibold my-6'>{question.correct}</p>
          </div>

          {/* Wrong */}
          <div className={`${ans ? "hidden" : "visible"}`}>
            <h3 className='text-xl font-black'>Wrong ❌</h3>
            <p className='text-lg font-mono font-semibold my-6'>{question.wrong}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Modal = ({ open, count, onClose, children }) => {
  // Get different questions on mount
  let question = questions[0]
  if (count > 0) {
    question = questions[count]
  }

  // Pop Up Variables Set up
  const [answered, setAnswered] = useState(false);
  const [ans, setAns] = useState(null);
  const initBg = '220, 240, 255';

  // Pop Up BG Colour Set up
  const gradientStart = useMotionValue(initBg); // White
  const gradientEnd = useMotionValue(initBg); // Green
  const background = useMotionTemplate`linear-gradient(to top, rgb(${gradientStart}), rgb(${gradientEnd}))`;

  // Handle Yes or No clicked
  const handleYesNo = (e) => {
    let selected = e.target.firstChild.data;
    let selection = 'empty'

    // Assign Yes or No selected
    selected === 'Yes' ? selection = true : selection = false;

    // Check if selected answer is correct
    if (selection == question.ans) {
      setAns(true);
      animate(gradientStart, '152, 251, 152', { duration: 0.8 });
      animate(gradientEnd, '255, 255, 255', { duration: 0.8 });
    } else {
      setAns(false);
      animate(gradientStart, '255, 61, 65', { duration: 0.8 });
      animate(gradientEnd, '255, 255, 255', { duration: 0.8 });
    }
  };

  // Handle Modal Close Button Clicked
  const handleModalClose = () => {
    document.body.style.overflow = '';
    onClose();
    setAnswered(false);
    setAns(null);
    gradientStart.set(initBg);
    gradientEnd.set(initBg);
  }

  return (
    // Backdrop
    <div className={`z-30 fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "hidden"}`}>
      {/* Modal */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        animate={open ? "visible" : "hidden"}
        className='rounded-xl lg:max-w-xl md:max-w-lg sm:max-w-md xs:max-w-sm max-w-xs'
        style={{
          background: background,
        }}
      >
        <div
          className={`rounded-xl shadow-cyan-200 shadow-sm p-6 px-8 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
        >
          {/* Close Button */}
          <button onClick={handleModalClose} className='absolute top-2 right-2 p-1 rounded-lg text-purple-800 bg-inherit hover:text-purple-300'>
            <IoClose />
          </button>

          {/* Content */}
          {/* {children} */}
          <Answer question={question} answered={answered} ans={ans} />

          {/* Buttons */}
          <div className={`flex flex-row justify-evenly font-mono text-sm ${answered ? "hidden" : "visible"}`}>
            <button className="text-white bg-gradient-to-bl from-green-400 to-purple-600 rounded-lg flex-[0.3] hover:to-green-200 hover:text-primary border-2 border-green-600" onClick={(e) => { setAnswered(true); handleYesNo(e); }}>
              Yes
            </button>
            <button className="text-white bg-gradient-to-tr from-red-400 to-purple-600 rounded-lg p-1 flex-[0.3] hover:to-red-200 hover:text-primary border-2 border-red-600" onClick={(e) => { setAnswered(true); handleYesNo(e); }}>
              No
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Modal