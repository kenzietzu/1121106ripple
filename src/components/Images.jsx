import { useLoader, useThree } from "@react-three/fiber";
import ImagePlane from "../shaders/ImagePlane";
import * as THREE from "three";
import { useMemo } from "react";

const imageURL = [
  "https://images.unsplash.com/photo-1506252374453-ef5237291d83?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1529034502960-57f42a966080?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507295386538-ddd5e86cd597?auto=format&fit=crop&q=80&w=2532&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531789834639-6ef15b1e6080?auto=format&fit=crop&q=80&w=2673&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1480365443306-930b898cb434?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1549074862-6173e20d02a8?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1599912546430-d66b2d90713d?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1684949051297-341c40d039c6?auto=format&fit=crop&q=80&w=2674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Images = () => {
  const images = useLoader(
    THREE.TextureLoader,
    imageURL.map((image) => image)
  );
  useMemo(() => images.forEach((image) => image), [images]);
  const { viewport } = useThree();

  return (
    <group>
      {images.map((image, i) => {
        return (
          <ImagePlane
            image={image}
            key={i}
            position={[0, i * -viewport.height, 0]}
          />
        );
      })}
    </group>
  );
};

export default Images;
