import styled from "styled-components";

export const SelectorPokemonsPerGeneration = styled.div`
    .div-cards-generation {
        display: grid;
        column-gap: 20px;
        row-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        margin-bottom: 80px;
    }

    .div-cards-generation .card {
        width: 100%;
        cursor: pointer;
        transition: 0.1s;
    }

    .div-cards-generation .card:hover {
        background-color: #ffadad;
    }

    .div-cards-generation img {
        width: 80px;
    }

    .div-cards-generation .color-selected-card {
        background-color: #ff6b6b;
        color: #fff;
    }

    .div-cards-generation .color-selected-card:hover {
        background-color: #ff6b6b;
    }

    .div-cards-generation h3 {
        font-weight: bold;
    }
`;
