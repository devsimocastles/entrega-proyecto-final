import React, { useEffect, useState } from "react";

import CampoFormulario from "./CampoFormulario";



function Formulario({ campos, textoSubmit }) {

    let [errorCampo, setErrorCampo] = useState(false);

    const comprobarCampo = (e) => {
        if (e.target.value === "") {
            e.target.classList.add("error");
            setErrorCampo(true);
        } else {
            e.target.classList.remove("error");
            setErrorCampo(false);
        }
    }

    const manejarSubmit = (e) => {
        const campos = Array.from(document.querySelectorAll(".campo"))

        if (campos.some(c => c.value == "")) setErrorCampo(true);
        if (campos.every(c => c.value != "")) setErrorCampo(false);
    }

    return (
        <form action="#" className="formulario" onSubmit={manejarSubmit}>
            {
                campos.map(c => <CampoFormulario
                    tipo={c.tipo}
                    id={c.id}
                    placeholder={errorCampo ? "Campo Obligatorio" : c.placeholder}
                    key={c.id}
                    manejar={comprobarCampo}
                    clases={errorCampo ? "campo error" : "campo"}
                />)
            }
            <input id="submit"
                type="submit"
                value={textoSubmit}
                className={errorCampo ? "desactivado" : ""}
                disabled={errorCampo}
            />
        </form>
    );
}

export default Formulario;