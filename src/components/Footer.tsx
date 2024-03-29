import Svg from '@/components/Svg';
import Image from 'next/image';
import Link from 'next/link';

async function Footer() {
  return (
    <footer className='footer p-10 text-base-content bg-neutral-500'>
      <aside className='flex container'>
        <Image
          src='/khk.png'
          alt='Královéhradecký kraj'
          width={512}
          height={128}
        />
        <Image src='/hk.png' alt='Hradec Králové' width={200} height={200} />
        {/* Pizzzza logo */}
        <Svg asset='pizzzza' />
      </aside>
      <nav>
        <h6 className='footer-title'>Sítě</h6>
        <Link
          className='link link-hover'
          href='https://www.facebook.com/jednickahk/?locale=cs_CZ'
          target='_blank'
          rel='noopener noreferrer'
        >
          Facebook
        </Link>
        <Link
          className='link link-hover'
          href='https://www.instagram.com/1.oddil_jednicka/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Instagram
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
