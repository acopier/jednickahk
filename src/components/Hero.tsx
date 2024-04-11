import { getImageProps } from 'next/image';
import Link from 'next/link';

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ');
      return `url("${url}") ${dpi}`;
    })
    .join(', ');
  return `image-set(${imageSet})`;
}

function Hero() {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: 'Tábor avatar',
    width: 1920,
    height: 0,
    src: '/tabor/avatar.png',
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = { height: '100vh', backgroundImage };

  return (
    <div className='hero min-h-screen' style={style} id='hero'>
      <div className='hero-overlay bg-opacity-50' />
      <div className='hero-content text-center text-gray-300 flex flex-col lg:flex-row'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-4xl font-bold font-skaut bg-blue-500 rounded-box p-2 text-center'>
            1.Oddíl Junáka Hradec Králové
          </h1>
          <p className='font-themix rounded-lg font-bold text-lg bg-yellow-700'>
            Jsme skautský oddíl z Hradce Králové - Malšovic.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
