import IUtilisateur from "../../interfaces/IUtilisateur";

export const AllBouchonConnexion: IUtilisateur[] = [
    {email: 'e.b@gmail.com', password: 'frfrance9'},
    {email: 'emile.boulanger@gmail.com', password: 'frfrance9'},
];

export const BouchonConnexion = (email: string, password: string) => {
    return(!!AllBouchonConnexion.find(
      (item) => item.email === email && item.password === password
    ))
   // Renvoie true si une correspondance est trouvée, sinon false
  };

  export const BouchonInscription = (email: string, password?: string) => {
      return(!!AllBouchonConnexion.find(
        (item) => item.email === email
      ))
     // Renvoie true si une correspondance est trouvée, sinon false
    };