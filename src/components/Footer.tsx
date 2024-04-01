import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer
      className='footer items-center p-4 text-neutral-content font-skaut'
      id='footer'
    >
      <aside className='items-center grid-flow-col'>
        <p>© 2024 Jednička - všechna práva vyhrazena</p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        {/* Instagram */}
        <Link
          href='https://www.instagram.com/1.oddil_jednicka/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/logo/instagram.svg'
            alt='Instagram'
            width={24}
            height={24}
          />
        </Link>
        {/* Facebook */}
        <Link
          href='https://www.facebook.com/jednickahk/?locale=cs_CZ'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/logo/facebook.svg'
            alt='Facebook'
            width={24}
            height={24}
          />
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
