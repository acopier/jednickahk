import Hero from '@/components/Hero';

function Page() {
  return (
    <>
      <Hero />
      <div
        className='flex flex-1 justify-start content-center px-5 p-5 text-xl font-themix rounded-box font-themix'
        id='content'
      >
        <iframe
          src='https://frame.mapy.cz/s/fokuboruzo'
          width='400'
          height='370'
          allowFullScreen={false}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='map'
          className='rounded-box'
        />
      </div>
    </>
  );
}

export default Page;
