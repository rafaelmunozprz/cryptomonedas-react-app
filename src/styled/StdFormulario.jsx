import styled from '@emotion/styled';

export const BtnFormulario = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

export const LblFormulario = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

export const SltFormulario = styled.select`
    width: 100%;
    padding: 1.2rem;
    display: block;
    -webkit-appearance: none;
    border-radius:10px;
    border: none;
    font-size: 1.2rem;
`;