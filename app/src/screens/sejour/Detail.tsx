import React, { useEffect, useState } from "react";
import '../../styles/screens/sejour/detail.css'
import { GetSejourDetail } from "../../services/serviceSejour";
import { useLocation } from "react-router-dom";
import ISejourDetail from "../../interfaces/ISejourDetail";
import NoteSejour from "../../components/NoteSejour";

function DetailSejour() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idSejour = searchParams.get("id");
    const [sejourDetail, setSejourDetail] = useState<ISejourDetail>();
    useEffect(() => {
        GetSejourDetail(idSejour)
        .then((reponse: any) => {
            if (reponse.status === 200) {
                reponse.json().then(sejour => {
                  setSejourDetail(sejour);
                });
            }
        })              
        .catch(e => console.log('error: ' + JSON.stringify(e)));
    }, [])
    if (sejourDetail !== undefined) {
       return(
        <div className="container-global-detail">
            <div className="container-top-detail">
                   <h1>{sejourDetail.intitule}</h1>          
            </div>
            <div className="container-center-detail">
                <div className="container-left-detail">
                    <div className="container-left-top-detail">
                        <div className="container-note-detail">
                            <NoteSejour note={sejourDetail.note}/>
                        </div>  
                        <div className="container-image-detail">
                            <img src={sejourDetail.image} alt={'description hebergement'} className="image-principale"></img>
                        </div>
                    </div>
                    
                    <div>
                        
                    </div>
                </div>
                <div className="container-right-detail">
                    <p className="detail-texte">{sejourDetail.detail}</p>
                </div>
            </div>
        </div>

    );
} 
    }
    
export default DetailSejour;