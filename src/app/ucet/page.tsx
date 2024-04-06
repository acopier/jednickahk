import dynamic from 'next/dynamic';

const Account = dynamic(() => import('@/components/Account'), { ssr: false });

function Page() {
  return (
    <>
      <Account />
    </>
  );
}

export default Page;
