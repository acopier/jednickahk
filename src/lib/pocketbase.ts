import { atom } from 'nanostores';
import Pocketbase from 'pocketbase';

export const pb = new Pocketbase('https://jednickahk.fly.dev');
export const currentUser = atom(pb.authStore.model);
pb.authStore.onChange(() => currentUser.set(pb.authStore.model));
