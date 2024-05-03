import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const title = 'Akce';

export const metadata: Metadata = {
  title: title,
};

function Page() {
  return notFound();
}

export default Page;
