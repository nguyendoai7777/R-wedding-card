import { motion } from 'motion/react';
import { useSectionInView } from '@components';

export interface DoorProps {}

export const DoorPage: FCC<DoorProps> = () => {
  const inView = useSectionInView();
  return (
    <>
      <motion.div
        className="door left-door"
        animate={{
          x: inView ? 0 : '-100%',
        }}
        transition={{
          duration: 1,
        }}
      ></motion.div>
      <motion.div
        className="door right-door"
        animate={{
          x: inView ? 0 : '100%',
        }}
        transition={{
          duration: 1,
        }}
      ></motion.div>
    </>
  );
};

export default DoorPage;
