import { Regex } from "../constants/Regex";

//Schéma de validation des erreurs de formulaire
export const messageErreurEmail = (inputEmailFocused: boolean, email: string) => {
    if (inputEmailFocused) {
       if (email === '') {
        return "L'email est obligatoire.";
       }
       else if (!Regex[0].email.test(email)) {
        return "L'email ne possède pas un format valide.";
       }
    return '';
    }
};
export const messageErreurPassword = (inputPasswordFocused: boolean, password: string) => {
    if (inputPasswordFocused) {
       if (password === '') {
        return "Le mot de passe est obligatoire.";
       }
       else if (!Regex[0].password.test(password)) {
        return "Le mot de passe doit contenir au minimum 8 caractères dont 1 lettre et 1 chiffre.";
       }
    return '';
    }
}