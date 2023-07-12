import React from "react";
import '../../styles/components/cards/CardSejour.css'
import ISejourResume from "../../interfaces/ISejourResume";

interface Props {
    sejour: ISejourResume;
    key: number;
  }

function CardSejour({ sejour }: Props) {
    return(
        <div className="container-card">
            <div className="container-image">
                <img src={sejour.image} alt={'description hebergement'} className="image-card"></img>
            </div>
            <div className="container-card-content">
                <div className="container-card-title">
                    <h3>
                        {sejour.intitule}
                    </h3>
                </div>
                <div className="container-card-detail">
                    <div className="container-card-detail-column">
                        <p>
                            {sejour.ville}
                        </p>
                        <p>
                            {sejour.codePostal}
                        </p>
                    </div>
                    <div className="container-card-detail-column">
                        <p>
                            {sejour.typeHebergement}
                        </p>
                        <p>
                            5 places
                        </p> 
                    </div>
                    <div className="container-card-detail-column">
                        <p>
                            {sejour.prix}€
                        </p>
                    </div>
                </div>
            </div>
           
        </div>

    );
}
export default CardSejour;