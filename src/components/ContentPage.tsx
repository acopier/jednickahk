function ContentPage(props: { title: string; children: React.ReactNode }) {
  const { title, children, ...rest } = props;
  return (
    <>
      <div className='divider' />
      <h1 className='font-skaut flex justify-center text-5xl'>{props.title}</h1>
      <div className='divider' />
      <div
        className='rounded-box font-themix mx-5 px-5 p-5 text-2xl m-5 leading-relaxed bg-base-300'
        {...rest}
      >
        {props.children}
      </div>
    </>
  );
}

export default ContentPage;
