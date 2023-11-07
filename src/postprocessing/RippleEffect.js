import { BlendFunction, Effect } from "postprocessing";
import { Uniform } from "three";

// WebGL2 syntax
const fragmentShader = /*glsl*/ `
    uniform float u_time;

    void mainUv(inout vec2 uv)
    {

        uv.x += sin(uv.y * 30.0 + u_time) * 0.004;
    }
    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor)
    {
        outputColor = inputColor;
    }
`;

export default class RippleEffect extends Effect {
  constructor() {
    super("RippleEffect", fragmentShader, {
      blendFunction: BlendFunction.COLOR,
      uniforms: new Map([["u_time", new Uniform(0)]]),
    });
  }
  update(_renderer, _inputBuffer, deltaTime) {
    this.uniforms.get("u_time").value += deltaTime * 1.5;
  }
}
