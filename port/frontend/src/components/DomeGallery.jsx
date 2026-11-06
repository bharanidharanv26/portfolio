import { useEffect, useMemo, useRef, useState } from 'react';
import './DomeGallery.css';
import { memories } from '../data/memories.js';

// Compose rotations in screen space so dragging still feels natural after a full flip.
const rotateSphere = (orientation, pitch, yaw) => {
  const degrees = Math.hypot(pitch, yaw);
  if (!degrees) return orientation;

  const halfAngle = degrees * Math.PI / 360;
  const scale = Math.sin(halfAngle) / degrees;
  const ax = pitch * scale;
  const ay = yaw * scale;
  const aw = Math.cos(halfAngle);
  const [bx, by, bz, bw] = orientation;
  const next = [
    aw * bx + ax * bw + ay * bz,
    aw * by + ay * bw - ax * bz,
    aw * bz + ax * by - ay * bx,
    aw * bw - ax * bx - ay * by
  ];
  const length = Math.hypot(...next);
  return next.map(value => value / length);
};

const DomeGallery = ({
  images = memories,
  fit = 0.5,
  fitBasis = 'auto',
  minRadius = 600,
  maxRadius = Infinity,
  padFactor = 0.25,
  overlayBlurColor = '#120F17',
  autoRotateSpeed = 10,
  dragSensitivity = 20,
  enlargeTransitionMs = 300,
  segments = 35,
  dragDampening = 2,
  openedImageWidth = '400px',
  openedImageHeight = '400px',
  imageBorderRadius = '30px',
  openedImageBorderRadius = '30px',
  grayscale = true
}) => {
  const rootRef = useRef(null);
  const sphereRef = useRef(null);
  const dragRef = useRef(null);
  const clickRef = useRef(false);
  const motionRef = useRef({
    orientation: [0, 0, 0, 1],
    velocity: { x: 0, y: autoRotateSpeed }
  });
  const [activeImage, setActiveImage] = useState(null);

  const items = useMemo(() => {
    if (!images.length) return [];

    const columns = Math.max(8, Math.round(segments));
    const rows = Math.max(4, Math.round(columns / 2));
    const tiles = [];

    // Cover one complete sphere, with fewer tiles on the smaller polar rings.
    for (let row = 0; row < rows; row += 1) {
      const latitude = -90 + (row + 0.5) * 180 / rows;
      const circumference = 2 * Math.PI * Math.cos(latitude * Math.PI / 180);
      const ringColumns = Math.max(3, Math.round(columns * circumference / (2 * Math.PI)));

      for (let column = 0; column < ringColumns; column += 1) {
        const index = tiles.length;
        const image = images[index % images.length];
        const source = typeof image === 'string' ? { src: image } : image;
        tiles.push({
          ...source,
          key: `${source.src}-${index}`,
          latitude,
          longitude: (column + (row % 2) * 0.5) * 360 / ringColumns,
          width: circumference / ringColumns,
          height: Math.PI / rows,
          alt: source.alt || `Memory ${index + 1}`
        });
      }
    }

    return tiles;
  }, [images, segments]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const updateRadius = () => {
      const basis = fitBasis === 'width'
        ? root.clientWidth
        : fitBasis === 'height'
          ? root.clientHeight
          : fitBasis === 'max'
            ? Math.max(root.clientWidth, root.clientHeight)
            : fitBasis === 'min'
              ? Math.min(root.clientWidth, root.clientHeight)
              : Math.min(root.clientWidth, root.clientHeight);
      const radius = Math.min(maxRadius, Math.max(minRadius, basis / Math.max(fit, 0.1)));
      root.style.setProperty('--radius', `${radius}px`);
      root.style.setProperty('--viewer-pad', `${Math.min(root.clientWidth, root.clientHeight) * padFactor}px`);
    };
    updateRadius();
    const observer = new ResizeObserver(updateRadius);
    observer.observe(root);
    return () => observer.disconnect();
  }, [fit, fitBasis, minRadius, maxRadius, padFactor]);

  useEffect(() => {
    let frame;
    let lastTime;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const animate = time => {
      const elapsed = lastTime === undefined ? 0 : Math.min((time - lastTime) / 1000, 0.05);
      const motion = motionRef.current;

      if (!dragRef.current && !activeImage && !document.hidden) {
        if (reducedMotion.matches) {
          motion.velocity = { x: 0, y: 0 };
        } else {
          const decay = Math.exp(-Math.max(0.1, dragDampening) * elapsed);
          motion.velocity.x *= decay;
          motion.velocity.y = autoRotateSpeed + (motion.velocity.y - autoRotateSpeed) * decay;
          motion.orientation = rotateSphere(
            motion.orientation,
            motion.velocity.x * elapsed,
            motion.velocity.y * elapsed
          );
        }
      }

      const [x, y, z, w] = motion.orientation;
      const angle = 2 * Math.acos(Math.max(-1, Math.min(1, w)));
      if (sphereRef.current) {
        // Translate the center first; rotating the translation makes the globe orbit away.
        sphereRef.current.style.transform = `translateZ(calc(var(--radius) * -1)) rotate3d(${x}, ${y}, ${z}, ${angle}rad)`;
      }

      lastTime = time;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [activeImage, autoRotateSpeed, dragDampening]);

  const handlePointerDown = event => {
    if (!event.isPrimary || event.button !== 0 || activeImage || dragRef.current) return;

    clickRef.current = false;
    motionRef.current.velocity = { x: 0, y: 0 };
    event.currentTarget.dataset.dragging = 'true';
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      x: event.clientX,
      y: event.clientY,
      time: event.timeStamp,
      sensitivity: 180 / Math.max(1, Math.min(rootRef.current.clientWidth, rootRef.current.clientHeight))
        * 20 / Math.max(1, dragSensitivity),
      moved: false
    };
  };

  const handlePointerMove = event => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    if (!drag.moved) {
      if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) <= 4) return;
      drag.moved = true;
      clickRef.current = true;
      // Delay capture until a real drag so a tap can still reach the image button.
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    const pitch = -(event.clientY - drag.y) * drag.sensitivity;
    const yaw = (event.clientX - drag.x) * drag.sensitivity;
    const elapsed = Math.max((event.timeStamp - drag.time) / 1000, 1 / 120);
    const speed = Math.hypot(pitch, yaw) / elapsed;
    const scale = speed > 240 ? 240 / speed : 1;
    const motion = motionRef.current;
    motion.orientation = rotateSphere(motion.orientation, pitch, yaw);
    motion.velocity = {
      x: motion.velocity.x * 0.35 + pitch / elapsed * scale * 0.65,
      y: motion.velocity.y * 0.35 + yaw / elapsed * scale * 0.65
    };
    drag.x = event.clientX;
    drag.y = event.clientY;
    drag.time = event.timeStamp;
  };

  const endDrag = event => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    if (event.type !== 'pointerup' || event.timeStamp - drag.time > 80) {
      motionRef.current.velocity = { x: 0, y: 0 };
    }
    dragRef.current = null;
    delete event.currentTarget.dataset.dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = event => {
    if (event.target !== event.currentTarget) return;
    const step = {
      ArrowUp: [15, 0],
      ArrowDown: [-15, 0],
      ArrowLeft: [0, -15],
      ArrowRight: [0, 15]
    }[event.key];
    if (!step) return;

    event.preventDefault();
    motionRef.current.orientation = rotateSphere(motionRef.current.orientation, ...step);
    motionRef.current.velocity = { x: 0, y: 0 };
  };

  return (
    <div
      ref={rootRef}
      className="sphere-root"
      data-grayscale={grayscale || undefined}
      style={{
        '--overlay-blur-color': overlayBlurColor,
        '--enlarge-width': openedImageWidth,
        '--enlarge-height': openedImageHeight,
        '--tile-radius': imageBorderRadius,
        '--enlarge-radius': openedImageBorderRadius,
        '--enlarge-transition': `${enlargeTransitionMs}ms`
      }}
    >
      <div
        className="sphere-main"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={endDrag}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="group"
        aria-label="360-degree memories gallery. Drag in any direction or use the arrow keys to rotate."
      >
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map(item => (
              <div
                className="item"
                key={item.key}
                style={{
                  '--longitude': `${item.longitude}deg`,
                  '--latitude': `${item.latitude}deg`,
                  '--item-width': item.width,
                  '--item-height': item.height
                }}
              >
                <button
                  className="item__image"
                  type="button"
                  aria-label={`View ${item.alt}`}
                  onClick={event => {
                    if (!clickRef.current || event.detail === 0) setActiveImage(item);
                  }}
                >
                  <img src={item.src} alt={item.alt} draggable="false" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="overlay" />
        <div className="overlay--blur" />
      </div>
      {activeImage && (
        <div className="dome-viewer" role="dialog" aria-modal="true" aria-label={activeImage.alt} onClick={() => setActiveImage(null)}>
          <button className="dome-viewer__close" type="button" onClick={() => setActiveImage(null)} aria-label="Close image">
            ×
          </button>
          <img src={activeImage.src} alt={activeImage.alt} onClick={event => event.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default DomeGallery;
