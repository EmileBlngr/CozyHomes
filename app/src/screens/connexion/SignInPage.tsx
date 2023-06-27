import React, { useState } from "react";
import '../../styles/screens/connexion/SignInPage.css'
function SignInPage() {
    const [email, setEmail] = useState<string>(''); 
    const [password, setPassword] = useState<string>(''); 
    const [inputEmailFocused, setInputEmailFocused] = useState(false);
    const [inputPasswordFocused, setInputPasswordFocused] = useState(false);

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
    return(
        <div className="connexionContainer">
            <h1 className="connexionTitle">Connectez-vous</h1>
            <form>
                <div className={`inputContainer ${inputEmailFocused ? "focused" : ""}`}>
                    <label>Adresse email</label>
                    <input 
                        type="email" 
                        value={email} 
                        required={true}           
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')} 
                        onChange={((e) => handleChangeEmail(e))}></input>
                </div>
                <div className={`inputContainer ${inputPasswordFocused ? "focused" : ""}`}>
                    <label>Mot de passe</label>
                    <input 
                        type="text" 
                        value={password} 
                        required={true} 
                        onFocus={() => handleFocus('password')}
                        onBlur={() => handleBlur('password')} 
                        onChange={((e) => handleChangePassword(e))}></input>
                </div>
                <div className="buttonContainer">
                    <input 
                        type="button" 
                        className="submitButton" 
                        value="Se connecter"/>
                </div>

            </form>
        </div>
    )
}
export default SignInPage;