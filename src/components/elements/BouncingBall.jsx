import React from 'react'
import { useEffect, useRef } from 'react'

// Bouncing Ball Component
const BouncingBall = ({ setOpen, count, setCount }) => {
  // Increment Count, if count == 3 set to 0
  const incrementCount = () => {
    document.body.style.overflow = 'hidden';
    setCount(prevCount => {
      const newCount = prevCount + 1;
      return newCount === 3 ? 0 : newCount;
    })
  }

  // Create mutable reference to the ball element using useRef
  const ballRef = useRef(null);

  // useEffect hook to handle side effects
  useEffect(() => {
    //Get current DOM element (ball & box) using ballRef
    const ball = ballRef.current;
    const box = ball.parentElement;

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
    const updateBallPos = () => {
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
      ball.style.transform = `translate(${posX}px, ${posY}px)`;

      // Request the next animation frame to continue the animation loop
      requestAnimationFrame(updateBallPos);
    };
    // Start the animation loop when component mounts
    updateBallPos();

    // Clean up function to stop animation when component unmounts
    return () => cancelAnimationFrame(updateBallPos);
  }, []);

  return (
    <div ref={ballRef} className='ball text-purple-100 text-center' onClick={() => { setOpen(true); incrementCount() }}>
      CLICK ME
    </div>
  );
}

export default BouncingBall;