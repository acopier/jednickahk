import AuthPage from '@/components/AuthPage';
import { signup } from '@/server/auth';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registrace',
};

async function Page() {
  return <AuthPage action={signup} title='Vytvořit účet' />;
}

export default Page;
