import { MathUtils } from 'three';
import Ball from './Ball';

const Balls = function ({ count }: { count: number }) {
  // Create {count} balls with random parameters
  const balls = Array.from({ length: count }, () => ({
    size: MathUtils.randFloat(2, 6),
    xPosition: MathUtils.randFloat(10, 90),
    xSpeed: MathUtils.randFloat(0.01, 0.5),
    yPosition: MathUtils.randFloat(10, 90),
    ySpeed: MathUtils.randFloat(0.01, 0.5),
    zPosition: MathUtils.randFloat(10, 90),
    zSpeed: MathUtils.randFloat(0.01, 0.5),
  }));

  return (
    <mesh castShadow receiveShadow position={[0, 0, 0]}>
      {
        /* create Ball objects from array balls */
        balls.map((ball, i) => (
          <Ball key={i} {...ball} />
        ))
      }
    </mesh>
  );
};

export default Balls;
