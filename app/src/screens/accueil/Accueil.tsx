import React, { useState } from "react";
import '../../styles/screens/accueil/accueil.css'
import { handleChangeHebergement, handleChangeLieu } from "../../factories/AccueilFactories";

function Accueil() {
    const [lieu, setLieu] = useState<string>(''); 
    const [hebergement, setHebergement] = useState<string>(''); 
    return(
        <div className="container-global">
            <div className="container-top">
                <h1>Trouvez le sejour de vos rêves</h1>
                <form>
                    <input 
                        type="text" 
                        value={lieu}
                        required={true}
                        onChange={((e) => handleChangeLieu(e, setLieu))}
                        className="search-bar-lieu">
                    </input>
                    <select 
                        value={hebergement} 
                        onChange={((e) => handleChangeHebergement(e, setHebergement))}
                        className="search-bar-hebergement">
                        <option value="TOUS">Tous</option>
                        <option value="HOTEL">Hôtel</option>
                        <option value="MAISON">Maison</option>
                        <option value="APPARTEMENT">Appartement</option>
                    </select>
                </form>
            </div>
        <div className="container-center">

        </div>
        </div>

    );
}
export default Accueil;