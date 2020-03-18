import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {CotizacionApp} from '../styled/StdApp';

/**
 * 
 * @param {Cotizacion} resultado resultado de la consulta al API consultando la MONEDA y CRYPTOMONEDA
 */
const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    return (
        <Fragment>
            <div>
                <CotizacionApp>
                    <p>El precio es:  <span>{resultado.PRICE}</span></p>
                    <p>Precio más alto del dia:  <span>{resultado.HIGHDAY}</span></p>
                    <p>Precio más bajo del día:  <span>{resultado.LOWDAY}</span></p>
                    <p>Variación últimas 24 horas:  <span>{resultado.CHAGEPCT24HOUR}</span></p>
                    <p>Última actualización:  <span>{resultado.LASTUPDATE}</span></p>
                </CotizacionApp>
            </div>
        </Fragment>
    );
};

Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Cotizacion;