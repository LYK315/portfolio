import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from 'three';
import * as random from "maath/random"

interface StarsProps {
  [key: string]: any;
}

function StarSphere(props: StarsProps) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState<Float32Array>(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} >
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#fff'
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default function StarSphereCanvas() {
  return (
    <div className='absolute bottom-0 w-full overflow-visible z-0 h-[22em]'>
      <Canvas className="w-full min-h-[140%]" camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null} >
          <StarSphere />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};