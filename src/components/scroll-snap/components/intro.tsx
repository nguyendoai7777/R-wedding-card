'use client';

import { motion } from 'motion/react';
import { useSectionInView } from '@components';

export interface IntroProps {}

export const Intro: FCC<IntroProps> = () => {
  const inView = useSectionInView();
  return (
    <div className="Intro w-full h-full relative">
      <motion.div className="absolute top-1/2 -translate-y-1/2">
        <motion.img
          initial={{ filter: 'grayscale(1) contrast(8)' }}
          transition={{ duration: 1.2 }}
          animate={{
            filter: inView ? 'none' : 'grayscale(1) contrast(8)',
          }}
          className=""
          alt="start"
          src="https://content.pancake.vn/1/s517x776/fwebp/0c/1e/55/b7/066dc6a2283d0e9aa3d6452d5f0ee5cbd1e4695c0ed42458541c3f18-w:1706-h:2560-l:241524-t:image/jpeg.jpg"
        />
      </motion.div>
    </div>
  );
};

export default Intro;
