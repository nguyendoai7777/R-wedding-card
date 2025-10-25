import Image from 'next/image';
import { ScrollSnapCard } from '@components';

export default function Home() {
  return (
    <div className=" w-full">
      <div>
        <ScrollSnapCard product />
      </div>
    </div>
  );
}
