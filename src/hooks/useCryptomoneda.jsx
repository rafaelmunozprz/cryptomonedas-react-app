import React,  {Fragment, useState} from 'react';
import {LblFormulario, SltFormulario} from '../styled/StdFormulario';

const useCryptomoneda = (label, CRYPTOMONEDAS) => {
    //State del custom hook
    const [state, actualizarState] = useState('');
    const SeleccionarCypto = () => (
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
                {CRYPTOMONEDAS.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </SltFormulario>
        </Fragment>
    );

    //Retornar state, interfaz y fn que modifica el state
    return [state, SeleccionarCypto, actualizarState];
};

export default useCryptomoneda;