import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

function Page() {
  return (
    <ContentPage title='Odborky a vlčci'>
      <p>
        Vlčci, světýlka a odborky jsou „zkoušky“, které si sami můžete vybrat a
        plnit je. Zaměřují se převážně na různé dovednosti, které by měl skaut
        umět a znát. Chceš najít tu pravou pro sebe? Neváhej!
      </p>
      <br />
      <p>(Před začátkem plnění odborky se ohlas Siggimu)</p>
      <br />
      <div className='font-skaut'>
        <Link className='btn btn-outline mx-1' href='https://odborky.skaut.cz/'>
          Odborky
        </Link>
        <Link className='btn btn-outline mx-1' href='https://vlcci.skaut.cz/'>
          Vlčci a Světýlka
        </Link>
      </div>
    </ContentPage>
  );
}

export default Page;
