import Hero from '@/components/Hero';
import Image from 'next/image';
function Page() {
  return (
    <>
      <Hero />
      <div className='card card-compact w-96 h-[31rem] bg-base-100 float-left overflow-hidden mx-1'>
        <figure>
          <iframe
            src='https://frame.mapy.cz/s/fokuboruzo'
            width='700'
            height='300'
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='map'
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
      <div className='float-right overflow-hidden mx-1'>
        <div className='card card-compact w-96 bg-base-100'>
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
      <div className='float-right overflow-hidden mx-1'>
        <div className='card card-compact w-96 bg-base-100'>
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
      <div className='float-right overflow-hidden mx-1'>
        <div className='card card-compact w-96 bg-base-100'>
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
