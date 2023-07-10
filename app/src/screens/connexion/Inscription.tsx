import '../../styles/screens/connexion/Connexion.css'
import React, { useState } from "react";
import { eyeOpenIcon, eyeSlashIcon } from "../../assets/_export";
import { Link, useNavigate } from "react-router-dom";
import { Regex } from '../../constants/Regex';
import { PostInscription } from '../../services/serviceConnexion';
import { messageErreurEmail, messageErreurPassword } from '../../factories/ConnexionFactories';
function Inscription() {
    const [email, setEmail] = useState<string>(''); 
    const [password, setPassword] = useState<string>(''); 
    const [inputEmailFocused, setInputEmailFocused] = useState(false);
    const [inputPasswordFocused, setInputPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [codeErreur, setCodeErreur] = useState<string>('')

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCodeErreur('');
        setEmail(e.target.value);
    };
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCodeErreur('');
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
    const useNavigation = () => {
        const navigate = useNavigate();
      
        const navigateTo = (path: string) => {
          navigate(path);
        };
      
        return navigateTo;
      };
    const navigateTo = useNavigation();
    const handleSubmit = () => {
        if (Regex[0].email.test(email) && Regex[0].password.test(password)) {
            PostInscription(email, password)
            .then((response) => {
                if (response === '201') {
                    navigateTo('/home');
                }
                else if (response === '409') {
                    setCodeErreur("Cet email est déjà utilisé.")
                } 
              })
              .catch((error) => {
                console.error(error);
              });
        }
    }
    return(
    <div className="connexionContainer">
        <h1 className="connexionTitle">Créer un compte</h1>
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
                    value="S'inscrire"
                    onClick={handleSubmit} />
            </div>
            <span className="globalFormError">
                {codeErreur}
            </span>
            

        </form>
        <div className="createAccountContainer">
            <p>
                Vous avez déjà un compte ?
            </p>
            <Link to="/connexion" className="createAccountButton">Connectez vous ici !</Link>
        </div>
    </div>
    )
}
export default Inscription;