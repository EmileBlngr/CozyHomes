import React from "react";
import '../../styles/components/cards/CardSejour.css'
import ISejourResume from "../../interfaces/ISejourResume";
import { hebergementIcone, lieuIcone } from "../../assets/_export";
import { useNavigation } from "../../factories/hooks/UseNavigation";

interface Props {
    sejour: ISejourResume;
    key: number;
  }

function CardSejour({ sejour }: Props) {
    const typeHebergement = () => {
        switch(sejour.typeHebergement){
            case 'HOTEL':
                return 'Hôtel'
                break;
            case 'APPARTEMENT':
                return 'Appartement'
                break;
            case 'MAISON':
                return 'Maison'
                break;
        }
    }
    const navigateTo = useNavigation();
    return(
        <div className="container-card" onClick={() => navigateTo('/sejour/detail/', { id: sejour.idSejour })}>
            <div className="container-image-card">
                <img src={sejour.image} alt={'description hebergement'} className="image-card"></img>
            </div>
            <div className="container-card-content">
                <div className="container-card-title">
                    <h3>
                        {sejour.intitule}
                    </h3>
                </div>
                <div className="container-card-detail">
                    <div className="container-card-detail-column-lieu">
                        <p>
                            {sejour.ville}
                        </p>
                        <p>
                            {sejour.codePostal}
                        </p>
                        <p>
                            {sejour.adresse}
                        </p>
                        <img 
                            src={lieuIcone}
                            alt={"icone emplacement"}
                            className="image-lieu-card"
                            />

                    </div>

                    <div className="container-card-detail-column-technique">
                        <p>
                            {typeHebergement()}
                        </p>
                        <p>
                            {sejour.personnes} personnes
                        </p>
                        <p>
                            {sejour.prix}€ / nuit
                        </p>
                        <img 
                            src={hebergementIcone}
                            alt={"icone hebergement"}
                            className="image-hebergement-card"
                            />
                    </div>
                </div>
            </div>
        </div>

    );
}
export default CardSejour;