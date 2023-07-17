import React, { useEffect, useState } from "react";
import '../../styles/screens/accueil/accueil.css'
import { handleChangeHebergement, handleChangeLieu, handleChangePersonnes } from "../../factories/AccueilFactories";
import { GetSejourResume } from "../../services/serviceSejour";
import ISejourResume from "../../interfaces/ISejourResume";
import CardSejour from "../../components/cards/CardSejour";
import { hebergementIcone, lieuIcone, personnesIcone } from "../../assets/_export";

function Accueil() {
    const [lieu, setLieu] = useState<string>(''); 
    const [hebergement, setHebergement] = useState<string>(''); 
    const [personnes, setPersonnes] = useState<number>(); 
    const [listeSejours, setListeSejours] = useState<ISejourResume[]>();
    const [listeSejoursFiltre, setListeSejoursFiltre] = useState<ISejourResume[]>();

    useEffect(() => {
        GetSejourResume()
        .then((reponse: any) => {
            if (reponse.status === 200) {
                reponse.json().then(sejours => {
                  setListeSejours(sejours);
                  setListeSejoursFiltre(sejours);
                });
            }
        })              
        .catch(e => console.log('error: ' + JSON.stringify(e)));
    }, [])

    const handleSubmit = () => {    
        const filteredSejours = listeSejours.filter((sejour) => {
          const isLieuMatched = !lieu || sejour.ville.toLowerCase().includes(lieu.toLowerCase());
          const isHebergementMatched = hebergement === 'TOUS' || !hebergement  || sejour.typeHebergement === hebergement;
          const isPersonnesMatched = isNaN(personnes) || personnes === undefined || sejour.personnes === personnes;
          return isLieuMatched && isHebergementMatched && isPersonnesMatched;
        });
        console.log(filteredSejours);
        setListeSejoursFiltre(filteredSejours);
      };
    return(
        <div className="container-global">
            <div className="container-top">
                <h1>Trouvez le séjour de vos rêves</h1>
                <form>
                    <div className="input-container-lieu">
                       <input 
                        type="text" 
                        placeholder="Où souhaitez vous allez ?"
                        value={lieu}
                        required={true}
                        onChange={((e) => handleChangeLieu(e, setLieu))}
                        className="search-bar-lieu">
                        </input>
                        <img 
                            src={lieuIcone}
                            alt={"icone emplacement"}
                            className="image-lieu"
                            />
                    </div>
                    <div className="input-container-hebergement">
                        <select 
                            value={hebergement} 
                            onChange={((e) => handleChangeHebergement(e, setHebergement))}
                            className="search-bar-hebergement">
                            <option value="TOUS">Tous types d'hébergement</option>
                            <option value="HOTEL">Hôtel</option>
                            <option value="MAISON">Maison</option>
                            <option value="APPARTEMENT">Appartement</option>
                        </select>                   
                        <img 
                            src={hebergementIcone}
                            alt={"icone hebergement"}
                            className="image-hebergement"
                            />
                    </div>
                    <div className="input-container-personnes">
                       <input 
                        type='number' 
                        placeholder="Combien de personnes ?"
                        value={personnes}
                        required={true}
                        onChange={((e) => handleChangePersonnes(e, setPersonnes))}
                        className="search-bar-personnes">
                        </input>
                        <img 
                            src={personnesIcone}
                            alt={"icone emplacement"}
                            className="image-personnes"
                            /> 
                    </div>
                    <div className="container-button">
                        <input 
                            type="button" 
                            className="submit-button" 
                            value="Rechercher"
                            onClick={handleSubmit}/>
                    </div>   
                </form>
            </div>
            <div className="container-center">
                <div className="container-sejour">
                {listeSejoursFiltre !== undefined
                    ? listeSejoursFiltre.map((sejour: ISejourResume, index) => (                       
                    <CardSejour 
                        sejour={sejour}
                        key={index} />
                    ))
                    : null}
                </div>
            </div>
        </div>

    );
}
export default Accueil;