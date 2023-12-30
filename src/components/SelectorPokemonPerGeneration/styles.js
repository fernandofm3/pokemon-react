import styled from "styled-components";

export const SelectorPokemonsPerGeneration = styled.div`
    .div-cards-generation {
        display: grid;
        column-gap: 20px;
        row-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    }

    .div-cards-generation .card {
        width: 100%;
        cursor: pointer;
        transition: 0.2s;
        background-color: #3c59a5;
    }

    .div-cards-generation .card .card-body {
        padding: 5px;
    }

    .div-cards-generation .card:hover {
        background-color: #2a407b;
    }

    .div-cards-generation img {
        width: 100%;
    }

    .div-cards-generation h6 {
        font-size: 1rem;
        color: #fff;
        text-shadow: 1px 6px 8px #000;
    }

    .div-cards-generation .color-selected-card {
        background-color: #eb4d4b;
        color: #fff;
    }

    .div-cards-generation .color-selected-card:hover {
        background-color: #eb4d4b;
    }

    .div-cards-generation h3 {
        font-weight: bold;
    }
`;
