import { PageTitle, PageContent } from '@/components/Page';
import Link from 'next/link';

function Page() {
  return (
    <>
      <PageTitle title='Sponzoři' />
      <PageContent>
        <Link
          href='https://pizzzza.cz'
          className='link text-blue-400 link-hover'
        >
          Pizzzza.cz
        </Link>
      </PageContent>
    </>
  );
}

export default Page;
