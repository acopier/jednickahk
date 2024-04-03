import Link from 'next/link';
import HeaderDropdown from './Dropdown';
import ThemeImage from '../ThemeImage';
import ThemeSwitcher from '../ThemeSwitcher';

function Header() {
  return (
    <nav className='navbar font-skaut sticky top-0 z-50 p-0'>
      <div className='navbar bg-base-300'>
        <div className='hover:opacity-75 hidden sm:flex'>
          <Link href='/'>
            <ThemeImage
              alt='skaut'
              width={192}
              height={192}
              src='/logo/skaut'
            />
          </Link>
          Jednička HK
          <ThemeSwitcher />
        </div>
        <div className='flex justify-end flex-1'>
          <div className='flex items-center'>
            <div className='dropdown'>
              <div tabIndex={0} role='button' className='btn btn-ghost'>
                Oddíl
              </div>
              <ul
                tabIndex={0}
                className='menu dropdown-content bg-base-300 rounded-lg'
              >
                <HeaderDropdown />
              </ul>
            </div>
            <ul>
              <li className='btn btn-ghost rounded-btn'>
                <Link href='/odborky'>Odborky a vlčci</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
