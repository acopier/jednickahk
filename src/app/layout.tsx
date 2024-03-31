import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { theMix, skautBold } from '@/fonts';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '1. Oddíl Junáka Hradec Králové | Jednička',
  description: 'Jsme skautský oddíl z Hradce Králové - Malšovic.',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='cs' className={`${theMix.variable} ${skautBold.variable}`}>
      <body>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
