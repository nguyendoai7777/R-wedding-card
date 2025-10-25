'use client';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import {useSectionInView} from "@components";

export interface InfoProps {
  src: string
}

export const Info: FCC<InfoProps> = ({src}) => {
  const inView = useSectionInView();
  const containerRef = useRef<HTMLDivElement>(null);
  const cell = 15;
  const row = 22;
  const centerX = (cell - 1) / 2;
  const centerY = (row - 1) / 2;
  const grid = Array.from({ length: cell * row }, (_, i) => i);
  const [heartOffsets, setHeartOffsets] = useState<{ x: number; y: number }[]>([]);
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const size = el.offsetWidth / cell;
    el.style.setProperty('--size', `${size}px`);
  }, []);

  return (
    <>
      <div className={`flex flex-wrap w-full `} ref={containerRef}>
        {
          grid.map((it) => {
            const x = it % cell;
            const y = Math.floor(it / cell);
            const bgPosX = (x / (cell - 1)) * 100;
            const bgPosY = (y / (row - 1)) * 100;

            const nx = (x - centerX) / (cell / 3);
            const ny = (y - centerY) / (row / 3);
            const rotate = (Math.random() - 0.5) * 360; // -180° → +180°

            // công thức trái tim
            const f = Math.pow(nx * nx + ny * ny - 1, 3) - nx * nx * Math.pow(ny, 3);

            // nếu nằm trong trái tim → offset nhỏ hơn
            const inside = f < 0;

            const offsetX = /*inside ? 0 :*/ (Math.random() - 0.5) * 140;
            const offsetY = /*inside ? 0 :*/ (Math.random() - 0.5) * 140;

            const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            const delay = dist * 0.03;
            return (
              <motion.div
                key={it}
                className="iimg block"
                initial={false}
                animate={{
                  x: inView ? 0 : offsetX,
                  y: inView ? 0 : offsetY,
                  filter: 'grayscale(0)',
                  opacity: inView ? 1 : 0,
                  rotate: inView ? 0 : rotate
                }}
                transition={{
                  duration: 1.4,
                  ease: 'easeOut',
                  delay
                }}
                style={{
                  width: 'var(--size)',
                  height: 'var(--size)',
                  backgroundSize: `${cell * 100}% ${row * 100}%`,
                  backgroundPosition: `${bgPosX}% ${bgPosY}%`,
                  backgroundImage: `url(${src})`
                }}
              />
            );
          })}
      </div>
    </>
  );
};

export default Info