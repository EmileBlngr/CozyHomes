import React, { useEffect, useState } from "react";
import '../../styles/screens/sejour/detail.css'
import { GetSejourDetail } from "../../services/serviceSejour";
import { useLocation } from "react-router-dom";
import ISejourDetail from "../../interfaces/ISejourDetail";

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
        <div className="container-global">
            <div className="container-top">
                <h1>{sejourDetail.intitule}</h1>
                
            </div>
            <div className="container-center">
                
            </div>
        </div>

    );
} 
    }
    
export default DetailSejour;