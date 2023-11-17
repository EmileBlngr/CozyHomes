interface ISejourDetail {
    idSejour: string;
    intitule: string;
    image: string;
    imagesSecondaires: string[]
    ville: string;
    codePostal: string;
    adresse: string;
    note: number;
    typeHebergement: 'HOTEL' | 'MAISON' | 'APPARTEMENT';
    prix: number;
    personnes: number;
    detail: string;
}
export default ISejourDetail;