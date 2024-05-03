import { logout, validateRequest } from '@/server/auth';
import { redirect } from 'next/navigation';

async function Page() {
  const { user } = await validateRequest();
  return (
    <>
      {user === null ? (
        redirect('/ucet/prihlasit')
      ) : (
        <form action={logout}>
          <button type='submit'>Odhlásit se</button>
        </form>
      )}
    </>
  );
}

export default Page;
