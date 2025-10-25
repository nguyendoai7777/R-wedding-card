'use client';
import { useRef, useState } from 'react';
import './scroll-snap.css';
import { XSection } from './components';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import dynamic from 'next/dynamic';
import { Intro2 } from './components/info2';
import Section4 from './components/section4';
import Section1 from './components/section1';
const Intro = dynamic(() => import('./components/intro'), { ssr: false });
export interface ScrollSnapCardProps {
  onSection?(index: number): void;
  product?: boolean;
}
function fallbackCopyText(text: string) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed'; // tránh scroll
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
    alert('Đã copy!');
  } catch (err) {
    console.error('Fallback copy lỗi:', err);
  }
  document.body.removeChild(textarea);
}
export const ScrollSnapCard: FCC<ScrollSnapCardProps> = ({ onSection, product = false }) => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<any>();
  const [sub, setSub] = useState({
    who: '',
    my: '',
  });
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
          x: 'hidden',
        },
      }}
      defer
      className="ScrollSnap max-w-[500px] mx-auto"
      ref={containerRef}
    >
      {product ? (
        <></>
      ) : (
        <XSection index={0} onInView={handleSection}>
          <Section4 onSub={setSub} product={product} />
        </XSection>
      )}
      <XSection className="items-start" index={-1} onInView={handleSection}>
        <Section1 />
      </XSection>
      <XSection index={1} onInView={handleSection}>
        <Intro />
      </XSection>

      <XSection index={1} onInView={handleSection}>
        <Intro2 />
      </XSection>
      {!product ? (
        <></>
      ) : (
        <XSection index={0} onInView={handleSection}>
          <Section4 onSub={setSub} product={product} />
        </XSection>
      )}
      {/* Hiển thị section hiện tại */}
      {product ? (
        <></>
      ) : (
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
          onClick={() => {
            console.log(sub);
            /*navigator.clipboard.writeText(
              `${location.origin}/?my=${encodeURIComponent(sub.my)}&who=${encodeURIComponent(sub.who)}`
            );*/
            fallbackCopyText(`${location.origin}/?my=${encodeURIComponent(sub.my)}&who=${encodeURIComponent(sub.who)}`)
          }}
        >
          Link mời
        </div>
      )}
    </OverlayScrollbarsComponent>
  );
};
