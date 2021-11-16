import { MeshLambertMaterialProps, MeshProps } from '@react-three/fiber';

type PlaneProps = Pick<MeshLambertMaterialProps, 'color'> &
  Pick<MeshProps, 'position' | 'rotation'>;

const Plane = function ({ color, ...props }: PlaneProps) {
  return (
    <mesh {...props} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="green" wireframe />
    </mesh>
  );
};

export default Plane;
