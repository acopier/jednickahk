import Link from 'next/link';
import HeaderDropdown from './Dropdown';
import ThemeImage from '../ThemeImage';
import ThemeSwitcher from '../ThemeSwitcher/Full';

function Header() {
  return (
    <nav className='navbar font-skaut sticky top-0 z-50'>
      <div className='navbar bg-base-300 rounded-box'>
        <div className='hover:opacity-75 hidden sm:flex'>
          <Link href='/'>
            <ThemeImage
              alt='skaut'
              width={192}
              height={192}
              src='/logo/skaut'
            />
          </Link>
        </div>
        <Link href='/' className='sm:hidden m-1 btn btn-outline'>
          🏠
        </Link>
        <div className='flex justify-end flex-1'>
          <div className='flex items-center'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost m-1 bg-base-200 btn-outline'
              >
                Oddíl
              </div>
              <ul
                tabIndex={0}
                className='menu dropdown-content bg-base-300 rounded-lg'
              >
                <HeaderDropdown />
              </ul>
            </div>
            <ul className='flex justify-center'>
              <li className='btn btn-ghost rounded-btn bg-base-200 btn-outline'>
                <Link href='/odborky'>Odborky</Link>
              </li>
              {/* <li className='btn btn-ghost rounded-btn m-1'>
                <Link href='/ucet'>Účet</Link>
              </li> */}
              {/* sun icon */}
            </ul>
            <ul className='btn btn-ghost m-1 bg-base-200 btn-outline'>
              <ThemeSwitcher />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
