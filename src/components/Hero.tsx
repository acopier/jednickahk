function Hero() {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: 'url(/tabor-avatar.png)',
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold font-skaut'>
            1.Oddíl Junáka Hradec Králové
          </h1>
          <p className='mb-5'></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
