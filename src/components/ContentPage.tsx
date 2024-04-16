type Props = {
  title: string;
  children: React.ReactNode;
};

function ContentPage({ title, children, ...rest }: Props) {
  return (
    <>
      <div className='bg-base-200'>
        <div className='divider divider-info' />
        <h1 className='font-skaut flex justify-center text-5xl text-center'>
          {title}
        </h1>
        <div className='divider divider-info' />
      </div>
      <div
        className='rounded-box font-themix text-2xl leading-10 bg-base-300 p-4'
        {...rest}
      >
        {children}
      </div>
    </>
  );
}

export default ContentPage;
