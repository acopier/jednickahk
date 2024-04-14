import ThemeImage from '../Theme/Image';
import ThemeSwitcher from '../Theme/Switcher';
import Link from 'next/link';

function Header() {
  return (
    // <nav className='navbar font-skaut top-0 z-50' id='header'>
    //   <div className='navbar bg-base-300 rounded-box'>
    //     <div className='hover:opacity-75 hidden sm:flex'>
    //       <Link href='/'>
    //         <ThemeImage
    //           alt='skaut'
    //           width={192}
    //           height={192}
    //           src='/logo/skaut'
    //         />
    //       </Link>
    //     </div>
    //     <Link href='/' className='sm:hidden m-1 btn btn-outline'>
    //       🏠
    //     </Link>
    //     <div className='flex justify-end flex-1'>
    //       <div className='flex items-center'>
    //         <div className='dropdown'>
    //           <div
    //             tabIndex={0}
    //             role='button'
    //             className='btn btn-ghost m-1 bg-base-200 btn-outline'
    //           >
    //             Oddíl
    //           </div>
    //           <ul
    //             tabIndex={0}
    //             className='menu dropdown-content bg-base-300 rounded-lg'
    //           >
    //             <HeaderDropdown />
    //           </ul>
    //         </div>
    //         <ul className='flex justify-center'>
    //           <li className='btn btn-ghost rounded-btn bg-base-200 btn-outline'>
    //             <Link href='/odborky'>Odborky</Link>
    //           </li>
    //           {/* <li className='btn btn-ghost rounded-btn m-1'>
    //             <Link href='/ucet'>Účet</Link>
    //           </li> */}
    //           {/* sun icon */}
    //         </ul>
    //         <ul className='btn btn-ghost m-1 bg-base-200 btn-outline'>
    //           <ThemeSwitcher />
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div className='navbar bg-base-100 top-0 sticky z-[1] bg-transparent'>
      <div className='navbar bg-base-300 rounded-box border border-yellow-500'>
        <div className='navbar-start'>
          <div className='dropdown'>
            {/* Mobile */}
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden'
              title='mobile'
            >
              {/* Hamburger */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-max'
            >
              {/* <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li> */}
            </ul>
          </div>
          <Link href='/' className='hover:opacity-75'>
            <ThemeImage
              src='/logo/skaut'
              alt='Skaut'
              width={192}
              height={192}
            />
          </Link>
        </div>
        {/* PC */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal font-skaut'>
            <li>
              <Link href='/historie'>Historie</Link>
            </li>
            <li>
              <Link href='/druziny'>Družiny</Link>
            </li>
            <li>
              <Link href='/odborky'>Odborky a vlčci</Link>
            </li>
            {/* <li>
              <Link href='/akce'>Akce</Link>
            </li> */}
            <li>
              <Link href='/casopis'>Jednička hlásí</Link>
            </li>
            <li>
              <Link href='/sponzori'>Sponzoři</Link>
            </li>
            {/* <li>
              <Link href='/potreby'>Co s sebou</Link>
            </li> */}
            <li>
              <Link href='/dokumenty'>Dokumenty</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <ul>
            <li>
              <label className='swap swap-rotate btn btn-ghost'>
                <ThemeSwitcher />
                {/* sun icon */}
                <svg
                  className='swap-off fill-current w-10 h-10'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
                </svg>
                {/* moon icon */}
                <svg
                  className='swap-on fill-current w-10 h-10'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
