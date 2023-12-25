import styled from "styled-components";

export const SelectorPokemonsPerGeneration = styled.div`
    .div-cards-generation {
        display: grid;
        column-gap: 20px;
        row-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }

    .div-cards-generation .card {
        width: 100%;
        cursor: pointer;
        transition: 0.2s;
        background-color: #3c59a5;
    }

    .div-cards-generation .card:hover {
        background-color: #2a407b;
    }

    .div-cards-generation img {
        width: 100%;
    }

    .div-cards-generation h6 {
        font-size: 1.2rem;
        color: #fff;
        padding: 6px 10px;
        border: 3px solid #fff;
        border-radius: 15px;
        box-shadow: 5px 5px #999;
    }

    .div-cards-generation .color-selected-card {
        //background-color: #ff6b6b;
        background-color: #dc3545;
        color: #fff;
    }

    .div-cards-generation .color-selected-card:hover {
        background-color: #ff6b6b;
        background-color: #dc3545;
    }

    .div-cards-generation h3 {
        font-weight: bold;
    }
`;
