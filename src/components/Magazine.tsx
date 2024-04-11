import Link from 'next/link';

type Props = {
  year: number;
  month: string;
};

function Magazine({ year, month }: Props) {
  return (
    <Link
      className='btn btn-outline m-1'
      href={`/casopis/${year}/${month.normalize('NFD').replace(/[^\w]/g, '')}.pdf`}
    >
      {(month[0].toUpperCase() + month.slice(1)) as Capitalize<typeof month>}
    </Link>
  );
}

export default Magazine;
