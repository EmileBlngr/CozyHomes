interface ISejourResume {
    idSejour: string;
    intitule: string;
    image: string;
    ville: string;
    codePostal: string;
    adresse: string;
    typeHebergement: 'HOTEL' | 'MAISON' | 'APPARTEMENT';
    prix: number;
    personnes: number;
}
export default ISejourResume;