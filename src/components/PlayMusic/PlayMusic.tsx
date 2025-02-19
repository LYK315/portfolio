import { useEffect, useRef } from 'react'
import comeAndGetYourLove from "@assets/music/Redbone - Come and Get Your Love.mp3"
import { useAppDispatch, useAppSelector } from 'stores/hook';
import { setIsPlaying } from 'stores/Slices/MusicPlayerSlice';
import './PlayMusic.css'

// Bouncing Ball Component
export default function PlayMusicBall() {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.musicPlayer.isPlaying);

  // Handler - When play button clicked
  const handleMusicPlay = (musicElement: HTMLAudioElement | null) => {
    if (!musicElement) return;

    if (isPlaying) {
      musicElement.pause();
    } else {
      musicElement.play();

      const removeListener = () => {
        dispatch(setIsPlaying(false));
      }

      // Listen for the 'ended' event to know when the music finishes
      musicElement.removeEventListener('ended', removeListener);
      musicElement.addEventListener('ended', removeListener);
    }

    dispatch(setIsPlaying(!isPlaying));
  };

  // Create mutable reference to the ball element using useRef
  const ballRef = useRef<HTMLDivElement>(null);

  // Create audio reference
  const musicPlayerRef = useRef<HTMLAudioElement>(null);

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


  return (
    <div
      ref={ballRef}
      className={`music-player-button ${isPlaying ? 'playing' : 'paused'}`}

      // Directly pass element in
      onClick={() => { handleMusicPlay(musicPlayerRef.current) }}
    >
      {/* Audio Element */}
      <audio src={comeAndGetYourLove} ref={musicPlayerRef} />
    </div>
  );
};