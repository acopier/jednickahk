import ContentPage from '@/components/ContentPage';
import { Metadata } from 'next';
import Link from 'next/link';

const title = 'Co s sebou';

export const metadata: Metadata = {
  title: title,
};

function Page() {
  return (
    <ContentPage title={title}>
      <h2 className='text-center font-skaut text-4xl'>Na schůky</h2>
      <div className='divider' />
      <div className='flex justify-evenly flex-wrap'>
        <ul className='list-disc'>
          <li>osobní sešit (zápisník)</li>
          <li>stezka</li>
          <li>uzlák</li>
          <li>KPZ</li>
          <li>trhací blok + psací potřeby</li>
          <li>šátek</li>
          <li>věci dle dohody</li>
          <li>oddílové triko</li>
        </ul>
      </div>
      <div className='divider' />
      <h2 className='text-center font-skaut text-4xl'>Na výpravy</h2>
      <div className='divider' />
      <h2 className='text-center font-skaut text-3xl'>Jednodenní</h2>
      <div className='divider' />
      <div className='flex justify-evenly flex-wrap'>
        <div>
          <ul className='list-disc list-inside'>
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
          </ul>
        </div>
        <div className='divider divider-horizontal' />
        <div>
          <h2 className='text-center font-skaut text-2xl m-2 bg-red-700 rounded-lg'>
            Co je třeba dát vedoucímu
          </h2>
          <div className='divider' />
          <ul className='list-disc list-inside'>
            <li>Léky, pokud dítě nějaké bere</li>
            <li>Kartičku zdravotní pojišťovny</li>
            <li>Průkazku na slevu jízdného</li>
          </ul>
          <h2 className='text-center font-skaut text-2xl m-2 bg-red-700 rounded-lg'>
            Co si s sebou rozhodně nebrat
          </h2>
          <div className='divider' />
          <ul className='list-disc list-inside'>
            <li>Cenné věci</li>
            <li>
              Mobilní telefon (odvádí pozornost; telefon má vždy vedoucí výpravy
              a jeho zástupci)
            </li>
          </ul>
        </div>
      </div>
      <div className='divider' />
      <h2 className='text-center font-skaut text-3xl m-4'>Vícedenní</h2>
      <div className='divider' />
      <div className='flex justify-evenly flex-wrap m-4'>
        <div>
          <ul className='list-disc list-inside'>
            <li>vše jako na jednodenní výpravu</li>
            <li>Kroj na sebe</li>
            <li>batoh (kletr) nebrat nic do rukou</li>
            <li>spacák + karimatka</li>
            <li>ešus + lžíce</li>
            <li>baterka</li>
            <li>plavky</li>
            <li>oblečení na spaní</li>
            <li>náhradní oblečení</li>
            <li>přezuvky</li>
            <li>škrabka na brambory</li>
            <li>utěrka</li>
            <li>peníze dle dohody</li>
            <li>jídlo na večeři v den odjezdu</li>
            <li>voda v PET, min. 1,5 L</li>
            <li>malý batoh</li>
            <li>hygienické potřeby + toaletní papír</li>
          </ul>
        </div>
        <div className='divider divider-horizontal' />
        <div>
          <h2 className='text-center font-skaut text-xl m-4 rounded-lg'>
            Pokud se chystá výprava pod stany, navíc bude třeba mít místo na
            jednu z položek
          </h2>
          <div className='divider' />
          <ul className='list-disc list-inside'>
            <li>Stan</li>
            <li>Celtu</li>
            <li>Kotlík</li>
            <li>Jídlo pro všechny</li>
            <li>Vařič</li>
          </ul>
          <h2 className='text-center font-skaut text-2xl m-4 rounded-lg'>
            Jak si zabalit na výpravu
          </h2>
          <div className='divider' />
          <ul className='list-disc list-inside'>
            <li>
              Těžké věci patří k zádům
              <ul className='list-disc pl-8 list-inside'>
                <li>Ideálně v horní polovině batohu</li>
              </ul>
            </li>
            <li>
              Důležité věci patří navrch
              <ul className='list-disc list-inside pl-8'>
                <li>Třeba doklady, přezůvky, nůž s čelovkou a další</li>
                <li>Spacák dejte naopak úplně dospod batohu.</li>
              </ul>
            </li>
            <li>
              Vše mějte v batohu
              <ul className='list-disc list-inside pl-8'>
                <li>Žádné tašky navíc</li>
              </ul>
            </li>
            <li>
              Žádné mezery
              <ul className='list-disc list-inside pl-8'>
                <li>Vyplňte prázdná místa třeba ponožkami</li>
              </ul>
            </li>
            <li>
              Používejte popruhy
              <ul className='list-disc list-inside pl-8'>
                <li>
                  Před balením je povolte, po sbalení batohu zase utáhněte
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className='divider' />
      <div className='flex justify-center'>
        <Link
          href='/dokumenty/co-s-sebou.pdf'
          className='btn btn-ghost bg-blue-500'
        >
          PDF
        </Link>
      </div>
    </ContentPage>
  );
}

export default Page;
