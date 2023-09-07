import React, {useState} from "react";

function CampoFormulario({nombreCampo ,tipo, placeholder, id, manejar, clases}){

    return (
        <div className="input_container">
            <label htmlFor={id}>{nombreCampo}</label>
            <input 
            type={tipo} 
            placeholder={placeholder}
            id={id} 
            key={nombreCampo}
            onChange={manejar} 
            className={clases}/>
        </div>
    );
}

export default CampoFormulario;