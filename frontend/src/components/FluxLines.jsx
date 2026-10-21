import { useEffect, useRef } from 'react';
import './FluxLines.css';

const vertexShader = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

const fragmentShader = `#version 300 es
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform vec2 pointer;
out vec4 color;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0)), f.x),
    f.y
  );
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / resolution.y;
  vec2 mouse = (pointer - 0.5 * resolution.xy) / resolution.y;
  float distanceToMouse = length(uv - mouse);
  uv += (mouse - uv) * exp(-distanceToMouse * 4.0) * 0.08;

  float flow = time * 0.16;
  float field = noise(uv * 3.5 + vec2(flow, -flow));
  float lines = 0.0;
  for (int i = 0; i < 8; i++) {
    float band = float(i) * 0.16 - 0.55;
    float wave = sin(uv.x * 3.0 + flow + field * 4.0 + float(i) * 0.8) * 0.18;
    float distanceToLine = abs(uv.y - band - wave);
    lines += smoothstep(0.018, 0.0, distanceToLine) * (0.55 + field * 0.45);
  }

  float glow = exp(-length(uv) * 1.7);
  vec3 background = vec3(0.0, 0.0, 0.0);
  vec3 ink = vec3(0.3, 0.3, 0.3);
  vec3 result = background + ink * lines * 0.7 + vec3(0.08, 0.08, 0.08) * glow * 0.35;
  color = vec4(result, 1.0);
}`;

const createShader = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

const FluxLines = ({ className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext('webgl2', { alpha: false, antialias: false });
    if (!gl) return undefined;

    const vertex = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) return undefined;
    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'position');
    const resolution = gl.getUniformLocation(program, 'resolution');
    const time = gl.getUniformLocation(program, 'time');
    const pointer = gl.getUniformLocation(program, 'pointer');
    const mouse = { x: 0, y: 0 };
    let frame = 0;
    const started = performance.now();

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * ratio;
      canvas.height = canvas.clientHeight * ratio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    const move = event => {
      mouse.x = event.clientX * (canvas.width / window.innerWidth);
      mouse.y = canvas.height - event.clientY * (canvas.height / window.innerHeight);
    };
    const draw = now => {
      gl.useProgram(program);
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform1f(time, (now - started) / 1000);
      gl.uniform2f(pointer, mouse.x, mouse.y);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <div className={`flux-lines ${className}`} aria-hidden="true"><canvas ref={canvasRef} /></div>;
};

export default FluxLines;
