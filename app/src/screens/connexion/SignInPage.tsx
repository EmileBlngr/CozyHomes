import React, { useState } from "react";
import '../../styles/screens/connexion/SignInPage.css'
function SignInPage() {
    const [email, setEmail] = useState<string>(''); 
    const [password, setPassword] = useState<string>(''); 

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return(
        <div className="connexionContainer">
            <h1 className="">CozyHomes</h1>
            <h1 className="connexionTitle">CozyHomes</h1>
            <form>
                <div className="inputContainer">
                    <label>Adresse email</label>
                    <input type="email" value={email} required={true} onChange={((e) => handleChangeEmail(e))}></input>
                </div>
                <div className="inputContainer">
                    <label>Mot de passe</label>
                    <input type="text" value={password} required={true} onChange={((e) => handleChangePassword(e))}></input>
                </div>
                <div className="buttonContainer">
                    <input type="button" className="submitButton" />
                    <label>Se connecter</label>
                </div>

            </form>
        </div>
    )
}
export default SignInPage;