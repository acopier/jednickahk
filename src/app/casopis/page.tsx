import ContentPage from '@/components/ContentPage';
import Magazine from '@/components/Magazine';

function Page() {
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
