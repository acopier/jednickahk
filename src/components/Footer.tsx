import Image from 'next/image';

function Footer() {
  return (
    <footer className='footer bg-slate-400'>
      <aside>
        <Image
          src='/khk-logo.png'
          alt='Královéhradecký kraj'
          height={175}
          width={676}
        />
      </aside>
    </footer>
  );
}

export default Footer;
