import React from 'react';
import './App.scss';
import { Canvas } from '@react-three/fiber';
import Plane from './components/Plane';

const App = function () {
  return (
    <Canvas>
      <Plane
        color="blue"
        position={[50, 0, 50]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </Canvas>
  );
};

export default App;
