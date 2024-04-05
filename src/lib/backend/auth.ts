import pb from '.';

type Props = {
  email: string;
  password: string;
};

export async function loginUser({ email, password }: Props) {
  try {
    const authData = await pb
      .collection('users')
      .authWithPassword(email, password);
    return authData;
  } catch (error) {
    throw error;
  }
}
