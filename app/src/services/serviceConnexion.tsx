import { BouchonConnexion, BouchonInscription } from './bouchons/bouchonConnexion';

const Bouchon = true;

export const PostConnexion = async (email: string, password: string) => {
    if (Bouchon) {
      if (BouchonConnexion(email, password)) {
        return Promise.resolve(200);
      }
      else {
        return Promise.resolve(404);
      }
    }
}

export const PostInscription = async (email: string, password: string) => {
  if (Bouchon) {
    if (BouchonInscription(email, password)) {
      return Promise.resolve(409);
    }
    else {
      return Promise.resolve(201);
    }
  }
}