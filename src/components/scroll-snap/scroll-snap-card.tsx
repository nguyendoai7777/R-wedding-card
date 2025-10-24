'use client';
import { useRef, useState } from 'react';
import './scroll-snap.css';
import { XSection } from './components';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import dynamic from 'next/dynamic';
import { Timeline } from './components/timeline';
import { CalendarView } from '../calendar-view/calendar-view';

const CountdownRoller = dynamic(() => import('../countdown/countdown'), { ssr: false });
const Info = dynamic(() => import('./components/info'), { ssr: false });
const Intro = dynamic(() => import('./components/intro'), { ssr: false });
const Box3D = dynamic(() => import('./components/box3d'), { ssr: false });
export interface ScrollSnapCardProps {
  onSection?(index: number): void;
}
export const ScrollSnapCard: FCC<ScrollSnapCardProps> = ({ onSection }) => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<any>();

  const handleSection = (idx: number) => {
    onSection?.(idx);
    setActive(idx);
  };
  return (
    <OverlayScrollbarsComponent
      options={{
        scrollbars: {
          autoHide: 'scroll',
        },
        overflow: {
          x: 'hidden'
        },
      }}
      defer
      className="ScrollSnap"
      ref={containerRef}
    >
      <XSection index={0} onInView={handleSection}>
        <CalendarView />
        {/*<CountdownRoller targetDate="2025/10/25 00:00:00" />
        <Intro />*/}
        {/*<Timeline />*/}
      </XSection>
      <XSection index={1} onInView={handleSection}>
        <Intro />
      </XSection>
      <XSection index={2} onInView={handleSection}>
        <Info />
      </XSection>
      <XSection index={3} onInView={handleSection}>
        <Box3D />
      </XSection>
      <XSection index={4} onInView={handleSection}>
        <Timeline />
      </XSection>
      <XSection index={5} onInView={handleSection}>
        <h1 className="text-nowrap font-ephesis">Section {4}</h1>
      </XSection>
      <XSection index={6} onInView={handleSection}>
        <h1 className="text-nowrap font-ephesis">Section {5}</h1>
      </XSection>
      <XSection index={7} onInView={handleSection}>
        <h1 className="text-nowrap font-ephesis">Section {6}</h1>
      </XSection>
      <XSection index={8} onInView={handleSection}>
        <h1 className="text-nowrap font-ephesis">Section {7}</h1>
      </XSection>
      {/* Hiển thị section hiện tại */}
      <div
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          background: 'rgba(0,0,0,0.6)',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
        }}
      >
        Active: Section {active}
      </div>
    </OverlayScrollbarsComponent>
  );
};
