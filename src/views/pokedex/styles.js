import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    margin: auto;
    padding: 0px 15px 30px 15px;

    .div-pokecard {
        display: grid;
        column-gap: 20px;
        row-gap: 90px;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        margin-bottom: 80px;
    }

    @media screen and (min-width: 450px) {
        .div-pokecard {
            column-gap: 20px;
            row-gap: 90px;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
    }

    @media screen and (min-width: 600px) {
        .div-pokecard {
            column-gap: 20px;
            row-gap: 90px;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        }
    }

    @media screen and (min-width: 768px) {
        max-width: 98%;

        .div-pokecard {
            column-gap: 20px;
            row-gap: 90px;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        }
    }

    @media screen and (min-width: 900px) {
        .div-pokecard {
            column-gap: 20px;
            row-gap: 90px;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        }
    }

    @media screen and (min-width: 1024px) {
        .div-pokecard {
            column-gap: 20px;
            row-gap: 90px;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }
    }

    @media screen and (min-width: 1280px) {
        .div-pokecard {
            column-gap: 50px;
            row-gap: 90px;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }
    }

    @media screen and (min-width: 1920px) {
        .div-pokecard {
            column-gap: 50px;
            row-gap: 90px;
            grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        }
    }
`;
