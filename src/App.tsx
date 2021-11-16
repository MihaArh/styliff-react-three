import React from 'react';
import './App.scss';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import Plane from './components/Plane';

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
      <Plane
        color="blue"
        position={[50, 0, 50]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </Canvas>
  );
};

export default App;
