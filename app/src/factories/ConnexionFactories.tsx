import { Regex } from "../constants/Regex";

//HandleChange des textInput

export const handleChangeEmail = 
    (
        e: React.ChangeEvent<HTMLInputElement>, 
        setCodeErreur: React.Dispatch<React.SetStateAction<string>>,
        setEmail: React.Dispatch<React.SetStateAction<string>>
    ) => {
        setCodeErreur('');
        setEmail(e.target.value);
    };
export const handleChangePassword =
    (
        e: React.ChangeEvent<HTMLInputElement>,
        setCodeErreur: React.Dispatch<React.SetStateAction<string>>,
        setPassword: React.Dispatch<React.SetStateAction<string>>
    ) => {
        setCodeErreur('');
        setPassword(e.target.value);
    };
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
export const handleBlur = 
    (
        inputName: string,
        email: string,
        password: string,
        setInputEmailFocused: React.Dispatch<React.SetStateAction<boolean>>, 
        setInputPasswordFocused: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
    if (inputName === 'email') {
        if (email === '') {
            setInputEmailFocused(false)
        }
    }
    else {
        if (password === '') {
            setInputPasswordFocused(false)
        }
    }
}; 
export const handleFocus = 
    (
        inputName: string,
        setInputEmailFocused: React.Dispatch<React.SetStateAction<boolean>>, 
        setInputPasswordFocused: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
    if (inputName === 'email') {
        setInputEmailFocused(true);
    }
    else {
        setInputPasswordFocused(true)
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