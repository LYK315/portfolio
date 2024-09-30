interface IAnswerCard {
  question: {
    question: string,
    correct: string,
    wrong: string,
  };
  answered: boolean;
  ans: boolean | null;
}

export default function AnswerCard({ question, answered, ans }: IAnswerCard) {
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