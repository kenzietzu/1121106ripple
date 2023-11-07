import { EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { useRef } from "react";
import Ripple from "./postprocessing/Ripple";

const Effect = () => {
  const rippleRef = useRef(null);

  return (
    <EffectComposer>
      <Ripple ref={rippleRef} />
      {/* <ToneMapping /> */}
    </EffectComposer>
  );
};

export default Effect;
