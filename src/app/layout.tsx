import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { theMix, skautBold } from '@/fonts';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '1. Oddíl Junáka Hradec Králové | Jednička',
  applicationName: '',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='cs'
      className={`${theMix.variable} ${skautBold.variable} scroll-smooth`}
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
