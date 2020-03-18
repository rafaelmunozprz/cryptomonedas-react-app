import React, { useState, useEffect } from 'react';
import { ContenedorApp, ImagenApp, HeadingApp } from './styled/StdApp';
import Axios from 'axios';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import imagen from './assets/images/cryptomonedas.png';
import Spinner from './components/Spinner';

function App() {
    //captar datos de los selecet
    const [moneda, guardarMoneda] = useState('');
    const [cryptomoneda, guardarCryptomoneda] = useState('');
    const [resultado, guardarResultado] = useState({});
    const [cargando, guardarCargando] = useState(false);
    useEffect(() => {
        const cotizarAPI = async () => {
            if (moneda === "") return;
            const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`;
            const resultado = await Axios.get(URL);
            guardarCargando(true);
            setTimeout(() => {
                //Cambiar el estado de cargando
                guardarCargando(false);
                //Guardar cotización
                guardarResultado(resultado.data.DISPLAY[cryptomoneda][moneda]);
            }, 3000);
            
        };
        cotizarAPI();
    }, [moneda, cryptomoneda]);

    const componente = (cargando) ? <Spinner/> : <Cotizacion resultado={resultado}/>

    return (
        <ContenedorApp>
            <div>
                <ImagenApp
                    src={imagen}
                    alt="Imagen crypto"
                />
            </div>
            <div>
                <HeadingApp>
                    Cotiza cryptomonedas al instante
                </HeadingApp>
                <Formulario
                    guardarMoneda={guardarMoneda}
                    guardarCryptomoneda={guardarCryptomoneda}
                />
                {componente}
            </div>
        </ContenedorApp>
    );
}

export default App;
