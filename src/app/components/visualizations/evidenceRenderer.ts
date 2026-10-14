import * as THREE from "three";
import { evidenceGridFragment, evidenceGridVertex } from "./evidenceShaders";

export type EvidenceMode = 0 | 1 | 2;

type Placement = {
  x: number;
  y: number;
  z: number;
  turn: number;
  scale: number;
};
const arrangements: Placement[][] = [
  [
    { x: -0.1, y: -0.85, z: 0.1, turn: 0, scale: 1 },
    { x: 0, y: 0.18, z: 0, turn: 0, scale: 1 },
    { x: 0.1, y: 1.21, z: -0.1, turn: 0, scale: 1 },
  ],
  [
    { x: -1.65, y: -0.55, z: 0.6, turn: -0.24, scale: 0.82 },
    { x: 0, y: 0.25, z: 0, turn: 0, scale: 0.82 },
    { x: 1.65, y: 1.05, z: -0.6, turn: 0.24, scale: 0.82 },
  ],
  [
    { x: -2.1, y: -0.1, z: 0.9, turn: -0.12, scale: 0.65 },
    { x: 0, y: 0.1, z: 0, turn: 0, scale: 0.65 },
    { x: 2.1, y: 0.3, z: -0.9, turn: 0.12, scale: 0.65 },
  ],
];

function roundedRectangle(width: number, depth: number, radius: number) {
  const x = -width / 2;
  const y = -depth / 2;
  const shape = new THREE.Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + depth - radius);
  shape.quadraticCurveTo(x + width, y + depth, x + width - radius, y + depth);
  shape.lineTo(x + radius, y + depth);
  shape.quadraticCurveTo(x, y + depth, x, y + depth - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
}

