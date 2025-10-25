'use client';
import { useSearchParams } from 'next/navigation'

import ButtonBase from '@mui/material/ButtonBase';
import { LocationOn } from '@mui/icons-material';
import { CalendarView } from '../../calendar-view/calendar-view';
import { useSectionInView } from '@components';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export interface Section4Props {
  product: boolean;
  onSub(sub: { who: string; my: string }): void;
}

const sentence =
  'Thật vui khi có sự góp mặt của bạn tại tiệc hạnh phúc của chúng mình, chung vui và cùng lưu giữ nhưng khoảnh khắc ý nghĩa.';

export const Section4: FCC<Section4Props> = ({ product, onSub }) => {
  const inView = useSectionInView();
  const words = sentence.split(' ');
  const [sub, setSub] = useState({
    who: '',
    my: '',
  });
  const searchParams = useSearchParams()

  useEffect(() => {
  const who = decodeURIComponent(searchParams.get('who') ?? ''),
    my = decodeURIComponent(searchParams.get('my') ?? '')
    if (product) {
      setSub({
        who, my
      })
      document.title = `Thân mời ${who}`
    }
  }, []);
  return (
    <>
      <div className="h-full w-full px-4 flex flex-col justify-center">
        <div className="text-5xl font-medium font-ephesis text-rose-700 mb-4">Thân mời</div>
        {product ? (
          <></>
        ) : (
          <div className="flex gap-3">
            <input
              value={sub.who}
              onChange={(e) => {
                const v = e.target.value;
                setSub({ ...sub, who: v });
                onSub({ ...sub, my: v });
              }}
              placeholder="mời ai"
              className="border-b border-gray-600 flex-1"
            />
            <input
              value={sub.my}
              onChange={(e) => {
                const v = e.target.value;
                setSub({ ...sub, my: v });
                onSub({ ...sub, my: v });
              }}
              placeholder="của ai"
              className="border-b border-gray-600 flex-1"
            />
          </div>
        )}
        <div className="font-ephesis text-rose-700 text-2xl mt-4">
          <b className="font-3xl">{sub.who.length ? sub.who : '...'}</b> đến dự lễ thành hôn của{' '}
          {sub.my.length ? sub.my : '...'}
        </div>
        <div className="font-ephesis  text-2xl mb-3">
          <motion.div className="flex flex-wrap text-2xl leading-6">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={false}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  delay: inView ? index * 0.1 : 0, // mỗi từ xuất hiện cách nhau 0.15s
                  duration: 0.4,
                  ease: 'easeOut',
                }}
                style={{ marginRight: '6px' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <ButtonBase className="text-red-700 flex justify-center w-full !rounded-full !mb-5 overflow-hidden">
          <a
            href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+THCS+Th%E1%BB%8Bnh+Long/@20.0359468,106.2187791,19z/data=!4m23!1m16!4m15!1m6!1m2!1s0x31361464565b8651:0xfa114ea9102dd4cc!2zVGjhu4tuaCBMb25nLCBI4bqjaSBI4bqtdSBEaXN0cmljdCwgTmFtIERpbmg!2m2!1d106.2227968!2d20.0520509!1m6!1m2!1s0x313454b07c1d0b31:0x7295bbb3d0291d99!2zMzAgxJAuIFBow7ogTeG7uSwgTeG7uSDEkMOsbmgsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWk!2m2!1d105.7707014!2d21.0292032!3e2!3m5!1s0x313614712939bc01:0x792a69048608431d!8m2!3d20.0359468!4d106.219553!16s%2Fg%2F11b7y9krm2?hl=vi-VN&entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D"
            className=" flex text-red-700 justify-center w-full py-1 rounded-full border border-rose-700/15 "
          >
            <LocationOn /> Chỉ đường
          </a>
        </ButtonBase>

        <CalendarView />
      </div>
    </>
  );
};

export default Section4;
