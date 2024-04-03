import Image from 'next/image';
import Link from 'next/link';

type Props = {
  company: string;
  href: string;
};

export function SocialLink({ company, href }: Props) {
  return (
    <Link href={href} target='_blank' rel='noopener noreferrer'>
      <Image
        src={`/logo/${company}.svg`}
        alt={company}
        width={24}
        height={24}
      />
    </Link>
  );
}
