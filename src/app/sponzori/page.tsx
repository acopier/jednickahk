import ContentPage from '@/components/ContentPage';
import Link from 'next/link';
import Image from 'next/image';
function Page() {
  return (
    <ContentPage title='Sponzoři'>
      <Link
        href='https://pizzzza.cz/pobocka/hradec-kralove'
        className='link text-blue-400 flex justify-center mb-5'
      >
        Pizzzza.cz
      </Link>
      <p className='text-center'>
        Mockrát Děkujeme Pizzzza.cz za sponzorský dar, který vykouzlil úsměv na
        tváři nejednomu hladovému skautíkovi z našeho oddílu.
      </p>
      {[0, 1, 2].map((i) => (
        <Image
          src={`/pizza/${i}.jpg`}
          alt='Dovážka pizzy'
          width={512}
          height={512}
          className='rounded-box block mx-auto w-1/2 m-5'
          key={i}
        />
      ))}
    </ContentPage>
  );
}

export default Page;
