import { createContext, useState, useContext, ReactNode } from 'react';

interface IMusicPlayerContext {
  isPlaying: boolean;
  setIsPlaying: (open: boolean) => void;
  handleMusicPlay: (ref: HTMLAudioElement | null) => void;
}

// Define the shape of Context
const MusicPlayerContext = createContext<IMusicPlayerContext | undefined>(undefined);

// Define Music Playe Provider Element
function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Handle music play or pause
  function handleMusicPlay(musicElement: HTMLAudioElement | null) {
    if (musicElement) {
      if (isPlaying) {
        musicElement.pause();
      } else {
        musicElement.play();
      }
      // Listen for the 'ended' event to know when the music finishes
      musicElement.addEventListener('ended', () => {
        setIsPlaying(false); // Set playing state to false when music finishes
      });
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        isPlaying, setIsPlaying, handleMusicPlay,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  )
}

// Define Hook to use Music Player Context
function useMusicPlayer(): IMusicPlayerContext {
  const context = useContext(MusicPlayerContext);
  if (context === undefined) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
}

export { MusicPlayerProvider, useMusicPlayer }