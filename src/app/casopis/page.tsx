import ContentPage from '@/components/ContentPage';
import Magazine from '@/components/Magazine';

function Page() {
  return (
    <ContentPage title='Jednička Hlásí'>
      Ušel vám, nebo jste někde zašantročili váš časopis Jednička hlásí, ve
      kterém jsou všechny důležité informace? Nezoufejte. Každý si můžete
      stáhnout a poté i vytisknout.
      <h2 className='font-skaut text-4xl underline'>2023/24</h2>
      <Magazine year={2023} month='listopad' />
      <Magazine year={2023} month='prosinec' />
      <Magazine year={2024} month='leden' />
      <h2 className='font-skaut text-4xl underline'>2022/23</h2>
      <Magazine year={2022} month='září' />
      <Magazine year={2022} month='říjen' />
      <Magazine year={2022} month='listopad' />
      <Magazine year={2022} month='prosinec' />
      <Magazine year={2023} month='leden' />
      <Magazine year={2023} month='únor' />
      <Magazine year={2023} month='březen' />
      <Magazine year={2023} month='duben' />
      <Magazine year={2023} month='květen' />
    </ContentPage>
  );
}

export default Page;
