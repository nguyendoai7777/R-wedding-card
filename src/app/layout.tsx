import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { BodyScrollbarInitializer } from '../components/sora-scrollbar-init';
import './globals.css';
import 'overlayscrollbars/overlayscrollbars.css';
import FallingFlowers from "../components/background-main";



export const metadata: Metadata = {
  icons: {
    apple: './apple-icon.png'
  },
  title: 'Quỳnh x Doanh Wedding',
  description: 'Thư mời cưới',
};

const RootLayout: FCC = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-[100svh] flex flex-col justify-center items-center" data-overlayscrollbars-initialize>
       {/* <FallingFlowers />*/}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
