import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import Cube from './components/Cube';
import Balls from './components/Balls';

const App = function () {
  return (
    <Canvas
      mode="concurrent"
      shadows
      gl={{ alpha: false }}
      camera={{ position: [200, 200, 200] }}
    >
      <OrbitControls
        addEventListener={undefined}
        hasEventListener={undefined}
        removeEventListener={undefined}
        dispatchEvent={undefined}
      />
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[200, 1000, 200]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />
      <pointLight position={[-30, 0, -30]} intensity={0.5} />
      <axesHelper scale={500} />
      <Stats />
      <Cube />
      <Balls count={100} />
    </Canvas>
  );
};

export default App;
