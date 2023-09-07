import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TarjetaProducto from "./TarjetaProducto";

import productosJSON from "../productos/productos.json"
import Footer from "./Footer";

function Home (){



    return (
        <>
        <Navbar />
        <section>
            <div className="productos">
                {productosJSON.map((producto) => {
                    return <TarjetaProducto 
                        img_url = {producto.image}
                        titulo= {producto.title}
                        precio = {producto.price}
                        descripcion = {producto.description}
                        stock = {producto.stock}
                        sku = {producto.sku}
                        to = {`/producto/${producto.id}`}
                        key = {producto.id}
                    />
                })}
            </div>
        </section>
        <Footer />
        </>
    );
}

export default Home;