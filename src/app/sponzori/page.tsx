import ContentPage from '@/components/ContentPage';
import Link from 'next/link';
import Image from 'next/image';
function Page() {
  const images = [0, 1, 2];
  function PizzaImage(props: { number: number }) {
    return (
      <Image
        src={`/pizza/${props.number}.jpg`}
        alt='Dovážka pizzy'
        width={512}
        height={512}
        className='rounded-box block mx-auto w-1/2 m-5'
      />
    );
  }
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
      {images.map((i) => (
        <PizzaImage number={i} key={i} />
      ))}
      ;
    </ContentPage>
  );
}

export default Page;
