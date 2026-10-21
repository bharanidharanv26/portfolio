import { useEffect, useRef } from 'react';

const COLORS = {
  home: [142, 155, 255],
  about: [196, 155, 255],
  projects: [127, 214, 255],
  connections: [140, 255, 208]
};

const rand = (a, b) => a + Math.random() * (b - a);

// Every scene is a list of groups; a group is a list of [x, y, z] points.
const buildScene = name => {
  const groups = [];
  if (name === 'home') {
    // Starfield sphere
    for (let i = 0; i < 900; i++) {
      const u = Math.random() * 2 - 1;
      const t = Math.random() * Math.PI * 2;
      const r = i < 650 ? rand(430, 470) : rand(120, 380);
      const s = Math.sqrt(1 - u * u);
      groups.push({ pts: [[r * s * Math.cos(t), r * u, r * s * Math.sin(t)]] });
    }
  } else if (name === 'about') {
    // Nested tilted rings
    for (let k = 0; k < 8; k++) {
      const r = 110 + k * 48;
      const tiltX = (k * 0.42) % Math.PI;
      const tiltZ = k * 0.7;
      const pts = [];
      for (let i = 0; i <= 120; i++) {
        const a = (i / 120) * Math.PI * 2;
        let x = r * Math.cos(a);
        let y = r * Math.sin(a);
        let z = 0;
        [y, z] = [y * Math.cos(tiltX) - z * Math.sin(tiltX), y * Math.sin(tiltX) + z * Math.cos(tiltX)];
        [x, y] = [x * Math.cos(tiltZ) - y * Math.sin(tiltZ), x * Math.sin(tiltZ) + y * Math.cos(tiltZ)];
        pts.push([x, y, z]);
      }
      groups.push({ pts, line: true });
    }
  } else if (name === 'projects') {
    // Tunnel of square frames, travels with scroll
    for (let k = 0; k < 30; k++) {
      const h = 300;
      const pts = [];
      const corners = [[-h, -h], [h, -h], [h, h], [-h, h], [-h, -h]];
      for (let c = 0; c < 4; c++) {
        for (let i = 0; i < 8; i++) {
          const f = i / 8;
          pts.push([corners[c][0] + (corners[c + 1][0] - corners[c][0]) * f, corners[c][1] + (corners[c + 1][1] - corners[c][1]) * f, 0]);
        }
      }
      pts.push(pts[0]);
      groups.push({ pts, line: true, z: k * 90, wrap: true });
    }
  } else {
    // Wave surface
    const n = 30;
    const size = 1100;
    const grid = [];
    for (let i = 0; i < n; i++) {
      grid.push([]);
      for (let j = 0; j < n; j++) grid[i].push([(i / (n - 1) - 0.5) * size, 180, (j / (n - 1) - 0.5) * size]);
    }
    grid.forEach(row => groups.push({ pts: row, line: true, wave: true }));
    for (let j = 0; j < n; j++) groups.push({ pts: grid.map(row => row[j]), line: true, wave: true });
  }
  return groups;
};

const Background3D = ({ scene = 'home' }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(scene);
  const fade = useRef({ built: null, groups: [], start: 0 });

  useEffect(() => {
    sceneRef.current = scene;
  }, [scene]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let scrollY = window.scrollY;
    let target = 0;
    let smooth = 0;
    const mouse = { x: 0, y: 0, sx: 0, sy: 0 };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onScroll = () => {
      target += window.scrollY - scrollY;
      scrollY = window.scrollY;
    };
    const onWheel = e => {
      // On short pages the document cannot scroll, so wheel still moves the scene.
      if (document.documentElement.scrollHeight <= window.innerHeight + 2) target += e.deltaY * 0.6;
    };
    const onMove = e => {
      mouse.x = (e.clientX / w) * 2 - 1;
      mouse.y = (e.clientY / h) * 2 - 1;
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });

    const draw = now => {
      const name = sceneRef.current;
      const f = fade.current;
      if (f.built !== name) {
        f.built = name;
        f.groups = buildScene(name);
        f.start = now;
      }
      const alpha = reduced ? 1 : Math.min(1, (now - f.start) / 900);
      const [r, g, b] = COLORS[name] || COLORS.home;
      const time = now / 1000;

      smooth += (target - smooth) * 0.06;
      mouse.sx += (mouse.x - mouse.sx) * 0.05;
      mouse.sy += (mouse.y - mouse.sy) * 0.05;

      const yaw = smooth * 0.0028 + mouse.sx * 0.45 + (reduced ? 0 : time * 0.05);
      const pitch = mouse.sy * 0.28 + smooth * 0.0009 + (name === 'connections' ? -0.55 : 0);
      const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      const k = Math.min(Math.max(Math.min(w, h) / 760, 0.62), 1.3) * (w > 900 ? 1.15 : 1);
      const focal = 760;
      const camera = name === 'projects' ? 0 : 900;

      ctx.clearRect(0, 0, w, h);
      const project = (x, y, z) => {
        x *= k; y *= k; z *= k;
        const x1 = x * cy + z * sy;
        const z1 = -x * sy + z * cy;
        const y2 = y * cp - z1 * sp;
        const z2 = y * sp + z1 * cp + camera * k;
        if (z2 < 40) return null;
        const s = focal / z2;
        return [w / 2 + x1 * s, h / 2 + y2 * s, s, z2];
      };

      for (const gp of f.groups) {
        const zoff = gp.wrap ? ((gp.z + smooth * 0.9) % 2700) - 900 : 0;
        const pts = [];
        for (const p of gp.pts) {
          let y = p[1];
          if (gp.wave) y += Math.sin(p[0] * 0.012 + time * 0.9) * 34 + Math.cos(p[2] * 0.012 + time * 0.7) * 34;
          const q = project(p[0], y, p[2] + zoff);
          pts.push(q);
        }
        if (gp.line) {
          const depth = pts.find(Boolean);
          if (!depth) continue;
          const a = Math.min(1, Math.max(0.05, depth[2] * 1.1 - 0.35)) * 0.6 * alpha;
          ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          let pen = false;
          for (const q of pts) {
            if (!q) { pen = false; continue; }
            if (!pen) ctx.moveTo(q[0], q[1]); else ctx.lineTo(q[0], q[1]);
            pen = true;
          }
          ctx.stroke();
        } else {
          const q = pts[0];
          if (!q) continue;
          const a = Math.min(1, Math.max(0.08, q[2] * 1.3 - 0.4)) * alpha;
          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
          const size = Math.max(0.6, q[2] * 1.9);
          ctx.fillRect(q[0], q[1], size, size);
        }
      }
      if (!reduced || alpha < 1) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(draw);
    };
    document.addEventListener('visibilitychange', onVis);
    if (reduced) {
      window.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); });
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg3d" aria-hidden="true" />;
};

export default Background3D;
