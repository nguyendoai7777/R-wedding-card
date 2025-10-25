'use client';
import { createContext, useContext, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';
const InViewContext = createContext(false);
export const useSectionInView = () => useContext(InViewContext);
export const XSection: FCC<{
  index: number;
  onInView?: (index: number, isInView: boolean) => void;
  color?: string;
}> = ({ children, index, onInView, color }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.8 }); // 60% visible thì coi là "in view"
  useEffect(() => {
    onInView?.(index, isInView);
  }, [isInView, index]);

  return (
    <InViewContext value={isInView}>
      <section
        ref={ref}
        className="h-[100svh] flex justify-center items-center w-full"
        style={{
          scrollSnapAlign: 'start',
          background: color,
        }}
      >
        {children}
      </section>
    </InViewContext>
  );
};
