import { PageContent, PageTitle } from '@/components/Page';

function Page() {
  return (
    <>
      <PageTitle title='Družiny' />
      <PageContent>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* Družiny */}
            <thead>
              <tr>
                <th>Vydry</th>
                <th>Vlci</th>
                <th>Ledňáčci</th>
                <th>Veverky</th>
                <th>Kamzíci</th>
              </tr>
            </thead>
            <tbody>
              {/* Rádci */}
              <tr>
                <th>Čelovka</th>
                <th>Zoubek</th>
                <th>Bára</th>
                <th>Sirka</th>
                <th>Zuzka</th>
              </tr>
              {/* Podrádci */}
              <tr>
                <th>Míša</th>
                <th>Borůvka</th>
                <th>Hokaido</th>
                <th>Mišelin</th>
                <th>Matyš</th>
              </tr>
              {/* Zbytek */}
              <tr>
                <th>Filip H.</th>
                <th>Vašek</th>
                <th>Jáchym</th>
                <th>Anička</th>
                <th>Toronto</th>
              </tr>
              <tr>
                <th>Ríša</th>
                <th>Marek</th>
                <th>Hejkal </th>
                <th>Zuzi</th>
                <th>Miri</th>
              </tr>
              <tr>
                <th>Valča</th>
                <th>Mates</th>
                <th>Kamínek</th>
                <th>Ondra</th>
                <th>Majda</th>
              </tr>
              <tr>
                <th>Mája</th>
                <th>Adam H.</th>
                <th>Klárka</th>
                <th>Marta</th>
                <th>Adam</th>
              </tr>
              <tr>
                <th>Máťa </th>
                <th />
                <th>Láďa</th>
                <th>Anežka</th>
                <th>Malina</th>
              </tr>
            </tbody>
          </table>
        </div>
      </PageContent>
    </>
  );
}

export default Page;
