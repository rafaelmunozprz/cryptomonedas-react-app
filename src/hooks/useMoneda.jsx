import React,  {Fragment, useState} from 'react';
import {LblFormulario, SltFormulario} from '../styled/StdFormulario';

const useModeda = (label, MODEDAS) => {
    //State del custom hook
    const [state, actualizarState] = useState('');
    const Seleccionar = () => (
        <Fragment>
            <LblFormulario htmlFor="monedas">
                {label}
            </LblFormulario>
            <SltFormulario
                id="monedas"
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">-- Seleccione la moneda --</option>
                {MODEDAS.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </SltFormulario>
        </Fragment>
    );

    //Retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, actualizarState];
};

export default useModeda;