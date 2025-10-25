'use client';

import { motion } from 'motion/react';
import { useSectionInView } from '@components';

export interface IntroProps {}

export const Intro2: FCC<IntroProps> = () => {
  const inView = useSectionInView();
  return (
    <div className="mt-12 w-full h-full relative flex flex-col justify-center gap-5 ">
      <div className="w-full flex justify-center ">
        <motion.div
          className="p-2 border-green-950 w-3/5 border-2 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            x: inView ? '0' : '100%',
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        >
          <div className="rounded-full overflow-hidden">
            <img src="/KHA_4888.jpg" alt="" />
          </div>
        </motion.div>
      </div>
      <div className="text-3xl mt-4 flex gap-3 flex-col font-ephesis text-green-950">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            y: inView ? 0 : -40,
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
        >
          Nhà trai
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            x: inView ? '0' : '100%',
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.4,
          }}
          className="ml-auto border-y border-l border-black w-3/4 rounded-tl-full rounded-bl-full"
        >
          <div className="flex items-center justify-center py-2">
            Chú rể &nbsp;&nbsp; <div className="font-bold">Trần Quốc Doanh</div>
          </div>
        </motion.div>
        <motion.div
          className=" mt-2 border-y border-r border-black w-3/4 rounded-tr-full rounded-br-full"
          initial={{ opacity: 0 }}
          animate={{
            x: inView ? '0' : '-100%',
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.6,
          }}
        >
          <div className="pt-2">
            Ông &nbsp;&nbsp; <b>Trần Văn Dũng</b>
          </div>
          <div>
            Bà &nbsp;&nbsp; <b>Vũ Thi Quyên</b>
          </div>
        </motion.div>
        <div className="text-xl text-left text-black">Địa chỉ: Tổ dân phố 18, Hải Thịnh, Ninh Bình</div>
        <div className=" opacity-0">
          <div className="pt-2">
            Ông &nbsp;&nbsp; <b>Trần Văn Dũng</b>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Intro2;
/*
<div className="text-3xl">
        <div>Nhà gái</div>
        <div>Ông <b>Trần Văn Dung</b></div>
        <div>Bà <b>Vũ Thi Quyên</b></div>
      </div>
* */