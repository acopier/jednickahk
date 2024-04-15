import ContentPage from '@/components/ContentPage';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

const title = 'Sponzoři';

export const metadata: Metadata = {
  title: title,
};

function Page() {
  return (
    <ContentPage title={title}>
      <div className='flex justify-center mb-5'>
        <Link
          href='https://pizzzza.cz/pobocka/hradec-kralove'
          className='text-blue-400 btn btn-ghost link-hover text-2xl'
        >
          Pizzzza.cz
        </Link>
      </div>
      <p className='text-center'>
        Mockrát Děkujeme Pizzzza.cz za sponzorský dar, který vykouzlil úsměv na
        tváři nejednomu hladovému skautíkovi z našeho oddílu.
      </p>
      <div className='flex justify-center flex-wrap'>
        {[0, 1, 2].map((i) => (
          <Image
            src={`/sponzori/pizza/${i}.jpg`}
            alt='Dovážka pizzy'
            width={768}
            height={768}
            className='rounded-box md:w-1/2 m-1'
            key={i}
          />
        ))}
      </div>
    </ContentPage>
  );
}

export default Page;
