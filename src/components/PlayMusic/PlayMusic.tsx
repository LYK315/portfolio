import { useEffect, useRef, useState } from 'react'
import { playMusic } from '../../assets';
import comeAndGetYourLove from "../../assets/music/Redbone - Come and Get Your Love.mp3"

// Bouncing Ball Component
export default function PlayMusicBall() {
  // Create mutable reference to the ball element using useRef
  const ballRef = useRef<HTMLDivElement | null>(null);

  // Create audio reference
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  // useEffect hook to handle side effects ball movement
  useEffect(() => {
    let animationFrameId: number;

    //Get current DOM element (ball & box) using ballRef
    const ball = ballRef.current;
    if (!ball) return;
    const box = ball.parentElement;
    if (!box) return;

    // Set initial speeds for horizontal & vertical movement
    let ballSpeedX = 1.5;
    let ballSpeedY = 1;

    // Declare Box Dimension
    const ballWidth = ball.offsetWidth;
    const ballHeight = ball.offsetHeight;
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;

    // Initialize position variables
    let posX = boxWidth - 100;
    let posY = 0;

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

  // Handle music play or pause
  function handleMusicPlay() {
    if (musicRef.current) {
      if (isPlaying) {
        musicRef.current.pause();
      } else {
        musicRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      ref={ballRef}
      className='absolute z-50 rounded-full cursor-pointer shadow-lg h-[3.5rem] w-[3.5rem] bg-white'
      style={{
        background: `url(${playMusic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 0 15px rgba(194, 242, 255, 0.4)',
      }}
      onClick={handleMusicPlay}
    >
      {/* Audio Element */}
      <audio src={comeAndGetYourLove} ref={musicRef} />
    </div>
  );
};