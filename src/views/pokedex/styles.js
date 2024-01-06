import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
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
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
    }

    @media screen and (min-width: 500px) {
        .div-pokecard {
            //column-gap: auto;
        }
    }

    @media screen and (min-width: 768px) {
        .div-pokecard {
            column-gap: 32px;
            grid-template-columns: repeat(auto-fit, minmax(160px, 160px));
        }
    }

    @media screen and (min-width: 820px) {
        .div-pokecard {
            column-gap: 44px;
            grid-template-columns: repeat(auto-fit, minmax(160px, 160px));
        }
    }

    @media screen and (min-width: 900px) {
        .div-pokecard {
            column-gap: 48px;
            grid-template-columns: repeat(auto-fit, minmax(180px, 180px));
        }
    }

    @media screen and (min-width: 1024px) {
        .div-pokecard {
            column-gap: 31px;
            grid-template-columns: repeat(auto-fit, minmax(170px, 170px));
        }
    }

    @media screen and (min-width: 1280px) {
        .div-pokecard {
            column-gap: 51px;
            grid-template-columns: repeat(auto-fit, minmax(215px, 215px));
        }
    }

    @media screen and (min-width: 1320px) {
        padding: 0;
        // .div-pokecard {
        //     column-gap: 40px;
        // }
    }
`;
