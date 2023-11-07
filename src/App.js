import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { NoToneMapping } from "three";
import Images from "./components/Images";
import Effect from "./Effect";
import GlobalStyles from "./GlobalStyles";
import store from "./store";

function App() {
  return (
    <>
      <GlobalStyles />
      <Canvas gl={{ antialias: true, toneMapping: NoToneMapping }} linear>
        <Suspense fallback={null}>
          <ScrollControls pages={8}>
            <Scroll>
              <Images />
            </Scroll>
            <Scroll html>
              {store.map(({ header, text }, i) => {
                return (
                  <div key={i} className="page">
                    <h1>{header}</h1>
                    <div className="text">{text}</div>
                  </div>
                );
              })}
            </Scroll>
          </ScrollControls>
        </Suspense>
        <Effect />
      </Canvas>
    </>
  );
}

export default App;
