import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StaticStarsCanvas() {
  return (
    <div className='absolute inset-0 top-24 overflow-visible z-0 h-[460px]'>
      <Canvas className="min-h-[130%]" camera={{ position: [0, 0, 1] }}>
        <Stars count={2533} radius={45} factor={2.5} fade speed={1.5} />
      </Canvas>
    </div>
  );
};