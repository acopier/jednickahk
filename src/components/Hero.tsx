function Hero() {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: 'url(/tabor-avatar.png)',
      }}
      id='hero'
    >
      <div className='hero-overlay bg-opacity-70'></div>
      <div className='hero-content text-center text-gray-300'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold font-skaut'>
            1.Oddíl Junáka Hradec Králové
          </h1>
          <p className='font-themix'>
            Jsme skautský oddíl z Hradce Králové - Malšovic. V našem oddíle se
            schází kluci i holky z celého Hradce Králové a okolí. Naší činnost
            tvoří družinové schůzky, které se konají pravidelně každé úterý v
            naší klubovně. Kromě pravidelných schůzek pořádáme řadu dalších
            akcí.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
