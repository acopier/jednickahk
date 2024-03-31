import Hero from '@/components/Hero';
import Image from 'next/image';
function Page() {
  return (
    <>
      <Hero />
      <div className='card card-compact h-[31rem] w-max bg-base-100 table-cell items-center float-left overflow-hidden'>
        <figure>
          <iframe
            src='https://frame.mapy.cz/s/fokuboruzo'
            width='710'
            height='370'
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='map'
            className='rounded-box'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title font-bold flex justify-center'>
            Naše klubovna
          </h2>
          <div className='divider m-0.5' />
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
      <div className='float-right overflow-hidden'>
        <div className='card card-compact w-96 bg-base-100 shadow-xl'>
          <figure>
            <Image
              src='/siggi.jpg'
              alt='Siggi'
              width={225}
              height={225}
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
      <div className='float-right overflow-hidden pr-3'>
        <div className='card card-compact w-96 bg-base-100 shadow-xl'>
          <figure>
            <Image
              src='/svaca.jpg'
              alt='Sváča'
              width={225}
              height={225}
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
      <div className='float-right overflow-hidden pr-3'>
        <div className='card card-compact w-96 bg-base-100 shadow-xl'>
          <figure>
            <Image
              src='/pepek.jpg'
              alt='Pepek'
              width={225}
              height={225}
              className='rounded-box'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title justify-center'>Pepek</h2>
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
