import React, {Fragment} from 'react';
import {ErrorFormulario} from '../styled/StdError';

const Error = ({mensaje}) => {
    return (
        <Fragment>
            <ErrorFormulario>{mensaje}</ErrorFormulario>
        </Fragment>
    );
};

export default Error;