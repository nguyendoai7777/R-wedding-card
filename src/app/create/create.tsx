'use client';

import dynamic from "next/dynamic";

const ScrollSnapCard = dynamic(() => import('../../components/scroll-snap/scroll-snap-card'), { ssr: false });


export interface CreateProps {}

export const Create: FCC<CreateProps> = () => {
  return (
    <div className=" w-full">
      <div>
        <ScrollSnapCard />F
      </div>
    </div>
  );
};
