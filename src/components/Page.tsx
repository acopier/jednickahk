export function PageTitle(props: { title: string }) {
  return (
    <>
      <div className='divider' />
      <h1 className='font-skaut flex justify-center text-5xl'>{props.title}</h1>
      <div className='divider' />
    </>
  );
}

export function PageContent(props: { children: React.ReactNode }) {
  return (
    <div className='rounded-box font-themix mx-5 px-5 p-5 text-2xl m-5 flex flex-col gap-y-6'>
      {props.children}
    </div>
  );
}
