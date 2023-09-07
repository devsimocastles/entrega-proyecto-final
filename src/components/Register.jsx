import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import Formulario from "./Formulario";

export default function Register() {

    let campos = [
        {
            tipo: "text",
            id: "nombre",
            placeholder: "Nombre"
        }, 
        {
            tipo: "text",
            id: "apellido",
            placeholder: "Apellido"
        },
        {
            tipo: "text",
            id: "usuario",
            placeholder: "Usuario"
        }, 
        {
            tipo: "password",
            id: "pass",
            placeholder: "Contraseña"
        },
        {
            tipo: "number",
            id: "edad",
            placeholder: "Edad"
        },
        {
            tipo: "email",
            id: "email",
            placeholder: "email@ejemplo.com"
        }
    ];


    return (
        <>
            <Navbar />
            <section className="register-formulario">
                <header>
                    <h1>Registrarme</h1>
                </header>
                <Formulario 
                    campos = {campos}
                    textoSubmit={"Registrarme"}
                />
            </section>
            <Footer />
        </>
    );
}