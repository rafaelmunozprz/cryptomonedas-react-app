import React, { Fragment } from 'react';
import '../assets/css/spinner.css';

const Spinner = () => {
    return (
        <Fragment>
            <div class="sk-chase">
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
            </div>
        </Fragment>
    );
};

export default Spinner;