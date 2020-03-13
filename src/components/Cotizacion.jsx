import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {CotizacionApp} from '../styled/StdApp';

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado);
    return (
        <Fragment>
            <div>
                <CotizacionApp>
                    El precio es:  <span>{resultado.PRICE}</span>
                </CotizacionApp>
            </div>
        </Fragment>
    );
};

Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Cotizacion;