'use client';
import { currentUser, pb } from '@/lib/pocketbase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Account() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function loginUser() {
    try {
      const user = await pb
        .collection('users')
        .authWithPassword(username, password);
      currentUser.set(user);
      typeof window !== 'undefined' ? location.reload() : null;
    } catch (error) {
      console.error(error);
    }
  }

  async function createUser() {
    try {
      const data = {
        username,
        password,
        passwordConfirm: password,
      };
      const createdUser = await pb.collection('users').create(data);
      currentUser.set(createdUser);
      await loginUser();
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  async function logoutUser() {
    pb.authStore.clear();
    currentUser.set(null);
    router.refresh();
  }

  return (
    <>
      {currentUser.get() === null ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            placeholder='Username'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={loginUser}>Log in</button>
          <button onClick={createUser}>Sign Up</button>
        </form>
      ) : (
        <>
          <p>Logged in as: {currentUser.get()?.username}</p>
          <button onClick={logoutUser}>Log out</button>
        </>
      )}
    </>
  );
}

export default Account;
