import React from "react";
import { Link } from "react-router-dom";

function NoEncontrado () {
    return (
        <>
            <h1 className="no_encontrado">404 - La página no existe :(</h1>
            <Link to="/" >Volver a inicio</Link>
        </>
    );
}

export default NoEncontrado;