import React, { useRef, useState } from 'react';

export default function TiltCard({
  image,
  alt = '',
  width = 420,
  borderRadius = 16,
  maxTilt = 14,
  scale = 1.03,
  className = '',
  ...props
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [shadow, setShadow] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );
    setShadow(
      `${(-rotateY * 1.5).toFixed(1)}px ${(rotateX * 1.5 + 20).toFixed(1)}px 35px rgba(0, 0, 0, 0.4)`
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setShadow('0px 15px 30px rgba(0, 0, 0, 0.25)');
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        maxWidth: '100%',
        width: `${width}px`,
        transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered
          ? 'transform 0.08s ease-out, box-shadow 0.08s ease-out'
          : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
        boxShadow: shadow || '0px 15px 30px rgba(0, 0, 0, 0.25)',
        borderRadius: `${borderRadius}px`,
        border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.1))',
        overflow: 'hidden',
        cursor: 'pointer',
        willChange: 'transform, box-shadow',
        transformStyle: 'preserve-3d',
        background: 'var(--surface-2, #121215)'
      }}
      {...props}
    >
      <img
        src={image}
        alt={alt}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          userSelect: 'none',
          pointerEvents: 'none'
        }}
        draggable={false}
      />
    </div>
  );
}
