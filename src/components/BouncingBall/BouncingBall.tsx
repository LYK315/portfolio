import { useEffect, useRef } from 'react'
import { useQuestion } from '@contexts/contextQuestion';
import { General } from '@assets/index';

// Bouncing Ball Component
export default function BouncingBall() {
  // Use Question Hook
  const { setOpenQuestion, incrementQuestionCount } = useQuestion();

  // Create mutable reference to the ball element using useRef
  const ballRef = useRef<HTMLDivElement | null>(null);

  // useEffect hook to handle side effects
  useEffect(() => {
    let animationFrameId: number;

    //Get current DOM element (ball & box) using ballRef
    const ball = ballRef.current;
    if (!ball) return;
    const box = ball.parentElement;
    if (!box) return;

    // Set initial speeds for horizontal & vertical movement
    let ballSpeedX = 1;
    let ballSpeedY = 1;

    // Initialize position variables
    let posX = 13;
    let posY = 13;

    // Declare Box Dimension
    const ballWidth = ball.offsetWidth;
    const ballHeight = ball.offsetHeight;
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;

    // Define function to update ball's position
    function updateBallPos() {
      // Update ball pos based on the speeds
      posX += ballSpeedX;
      posY += ballSpeedY;

      // Check if ball hits horizontal walls, reverse direction needed
      if (posX + ballWidth > boxWidth || posX <= 0) {
        ballSpeedX *= -1;
      }

      // Check if ball hits vertical walls, reverse direction needed
      if (posY + ballHeight > boxHeight || posY <= 0) {
        ballSpeedY *= -1;
      }

      // Apply the transformation to move the ball to its new pos
      if (!ball) return;
      ball.style.transform = `translate(${posX}px, ${posY}px)`;

      // Request the next animation frame to continue the animation loop
      animationFrameId = requestAnimationFrame(updateBallPos);
    };
    // Start the animation loop when component mounts
    updateBallPos();

    // Clean up function to stop animation when component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, []); // Run once on component mount

  return (
    <div
      ref={ballRef}
      className='absolute z-50 rounded-full flex cursor-pointer shadow-lg h-[3.5rem] w-[3.5rem]'
      style={{
        background: `url(${General.clickMe})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 0 15px rgba(249, 251, 185, 0.4)',
      }}
      onClick={() => { setOpenQuestion(true); incrementQuestionCount() }}
    >
    </div>
  );
};