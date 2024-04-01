import Link from 'next/link';

function Magazine(props: {
  year: number;
  month: string;
  uploadTime: string;
  oldFormat?: boolean;
}) {
  return (
    <Link
      className='btn btn-outline mx-1 m-5'
      href={`https://jednickahk.skauting.cz/wp-content/uploads/${props.year}/${props.uploadTime}/${props.month}.pdf`}
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
