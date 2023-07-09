export const AllBouchonConnexion = [
    {email: 'e.b@gmail.com', password: 'frfrance9'},
    {email: 'emile.boulanger@gmail.com', password: 'frfrance9'},
];

export const BouchonConnexion = (email: string, password: string) => {
    const match = AllBouchonConnexion.find(
      (item) => item.email === email && item.password === password
    );
    return !!match; // Renvoie true si une correspondance est trouvée, sinon false
  };