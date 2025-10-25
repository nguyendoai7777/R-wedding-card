'use client';
import { AnimatePresence, motion } from 'motion/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ScrollSnapCard = dynamic(() => import('../components/scroll-snap/scroll-snap-card'), { ssr: false });

export interface IdxProps {}

export const IdxPage: FCC<IdxProps> = () => {
  const [open, setOpen] = useState(false);
  const [_open, _setOpen] = useState(true);
  const openDoor = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        _setOpen(false);
      }, 1000);
    }
  }, [open]);
  return (
    <>
      <ScrollSnapCard product ready={open} />

      <AnimatePresence>
        {_open && (
          <motion.div className="absolute inset-0">
            <div className="relative h-full flex items-center">
              <AnimatePresence>
                {!open && (
                  <motion.div
                    key="left-door"
                    initial={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 1 }}
                    className={`door left-door`}
                    onClick={openDoor}
                  >
                    <img alt="" className="w-full" src="/doorl.png" />
                  </motion.div>
                )}
                {!open && (
                  <motion.div
                    key="right-door"
                    initial={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 1 }}
                    className={`door right-door`}
                    onClick={openDoor}
                  >
                    <img alt="" className="w-full" src="/doorr.png" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default IdxPage;
