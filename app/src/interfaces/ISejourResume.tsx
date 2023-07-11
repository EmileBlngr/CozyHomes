interface ISejourResume {
    intitule: string;
    ville: string;
    codePostal: string;
    adresse: string;
    typeHebergement: 'HOTEL' | 'MAISON' | 'APPARTEMENT';
    detail: string;
}
export default ISejourResume;