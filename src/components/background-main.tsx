'use client';

import { useRef, useEffect } from 'react';

interface Flower {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  img: HTMLImageElement;
}

interface FallingFlowersProps {
  icons?: number;
  density?: number;
  interval?: number;
}

const FallingFlowers: FCC<FallingFlowersProps> = ({ icons = 5, density = 8, interval = 1500 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const flowersRef = useRef<Flower[]>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const animationRef = useRef<number>();
  const spawnTimerRef = useRef<number>();

  // dùng ref để giữ width, height, dxOffset động (không reset effect)
  const dimsRef = useRef({
    width: 0,
    height: 0,
    dxOffset: 0,
    tan15: Math.tan((15 * Math.PI) / 180),
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Hàm thiết lập canvas + tính toán lại kích thước và phần bù
    const setupCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      const dxOffset = height * dimsRef.current.tan15 * 1.3; // bù thêm 30%

      dimsRef.current = { ...dimsRef.current, width, height, dxOffset };
    };

    setupCanvas();
    window.addEventListener('resize', setupCanvas);

    // Load ảnh hoa
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= icons; i++) {
      const img = new Image();
      img.src = `/icon/rose/${i}.svg`;
      imgs.push(img);
    }
    imagesRef.current = imgs;

    // Hàm spawn hoa (theo density và khoảng bù mới nhất)
    const spawnFlowers = () => {
      const { width, dxOffset } = dimsRef.current;
      const newFlowers: Flower[] = Array.from({ length: density }, () => ({
        x: -dxOffset + Math.random() * (width + dxOffset * 1.5),
        y: Math.random() * -150,
        size: 28 + Math.random() * 18,
        speed: 60 + Math.random() * 40,
        rotation: Math.random() * 360,
        rotationSpeed: 100 + Math.random() * 50,
        img: imgs[Math.floor(Math.random() * imgs.length)],
      }));
      flowersRef.current.push(...newFlowers);
    };

    spawnFlowers();
    spawnTimerRef.current = window.setInterval(spawnFlowers, interval);

    let lastTime = performance.now();

    const draw = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      const { width, height, tan15, dxOffset } = dimsRef.current;
      ctx.clearRect(0, 0, width, height);

      flowersRef.current.forEach((f) => {
        f.y += f.speed * dt;
        f.rotation += f.rotationSpeed * dt;
        f.x += tan15 * f.speed * dt;

        if (f.img.complete) {
          ctx.save();
          ctx.translate(f.x, f.y);
          ctx.rotate((f.rotation * Math.PI) / 180);
          ctx.drawImage(f.img, -f.size / 2, -f.size / 2, f.size, f.size);
          ctx.restore();
        }
      });

      // Xóa hoa ra khỏi vùng nhìn thấy
      flowersRef.current = flowersRef.current.filter((f) => f.y < height + 100 && f.x < width + dxOffset);

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
      window.removeEventListener('resize', setupCanvas);
    };
  }, [icons, density, interval]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default FallingFlowers;
