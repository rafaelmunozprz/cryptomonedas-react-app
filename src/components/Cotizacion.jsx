import React, {Fragment} from 'react';

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado);
    return (
        <Fragment>
            <div>
                <p>
                    El precio es:  <span>{resultado.PRICE}</span>
                </p>
            </div>
        </Fragment>
    );
};

export default Cotizacion;