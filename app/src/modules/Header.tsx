import React, { useState } from "react";
import '../styles/modules/header.css';
import { Link } from "react-router-dom";
import { officialLogo, profileLogo } from "../assets/_export";

function Header() {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    const closeMenu = () => {
        setMenuOpen(false);
    }
    return(
        <header>
            <img src={officialLogo} alt="logoHeader" className="logoHeader"/>
            <nav className={isMenuOpen ? "mobile-menu" : ""}>
                <ul className={isMenuOpen ? "menu-open" : ""}>
                    <li>
                        <Link to="/home" onClick={closeMenu}>Trouver un logement</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={closeMenu}>Mes réservations</Link>
                    </li>
                  
                    <li className="containerProfile">               
                        <Link to="/" onClick={closeMenu}>
                            {!isMenuOpen ? (
                                <img src={profileLogo} alt="logoHeader" className="imageProfil"/>
                            ) : (<span>Mon profil</span>
                            )}   
                        </Link>                      
                    </li>
                </ul>
            </nav>
            <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    );
}
export default Header;