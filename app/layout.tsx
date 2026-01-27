import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Manrope, Noto_Sans_TC } from 'next/font/google';
import Header from './ui/layout/Header';
import Footer from './ui/layout/Footer';
import './ui/styles/globals.css';
import BackToTop from './ui/components/BackToTop';
import MobileNav from './ui/components/MobileNav';

const manropeSans = Manrope({
  variable: '--font-manrope-sans',
  subsets: ['latin'],
});

const notoSansTC = Noto_Sans_TC({
  variable: '--font-noto_sans_tc',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: 'oklch(0.6973 0.0967 200.3)',
};

export const metadata: Metadata = {
  title: '日本百名城',
  description: '一個提供日本百名城相關資訊的網站',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='zh-HK' data-scroll-behavior='smooth'>
      <head>
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
      </head>
      <body
        className={`${manropeSans.variable} ${notoSansTC.variable} antialiased bg-white`}
      >
        <Header />
        <main className='mx-auto'>{children}</main>
        <Footer />
        <div className='fixed right-10 bottom-20'>
          <BackToTop />
        </div>
        <MobileNav />
        <Analytics />
      </body>
    </html>
  );
}
