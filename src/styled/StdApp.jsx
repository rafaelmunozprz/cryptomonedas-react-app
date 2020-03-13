import styled from "@emotion/styled";

export const ContenedorApp = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media(min-width: 992px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

export const ImagenApp = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;

export const HeadingApp = styled.h1`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-align: left;
    font-weight: 700px;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 80px;
    &::after{
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66A2FE;
        display: block;
    }
`;

export const CotizacionApp = styled.p`
    background-color: #B7322C;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;
