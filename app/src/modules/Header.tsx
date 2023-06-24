import React from "react";
import '../styles/modules/header.css';
import { Link } from "react-router-dom";
import { officialLogo, profileLogo } from "../assets/_export";


function Header() {
    return(
        <header>
            {/* <div>
                <img src="logo.png" alt="Logo" />
            </div> */}
            <img src={officialLogo} alt="logoHeader" className="logoHeader"/>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Trouver un logement</Link>
                    </li>
                    <li>
                        <Link to="/">Mes réservations</Link>
                    </li>
                  
                    <li className="containerProfile">
                        
                        <Link to="/">
                            <img src={profileLogo} alt="logoHeader" width={26} height={26} className="imageProfil"/>
                            Mon profil
                        </Link>                      
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;