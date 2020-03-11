import React, { Fragment } from 'react';
import { BtnFormulario } from '../styled/StdFormulario';
import useMoneda from '../hooks/useMoneda';

const Formulario = () => {
    //Monedas
    const MONEDAS = [
        { codigo: 'USD', nombre: 'DOLAR AMERICANO' },
        { codigo: 'MXN', nombre: 'PESO MEXICANO'},
        { codigo: 'EUR', nombre: 'EURO' },
        { codigo: 'GBP', nombre: 'LIBRA ESTERLINA' }
    ]
    //Utilizar useMoneda
    const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', MONEDAS);
    return (
        <Fragment>
            <form>
                <SelectMonedas />
                <BtnFormulario
                    type="submit"
                    value="Calcular"
                />
            </form>
        </Fragment>
    );
};

export default Formulario;