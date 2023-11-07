import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import "./DistortMaterial";
import lerp from "lerp";
import { useScroll } from "@react-three/drei";

const ImagePlane = ({ image, position, shift = 30 }) => {
  const materialRef = useRef(null);
  const hasTexture = !!image;
  const scrollData = useScroll();
  let last = scrollData.fixed.offsetTop;

  useFrame(() => {
    // define changing uShift
    materialRef.current.uShift = lerp(
      materialRef.current.uShift,
      (scrollData.fixed.offsetTop - last) / shift,
      0.1
    );
    last = scrollData.fixed.offsetTop;
  });

  return (
    <>
      <mesh position={position}>
        <planeGeometry args={[14, 7.7, 64, 64]} />
        <distortMaterial
          ref={materialRef}
          uTexture={image}
          hasTexture={hasTexture}
        />
      </mesh>
    </>
  );
};

export default ImagePlane;
