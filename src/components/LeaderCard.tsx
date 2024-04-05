import Image from 'next/image';

type Props = {
  person: string;
  role: string;
  phoneNumber: string;
  email: string;
};

function LeaderCard({ person, role, phoneNumber, email }: Props) {
  return (
    <div className='float-right overflow-hidden m-1 items-center sm:w-screen lg:w-auto flex justify-center'>
      <div className='card card-compact lg:w-56 w-96 h-[32.7rem] bg-base-300'>
        <figure>
          <Image
            // Converts query into basic lowercase ascii characters
            src={`/vedouci/${person.toLowerCase().normalize('NFD').replace(/[^\w]/g, '')}.jpg`}
            width={225}
            height={300}
            className='rounded-box'
            alt={person}
          />
        </figure>
        <div className='card-body text-center'>
          <h2 className='card-title justify-center'>{person}</h2>
          <div className='divider m-0' />
          <p className='italic text-lg'>{role}</p>
          <p className='text-lg'>{phoneNumber}</p>
          <p className='text-lg'>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default LeaderCard;
