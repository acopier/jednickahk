import ContentPage from '@/components/ContentPage';
import { Metadata } from 'next';

const title = 'Co s sebou';

export const metadata: Metadata = {
  title: title,
};

function Page() {
  return (
    <ContentPage title={title}>
      <div className='divider' />
      <h2 className='text-center font-skaut text-4xl'>Na schůky</h2>
      <div className='divider' />
      <div className='flex justify-center'>
        <ol className='list-disc'>
          <li>osobní sešit (zápisník)</li>
          <li>stezka</li>
          <li>uzlák</li>
          <li>KPZ</li>
          <li>trhací blok + psací potřeby</li>
          <li>šátek</li>
          <li>věci dle dohody</li>
          <li>oddílové triko</li>
        </ol>
      </div>
      <div className='divider' />
      <h2 className='text-center font-skaut text-4xl'>Na výpravy</h2>
      <div className='divider' />
      <h2 className='text-center font-skaut text-3xl'>Jednodenní</h2>
      <div className='divider' />
      <ol className='list-disc'>
        <li>vše co na schůzku (nebrat celý penál)</li>
        <li>spolehlivé boty, pevné v kotnících a dobře ošetřené</li>
        <li>oblečení dle počasí, které se může ušpinit a roztrhnout</li>
        <li>pláštěnku</li>
        <li>náhradní ponožky</li>
        <li>v zimě rukavice a čepici</li>
        <li>
          jídlo a pití na celý den (pití v PET nebo termosce – alespoň 1,5L)
        </li>
        <li>peníze dle dohody</li>
        <li>nůž</li>
      </ol>
    </ContentPage>
  );
}

export default Page;
