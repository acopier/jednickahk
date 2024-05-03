import './globals.css';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: {
    template: '%s | Jednička HK',
    default: 'Jednička HK',
  },
  description: 'Jsme skautský oddíl z Hradce Králové - Malšovic.',
};

const theMixFont = localFont({
  src: '../../public/font/themix-400.woff',
  variable: '--font-themix',
  display: 'swap',
});
const skautBoldFont = localFont({
  src: '../../public/font/skaut-bold.woff2',
  variable: '--font-skaut',
  display: 'swap',
});

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='cs'
      className={`${theMixFont.variable} ${skautBoldFont.variable}`}
    >
      <body>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
