import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Ball = function ({
  size,
  xPosition,
  xSpeed,
  yPosition,
  ySpeed,
  zPosition,
  zSpeed,
}: {
  size: number;
  xPosition: number;
  xSpeed: number;
  yPosition: number;
  ySpeed: number;
  zPosition: number;
  zSpeed: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  useFrame(() => {
    if (xPosition + size >= 100 || xPosition - size <= 0) {
      xSpeed = -xSpeed;
    }
    if (yPosition + size >= 100 || yPosition - size <= 0) {
      ySpeed = -ySpeed;
    }
    if (zPosition + size >= 100 || zPosition - size <= 0) {
      zSpeed = -zSpeed;
    }
    xPosition += xSpeed;
    yPosition += ySpeed;
    zPosition += zSpeed;
    ref.current.position.set(xPosition, zPosition, yPosition);
  });
  return (
    <mesh
      ref={ref}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereBufferGeometry args={[size, 64, 64]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Ball;
