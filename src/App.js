import React from 'react';
import {ContenedorApp, ImagenApp, HeadingApp} from './styled/StdApp';
import Formulario from './components/Formulario';
import imagen from './assets/images/cryptomonedas.png';

function App() {
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
                <Formulario/>
            </div>
        </ContenedorApp>
    );
}

export default App;
