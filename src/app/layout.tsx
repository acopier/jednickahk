import './globals.css';
import Header from '@/components/Header/Base';
import { theMix, skautBold } from '@/fonts';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Jednička HK',
    default: 'Jednička HK',
  },
  description: 'Jsme skautský oddíl z Hradce Králové - Malšovic.',
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
