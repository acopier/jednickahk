import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  function SocialLink(props: { company: string; href: string }) {
    return (
      <Link href={props.href} target='_blank' rel='noopener noreferrer'>
        <Image
          src={`/logo/${props.company}.svg`}
          alt={props.company}
          width={24}
          height={24}
        />
      </Link>
    );
  }
  return (
    <footer
      className='footer items-center p-4 text-neutral-content font-skaut'
      id='footer'
    >
      <aside className='items-center grid-flow-col text-black dark:text-neutral-content'>
        <p>© 2024 Jednička - všechna práva vyhrazena</p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <SocialLink
          company='instagram'
          href='https://www.instagram.com/1.oddil_jednicka/'
        />
        <SocialLink
          company='facebook'
          href='https://www.facebook.com/jednickahk/?locale=cs_CZ'
        />
      </nav>
    </footer>
  );
}

export default Footer;
