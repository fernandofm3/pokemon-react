import styled from "styled-components";

export const Container = styled.div`
    max-width: 95%;
    margin: auto;
    padding: 30px 15px 30px 15px;
    .item-display-none {
        display: none;
    }

    .div-pokecard {
        display: grid;
        column-gap: 20px;
        row-gap: 90px;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        margin-bottom: 80px;
    }

    .div-search {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }

    .div-seletors {
        display: flex;
        flex-direction: column;
    }

    .div-seletors .button-generation,
    .div-seletors .btn-region {
        display: flex;
        flex-direction: row;
    }

    .div-search .btn-filters {
        background-color: #3b64a5;
        color: #fff;
    }

    .div-search .btn-filters:hover {
        background-color: #345891;
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

    @media screen and (min-width: 650px) {
        .div-seletors {
            flex-direction: row;
            justify-content: space-between;
        }
    }

    @media screen and (min-width: 768px) {
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

        .div-search {
            flex-direction: row;
            justify-content: space-between;
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
