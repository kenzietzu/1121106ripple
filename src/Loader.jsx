import { Html, useProgress } from "@react-three/drei";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  z-index: 10;
  background-color: beige;
`;

const Loading = styled.h1`
  color: beige;
`;

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html wrapperClass="container" center>
      <Loading>Loading.. ({parseInt(progress)}%)</Loading>
    </Html>
  );
};

export default Loader;
