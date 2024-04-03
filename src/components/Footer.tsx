import { SocialLink } from './SocialLink';

function Footer() {
  return (
    <footer
      className='footer items-center p-4 font-skaut text-neutral-content'
      id='footer'
    >
      <aside className='items-center grid-flow-col'>
        <p>
          © 2024-{new Date().getFullYear()} Jednička - všechna práva vyhrazena
        </p>
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
