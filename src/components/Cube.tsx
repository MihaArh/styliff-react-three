import Plane from './Plane';

const Cube = function () {
  return (
    <>
      <Plane
        color="blue"
        position={[50, 0, 50]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Plane
        color="red"
        position={[50, 100, 50]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Plane
        color="yellow"
        position={[100, 50, 50]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Plane
        color="pink"
        position={[0, 50, 50]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Plane
        color="green"
        position={[50, 50, 0]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <Plane
        color="lightblue"
        position={[50, 50, 100]}
        rotation={[-Math.PI, 0, 0]}
      />
    </>
  );
};

export default Cube;
