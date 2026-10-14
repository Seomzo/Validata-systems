/*!
 * @license MIT — ThreeUI, Copyright (c) 2026 Meng To.
 * Dot-field formulation adapted from ThreeUI's DotMatrixBackground.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
export const evidenceGridVertex = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const evidenceGridFragment = `
uniform float uTime;
varying vec2 vUv;
void main() {
  vec2 grid = fract(vUv * vec2(56.0, 40.0));
  vec2 id = floor(vUv * vec2(56.0, 40.0));
  float dist = length(grid - vec2(0.5));
  float pulse = sin(uTime * 0.35 + id.x * 0.05 + id.y * 0.05) * 0.5 + 0.5;
  float dot = 1.0 - smoothstep(0.055, 0.12, dist);
  float depthFade = 1.0 - smoothstep(0.2, 0.63, length(vUv - 0.5));
  gl_FragColor = vec4(vec3(0.17, 0.46, 0.8), dot * depthFade * (0.16 + pulse * 0.12));
}
`;
