import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Account = dynamic(() => import('@/components/Account'), { ssr: false });
const title = 'Účet';

export const metadata: Metadata = {
  title: title,
};

function Page() {
  return <Account />;
}

export default Page;
