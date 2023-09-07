import React from "react";
import { Link } from "react-router-dom";

function TarjetaProducto (props){
    return (
        <article className="tarjeta_producto">
            <div className="imagen_producto">
                <img src={props.img_url} alt={props.titulo} />
            </div>
            <ul className="datos_producto">
                <li className="titulo"><h3>{props.titulo}</h3></li>
                <li className="precio">{props.precio}$</li>
            </ul>
            <Link className="ver_producto" to={props.to}>
                Ver Producto
            </Link>
        </article>
    );
}

export default TarjetaProducto;