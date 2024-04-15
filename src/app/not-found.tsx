import { Metadata } from 'next';
import Link from 'next/link';

const title = '404';

export const metadata: Metadata = {
  title: title,
};

function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center'>
      <div>
        <h1 className='text-4xl font-semibold border-solid border-black dark:border-white font-skaut'>
          404
        </h1>
        <div className='divider' />
        <h2 className='text-xl font-themix'>Tato stránka nebyla nalezena.</h2>
      </div>
    </div>
  );
}

export default NotFound;
