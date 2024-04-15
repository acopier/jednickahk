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
      <h2 className='font-skaut flex justify-center text-3xl'>
        Rádcovský deník
      </h2>
      <p>
        <br />
        Deník, který rádcům i podrádcům pomáhá s přípravou družinového programu
        a zapisování docházky. Avšak deník není nekonečný a tak se vám může
        stát, že místo v rádcovském deníku dojde. Když se tak stane, můžete si
        zde deník stáhnout a poté vytisknout.
      </p>
      <br />
      <div className='font-skaut'>
        <Link href='/dokumenty/dochazka.pdf' className='btn btn-outline m-1'>
          List s docházkou
        </Link>
        <Link href='/dokumenty/plan.pdf' className='btn btn-outline m-1'>
          Plán schůzky
        </Link>
        <Link href='/dokumenty/poznamky.pdf' className='btn btn-outline m-1'>
          Poznámky
        </Link>
      </div>
    </ContentPage>
  );
}

export default Page;
