import Link from 'next/link';

type Props = {
  year: number;
  month: string;
};

function Magazine({ year, month }: Props) {
  return (
    <Link
      className='btn btn-outline mx-1 m-5'
      href={`/casopis/${year}/${month.normalize('NFD').replace(/[^\w]/g, '')}.pdf`}
    >
      {(month[0].toUpperCase() + month.slice(1)) as Capitalize<typeof month>}
    </Link>
  );
}

export default Magazine;
