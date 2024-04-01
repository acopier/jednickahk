import ContentPage from '@/components/ContentPage';

function Page() {
  return (
    <ContentPage title='Družiny'>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* Družiny */}
          <thead>
            <tr>
              <th className='bg-red-700 dark:text-white text-black'>Vydry</th>
              <th className='bg-blue-700 dark:text-white text-black'>Vlci</th>
              <th className='bg-green-700 dark:text-white text-black'>
                Ledňáčci
              </th>
              <th className='bg-yellow-600 dark:text-white text-black'>
                Veverky
              </th>
              <th className='bg-purple-700 dark:text-white text-black'>
                Kamzíci
              </th>
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
    </ContentPage>
  );
}

export default Page;
