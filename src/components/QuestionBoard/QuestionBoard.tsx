import { useState } from "react";
import { motion, animate, useMotionValue, useMotionTemplate } from 'framer-motion'
import { useQuestion } from "@contexts/contextQuestion";
import { slideIn } from "utils/motion";
import { QUESTIONS } from "@constants/index";
import AnswerCard from "./AnswerCard";
import { IoClose } from "react-icons/io5";

export default function QuestionBoard() {
  // Use Question Hook
  const { openQuestion, questionCount, closeQuestion } = useQuestion();

  // Assign Different Questions
  const question = QUESTIONS[questionCount];

  // Answer Card Variables Set up
  const [answered, setAnswered] = useState<boolean>(false);
  const [ans, setAns] = useState<boolean | null>(null);
  const initBackground = '220, 240, 255';

  // Answer Card Background Colour Set up
  const gradientStart = useMotionValue(initBackground); // White
  const gradientEnd = useMotionValue(initBackground); // Green
  const background = useMotionTemplate`linear-gradient(to top, rgb(${gradientStart}), rgb(${gradientEnd}))`;

  // Handle Yes or No clicked
  function handleYesNo(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (!e.target) return;
    const targetElement = e.target as HTMLElement;
    const selected = targetElement.firstChild?.textContent;
    let selection = null

    // Assign Yes or No selected
    if (selected === 'Yes') {
      selection = true;
    } else {
      selection = false;
    }

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

  // Handle Question Board Close Button Clicked
  function handleModalClose() {
    closeQuestion();
    setAnswered(false);
    setAns(null);
    gradientStart.set(initBackground);
    gradientEnd.set(initBackground);
  }

  return (
    // Backdrop
    <div className={`z-30 fixed inset-0 flex justify-center items-center transition-colors ${openQuestion ? "visible bg-black/20" : "hidden"}`}>
      {/* Question Board */}
      <motion.div
        variants={slideIn({ direction: 'left', type: 'tween', delay: 0.2, duration: 1 })}
        animate={openQuestion ? "visible" : "hidden"}
        className='rounded-xl lg:max-w-xl md:max-w-lg sm:max-w-md xs:max-w-sm max-w-xs'
        style={{
          background: background,
        }}
      >
        <div
          className={`rounded-xl shadow-cyan-200 shadow-sm p-6 px-8 transition-all ${openQuestion ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
        >
          {/* Close Button */}
          <button onClick={handleModalClose} className='absolute top-2 right-2 p-1 rounded-lg text-purple-800 bg-inherit hover:text-purple-300'>
            <IoClose />
          </button>

          {/* Content - Answer Card */}
          <AnswerCard question={question} answered={answered} ans={ans} />

          {/* Buttons - Yes or No */}
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