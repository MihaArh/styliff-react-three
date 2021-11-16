import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function checkWallCollision(position: number, size: number, speed: number) {
  if (position + size >= 100 || position - size <= 0) {
    return -speed;
  }
  return speed;
}

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
    // Check if ball hit any border
    xSpeed = checkWallCollision(ref.current.position.x, size, xSpeed);
    ySpeed = checkWallCollision(ref.current.position.y, size, ySpeed);
    zSpeed = checkWallCollision(ref.current.position.z, size, zSpeed);

    // Add speed to each coordinate
    ref.current.position.x += xSpeed;
    ref.current.position.y += ySpeed;
    ref.current.position.z += zSpeed;
  });
  return (
    <mesh
      ref={ref}
      position={[xPosition, yPosition, zPosition]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereBufferGeometry args={[size, 64, 64]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Ball;
