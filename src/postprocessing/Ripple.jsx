import { forwardRef, useMemo } from "react";
import RippleEffect from "./RippleEffect";

const Ripple = forwardRef((_props, ref) => {
  const effect = useMemo(() => new RippleEffect(), []);
  return <primitive object={effect} ref={ref} />;
});

export default Ripple;
