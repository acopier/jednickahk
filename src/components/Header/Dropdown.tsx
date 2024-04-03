'use client';

import Link from 'next/link';

function HeaderDropdown() {
  const handleClick = () => {
    (document.activeElement as HTMLElement)?.blur();
  };
  return (
    <>
      <li onClick={handleClick}>
        <Link href='/historie'>Historie</Link>
      </li>
      <li onClick={handleClick}>
        <Link href='/druziny'>Družiny</Link>
      </li>
      <li onClick={handleClick}>
        <Link href='/akce'>Akce</Link>
      </li>
      <li onClick={handleClick}>
        <Link href='/casopis'>Jednička hlásí</Link>
      </li>
      <li onClick={handleClick}>
        <Link href='/sponzori'>Sponzoři</Link>
      </li>
      <li onClick={handleClick}>
        <Link href='/s-sebou'>Co s sebou</Link>
      </li>
      <li onClick={handleClick}>
        <Link href='/dokumenty'>Dokumenty</Link>
      </li>
    </>
  );
}

export default HeaderDropdown;
