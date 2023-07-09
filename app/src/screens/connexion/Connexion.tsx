import React, { useState } from "react";
import '../../styles/screens/connexion/Connexion.css'
import { eyeOpenIcon, eyeSlashIcon } from "../../assets/_export";
import { Link } from "react-router-dom";
import { messageErreurEmail, messageErreurPassword } from "../../factories/ConnexionFactories";
function Connexion() {
    const [email, setEmail] = useState<string>(''); 
    const [password, setPassword] = useState<string>(''); 
    const [inputEmailFocused, setInputEmailFocused] = useState(false);
    const [inputPasswordFocused, setInputPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleBlur = (inputName: string) => {
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
    const handleFocus = (inputName: string) => {
        if (inputName === 'email') {
            setInputEmailFocused(true);
        }
        else {
            setInputPasswordFocused(true)
        }
    };
    //Schéma de validation des erreurs de formulaire

    return(
        <div className="connexionContainer">
            <h1 className="connexionTitle">Connectez-vous</h1>
            <form>
                <div className={`inputContainer ${inputEmailFocused ? "focused" : ""}`}>
                    <label className="labelObligatoire">*</label>
                    <label className="labelText">Adresse email</label>
                    <input 
                        type="email" 
                        value={email} 
                        required={true}           
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')} 
                        onChange={((e) => handleChangeEmail(e))}></input>
                    <span className="globalFormError">{messageErreurEmail(inputEmailFocused, email)}</span>
                </div>
                <div className={`inputContainer ${inputPasswordFocused ? "focused" : ""}`}>
                    <label className="labelObligatoire">*</label>
                    <label className="labelText">Mot de passe</label>
                    <div className={"containerPasswordInput"}>
                        <input 
                            type={showPassword ? "text" : "password"}
                            value={password} 
                            required={true} 
                            onFocus={() => handleFocus('password')}
                            onBlur={() => handleBlur('password')} 
                            onChange={((e) => handleChangePassword(e))}>
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
                        value="Se connecter"/>
                </div>
                

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