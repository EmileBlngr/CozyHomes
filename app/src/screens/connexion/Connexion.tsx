import React, { useState } from "react";
import '../../styles/screens/connexion/connexion.css'
import { eyeOpenIcon, eyeSlashIcon } from "../../assets/_export";
import { Link } from "react-router-dom";
import 
{ 
    handleBlur, 
    handleChangeEmail, 
    handleChangePassword, 
    handleFocus, 
    messageErreurEmail, 
    messageErreurPassword 
} 
from "../../factories/ConnexionFactories";
import { Regex } from "../../constants/Regex";
import { PostConnexion } from "../../services/serviceConnexion";
import { useNavigation } from "../../factories/hooks/UseNavigation";
function Connexion() {
    const [email, setEmail] = useState<string>(''); 
    const [password, setPassword] = useState<string>(''); 
    const [inputEmailFocused, setInputEmailFocused] = useState(false);
    const [inputPasswordFocused, setInputPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [codeErreur, setCodeErreur] = useState<string>('')
    const navigateTo = useNavigation(); //variable de navigation
    
    const handleSubmit = () => {
        if (Regex[0].email.test(email) && Regex[0].password.test(password)) {
            PostConnexion(email, password)
            .then((response) => {
                if (response === 200) {
                    navigateTo('/home');
                }
                else if (response === 404) {
                    setCodeErreur("Vos identifiants sont incorrects. Veuillez réessayer.")
                } 
              })
              .catch((error) => {
                console.error(error);
              });
        }
    };
    return(
        <div className="connexionContainer">
            <h1 className="connexionTitle">Connectez-vous</h1>
            <form>
                <div className={`inputContainer ${inputEmailFocused || email !== '' ? "focused" : ""}`}>
                    <label className="labelObligatoire">*</label>
                    <label className="labelText">Adresse email</label>
                    <input 
                        type="email" 
                        value={email}
                        required={true}           
                        onFocus={() => handleFocus('email', setInputEmailFocused, setInputPasswordFocused)}
                        onBlur={() => handleBlur('email', email, password, setInputEmailFocused, setInputPasswordFocused)} 
                        onChange={((e) => handleChangeEmail(e, setCodeErreur, setEmail))}></input>
                    <span className="globalFormError">{messageErreurEmail(inputEmailFocused, email)}</span>
                </div>
                <div className={`inputContainer ${inputPasswordFocused || password !== '' ? "focused" : ""}`}>
                    <label className="labelObligatoire">*</label>
                    <label className="labelText">Mot de passe</label>
                    <div className={"containerPasswordInput"}>
                        <input 
                            type={showPassword ? "text" : "password"}
                            value={password} 
                            required={true} 
                            onFocus={() => handleFocus('password', setInputEmailFocused, setInputPasswordFocused)}
                            onBlur={() => handleBlur('password', email, password, setInputEmailFocused, setInputPasswordFocused)} 
                            onChange={((e) => handleChangePassword(e, setCodeErreur, setPassword))}>
                        </input>
                        {inputPasswordFocused && (
                            <img 
                                src={showPassword ? eyeOpenIcon : eyeSlashIcon} 
                                alt="PasswordShown" 
                                className="passwordEyeImage"
                                onClick={() => setShowPassword(!showPassword)} />
                        )}
                    </div>
                    <span className="globalFormError">
                        {messageErreurPassword(inputPasswordFocused, password)}
                    </span>
                    
                </div>
                <div className="buttonContainer">
                    <input 
                        type="button" 
                        className="submitButton" 
                        value="Se connecter"
                        onClick={handleSubmit}/>
                </div>
                <span className="globalFormError">
                    {codeErreur}
                </span>
                

            </form>
            <div className="createAccountContainer">
                <p>
                    Vous n'avez pas encore de compte ?
                </p>
                <Link to="/inscription" className="createAccountButton">Créez-en un !</Link>
            </div>
        </div>
    )
}
export default Connexion;