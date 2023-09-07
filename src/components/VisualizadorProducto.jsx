import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

import productosJSON from "../productos/productos.json"
import Footer from "./Footer";

function VisualizadorProducto() {

    let { productoId } = useParams();

    const [botonActivo, setBotonActivo] = useState(false);
    const [productoExiste, setProductoExiste] = useState(true);
    const [producto, setProducto] = useState({});


    const activarBoton = () => {
        if (!botonActivo) setBotonActivo(true)
        else setBotonActivo(false)
    }

    useEffect(() => {
        const [busqueda] = productosJSON.filter((p) => p.id == productoId);
        setProducto(busqueda);

        busqueda == undefined ? setProductoExiste(false) : setProductoExiste(true);
    }, []);



    return (<>
        <Navbar />
        {

            productoExiste ?
                <>
                    <div className="contenedor_producto">
                        <article className="producto">
                            <div className="imagen">
                                <img src={producto.image} alt={producto.title} />
                            </div>
                            <ul className="contenido">
                                <li className="titulo"><h3>{producto.title}</h3></li>
                                <li className="precio">{producto.price}$</li>
                                <li className="descripcion">{producto.description}</li>
                                <li className="stock"><span className="bold">Stock: </span>{producto.stock}</li>
                                <li className="sku"><span className="bold">SKU: </span>{producto.sku}</li>
                                <li className="comprar">
                                    <button onClick={() => activarBoton()} className={
                                        botonActivo ? "activo" : "inactivo"
                                    }>
                                        {
                                            botonActivo ? "Gracias por comprar" : "Comprar"
                                        }
                                    </button>
                                </li>
                            </ul>
                        </article>
                    </div>
                    <Footer />
                </>

                :

                <h1>El producto no existe :(</h1>

        }
    </>);
}

export default VisualizadorProducto;