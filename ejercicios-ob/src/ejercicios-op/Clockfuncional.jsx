import React, { useEffect, useState } from 'react';

const otrosDatos = {
    nombre: 'Julián',
    apellidos: 'León'
}

const datos = {
    edad: 0,
    fecha: new Date()
}

const Clockfuncional = () => {

    const [data, setData] = useState(datos);

        useEffect(() => {
            const timerID = setInterval(() => {
                setData((prevState) => {
                    let edad = prevState.edad +1;
                    return {
                       fecha: new Date(),
                       edad
                    }
                 });
            }, 1000);
            return () => {
                clearInterval(timerID)
            };
        }, []);

        
    return (
        <div>
            <h2>
         Hora actual:
        {data.fecha.toLocaleTimeString()}
         </h2>
         <h3>{otrosDatos.nombre} {otrosDatos.apellidos}</h3>
         <h1>Edad: {data.edad}</h1>

        </div>
    )
    
}

export default Clockfuncional;
