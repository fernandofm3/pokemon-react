import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    margin: auto;
    padding: 0px 15px 30px 15px;

    .div-error {
        margin-top: 120px;
    }

    .div-error span {
        font-weight: 600;
        text-transform: capitalize;
    }

    .div-pokecard {
        display: grid;
        grid-gap: 90px 20px;
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
        margin-bottom: 80px;
    }

    @media screen and (min-width: 360px) {
        .div-pokecard {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
    }

    @media screen and (min-width: 550px) {
        .div-pokecard {
            grid-template-columns: repeat(3, minmax(160px, 1fr));
        }
    }

    @media screen and (min-width: 768px) {
        .div-pokecard {
            column-gap: 32px;
            grid-template-columns: repeat(4, minmax(160px, 1fr));
        }
    }

    @media screen and (min-width: 1000px) {
        .div-pokecard {
            column-gap: 32px;
            grid-template-columns: repeat(5, minmax(170px, 1fr));
        }
    }

    @media screen and (min-width: 1280px) {
        .div-pokecard {
            column-gap: 51px;
            grid-template-columns: repeat(5, minmax(200px, 1fr));
        }
    }

    @media screen and (min-width: 1320px) {
        padding: 0;
    }
`;
