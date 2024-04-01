import ContentPage from '@/components/ContentPage';

function Page() {
  return (
    <ContentPage title='Co s sebou'>
      <h2 className='text-center font-skaut text-3xl'>Na schůky</h2>
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
      <h2 className='text-center font-skaut text-3xl'>Na výpravy</h2>
      <h3 className='font-skaut text-xl'>Na jednodenní výlet</h3>
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
    </ContentPage>
  );
}

export default Page;
