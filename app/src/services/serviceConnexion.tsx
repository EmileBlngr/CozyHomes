import { BouchonConnexion } from './bouchons/bouchonConnexion';

const Bouchon = true;

export const PostConnexion = async (email: string, password: string) => {
    if (Bouchon) {
      if (BouchonConnexion(email, password)) {
        return Promise.resolve('200');
      }
      else {
        return Promise.resolve('404');
      }
    }
}