import Hero from '@/components/Hero';
import Image from 'next/image';
function Page() {
  return (
    <>
      <Hero />
      <div className='float-left overflow-hidden mx-1 m-1'>
        <div className='card card-compact bg-base-100 mx-1'>
          <div className='card-body'>
            <p className='font-themix rounded-box font-bold text-lg bg-base-200 lg:w-[29rem] w-[22rem]'>
              Jsme skautský oddíl z Hradce Králové - Malšovic. V našem oddíle se
              schází kluci i holky z celého Hradce Králové a okolí. Naší činnost
              tvoří družinové schůzky, které se konají pravidelně každé úterý v
              naší klubovně. Také pořádáme řadu dalších akcí. Několikrát do roka
              jezdíme na víkendové akce do širokého okolí. O jarních prázdninách
              pořádáme zimní tábor a v létě jezdíme na čtrnáctidenní letní tábor
              pod stany.
            </p>
          </div>
        </div>
      </div>
      <div className='card card-compact bg-base-100 float-left overflow-hidden mx-1 m-1'>
        <figure>
          <iframe
            src='https://frame.mapy.cz/s/fokuboruzo'
            height='300'
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='map'
            className='lg:w-[40rem] w-96 h-[19.5rem]'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title font-bold justify-center'>Naše klubovna</h2>
          <div className='divider' />
          <h3 className='text-center font-semibold text-lg'>
            Junák - český skaut, středisko Karla Šimka Hradec Králové - oddíl
            Jednička
          </h3>
          <br />
          <p className='text-center font-bold'>
            Čajkovského 1861/46a Hradec Králové 500 09
          </p>
        </div>
      </div>
      <div className='float-right overflow-hidden mx-1 m-1 items-center'>
        <div className='card card-compact lg:w-56 w-96 h-[32.7rem] bg-base-100'>
          <figure>
            <Image
              src='/siggi.jpg'
              alt='Siggi'
              width={225}
              height={300}
              className='rounded-box'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title justify-center'>Siggi</h2>
            <div className='divider m-0' />
            <p className='italic text-lg'>vedoucí oddílu</p>
            <p className='text-lg'>+420 777 832 462</p>
            <p className='text-lg'>vladaplasil@seznam.cz</p>
          </div>
        </div>
      </div>
      <div className='float-right overflow-hidden mx-1 m-1'>
        <div className='card card-compact lg:w-56 w-96 bg-base-100'>
          <figure>
            <Image
              src='/svaca.jpg'
              alt='Sváča'
              width={225}
              height={300}
              className='rounded-box'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title justify-center'>Sváča</h2>
            <div className='divider m-0' />
            <p className='italic text-lg'>
              zástupce vůdce oddílu pro světlušky a vlčata
            </p>
            <p className='text-lg'>+420 728 086 709</p>
            <p className='text-lg'>pettra@centrum.cz</p>
          </div>
        </div>
      </div>
      <div className='float-right overflow-hidden mx-1 m-1'>
        <div className='card card-compact lg:w-56 w-96 bg-base-100'>
          <figure>
            <Image
              src='/pepek.jpg'
              alt='Pepek'
              width={225}
              height={300}
              className='rounded-box'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title justify-center lg:px-0 px-5'>Pepek</h2>
            <div className='divider m-0' />
            <p className='italic text-lg'>zástupce vůdce oddílu pro vlčata</p>
            <p className='text-lg'>+420 603 368 588</p>
            <p className='text-lg'>pepa.d@centrum.cz</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
