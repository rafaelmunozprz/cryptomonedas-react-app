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
                    El precio es:  <span>{resultado.PRICE}</span><br></br>
                    Precio más alto del dia:  <span>{resultado.HIGHDAY}</span><br></br>
                    Precio más bajo del día:  <span>{resultado.LOWDAY}</span><br></br>
                    Variación últimas 24 horas:  <span>{resultado.CHAGEPCT24HOUR}</span><br></br>
                    Última actualización:  <span>{resultado.LASTUPDATE}</span><br></br>
                </CotizacionApp>
            </div>
        </Fragment>
    );
};

Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Cotizacion;