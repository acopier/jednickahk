import ContentPage from '@/components/ContentPage';
import Magazine from '@/components/Magazine';
import { Metadata } from 'next';

const title = 'Jednička Hlásí';

export const metadata: Metadata = {
  title: title,
};

function Page() {
  const year = {
    2022: ['září', 'říjen', 'listopad', 'prosinec'],
    2023: [
      'leden',
      'únor',
      'březen',
      'duben',
      'květen',
      'listopad',
      'prosinec',
    ],
    2024: ['leden'],
  };
  return (
    <ContentPage title={title}>
      Ušel vám, nebo jste někde zašantročili váš časopis Jednička hlásí, ve
      kterém jsou všechny důležité informace? Nezoufejte. Každý si můžete
      stáhnout a poté i vytisknout.
      <h2 className='font-skaut text-4xl underline'>2024</h2>
      {year[2024].map((month) => (
        <Magazine year={2024} month={month} key={month} />
      ))}
      <h2 className='font-skaut text-4xl underline'>2023</h2>
      {year[2023].map((month) => (
        <Magazine year={2023} month={month} key={month} />
      ))}
      <h2 className='font-skaut text-4xl underline'>2022</h2>
      {year[2022].map((month) => (
        <Magazine year={2022} month={month} key={month} />
      ))}
    </ContentPage>
  );
}

export default Page;
