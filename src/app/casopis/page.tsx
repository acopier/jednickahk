import ContentPage from '@/components/ContentPage';
import { Metadata } from 'next';
import Link from 'next/link';

const title = 'Jednička Hlásí';

export const metadata: Metadata = {
  title: title,
};

type Props = {
  year: number;
  month: string;
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
      {Object.entries(year).map(([year, months]) => (
        <div key={year} className='font-skaut'>
          <h2 className='text-4xl underline'>{year}</h2>
          {months.map((month) => (
            <Link
              className='btn btn-outline m-1'
              href={`/casopis/${year}/${month.normalize('NFD').replace(/[^\w]/g, '')}.pdf`}
              key={month}
            >
              {
                (month[0].toUpperCase() + month.slice(1)) as Capitalize<
                  typeof month
                >
              }
            </Link>
          ))}
        </div>
      ))}
    </ContentPage>
  );
}

export default Page;
