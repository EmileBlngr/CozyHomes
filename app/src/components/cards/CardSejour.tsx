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
            <div>
                <img src={sejour.image} alt={'description hebergement'} className="image-card"></img>
            </div>
           <p>{sejour.adresse}</p>
        </div>

    );
}
export default CardSejour;