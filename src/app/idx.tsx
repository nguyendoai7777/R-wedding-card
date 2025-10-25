'use client';
import dynamic from 'next/dynamic';

const ScrollSnapCard = dynamic(() => import('../components/scroll-snap/scroll-snap-card'), { ssr: false });

export interface IdxProps {}

export const IdxPage: FCC<IdxProps> = () => {
  return <ScrollSnapCard product />;
};

export default IdxPage;
