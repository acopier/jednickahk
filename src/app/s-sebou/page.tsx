import ContentPage from '@/components/ContentPage';
import { Metadata } from 'next';

const title = 'Co s sebou';

export const metadata: Metadata = {
  title: title,
};

function Page() {
  return (
    <ContentPage title={title}>
      <h2 className='text-center font-skaut text-3xl underline'>Na schůky</h2>
      <ol className='list-disc px-10 p-5'>
        <li>osobní sešit (zápisník)</li>
        <li>stezka</li>
        <li>uzlák</li>
        <li>KPZ</li>
        <li>trhací blok + psací potřeby</li>
        <li>šátek</li>
        <li>věci dle dohody</li>
        <li>oddílové triko</li>
      </ol>
      <h2 className='text-center font-skaut text-3xl underline'>Na výpravy</h2>
      <div>
        <h3 className='font-skaut text-xl m-2'>Na jednodenní výlet</h3>
        <ol className='list-disc px-10 p-5'>
          <li>vše co na schůzku (nebrat celý penál)</li>
          <li>spolehlivé boty, pevné v kotnících a dobře ošetřené</li>
          <li>oblečení dle počasí, které se může ušpinit a roztrhnout</li>
          <li>pláštěnku</li>
          <li>náhradní ponožky</li>
          <li>v zimě rukavice a čepici</li>
          <li>
            jídlo a pití na celý den (pití v PET nebo termosce - alespoň 1,5L)
          </li>
          <li>peníze dle dohody</li>
          <li>nůž</li>
        </ol>
      </div>
      <h3 className='font-skaut text-xl bg-red-600 rounded-box w-96 text-center m-2'>
        Co je třeba dát vedoucímu
      </h3>
      <ol className='list-disc px-10 p-5'>
        <li>Léky, pokud dítě nějaké bere</li>
        <li>Kartičku zdravotní pojišťovny</li>
        <li>Průkazku na slevu jízdného</li>
      </ol>
      <h3 className='font-skaut text-xl bg-red-600 rounded-box w-96 text-center m-2'>
        Co si s sebou rozhodně nebrat
      </h3>
      <ol className='list-disc px-10 p-5'>
        <li>Cenné věci</li>
        <li>
          Mobilní telefon (odvádí pozornost; telefon má vždy vedoucí výpravy a
          jeho zástupci)
        </li>
      </ol>
    </ContentPage>
  );
}

export default Page;
