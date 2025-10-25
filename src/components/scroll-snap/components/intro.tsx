'use client';

import { motion } from 'motion/react';
import { useSectionInView } from '@components';

export interface IntroProps {}

export const Intro: FCC<IntroProps> = () => {
  const inView = useSectionInView();
  return (
    <div className="mt-12 w-full h-full relative flex flex-col justify-center  gap-5 ">
      <div className="w-full flex justify-center ">
        <motion.div
          className="p-2 border-rose-900 w-3/5 border-2 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            x: inView ? '0' : '-100%',
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
        >
          <div className="rounded-full overflow-hidden">
            <img src="/KHA_4622.jpg" alt="" />
          </div>
        </motion.div>
      </div>
      <div className="text-3xl mt-4 flex gap-3 flex-col font-ephesis text-rose-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 40,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
        >
          Nhà gái
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            x: inView ? '0' : '-100%',
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.4,
          }}
          className="border-y border-r border-rose-900 w-3/4 rounded-tr-full rounded-br-full"
        >
          <div className="flex items-center justify-center py-2">
            Cô dâu &nbsp;&nbsp; <div className="font-bold">Phạm Diễm Quỳnh</div>
          </div>
        </motion.div>
        <motion.div
          className="ml-auto mt-2 border-y border-l border-rose-900 w-3/4 rounded-tl-full rounded-bl-full"
          initial={{ opacity: 0 }}
          animate={{
            x: inView ? '0' : '100%',
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.6,
          }}
        >
          <div className="pt-2">
            Ông &nbsp;&nbsp; <b>Phạm Văn Hùng</b>
          </div>
          <div>
            Bà &nbsp;&nbsp; <b>Vũ Thị Thắm</b>
          </div>
        </motion.div>
        <div className="text-xl text-right text-black">Địa chỉ: Tổ dân phố 11, Hải Thịnh, Ninh Bình</div>
        <div className=" opacity-0">
          <div className="pt-2">
            Ông &nbsp;&nbsp; <b>Trần Văn Dũng</b>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Intro;
/*
<div className="text-3xl">
        <div>Nhà gái</div>
        <div>Ông <b>Trần Văn Dung</b></div>
        <div>Bà <b>Vũ Thi Quyên</b></div>
      </div>
* */