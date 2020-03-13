import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {ErrorFormulario} from '../styled/StdError';

const Error = ({mensaje}) => {
    return (
        <Fragment>
            <ErrorFormulario>{mensaje}</ErrorFormulario>
        </Fragment>
    );
};

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;