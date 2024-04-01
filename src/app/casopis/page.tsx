import ContentPage from '@/components/ContentPage';
import Link from 'next/link';

function Page() {
  function Magazine(props: {
    year: number;
    month: string;
    uploadTime: string;
    oldFormat?: boolean;
  }) {
    return (
      <Link
        className='btn btn-outline mx-1 m-5'
        href={`https://jednickahk.skauting.cz/wp-content/uploads/${props.year}/${props.uploadTime}/${props.month}.pdf`}
      >
        {
          (props.month[0].toUpperCase() + props.month.slice(1)) as Capitalize<
            typeof props.month
          >
        }
      </Link>
    );
  }
  return (
    <ContentPage title='Jednička Hlásí'>
      Ušel vám, nebo jste někde zašantročili váš časopis Jednička hlásí, ve
      kterém jsou všechny důležité informace? Nezoufejte. Každý si můžete
      stáhnout a poté i vytisknout.
      <h2 className='font-skaut text-4xl underline'>2023/24</h2>
      <Magazine year={2024} month='listopad' uploadTime='01' />
      <Magazine year={2024} month='prosinec' uploadTime='01' />
      <Magazine year={2024} month='leden' uploadTime='01' />
    </ContentPage>
  );
}

export default Page;
