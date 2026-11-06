import { useEffect, useRef, useState } from 'react';
import './ParticleName.css';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
const FORMED = 0;
const FALLING = 1;
const SETTLED = 2;
const RETURNING = 3;
const RETURN_DELAY = 1;
const RETURN_DURATION = 0.8;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const ParticleName = ({ text }) => {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!host || !context) return undefined;

    const mask = document.createElement('canvas');
    const maskContext = mask.getContext('2d', { willReadFrequently: true });
    const atlas = document.createElement('canvas');
    const atlasContext = atlas.getContext('2d');
    if (!maskContext || !atlasContext) return undefined;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = motionQuery.matches;
    let particles = [];
    let heights = new Float32Array(0);
    let width = 0;
    let height = 0;
    let ratio = 1;
    let glyphSize = 8;
    let tileWidth = 12;
    let tileHeight = 14;
    let binWidth = 10;
    let pileStep = 2;
    let radius = 20;
    let clock = 0;
    let phase = 'formed';
    let phaseStart = 0;
    let last = 0;
    let frame = 0;
    let resizeTimer = 0;
    let alive = true;

    const setPhase = next => {
      phase = next;
      phaseStart = clock;
      host.dataset.phase = reduced ? 'still' : next;
    };

    const restore = particle => {
      particle.x = particle.homeX;
      particle.y = particle.homeY;
      particle.vx = 0;
      particle.vy = 0;
      particle.angle = 0;
      particle.mode = FORMED;
      particle.glyph = particle.homeGlyph;
      particle.returnAt = Infinity;
    };

    const formImmediately = () => {
      heights.fill(0);
      particles.forEach(restore);
      setPhase('formed');
    };

    const removeFromPile = particle => {
      if (particle.mode !== SETTLED) return;
      const bin = clamp(Math.floor(particle.x / binWidth), 0, heights.length - 1);
      heights[bin] = Math.max(0, heights[bin] - pileStep);
      if (bin > 0) heights[bin - 1] = Math.max(0, heights[bin - 1] - pileStep * 0.15);
      if (bin < heights.length - 1) heights[bin + 1] = Math.max(0, heights[bin + 1] - pileStep * 0.15);
    };

    const release = (particle, vx = 0, vy = 0) => {
      removeFromPile(particle);
      particle.mode = FALLING;
      particle.vx = (Math.random() - 0.5) * 95 + vx;
      particle.vy = -35 - Math.random() * 65 + vy;
      particle.spin = (Math.random() - 0.5) * 7;
      particle.bounces = 0;
      particle.returnAt = Infinity;
    };

    const beginFall = (x, y) => {
      heights.fill(0);
      setPhase('falling');
      particles.forEach(particle => {
        const angle = Math.atan2(particle.y - y, particle.x - x);
        const force = clamp(width * 0.35, 160, 350) * (0.7 + Math.random() * 0.5);
        release(particle, Math.cos(angle) * force, Math.sin(angle) * force * 0.7 - 100);
      });
    };

    const scatterLoose = (x, y) => {
      const reach = radius * 2.5;
      let disturbed = false;
      for (const particle of particles) {
        if (particle.mode === FORMED) continue;
        const dx = particle.x - x;
        const distance = Math.hypot(dx, particle.y - y);
        if (distance >= reach) continue;
        const force = (1 - distance / reach) * clamp(width * 0.45, 200, 360);
        const direction = dx < 0 ? -1 : 1;
        release(particle, direction * (80 + force), -90 - force * 0.65);
        disturbed = true;
      }
      if (!disturbed) return false;

      // Let the kicked particles bounce before they return to the name.
      if (phase === 'forming') setPhase('formed');
      else if (phase !== 'formed') setPhase('falling');
      return true;
    };

    const returnParticle = particle => {
      removeFromPile(particle);
      particle.fromX = particle.x;
      particle.fromY = particle.y;
      particle.fromAngle = particle.angle;
      particle.returnStart = clock;
      particle.returnAt = Infinity;
      particle.mode = RETURNING;
    };

    const beginForm = () => {
      setPhase('forming');
      heights.fill(0);
      particles.forEach(returnParticle);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      for (const particle of particles) {
        const returning = particle.mode === RETURNING && Math.hypot(particle.x - particle.homeX, particle.y - particle.homeY) > 5;
        const tint = returning || particle.mode === FALLING || particle.mode === SETTLED ? 1 : 0;
        const sourceX = particle.glyph * tileWidth * ratio;
        const sourceY = tint * tileHeight * ratio;

        if (Math.abs(particle.angle) > 0.03) {
          context.save();
          context.translate(particle.x, particle.y);
          context.rotate(particle.angle);
          context.drawImage(atlas, sourceX, sourceY, tileWidth * ratio, tileHeight * ratio,
            -tileWidth / 2, -tileHeight / 2, tileWidth, tileHeight);
          context.restore();
        } else {
          context.drawImage(atlas, sourceX, sourceY, tileWidth * ratio, tileHeight * ratio,
            particle.x - tileWidth / 2, particle.y - tileHeight / 2, tileWidth, tileHeight);
        }
      }
    };

    const tick = now => {
      frame = 0;
      if (!alive || document.hidden || reduced) return;
      const elapsedTime = (now - last) / 1000;
      const dt = Math.min(elapsedTime, 1 / 30);
      last = now;
      clock += elapsedTime;
      const elapsed = clock - phaseStart;

      if (phase === 'pile' && elapsed >= RETURN_DELAY) beginForm();

      const gravity = Math.max(550, height * 2.8);
      const floor = height - glyphSize * 1.3;

      for (const particle of particles) {
        if (phase === 'formed' && clock >= particle.returnAt) returnParticle(particle);

        if (particle.mode === RETURNING) {
          const progress = clamp((clock - particle.returnStart) / RETURN_DURATION, 0, 1);
          const ease = 1 - (1 - progress) ** 3;
          particle.x = particle.fromX + (particle.homeX - particle.fromX) * ease;
          particle.y = particle.fromY + (particle.homeY - particle.fromY) * ease;
          particle.angle = particle.fromAngle * (1 - ease);
          if (progress === 1) restore(particle);
          continue;
        }

        if (particle.mode === FALLING) {
          particle.vy += gravity * dt;
          particle.vx *= Math.exp(-0.65 * dt);
          particle.x += particle.vx * dt;
          particle.y += particle.vy * dt;
          particle.angle += particle.spin * dt;

          if (particle.x < glyphSize || particle.x > width - glyphSize) {
            particle.x = clamp(particle.x, glyphSize, width - glyphSize);
            particle.vx *= -0.35;
          }

          const bin = clamp(Math.floor(particle.x / binWidth), 0, heights.length - 1);
          const surface = floor - heights[bin];
          if (particle.y >= surface && particle.vy > 0) {
            particle.y = surface;
            if (particle.vy > 90 && particle.bounces === 0) {
              particle.vy *= -0.2;
              particle.vx *= 0.6;
              particle.bounces += 1;
            } else {
              particle.mode = SETTLED;
              particle.vx = 0;
              particle.vy = 0;
              particle.angle = (Math.random() - 0.5) * 0.3;
              // A small height field lets the loose characters collect into a pile.
              let restingBin = bin;
              for (let offset = -2; offset <= 2; offset++) {
                const neighbor = clamp(bin + offset, 0, heights.length - 1);
                if (heights[neighbor] + Math.abs(offset) * glyphSize < heights[restingBin]) restingBin = neighbor;
              }
              particle.x = clamp(particle.x + (restingBin - bin) * binWidth, glyphSize, width - glyphSize);
              particle.y = floor - heights[restingBin];
              heights[restingBin] = Math.min(height * 0.45, heights[restingBin] + pileStep);
              if (restingBin > 0) heights[restingBin - 1] += pileStep * 0.15;
              if (restingBin < heights.length - 1) heights[restingBin + 1] += pileStep * 0.15;
              // Start the one-second pause after landing, not when the fall begins.
              if (phase === 'formed') particle.returnAt = clock + RETURN_DELAY;
            }
          }
        }

        if (particle.mode !== FORMED && clock > particle.changeAt) {
          particle.glyph = Math.floor(Math.random() * CHARACTERS.length);
          particle.changeAt = clock + 0.7 + Math.random() * 2;
        }
      }

      if (phase === 'falling' && particles.every(particle => particle.mode === SETTLED)) setPhase('pile');
      else if (phase === 'forming' && particles.every(particle => particle.mode === FORMED)) formImmediately();

      draw();
      if (phase !== 'formed' || particles.some(particle => particle.mode !== FORMED)) {
        frame = requestAnimationFrame(tick);
      }
    };

    const start = () => {
      if (frame || reduced || document.hidden || !particles.length) return;
      last = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const build = () => {
      if (!alive) return;
      const bounds = host.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      width = bounds.width;
      height = bounds.height;
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.ceil(width * ratio);
      canvas.height = Math.ceil(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      mask.width = Math.ceil(width);
      mask.height = Math.ceil(height);

      const style = window.getComputedStyle(host);
      const lines = text.toUpperCase().split('\n');
      let fontSize = Math.min(parseFloat(style.fontSize), height * 0.72 / (lines.length * 1.2 - 0.4));
      maskContext.font = `900 ${fontSize}px ${style.fontFamily}`;
      const widest = Math.max(...lines.map(line => maskContext.measureText(line).width));
      fontSize *= Math.min(1, width * 0.94 / widest);
      maskContext.font = `900 ${fontSize}px ${style.fontFamily}`;
      maskContext.fillStyle = '#fff';
      maskContext.textAlign = 'center';
      maskContext.textBaseline = 'alphabetic';
      const ascent = maskContext.measureText('H').actualBoundingBoxAscent || fontSize * 0.75;
      const top = Math.max(5, fontSize * 0.12) + clamp(height * 0.04, 8, 20);
      lines.forEach((line, index) => {
        maskContext.fillText(line, width / 2, top + ascent + index * fontSize * 1.2);
      });

      glyphSize = clamp(fontSize * 0.052, 4.5, 9);
      const stepX = glyphSize * 0.72;
      const stepY = glyphSize * 0.95;
      radius = clamp(fontSize * 0.16, 12, 26);
      binWidth = glyphSize * 1.25;
      heights = new Float32Array(Math.ceil(width / binWidth));
      const pixels = maskContext.getImageData(0, 0, mask.width, mask.height).data;
      const points = [];
      for (let y = stepY / 2; y < height; y += stepY) {
        for (let x = stepX / 2; x < width; x += stepX) {
          if (pixels[(Math.floor(y) * mask.width + Math.floor(x)) * 4 + 3] > 128) points.push({ x, y });
        }
      }

      const count = Math.min(points.length, width < 500 ? 1800 : 3200);
      pileStep = Math.min(glyphSize * 0.55, height * 0.14 * heights.length / Math.max(count, 1));
      particles = Array.from({ length: count }, (_, index) => {
        const point = points[Math.floor(index * points.length / count)];
        const glyph = Math.floor(Math.random() * CHARACTERS.length);
        return {
          homeX: point.x, homeY: point.y, x: point.x, y: point.y,
          vx: 0, vy: 0, angle: 0, spin: 0, mode: FORMED, bounces: 0,
          glyph, homeGlyph: glyph,
          changeAt: clock + Math.random() * 2, returnAt: Infinity
        };
      });

      // Cache the tiny characters once instead of drawing thousands of text runs per frame.
      tileWidth = Math.ceil(glyphSize * 1.4);
      tileHeight = Math.ceil(glyphSize * 1.6);
      atlas.width = Math.ceil(tileWidth * CHARACTERS.length * ratio);
      atlas.height = Math.ceil(tileHeight * 2 * ratio);
      atlasContext.setTransform(ratio, 0, 0, ratio, 0, 0);
      atlasContext.font = `600 ${glyphSize}px Consolas, 'Courier New', monospace`;
      atlasContext.textAlign = 'center';
      atlasContext.textBaseline = 'middle';
      ['#c0bec5', '#9986c7'].forEach((color, row) => {
        atlasContext.fillStyle = color;
        [...CHARACTERS].forEach((character, column) => {
          atlasContext.fillText(character, (column + 0.5) * tileWidth, (row + 0.5) * tileHeight);
        });
      });

      formImmediately();
      draw();
      setReady(true);
      start();
    };

    const onMove = event => {
      if (reduced || phase !== 'formed') return;
      const bounds = host.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      let disturbed = false;
      for (const particle of particles) {
        if (particle.mode !== FORMED || Math.hypot(particle.x - x, particle.y - y) >= radius) continue;
        release(particle, (particle.x - x) * 1.25, 130);
        disturbed = true;
      }
      if (disturbed) start();
    };
    const onClick = event => {
      if (reduced) return;
      const bounds = host.getBoundingClientRect();
      const x = event.detail === 0 ? width / 2 : clamp(event.clientX - bounds.left, 0, width);
      const y = event.detail === 0 ? height * 0.3 : clamp(event.clientY - bounds.top, 0, height);
      const overName = phase === 'formed' && particles.some(particle => Math.hypot(particle.homeX - x, particle.homeY - y) < radius);
      if (event.detail !== 0 && !overName && scatterLoose(x, y)) {
        start();
        return;
      }
      if (phase !== 'formed') return;
      beginFall(x, y);
      start();
    };
    const onMotionChange = () => {
      reduced = motionQuery.matches;
      cancelAnimationFrame(frame);
      frame = 0;
      formImmediately();
      draw();
      start();
    };
    const onVisibility = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      start();
    };
    const resizeObserver = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(build, 100);
    });

    build();
    resizeObserver.observe(host);
    host.addEventListener('pointermove', onMove, { passive: true });
    host.addEventListener('click', onClick);
    motionQuery.addEventListener('change', onMotionChange);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      window.clearTimeout(resizeTimer);
      resizeObserver.disconnect();
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('click', onClick);
      motionQuery.removeEventListener('change', onMotionChange);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [text]);

  return (
    <button
      ref={hostRef}
      type="button"
      className={`particle-name${ready ? ' particle-name--ready' : ''}`}
      aria-label={`Animate ${text.replace(/\n/g, '')}`}
    >
      <canvas ref={canvasRef} className="particle-name__canvas" aria-hidden="true" />
      {!ready && (
        <span className="particle-name__fallback" aria-hidden="true">
          {text.split('\n').map((line, index) => <span key={index}>{line}</span>)}
        </span>
      )}
    </button>
  );
};

export default ParticleName;
