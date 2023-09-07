import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Formulario from "./Formulario";
import CampoFormulario from "./CampoFormulario";


function Login() {


    const campos = [
        {
            tipo: "email",
            id: "email",
            placeholder: "email@ejemplo.com"
        }, 
        {
            tipo: "password",
            id: "pass",
            placeholder: "Contraseña"
        }
    ];

    return (
        <>
            <Navbar />
            <section className="login-formulario" >
                <header>
                    <h1>
                        Iniciar Sesión
                    </h1>
                </header>
               <Formulario 
                    campos={campos}
                    textoSubmit={"Iniciar Sesión"}
               />
            </section>
            <Footer />
        </>
    );
}


export default Login;