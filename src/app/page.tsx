import Hero from '@/components/Hero';
import Image from 'next/image';
function Page() {
  function Leader(props: {
    person: string;
    role: string;
    phoneNumber: string;
    email: string;
  }) {
    return (
      <div className='float-right overflow-hidden mx-1 m-1 items-center'>
        <div className='card card-compact lg:w-56 w-96 h-[32.7rem] bg-base-300'>
          <figure>
            <Image
              src={`/vedouci/${props.person.normalize('NFKD').replace(/[^\w]/g, '')}.jpg`}
              width={225}
              height={300}
              className='rounded-box'
              alt={props.person}
            />
          </figure>
          <div className='card-body text-center'>
            <h2 className='card-title justify-center'>{props.person}</h2>
            <div className='divider m-0' />
            <p className='italic text-lg'>{props.role}</p>
            <p className='text-lg'>{props.phoneNumber}</p>
            <p className='text-lg'>{props.email}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Hero />
      <div id='content'>
        <div className='float-left overflow-hidden mx-1 m-1'>
          <div className='card card-compact bg-base-100 mx-1'>
            <div className='card-body'>
              <p className='font-themix rounded-box font-bold text-lg bg-base-300 lg:w-[29rem] w-[22rem] px-3 p-3'>
                V našem oddíle se schází kluci i holky z celého Hradce Králové a
                okolí. Naší činnost tvoří družinové schůzky, které se konají
                pravidelně každé úterý v naší klubovně. Také pořádáme řadu
                dalších akcí. Několikrát do roka jezdíme na víkendové akce do
                širokého okolí. O jarních prázdninách pořádáme zimní tábor a v
                létě jezdíme na čtrnáctidenní letní tábor pod stany.
                <br />
                <br />
                Pokud máš chuť zažít spoustu báječných dobrodružství, přijď se
                podívat na naše schůzky. Najdeš nás v budově bývalé Dřevěnky
                (naproti kinu Mladých) v Malšovicích v každé úterý od 16:30
                hodin.
              </p>
            </div>
          </div>
        </div>
        <div className='card card-compact bg-base-300 float-left overflow-hidden mx-1 m-1'>
          <figure>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.1122951742045!2d15.855153077165346!3d50.19643187154469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dd4c03f6e4d25%3A0x78f9618d77f9a59b!2zxIxhamtvdnNrw6lobyAxODYxLzQ2YSwgNTAwIDA5IE5vdsO9IEhyYWRlYyBLcsOhbG92w6k!5e0!3m2!1scs!2scz!4v1711873400023!5m2!1scs!2scz'
              height='300'
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='map'
              className='lg:w-[40rem] w-96 h-[19.5rem]'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title font-bold justify-center'>
              Naše klubovna
            </h2>
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
        <Leader
          person='Siggi'
          email='vladaplasil@seznam.cz'
          phoneNumber='+420 777 832 462'
          role='vedoucí oddílu'
        />
        <Leader
          person='Sváča'
          email='pettra@centrum.cz'
          phoneNumber='+420 728 086 709'
          role='zástupce vůdce oddílu pro světlušky a vlčata'
        />
        <Leader
          person='Pepek'
          email='pepa.d@centrum.cz'
          phoneNumber='+420 603 368 588'
          role='zástupce vůdce oddílu pro vlčata'
        />
      </div>
    </>
  );
}

export default Page;
