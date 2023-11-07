import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import { extend } from "@react-three/fiber";
import * as THREE from "three";

const DistortMaterial = shaderMaterial(
  // Uniform
  {
    uTexture: new THREE.Texture(),
    hasTexture: 0,
    uColor: new THREE.Color(0.8, 1.0, 1.0),
    uOpacity: 1,
    uShift: 0,
  },
  // VertexShader
  glsl`
    uniform float uShift;
    varying vec2 vUv;

    void main() {
      vec3 pos = position;
      vUv = uv;
      pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * uShift * 5.0) * 0.125);
      pos.x = pos.x + ((sin(uv.y * 3.1415926535897932384626433832795) * uShift * 5.0) * 0.125);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    } 
  `,
  // FragmentShader
  glsl`
    uniform sampler2D uTexture;
    uniform float hasTexture;
    uniform vec3 uColor;
    uniform float uOpacity;
    uniform float uScale;
    uniform float uShift;
    varying vec2 vUv;

    void main() {
      // float angle = 1.55;
      // vec2 offset = uShift / 4.0 * vec2(cos(angle), sin(angle));
      // vec4 cr = texture2D(uTexture, vUv + offset);
      // vec4 cga = texture2D(uTexture, vUv);
      // vec4 cb = texture2D(uTexture, vUv - offset);
      // if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
      // else gl_FragColor = vec4(uColor, uOpacity);
      vec3 texture  = texture2D(uTexture, vUv).rgb;
      if (hasTexture == 1.0) gl_FragColor = vec4(texture, 1.);
      else gl_FragColor = vec4(uColor, uOpacity);
    }
  `
);

extend({ DistortMaterial });
