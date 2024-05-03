import AuthPage from '@/components/AuthPage';
import { login } from '@/server/auth';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Přihlášení',
};

async function Page() {
  return <AuthPage action={login} title='Přihlásit se' />;
}

export default Page;
