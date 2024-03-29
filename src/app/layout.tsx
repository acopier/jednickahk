import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { theMix, skautBold } from '@/fonts';

export const metadata: Metadata = {
  title: 'Jednička HK',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='cs' className={`${theMix.variable} ${skautBold.variable}`}>
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
