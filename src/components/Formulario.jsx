import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Error from './Error';
import { BtnFormulario } from '../styled/StdFormulario';
import useMoneda from '../hooks/useMoneda';
import useCryptomoneda from '../hooks/useCryptomoneda';


const Formulario = ({guardarMoneda, guardarCryptomoneda}) => {
    //State del listado
    const [listacrypto, guardarCrypto] = useState([]);
    const [error, guardarError] = useState(false);
    
    //Monedas
    const MONEDAS = [
        { codigo: 'USD', nombre: 'DOLAR AMERICANO' },
        { codigo: 'MXN', nombre: 'PESO MEXICANO'},
        { codigo: 'EUR', nombre: 'EURO' },
        { codigo: 'GBP', nombre: 'LIBRA ESTERLINA' }
    ]
    //Utilizar useMoneda
    const [moneda, SelectMonedas ] = useMoneda('Elige tu moneda', MONEDAS);

    //utilizar useCryptomoneda
    const [cryptomoneda, SelectCrypto] = useCryptomoneda('Elige tu cryptomoneda', listacrypto);

    //Ejecutar llamado a la API
    useEffect(()=>{
        const consultarAPI = async () =>{
            const URL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const resultado = await Axios.get(URL);
            guardarCrypto(resultado.data.Data);
        };
        consultarAPI();
    },[]);
    
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        //validar si los campos están llenos
        if(moneda.trim() === '' || cryptomoneda.trim() === ''){
            guardarError(true);
            return;
        }
        //pasar los datos al componente principal
        guardarError(false);

        guardarMoneda(moneda);
        guardarCryptomoneda(cryptomoneda);
    };

    return (
        <Fragment>
            <form
                onSubmit={handleSubmit}
            >
                {
                    error ? <Error mensaje="Ambos campos son obligatorios" /> : null
                }
                <SelectMonedas />
                <SelectCrypto />
                <div>{moneda}</div>
                <BtnFormulario
                    type="submit"
                    value="Calcular"
                />
            </form>
        </Fragment>
    );
};

Formulario.propTypes = {
    guardarCryptomoneda: PropTypes.func.isRequired,
    guardarMoneda: PropTypes.func.isRequired
}

export default Formulario;