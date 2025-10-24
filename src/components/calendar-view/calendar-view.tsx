'use client';

import { HeartOutline, useSectionInView } from '@components';
import { motion } from 'motion/react';
import dynamic from 'next/dynamic';
const CountdownRoller = dynamic(() => import('../countdown/countdown'), { ssr: false });

export interface CalendarViewProps {}
const InMonth = 'text-gray-300';
const OutMonth = 'text-gray-500';
const Selected = 'text-rose-600 font-semibold text-xl';

const Days: { day: number | string; className?: string; target?: boolean; option?: boolean }[] = [
  { day: 29, option: true, className: InMonth },
  { day: 30, option: true, className: InMonth },
  { day: 1, option: true, className: OutMonth },
  { day: 2, option: true, className: OutMonth },
  { day: 3, option: true, className: OutMonth },
  { day: 4, option: true, className: OutMonth },
  { day: 5, option: true, className: OutMonth },
  { day: 6, className: OutMonth },
  { day: 7, className: OutMonth },
  { day: 8, className: OutMonth },
  { day: 9, className: OutMonth },
  { day: 10, className: OutMonth },
  { day: 11, className: OutMonth },
  { day: 12, className: OutMonth },
  { day: 13, className: OutMonth },
  { day: 14, className: OutMonth },
  { day: 15, className: OutMonth },
  { day: 16, className: OutMonth },
  { day: 17, className: OutMonth },
  { day: 18, className: OutMonth },
  { day: 19, className: OutMonth },
  { day: 20, className: OutMonth },
  { day: 21, className: OutMonth },
  { day: 22, className: OutMonth },
  { day: 23, className: OutMonth },
  { day: 24, className: OutMonth },
  { day: 25, className: OutMonth },
  { day: 26, className: OutMonth },
  { day: 27, className: OutMonth },
  { day: 28, className: OutMonth },
  { day: 29, className: OutMonth },
  { day: 30, className: OutMonth },
  { day: 31, className: Selected },
  { day: 1, className: Selected, target: true },
  { day: 2, className: InMonth },
];

const DayName = [
  { day: 'T2' },
  { day: 'T3' },
  { day: 'T4' },
  { day: 'T5' },
  { day: 'T6' },
  { day: 'T7' },
  { day: 'CN' },
];

export const CalendarView: FCC<CalendarViewProps> = () => {
  const inView = useSectionInView();

  return (
    <div className={`max-w-[410px] w-full`}>

      <div className="grid grid-cols-7 w-full CalendarView bg-xc-primary-light rounded-xl border-[2px] border-xc-primary">
        {DayName.map((d) => (
          <div key={d.day} className="CalendarViewHeader aspect-square flex items-center justify-center border-b border-xc-primary">
            <div className="mt-4">{d.day}</div>
            <img className="decor" src="/icon/moc.svg"/>
          </div>
        ))}
        {Days.map((d, i) => (
          <div
            key={i}
            className={`aspect-square flex items-center justify-center relative ${d.option ? '' : 'border-t border-dashed border-xc-primary'}`}
          >
            <motion.div
              initial={false}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : -30,
              }}
              transition={{ duration: inView ? 1 : 0, delay: inView ? i * 0.08 : 0, ease: 'easeOut' }}
              className={`${d.className ?? ''} ${d.target ? 'mb-1' : ''}`}
            >
              {d.day}
            </motion.div>
            {d.target ? <HeartOutline size="100%" className="absolute inset-0" /> : <></>}
          </div>
        ))}
      </div>
      <CountdownRoller targetDate="2025/10/31 10:30:00" className={`mt-2`} />
    </div>
  );
};
