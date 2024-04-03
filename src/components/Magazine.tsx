import Link from 'next/link';

function Magazine(props: { year: number; month: string }) {
  return (
    <Link
      className='btn btn-outline mx-1 m-5'
      href={`/casopis/${props.year}/${props.month.normalize('NFD').replace(/[^\w]/g, '')}.pdf`}
    >
      {
        (props.month[0].toUpperCase() + props.month.slice(1)) as Capitalize<
          typeof props.month
        >
      }
    </Link>
  );
}

export default Magazine;
