'use client';

import { motion } from 'motion/react';
import { useSectionInView } from '@components';
const imgSrc = `https://content.pancake.vn/1/s517x776/fwebp/0c/1e/55/b7/066dc6a2283d0e9aa3d6452d5f0ee5cbd1e4695c0ed42458541c3f18-w:1706-h:2560-l:241524-t:image/jpeg.jpg`;

export interface TimelineProps {}
export const Timeline: FCC<TimelineProps> = () => {
  const inView = useSectionInView();
  const N = 5;
  const maxOffsetY = 20; // % lệch dọc giữa lát đầu và cuối
  return (
    <div className="relative w-[300px] aspect-[9/16] bg-main">
      {Array.from({ length: N }).map((_, i) => {
        const left = (100 / N) * i;
        const right = 100 - (100 / N) * (i + 1);
        const offsetY = (maxOffsetY / (N - 1)) * i;
        const offsetYStr = `${offsetY}%`;

        return (
          <motion.div
            key={i}
            className="absolute top-0 left-0 w-full h-full" // Thêm overflow-hidden để đảm bảo clipPath hoạt động tốt
            style={{
              clipPath: `inset(0 ${right}% 0 ${left}%)`,
            }}
            initial={false}
            animate={{
              x: inView ? 0 : (i - (N - 1) / 2) * 150,
              y: inView ? offsetYStr : offsetY + (i % 2 === 0 ? -100 : 100),
              opacity: inView ? 1 : 0,
            }}
            transition={{
              duration: 1,
              delay: i * 0.2,
              ease: 'easeOut',
            }}
          >
            <img
              src={imgSrc}
              alt=""
              className="w-full h-full object-cover top-0 left-0 absolute"
              style={{
                transform: `translateY(-${offsetYStr})`,
              }}
            />
            {i !== N - 1 ? (
              <div
                className="absolute bg-main z-20"
                style={{
                  width: `calc(100% / ${N})`,
                  left: `${left}%`,
                  bottom: `calc(${(maxOffsetY / (N - 1)) * i}% - 1px)`,
                  height: `${maxOffsetY - i * N}%`,
                }}
              ></div>
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
};


/*
<div className="image-container">
        <img src={src} alt="Background" />
        <svg className="overlay-svg">
          <defs>
            <mask id="holes-mask">
              <rect width="100%" height="100%" fill="white" />
              <rect x="1%" y="1%" width="32%" height="80%" fill="black" />
              <rect x="34%" y="10%" width="32%" height="80%" fill="black" />
              <rect x="67%" y="19%" width="32%" height="80%" fill="black" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="rgb(139, 0, 0)" mask="url(#holes-mask)" />
        </svg>
      </div>*/
