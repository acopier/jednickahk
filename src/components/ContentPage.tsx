type Props = {
  title: string;
  children: React.ReactNode;
};

function ContentPage({ title, children, ...rest }: Props) {
  return (
    <>
      <div className='divider divider-info' />
      <h1 className='font-skaut flex justify-center text-5xl text-center'>
        {title}
      </h1>
      <div className='divider divider-info' />
      <div
        className='rounded-box font-themix m-4 p-4 text-2xl leading-10 bg-base-300 text-justify'
        {...rest}
      >
        {children}
      </div>
    </>
  );
}

export default ContentPage;
