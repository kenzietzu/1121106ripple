import { Html, useProgress } from "@react-three/drei";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: grid;
  place-items: center;
  z-index: 10;
  background-color: beige;
`;

const Loading = styled.h1`
  color: #000000;
`;

const Loader = () => {
  const { progress, active } = useProgress();
  return (
    <Html>
      <Container>
        <Loading>Loading... ({parseInt(progress)}%)</Loading>
      </Container>
    </Html>
  );
};

export default Loader;
