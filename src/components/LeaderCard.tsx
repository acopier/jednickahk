import Image from 'next/image';

function LeaderCard(props: {
  person: string;
  role: string;
  phoneNumber: string;
  email: string;
}) {
  return (
    <div className='float-right overflow-hidden m-1 items-center sm:w-screen lg:w-auto flex justify-center'>
      <div className='card card-compact lg:w-56 w-96 h-[32.7rem] bg-base-300'>
        <figure>
          <Image
            // Converts query into basic lowercase ascii characters
            src={`/vedouci/${props.person.toLowerCase().normalize('NFD').replace(/[^\w]/g, '')}.jpg`}
            width={225}
            height={300}
            className='rounded-box'
            alt={props.person}
          />
        </figure>
        <div className='card-body text-center'>
          <h2 className='card-title justify-center'>{props.person}</h2>
          <div className='divider m-0' />
          <p className='italic text-lg'>{props.role}</p>
          <p className='text-lg'>{props.phoneNumber}</p>
          <p className='text-lg'>{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default LeaderCard;
