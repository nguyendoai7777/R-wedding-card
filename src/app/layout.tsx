import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { BodyScrollbarInitializer } from '../components/sora-scrollbar-init';
import './globals.css';
import 'overlayscrollbars/overlayscrollbars.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yolo',
  description: 'x',
};

const RootLayout: FCC = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-[100svh] flex flex-col justify-center items-center" data-overlayscrollbars-initialize>
        {/*<FallingFlowers icons={5} />*/}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
