import { useEffect, useRef, useState } from 'react';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Lanyard = ({ image, alt }) => {
  const lanyardRef = useRef(null);
  const pointerRef = useRef(null);
  const angleRef = useRef(0);
  const velocityRef = useRef(0);
  const frameRef = useRef(null);
  const previousTimeRef = useRef(0);
  const [dragging, setDragging] = useState(false);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const animate = (time) => {
      const delta = Math.min((time - previousTimeRef.current) / 1000, 0.05);
      previousTimeRef.current = time;

      if (!pointerRef.current) {
        const acceleration = -5.5 * Math.sin(angleRef.current);
        velocityRef.current = (velocityRef.current + acceleration * delta) * 0.994;
        angleRef.current += velocityRef.current * delta;
        setAngle(angleRef.current);
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    const bounds = lanyardRef.current.getBoundingClientRect();
    pointerRef.current = {
      anchorX: bounds.left + bounds.width / 2,
      lastAngle: angleRef.current,
      lastTime: event.timeStamp
    };
    velocityRef.current = 0;
    setDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!pointerRef.current) return;

    const nextAngle = clamp((event.clientX - pointerRef.current.anchorX) / 220, -0.95, 0.95);
    const elapsed = Math.max(event.timeStamp - pointerRef.current.lastTime, 16);
    velocityRef.current = (nextAngle - pointerRef.current.lastAngle) / (elapsed / 1000);
    angleRef.current = nextAngle;
    pointerRef.current.lastAngle = nextAngle;
    pointerRef.current.lastTime = event.timeStamp;
    setAngle(nextAngle);
  };

  const handlePointerUp = () => {
    pointerRef.current = null;
    setDragging(false);
  };

  return (
    <div ref={lanyardRef} className="lanyard" aria-label="Draggable portrait card">
      <div className="lanyard__strap" aria-hidden="true">
        <span className="lanyard__buckle" />
      </div>
    <div className="lanyard__drop">
      <div className="lanyard__connector" aria-hidden="true">
        <span className="lanyard__ring" />
        <span className="lanyard__clip" />
      </div>
        <div
          className={`lanyard__card${dragging ? ' is-dragging' : ''}`}
          style={{ '--card-angle': `${angle}rad` }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          role="button"
          tabIndex={0}
          aria-label="Drag to move the portrait"
        >
          <div className="lanyard__hole" aria-hidden="true" />
          <img src={image} alt={alt} draggable="false" />
          <span className="lanyard__shine" aria-hidden="true" />
        </div>
      </div>
      <p className="lanyard__hint">Drag me</p>
    </div>
  );
};

export default Lanyard;
