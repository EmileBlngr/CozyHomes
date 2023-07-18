import React from "react";
import '../styles/components/NoteSejour.css'
import { star } from "../assets/_export";

interface Props {
    note: number;
  }
  
function NoteSejour({note}: Props) {
    return(
        <div className="container-global-note">
            <div className="container-top-note">
                <h3>{note} / 10</h3> 
                <img src={star} alt="etoile-avis" className="image-etoile-note" /> 
            </div>
            <div className="container-bottom-note">
                <div className="bottom-note">
                    Médiocre    
                </div>
                <div className="bottom-note">
                    Basé sur x avis  
                </div>
            </div>
            
        </div>
    );
}
export default NoteSejour;