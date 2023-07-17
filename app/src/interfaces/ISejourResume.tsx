interface ISejourResume {
    intitule: string;
    image: string;
    ville: string;
    codePostal: string;
    adresse: string;
    typeHebergement: 'HOTEL' | 'MAISON' | 'APPARTEMENT';
    prix: number;
    personnes: number;
    detail: string;
}
export default ISejourResume;