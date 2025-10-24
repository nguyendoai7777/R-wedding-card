'use client';
import dynamic from "next/dynamic";

const WeddingCard = dynamic(() => import('../../components/card'), {ssr: false});

export interface PageProps {
}

const PagePage: FCC<PageProps> = () => {
  return <WeddingCard/>;
};

export default PagePage;
