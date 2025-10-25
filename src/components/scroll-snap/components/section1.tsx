'use client';

import { motion } from 'motion/react';
import { useSectionInView } from '@components';
import { PauseCircleOutlineOutlined, PlayCircleOutline } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export interface Section1Props {
  product: boolean;
  ready: boolean;
}

const audio = new Audio('/vx.mp3');
export const Section1: FCC<Section1Props> = ({ product, ready }) => {
  const searchParams = useSearchParams();
  const [sub, setSub] = useState({
    who: '',
    my: '',
  });
  const [playing, setPlaying] = useState(false);
  const [showPlay, setShowPlay] = useState(false);
  const inView = useSectionInView();
  const _S1 = 'Save th',
    _S2 = 'e date';
  const S1 = _S1.split(''),
    S2 = _S2.split(''),
    S4 = ' 10'.split(''),
    S5 = '00'.split(''),
    S6 = 'Thứ bảy'.split(''),
    S7 = '01/11'.split(''),
    S8 = '2025'.split('');
  const handlePlayAudio = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };
  useEffect(() => {
    const who = decodeURIComponent(searchParams.get('who') ?? ''),
      my = decodeURIComponent(searchParams.get('my') ?? '');
    if (product) {
      setSub({
        who,
        my,
      });
      document.title = `Thân mời ${who}`;
    }
    setTimeout(() => {
      setShowPlay(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (ready) {
      handlePlayAudio();
      setPlaying(true);
    }
  }, [ready]);
  return (
    <>
      <div className="first-bg w-full h-full flex flex-col mt-5">
        <div className="h-[calc(100%-100px)] flex flex-col justify-center">
          <div className="text-5xl font-medium font-ephesis text-rose-700 mb-2">Trân trọng kính mời</div>
          <div className="font-ephesis text-rose-700 text-2xl mt-1 mb-4">
            <b className="font-3xl">{sub.who.length ? sub.who : '...'}</b> đến dự lễ thành hôn của{' '}
            {sub.my.length ? sub.my : '...'}
          </div>
          <div
            className="relative mb-6"
            onClick={() => {
              setPlaying(!playing);
              handlePlayAudio();
            }}
          >
            {showPlay ? (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                {playing ? (
                  <PauseCircleOutlineOutlined sx={{ fontSize: 50 }} className="text-white text-3xl" />
                ) : (
                  <PlayCircleOutline sx={{ fontSize: 50 }} className="text-white text-3xl" />
                )}
              </div>
            ) : (
              <></>
            )}
            <motion.div
              initial={false}
              animate={{
                rotate: ready && inView ? 360 : 0,
                scale: ready && inView ? 1 : 0.1,
              }}
              transition={{
                duration: 1,
                delay: ready && inView ? 0.1 : 0,
                ease: 'easeInOut',
              }}
              className={`overflow-hidden rounded-full aspect-square w-3/4 mx-auto`}
            >
              <img
                src="/KHA_4510.jpg"
                className={`h-full object-cover is-playing ${playing ? '' : 'is-pause'}`}
                alt=""
              />
            </motion.div>
          </div>
          <div className="px-2">
            <div className="pt-3 font-ephesis text-4xl text-red-700 font-bold underline-light">
              {S1.map((v, i) => (
                <motion.span
                  className="inline-block"
                  initial={false}
                  animate={ready && inView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                  transition={{
                    duration: 0.15,
                    delay: ready && inView ? i * 0.1 : 0,
                    ease: 'easeInOut',
                  }}
                  key={`s1-${i}`}
                >
                  {v === ' ' ? '\u00A0' : v}
                </motion.span>
              ))}
              {S2.map((v, i) => (
                <motion.span
                  className="inline-block"
                  initial={false}
                  animate={ready && inView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                  transition={{
                    duration: 0.15,
                    delay: ready && inView ? +i * 0.1 : 0,
                    ease: 'easeInOut',
                  }}
                  key={`s2-${i}`}
                >
                  {v === ' ' ? '\u00A0' : v}
                </motion.span>
              ))}
            </div>
            <div className="pb-1 font-ephesis text-4xl text-red-700 font-bold flex items-center justify-center">
              {S4.map((v, i) => (
                <motion.span
                  className="inline-block"
                  initial={false}
                  animate={ready && inView ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
                  transition={{
                    duration: 0.15,
                    delay: ready && inView ? +i * 0.1 : 0,
                    ease: 'easeInOut',
                  }}
                  key={`s2-${i}`}
                >
                  {v}
                </motion.span>
              ))}
              <div className="-translate-y-1">:</div>
              {S5.map((v, i) => (
                <motion.span
                  className="inline-block"
                  initial={false}
                  animate={ready && inView ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
                  transition={{
                    duration: 0.15,
                    delay: ready && inView ? (2 + i) * 0.1 : 0,
                    ease: 'easeInOut',
                  }}
                  key={`s2-${i}`}
                >
                  {v}
                </motion.span>
              ))}
            </div>
            <div className="py-1 mb-6 font-ephesis text-4xl text-red-700 flex justify-between">
              <div className="border-y border-rose-700 font-semibold">
                {S6.map((v, i) => (
                  <motion.span
                    className="inline-block"
                    initial={false}
                    animate={ready && inView ? { y: 0, x: 0, opacity: 1 } : { y: 30, x: -30, opacity: 0 }}
                    transition={{
                      duration: 0.15,
                      delay: ready && inView ? +i * 0.1 : 0,
                      ease: 'easeInOut',
                    }}
                    key={`s2-${i}`}
                  >
                    {v === ' ' ? '\u00A0' : v}
                  </motion.span>
                ))}
              </div>
              <div className="font-bold">
                {S7.map((v, i) => (
                  <motion.span
                    className="inline-block"
                    initial={false}
                    animate={ready && inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                    transition={{
                      duration: 0.15,
                      delay: ready && inView ? +i * 0.1 : 0,
                      ease: 'easeInOut',
                    }}
                    key={`s2-${i}`}
                  >
                    {v === ' ' ? '\u00A0' : v}
                  </motion.span>
                ))}
              </div>
              <div className="border-y border-rose-700 font-semibold ">
                {S8.map((v, i) => (
                  <motion.span
                    className="inline-block"
                    initial={false}
                    animate={ready && inView ? { y: 0, x: 0, opacity: 1 } : { y: 30, x: 30, opacity: 0 }}
                    transition={{
                      duration: 0.15,
                      delay: ready && inView ? +i * 0.1 : 0,
                      ease: 'easeInOut',
                    }}
                    key={`s2-${i}`}
                  >
                    {v === ' ' ? '\u00A0' : v}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="font-ephesis text-4xl text-red-700 text-center">(12/09 Âm lịch)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
