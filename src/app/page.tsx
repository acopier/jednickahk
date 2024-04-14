import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
function Page() {
  function getBackgroundImage(srcSet = '') {
    const imageSet = srcSet
      .split(', ')
      .map((str) => {
        const [url, dpi] = str.split(' ');
        return `url("${url}") ${dpi}`;
      })
      .join(', ');
    return `image-set(${imageSet})`;
  }
  const {
    props: { srcSet },
  } = getImageProps({
    alt: 'Tábor avatar',
    width: 1920,
    height: 0,
    src: '/tabor/avatar.png',
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = { height: '100vh', backgroundImage };
  const leaders = {
    Sváča: {
      email: 'pettra@centrum.cz',
      phoneNumber: '+420 728 086 709',
      role: 'zástupce vůdce oddílu pro světlušky a vlčata',
    },
    Siggi: {
      email: 'vladaplasil@seznam.cz',
      phoneNumber: '+420 777 832 462',
      role: 'vedoucí oddílu',
    },
    Pepek: {
      email: 'pepa.d@centrum.cz',
      phoneNumber: '+420 603 368 588',
      role: 'zástupce vůdce oddílu pro vlčata',
    },
  };
  return (
    <>
      {/* Header */}
      <div className='hero min-h-screen' style={style}>
        <div className='hero-overlay bg-opacity-50' />
        <div className='hero-content text-center text-gray-300 flex flex-col lg:flex-row'>
          <div className='max-w-md'>
            <h1 className='mb-4 text-4xl font-bold font-skaut bg-blue-500 rounded-box p-1 text-center'>
              1.Oddíl Junáka Hradec Králové
            </h1>
            <p className='font-themix rounded-lg font-bold text-lg bg-yellow-700'>
              Jsme skautský oddíl z Hradce Králové - Malšovic.
            </p>
          </div>
        </div>
      </div>
      {/* Page */}
      <div className='flex flex-col overflow-hidden md:w-2/3 w-screen m-auto'>
        <div className='overflow-hidden card card-compact bg-base-300 h-max m-1 w-full'>
          <div className='card-body'>
            <h1 className='font-themix font-bold text-4xl flex justify-center'>
              O nás
            </h1>
            <div className='divider divider-neutral' />
            <p className='font-themix rounded-box text-xl'>
              V našem oddíle se schází kluci i holky z celého Hradce Králové a
              okolí. Naší činnost tvoří družinové schůzky, které se konají
              pravidelně každé úterý v naší klubovně. Také pořádáme řadu dalších
              akcí. Několikrát do roka jezdíme na víkendové akce do širokého
              okolí. O jarních prázdninách pořádáme zimní tábor a v létě jezdíme
              na čtrnáctidenní letní tábor pod stany. Pokud máš chuť zažít
              spoustu báječných dobrodružství, přijď se podívat na naše schůzky.
              Najdeš nás v budově bývalé Dřevěnky (naproti kinu Mladých) v
              Malšovicích v každé úterý od 16:30 hodin.
            </p>
          </div>
        </div>
        <div className='card card-compact bg-base-300 m-1 h-max w-full'>
          <figure>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.1122951742045!2d15.855153077165346!3d50.19643187154469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dd4c03f6e4d25%3A0x78f9618d77f9a59b!2zxIxhamtvdnNrw6lobyAxODYxLzQ2YSwgNTAwIDA5IE5vdsO9IEhyYWRlYyBLcsOhbG92w6k!5e0!3m2!1scs!2scz!4v1711873400023!5m2!1scs!2scz'
              height='300'
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='map'
              className='w-full'
            />
          </figure>
          <div className='card-body'>
            <h2 className='font-themix font-bold text-4xl flex justify-center'>
              Naše klubovna
            </h2>
            <div className='divider' />
            <h3 className='text-center text-xl'>
              Junák - český skaut, středisko Karla Šimka Hradec Králové - oddíl
              Jednička
            </h3>
            <br />
            <p className='text-center text-xl'>
              Čajkovského 1861/46a, 500 09 Hradec Králové
            </p>
          </div>
        </div>
        <div className='flex h-full flex-col md:flex-row'>
          {Object.entries(leaders).map(([name, details], index) => (
            <div
              className='flex overflow-hidden m-1 justify-center w-full rounded-box'
              key={index}
            >
              <div className='card card-compact bg-base-300 w-full'>
                <figure>
                  <Image
                    src={`/vedouci/${name.toLowerCase().normalize('NFD').replace(/[^\w]/g, '')}.jpg`}
                    width={225}
                    height={300}
                    className='rounded-box'
                    alt={name}
                  />
                </figure>
                <div className='card-body text-center'>
                  <h2 className='card-title justify-center text-2xl'>{name}</h2>
                  <div className='divider m-0' />
                  <p className='italic text-lg'>{details.role}</p>
                  <div className='divider m-0' />
                  <p className='text-xl'>{details.email}</p>
                  <p className='text-xl'>{details.phoneNumber}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex w-full justify-center'>
        <Link
          href='#header'
          className='btn bg-yellow-400 text-black m-4 btn-outline hover:animate-bounce rounded-box w-max p-4'
        >
          &#129093; &nbsp; Zpět
        </Link>
      </div>
    </>
  );
}

export default Page;
