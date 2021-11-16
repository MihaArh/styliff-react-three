import Plane from './Plane';

const Cube = function () {
  return (
    <>
      <Plane position={[50, 0, 50]} rotation={[-Math.PI / 2, 0, 0]} />
      <Plane position={[50, 100, 50]} rotation={[Math.PI / 2, 0, 0]} />
      <Plane position={[100, 50, 50]} rotation={[0, -Math.PI / 2, 0]} />
      <Plane position={[0, 50, 50]} rotation={[0, Math.PI / 2, 0]} />
      <Plane position={[50, 50, 0]} rotation={[0, 0, Math.PI / 2]} />
      <Plane position={[50, 50, 100]} rotation={[-Math.PI, 0, 0]} />
    </>
  );
};

export default Cube;
