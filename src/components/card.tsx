'use client';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const src = `https://vnso-zn-24-tf-a128-z3.zmdcdn.me/6c30920fdef9d2edb3cb305e92ee434c?authen=exp=1761195810~acl=/6c30920fdef9d2edb3cb305e92ee434c*~hmac=993af3ab34cb7b22dd4ca2131dab31be`;

const WeddingCard: FCC = ({}) => {
  const [playAudio, setPlayAudio] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [preOpen, setPreOpen] = useState(false);

  const handlePreOpen = () => {
    setPlayAudio(true);
    setPreOpen(true);
    if (preOpen) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (preOpen) {
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    }
  }, [preOpen]);

  useEffect(() => {
    if (!isOpen) {
      setPreOpen(false);
    }
  }, [isOpen]);
  const audio = new Audio();

  const play = (src: string) => {
    audio.src = src;
    audio.play().then(() => {
      audio.loop = true;
    });
  };

  useEffect(() => {
    if (playAudio) {
      // play(src);
    }
  }, [playAudio]);

  return (
    <>
      <div className="max-w-[80%] w-full min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex flex-col items-center justify-center p-8">
        <div>
          <button
            onClick={handlePreOpen}
            className="mb-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold  shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {isOpen ? 'Đóng Thiệp' : 'Mở Thiệp'}
          </button>
        </div>
        <motion.div
          initial={{ x: -150 }}
          animate={preOpen ? { x: 0 } : { x: -150 }}
          transition={{ duration: 1 }}
          style={{ perspective: 2000 }}
        >
          <div className="relative w-[600px] h-[400px]">
            {/* Trang Trái (Card 1 - có 2 mặt) */}
            <div
              className="absolute left-0 top-0 transition-transform duration-1000 ease-in-out"
              style={{
                width: '300px',
                height: '400px',
                transformOrigin: 'right center',
                transform: !isOpen ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                transformStyle: 'preserve-3d',
                position: 'relative',
                zIndex: 3,
              }}
            >
              {/* Mặt trước */}
              <div
                className="absolute inset-0 w-full h-full  shadow-2xl flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-700 text-white"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <h1 className="text-4xl font-bold mb-4">Thiệp Chúc Mừng</h1>
                  <p className="text-lg">Nhấn nút để mở</p>
                  <div className="mt-6 text-5xl">🎁</div>
                </div>
              </div>

              {/* Mặt sau */}
              <div
                className="absolute inset-0 w-full h-full shadow-2xl flex items-center justify-center bg-pink-200 text-gray-800 text-3xl font-semibold"
                style={{
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                alo 123
              </div>
            </div>

            {/* Trang Phải */}
            <div
              className="absolute right-0 top-0 shadow-2xl overflow-hidden"
              style={{
                width: '300px',
                height: '400px',
                transformOrigin: 'left center',
                zIndex: 1,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-rose-400 to-pink-600 p-8 flex flex-col items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h2 className="text-3xl font-bold mb-4">Chúc Mừng!</h2>
                  <p className="text-lg leading-relaxed">
                    Chúc bạn luôn vui vẻ,
                    <br />
                    hạnh phúc và
                    <br />
                    thành công!
                  </p>
                  <div className="mt-6 text-4xl">💝</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default WeddingCard;
