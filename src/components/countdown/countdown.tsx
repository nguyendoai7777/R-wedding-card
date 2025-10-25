'use client';
import './countdown.css';
import { ReactElement, useEffect, useState } from 'react';
import { Transition, Variants } from 'motion';
import { AnimatePresence, motion } from 'motion/react';
import { useSectionInView } from '@components';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string;
}

interface NumberRollerProps {
  number: number;
  dist?: string;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | {} => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft | {} = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    } as TimeLeft;
  }
  return timeLeft;
};

const rollVariants: Variants = {
  // Trạng thái bắt đầu (số mới ở trên)
  top: { y: '-100%' },
  // Trạng thái hiện tại
  center: { y: '0%' },
  // Trạng thái kết thúc (số cũ cuộn xuống dưới)
  bottom: { y: '100%' },
};

const DigitDisplay: FCC<{ digit: string }> = ({ digit }) => {
  const transition: Transition = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  };

  return (
    <motion.div
      className="digit absolute"
      variants={rollVariants}
      initial="top" // Luôn bắt đầu từ trên
      animate="center" // Cuộn vào giữa
      exit="bottom" // Cuộn xuống dưới khi bị loại bỏ
      transition={transition}
    >
      {digit}
    </motion.div>
  );
};
const NumberRoller: FCC<NumberRollerProps> = ({ number, dist }) => {
  const currentNumberStr = number.toString().padStart(2, '0');
  const digits = currentNumberStr.split('');

  return (
    <div className="number-roller-container flex bg-pink-800 rounded-lg p-1.5">
      {digits.map((digit, index) => (
        <div
          key={index}
          className="relative w-6 h-10 flex justify-center items-center text-3xl font-bold overflow-hidden"
        >
          <AnimatePresence initial={false} mode="popLayout">
            <DigitDisplay key={digit} digit={digit} />
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
const map = {
  days: 'Ngày',
  hours: 'Giờ',
  minutes: 'Phút',
  seconds: 'Giây',
};
export const CountdownRoller: FCC<CountdownProps> = ({ targetDate, className }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft(targetDate));
  const inView = useSectionInView();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents: ReactElement[] = [];

  const keys = Object.keys(timeLeft) as Array<keyof TimeLeft>;

  keys.forEach((interval, i) => {
    const value = (timeLeft as TimeLeft)[interval];

    if (value !== undefined) {
      timerComponents.push(
        <motion.div
          key={interval}
          initial={false}
          animate={{
            y: inView ? 0 : -40,
            opacity: inView ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: inView ? i * 0.25 : 0,
          }}
          className={`flex flex-col items-center ${className}`}
        >
          <NumberRoller number={value} />
          <span className="text-ephesis mt-1 text-sm capitalize text-rose-700">{map[interval]}</span>
        </motion.div>
      );
    }
  });

  return (
    <div className=" text-white flex gap-3 justify-center items-start">
      {timerComponents.length ? timerComponents : <span className="text-3xl text-green-600">Đã đến ngày! 🎉</span>}
    </div>
  );
};

export default CountdownRoller;
