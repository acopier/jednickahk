import ContentPage from '@/components/ContentPage';
import { Metadata } from 'next';
import Link from 'next/link';

const title = 'Důležité dokumenty';

export const metadata: Metadata = {
  title: title,
};

function Page() {
  return (
    <ContentPage title={title}>
      Rádcovský deník
      <p>
        <br />
        Deník, který rádcům i podrádcům pomáhá s přípravou družinového programu
        a zapisování docházky. Avšak deník není nekonečný a tak se vám může
        stát, že místo v rádcovském deníku dojde. Když se tak stane, můžete si
        zde deník stáhnout a poté vytisknout.
      </p>
      <br />
      <div className='font-skaut'>
        <Link
          href='https://jednickahk.skauting.cz/wp-content/uploads/2022/11/dochazka-2.pdf'
          className='btn btn-outline mx-1'
        >
          List s docházkou
        </Link>
        <Link
          href='https://jednickahk.skauting.cz/wp-content/uploads/2022/11/plan-2.pdf'
          className='btn btn-outline mx-1'
        >
          Plán schůzky
        </Link>
        <Link
          href='https://jednickahk.skauting.cz/wp-content/uploads/2022/11/poznamky-2.pdf'
          className='btn btn-outline mx-1'
        >
          Poznámky
        </Link>
      </div>
    </ContentPage>
  );
}

export default Page;
