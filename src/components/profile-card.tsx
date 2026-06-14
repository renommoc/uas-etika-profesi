import { type ReactNode, useCallback, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const ProfileCard = ({ children, className }: Props) => {
  const cardRef = useRef<HTMLElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glint, setGlint] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const px = (e.clientX - left) / width;
    const py = (e.clientY - top) / height;
    setTilt({
      x: (px - 0.5) * 14,
      y: (py - 0.5) * -14,
    });
    setGlint({ x: px * 100, y: py * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setGlint({ x: 50, y: 50 });
  }, []);

  return (
    <section
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Magnetic Card"
      style={
        {
          transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 0.15s ease-out",
          willChange: "transform",
          "--glint-x": `${glint.x}%`,
          "--glint-y": `${glint.y}%`,
        } as React.CSSProperties
      }
      className={className}
    >
      {children}
    </section>
  );
};
