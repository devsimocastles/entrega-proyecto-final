import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHouse, 
    faRightToBracket, 
    faUserPlus,
    faShop
} from "@fortawesome/free-solid-svg-icons";

function Navbar (){
    return (
        <nav className="navbar">
            <span className="logo">
                <FontAwesomeIcon icon = {faShop} /> E-SHOP
            </span>
            <div className="links">
                <Link to="/"><FontAwesomeIcon icon={faHouse} />Inicio</Link>
                <Link to="/login"><FontAwesomeIcon icon={faRightToBracket} />Iniciar Sesión</Link>
                <Link to="/register"><FontAwesomeIcon icon={faUserPlus} />Registrase</Link>
            </div>
        </nav>
    );
}

export default Navbar;