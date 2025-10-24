'use client';
import { useEffect, useRef } from 'react';
import {useSectionInView} from "@components";

export interface Box3DProps {}
const src = `https://content.pancake.vn/1/s1004x670/fwebp/46/e7/ca/c7/a152f1a16ef8d28b2abe3b0c14f7bebdc1902c6441a83dc4d61a1b9e-w:2560-h:1706-l:349860-t:image/jpeg.jpg`;
export const Box3D: FCC<Box3DProps> = () => {
  const inView = useSectionInView()
  const containerRef = useRef<HTMLDivElement>();
  const imgs = Array.from({ length: 4 }, () => src);

  useEffect(() => {
    const elm = containerRef.current,
      elmW = elm.parentElement?.offsetWidth ?? 0;
    const w = Math.round((elmW / 3) * 2);
    const wv = (w % 2 !== 0 ? w - 1 : w) - 10;
    elm.style.setProperty('--w', wv + 'px');
  }, []);
  return (
    <div className={`Box3D ${inView ? 'animate-play' : 'animate-pause'}`} ref={containerRef}>
      {imgs.map((img, i) => (
        <div className="placeholder" style={{ '--i': i + 1 }} key={i}>
          <div className="img">
            <img alt="" src={img} />
            <div>avcs</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Box3D;
