import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const StaticStarsCanvas = () => {
  return (
    <div className='absolute inset-0 top-24 overflow-visible'>
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 1] }} style={{ height: '600px' }}>
        <Stars count={2500} radius={100} factor={5} fade speed={2} />
      </Canvas>
    </div>
  );
};

export default StaticStarsCanvas;
