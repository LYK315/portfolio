import { useEffect } from 'react';
import { useMotionValue, useMotionTemplate, animate, MotionValue } from 'framer-motion';
import { colors } from '../styles';

type Color = string;
type AuroraColors = Color[];

// Receive Type
interface AuroraOptions {
  primaryColor?: string;
  auroraColors?: string[];
  gradientShape?: string;
  gradientPosition?: string;
  animationDuration?: number;
  primaryColorStop?: number;
}

// Return Type
interface UseAuroraBackgroundResult {
  auroraBackground: MotionValue<string>;
}

// Default value of Aurora Colors
const DEFAULT_AURORA_COLORS: AuroraColors = [
  '#007cf0',
  '#00dfd8',
  '#7928ca',
  '#ff0080',
  '#ff4d4d',
];

export default function useAuroraBackground(options: AuroraOptions = {}): UseAuroraBackgroundResult {
  // Default value if no params is passed in
  const {
    primaryColor = colors.primary,
    auroraColors = DEFAULT_AURORA_COLORS,
    gradientShape = '420% 230%', // 300 280
    gradientPosition = '10% 10%',
    animationDuration = 10,
    primaryColorStop = 20,
  } = options;

  // Define motion value for color
  const color = useMotionValue<string>(auroraColors[0]);

  // Define aurora background motion template
  const auroraBackground = useMotionTemplate`radial-gradient(${gradientShape} at ${gradientPosition}, ${primaryColor} ${primaryColorStop}%, ${color})`;

  // Use effect to constantly change the aurora color when "color, auroraColors, animationDuration" change
  useEffect(() => {
    const controls = animate(color, auroraColors, {
      ease: 'linear',
      duration: animationDuration,
      repeat: Infinity,
      repeatType: 'mirror'
    });

    return () => controls.stop();
  }, [color, auroraColors, animationDuration]);

  // Return aurora motion
  return { auroraBackground };
};