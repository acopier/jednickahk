'use client';
import { currentUser, pb } from '@/lib/pocketbase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  message: string;
};

function Error({ message }: Props) {
  return (
    <div role='alert' className='alert alert-error mt-1 flex justify-center'>
      <span>{message}</span>
    </div>
  );
}

function Account() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [message, setMessage] = useState<React.JSX.Element>();
  const disabled = email === '' || password === '' ? true : false;
  async function loginUser() {
    try {
      const user = await pb
        .collection('users')
        .authWithPassword(email, password);
      currentUser.set(user);
      typeof window !== 'undefined' ? location.reload() : null;
    } catch (error) {
      setMessage(<Error message='Špatné přihlašovací údaje!' />);
    }
  }

  async function createUser() {
    try {
      const data = {
        email,
        password,
        passwordConfirm: password,
      };
      const createdUser = await pb.collection('users').create(data);
      currentUser.set(createdUser);
      await loginUser();
      router.refresh();
    } catch (error) {
      setMessage(<Error message='Nepodařilo se vytvořit účet!' />);
    }
  }

  async function logoutUser() {
    pb.authStore.clear();
    currentUser.set(null);
    router.refresh();
  }

  // async function resetUserPassword() {
  //   return await pb.collection('users').requestPasswordReset(email)
  // }

  return (
    <>
      {currentUser.get() === null ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='flex justify-center'>
            <div>
              <label className='input input-bordered flex items-center gap-2 mt-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='w-4 h-4 opacity-70'
                >
                  <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                  <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
                </svg>
                <input
                  type='email'
                  className='grow'
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className='input input-bordered flex items-center gap-2 mt-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='w-4 h-4 opacity-70'
                >
                  <path
                    fillRule='evenodd'
                    d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                    clipRule='evenodd'
                  />
                </svg>
                <input
                  type='password'
                  className='grow'
                  value={password}
                  placeholder='Heslo'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <input
                type='submit'
                onClick={loginUser}
                className='btn mt-1 btn-outline'
                value='Přihlásit se'
                disabled={disabled}
              />
              <input
                type='submit'
                onClick={createUser}
                className='btn mt-1 btn-outline'
                value='Zaregistrovat se'
                disabled={disabled}
              />
              {message}
            </div>
          </div>
        </form>
      ) : (
        <>
          <div className='flex justify-end'>
            <div className='placeholder rounded-box bg-neutral'>
              <div className='text-neutral-content rounded-box p-3 h-16'>
                <span className='text-3xl'>{currentUser.get()?.email}</span>
              </div>
            </div>
            <button
              onClick={logoutUser}
              className='btn btn-ghost btn-outline h-16 btn-error'
            >
              Odhlásit se
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Account;
