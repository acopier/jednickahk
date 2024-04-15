import { notFound } from 'next/navigation';
// import { Metadata } from 'next';

// const Account = dynamic(() => import('@/components/Account'));

// const title = 'Účet';

// export const metadata: Metadata = {
//   title: title,
// };

function Page() {
  return (
    notFound(),
    {
      /* <Account /> */
    }
  );
}

export default Page;