function etchedSurface(mode: EvidenceMode, layer: number) {
  const positions: number[] = [];
  const line = (x1: number, z1: number, x2: number, z2: number) => {
    positions.push(x1, 0.06, z1, x2, 0.06, z2);
  };
  const box = (x: number, z: number, width: number, depth: number) => {
    line(x, z, x + width, z);
    line(x + width, z, x + width, z + depth);
    line(x + width, z + depth, x, z + depth);
    line(x, z + depth, x, z);
  };
  line(-1.76, -1.05, -0.18, -1.05);
  line(-1.76, -0.86, -0.94, -0.86);
  line(1.08, -1.05, 1.72, -1.05);
  line(1.38, -0.86, 1.72, -0.86);
  if (mode === 0) {
    if (layer === 0) {
      // Repair order: narrative alongside the line-item columns.
      line(-1.76, -0.63, 1.72, -0.63);
      line(0.38, -0.45, 0.38, 0.93);
      line(1.07, -0.45, 1.07, 0.93);
      for (let row = 0; row < 6; row += 1) {
        const z = -0.32 + row * 0.23;
        line(-1.76, z, 0.03 - (row % 3) * 0.22, z);
        line(0.56, z, 0.88, z);
        line(1.24, z, 1.67, z);
      }
      line(-1.76, 1.12, -0.7, 1.12);
      line(0.67, 1.12, 1.72, 1.12);
    } else if (layer === 1) {
      // Diagnostic log: a stepped signal trace above ordered test rows.
      box(-1.76, -0.56, 3.48, 0.8);
      line(-1.63, -0.15, 1.59, -0.15);
      const trace = [
        [-1.63, -0.11],
        [-1.25, -0.11],
        [-1.25, -0.34],
        [-0.83, -0.34],
        [-0.83, -0.06],
        [-0.5, -0.06],
        [-0.5, -0.4],
        [-0.03, -0.4],
        [-0.03, 0.04],
        [0.44, 0.04],
        [0.44, -0.26],
        [0.94, -0.26],
        [0.94, -0.09],
        [1.59, -0.09],
      ];
      for (let index = 1; index < trace.length; index += 1) {
        line(
          trace[index - 1][0],
          trace[index - 1][1],
          trace[index][0],
          trace[index][1],
        );
      }
      for (let row = 0; row < 3; row += 1) {
        const z = 0.51 + row * 0.27;
        box(-1.75, z - 0.06, 0.12, 0.12);
        line(-1.44, z, 0.15 + (row % 2) * 0.31, z);
        line(0.88, z, 1.68, z);
      }
    } else {
      // OEM procedure: distinct checkboxes and a source-reference grid.
      for (let row = 0; row < 4; row += 1) {
        const z = -0.48 + row * 0.39;
        box(-1.75, z, 0.2, 0.2);
        line(-1.71, z + 0.1, -1.66, z + 0.15);
        line(-1.66, z + 0.15, -1.59, z + 0.05);
        line(-1.34, z + 0.06, 0.27, z + 0.06);
        line(-1.34, z + 0.2, -0.19 - (row % 2) * 0.23, z + 0.2);
      }
      box(0.73, -0.48, 0.99, 1.37);
      for (let row = 1; row < 4; row += 1)
        line(0.73, -0.48 + row * 0.343, 1.72, -0.48 + row * 0.343);
      line(1.06, -0.48, 1.06, 0.89);
      line(1.39, -0.48, 1.39, 0.89);
    }
  } else if (mode === 1) {
    line(-1.7, 0.9, 1.65, 0.9);
    for (let column = 0; column < 6; column += 1) {
      const height = 0.38 + ((column * 3 + layer * 2) % 7) * 0.16;
      box(-1.58 + column * 0.53, 0.9 - height, 0.29, height);
    }
  } else {
    const nodes = [
      [-1.62, 0.18],
      [-0.34, -0.37],
      [0.99, 0.18],
    ];
    nodes.forEach(([x, z], index) => {
      box(x, z, 0.63, 0.5);
      if (index < nodes.length - 1) {
        line(x + 0.63, z + 0.25, x + 0.95, z + 0.25);
        line(x + 0.95, z + 0.25, x + 0.95, nodes[index + 1][1] + 0.25);
        line(
          x + 0.95,
          nodes[index + 1][1] + 0.25,
          nodes[index + 1][0],
          nodes[index + 1][1] + 0.25,
        );
      }
    });
    line(-1.58, 1.02, 1.57, 1.02);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  return geometry;
}

export function createEvidenceRenderer({
  host,
  canvas,
  active,
  stopped,
  onReady,
  onUnavailable,
}: {
  host: HTMLDivElement;
  canvas: HTMLCanvasElement;
  active: EvidenceMode;
  stopped: boolean;
  onReady: () => void;
  onUnavailable: () => void;
}) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-4, 4, 3.25, -3.25, 0.1, 50);
  camera.position.set(7, 6, 9);
  camera.lookAt(0, 0.15, 0);
  scene.add(new THREE.AmbientLight(0xd4deec, 1.75));
  const key = new THREE.DirectionalLight(0xf4f8ff, 2.1);
  key.position.set(-3, 8, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x83b5ec, 1.5);
  rim.position.set(4, 2, -6);
  scene.add(rim);
  const surfaceLight = new THREE.PointLight(0xeaf4ff, 24, 14, 2);
  surfaceLight.position.set(-1.2, 5, 2.7);
  scene.add(surfaceLight);
  const sculpture = new THREE.Group();
  scene.add(sculpture);

  const shape = roundedRectangle(4.35, 3.05, 0.13);
  const plateGeometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.075,
    bevelEnabled: true,
    bevelSize: 0.015,
    bevelThickness: 0.015,
    bevelSegments: 1,
    steps: 1,
    curveSegments: 6,
  });
  plateGeometry.rotateX(-Math.PI / 2);
  const contour = new THREE.CatmullRomCurve3(
    shape
      .getPoints(64)
      .map((point) => new THREE.Vector3(point.x, 0.081, -point.y)),
    true,
  );
  const edgeGeometry = new THREE.TubeGeometry(contour, 160, 0.009, 4, true);
  const edgeMaterial = new THREE.MeshBasicMaterial({
    color: 0xa3d4ff,
    toneMapped: false,
  });
  const glowGeometry = new THREE.TubeGeometry(contour, 100, 0.037, 4, true);
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0x258cff,
    transparent: true,
    opacity: 0.12,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  const etchMaterial = new THREE.LineBasicMaterial({
    color: 0xb7d5ed,
    transparent: true,
    opacity: 0.72,
    toneMapped: false,
  });
  const layers = Array.from({ length: 3 }, (_, index) => {
    const group = new THREE.Group();
    const plateMaterial = new THREE.MeshPhysicalMaterial({
      color: [0x14283b, 0x1b3045, 0x26394d][index],
      metalness: 0.3,
      roughness: 0.34,
      clearcoat: 1,
      clearcoatRoughness: 0.3,
      transparent: true,
      opacity: 0.96,
    });
    group.add(new THREE.Mesh(plateGeometry, plateMaterial));
    group.add(new THREE.Mesh(edgeGeometry, edgeMaterial));
    group.add(new THREE.Mesh(glowGeometry, glowMaterial));
    const patterns = ([0, 1, 2] as const).map((mode) => {
      const pattern = new THREE.LineSegments(
        etchedSurface(mode, index),
        etchMaterial,
      );
      pattern.position.y = 0.04;
      pattern.visible = mode === active;
      group.add(pattern);
      return pattern;
    });
    sculpture.add(group);
    return { group, patterns };
  });

  const bedMaterial = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: evidenceGridVertex,
    fragmentShader: evidenceGridFragment,
    transparent: true,
    depthWrite: false,
  });
  const bed = new THREE.Mesh(new THREE.PlaneGeometry(10, 7), bedMaterial);
  bed.rotation.x = -Math.PI / 2;
  bed.position.y = -1.4;
  sculpture.add(bed);

  const traceMaterial = new THREE.LineBasicMaterial({
    color: 0x3978bb,
    transparent: true,
    opacity: 0.62,
    toneMapped: false,
  });
  const pulseGeometry = new THREE.SphereGeometry(0.038, 10, 6);
  const pulseMaterial = new THREE.MeshBasicMaterial({
    color: 0xd0edff,
    toneMapped: false,
  });
  const signals = Array.from({ length: 6 }, (_, index) => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(41 * 3), 3),
    );
    const line = new THREE.Line(geometry, traceMaterial);
    const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
    const curve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
    );
    sculpture.add(line, pulse);
    return { index, line, pulse, curve };
  });

  let mode = active;
  let paused = stopped;
  let visible = true;
  let lost = false;
  let disposed = false;
  let frame = 0;
  let previous = 0;
  let time = 0;
  const pointer = new THREE.Vector2();
  const pointerTarget = new THREE.Vector2();
  const point = new THREE.Vector3();
  const canAnimate = () =>
    !paused && visible && !document.hidden && !lost && !disposed;

  const updateScene = (snap: boolean, delta = 0) => {
    const blend = snap ? 1 : 1 - Math.exp(-delta * 5.5);
    pointer.lerp(pointerTarget, snap ? 1 : 1 - Math.exp(-delta * 3));
    sculpture.rotation.y = pointer.x * 0.075;
    sculpture.rotation.x = pointer.y * 0.035;
    layers.forEach(({ group }, index) => {
      const target = arrangements[mode][index];
      point.set(target.x, target.y, target.z);
      group.position.lerp(point, blend);
      group.rotation.y += (target.turn - group.rotation.y) * blend;
      const scale = group.scale.x + (target.scale - group.scale.x) * blend;
      group.scale.setScalar(scale);
    });
    signals.forEach(({ index, line, pulse, curve }) => {
      const layer = layers[index % 3].group;
      const left = index < 3;
      const edge = (left ? -2.2 : 2.2) * layer.scale.x;
      const spread = (index % 3) - 1;
      const laneY = layer.position.y + 0.06;
      const endX = layer.position.x + edge;
      const endZ = layer.position.z - edge * Math.sin(layer.rotation.y);
      curve.v0.set(left ? -4.3 : endX, laneY, left ? spread * 0.8 : endZ);
      curve.v1.set(left ? -3.1 : endX + 0.6, laneY, left ? spread * 0.8 : endZ);
      curve.v2.set(left ? endX - 0.5 : 3.3, laneY, left ? endZ : spread * 0.8);
      curve.v3.set(left ? endX : 4.3, laneY, left ? endZ : spread * 0.8);
      const positions = line.geometry.getAttribute(
        "position",
      ) as THREE.BufferAttribute;
      for (let step = 0; step <= 40; step += 1) {
        curve.getPoint(step / 40, point);
        positions.setXYZ(step, point.x, point.y, point.z);
      }
      positions.needsUpdate = true;
      line.geometry.computeBoundingSphere();
      curve.getPoint((time * 0.12 + index * 0.17) % 1, pulse.position);
    });
    bedMaterial.uniforms.uTime.value = time;
  };

  const draw = () => {
    if (disposed || lost) return;
    renderer.render(scene, camera);
  };
  const tick = (now: number) => {
    frame = 0;
    if (!canAnimate()) return;
    const delta = previous ? Math.min((now - previous) / 1000, 0.05) : 0;
    previous = now;
    time += delta;
    updateScene(false, delta);
    draw();
    frame = requestAnimationFrame(tick);
  };
  const syncLoop = () => {
    if (canAnimate()) {
      if (!frame) {
        previous = 0;
        frame = requestAnimationFrame(tick);
      }
    } else {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
    }
  };
  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height || disposed) return;
    const aspect = width / height;
    const halfHeight = aspect < 1 ? 3.5 / aspect : 3.4;
    camera.left = -halfHeight * aspect;
    camera.right = halfHeight * aspect;
    camera.top = halfHeight;
    camera.bottom = -halfHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    draw();
  };
  const movePointer = (event: PointerEvent) => {
    if (paused || event.pointerType !== "mouse") return;
    const bounds = host.getBoundingClientRect();
    pointerTarget.set(
      ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
      ((event.clientY - bounds.top) / bounds.height) * 2 - 1,
    );
  };
  const leavePointer = () => pointerTarget.set(0, 0);
  const contextLost = (event: Event) => {
    event.preventDefault();
    lost = true;
    syncLoop();
    onUnavailable();
  };
  const contextRestored = () => {
    lost = false;
    resize();
    onReady();
    syncLoop();
  };
  const observer = new ResizeObserver(resize);
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    syncLoop();
  });
  observer.observe(host);
  intersection.observe(host);
  host.addEventListener("pointermove", movePointer, { passive: true });
  host.addEventListener("pointerleave", leavePointer);
  canvas.addEventListener("webglcontextlost", contextLost);
  canvas.addEventListener("webglcontextrestored", contextRestored);
  document.addEventListener("visibilitychange", syncLoop);
  updateScene(true);
  resize();
  onReady();
  syncLoop();

  return {
    setActive(next: EvidenceMode) {
      mode = next;
      layers.forEach(({ patterns }) =>
        patterns.forEach((pattern, index) => {
          pattern.visible = index === next;
        }),
      );
      if (!canAnimate()) {
        updateScene(true);
        draw();
      }
    },
    setStopped(next: boolean) {
      paused = next;
      if (next) {
        pointerTarget.set(0, 0);
        updateScene(true);
        draw();
      }
      syncLoop();
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      host.removeEventListener("pointermove", movePointer);
      host.removeEventListener("pointerleave", leavePointer);
      canvas.removeEventListener("webglcontextlost", contextLost);
      canvas.removeEventListener("webglcontextrestored", contextRestored);
      document.removeEventListener("visibilitychange", syncLoop);
      const geometries = new Set<THREE.BufferGeometry>();
      const materials = new Set<THREE.Material>();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
          geometries.add(object.geometry);
          const list = Array.isArray(object.material)
            ? object.material
            : [object.material];
          list.forEach((material) => materials.add(material));
        }
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
    },
  };
}
