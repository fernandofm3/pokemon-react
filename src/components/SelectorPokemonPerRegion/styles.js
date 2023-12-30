import styled from "styled-components";

export const SelectorPokemonsPerRegion = styled.div`
    .div-cards-region {
        display: grid;
        column-gap: 20px;
        row-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    }

    .div-cards-region .card-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .div-cards-region .card {
        width: 100%;
        cursor: pointer;
        transition: 0.2s;
        background-color: #887a63;
    }

    .div-cards-region .card .card-body {
        padding: 5px;
    }

    .div-cards-region .card:hover {
        background-color: #6d614f;
    }

    .div-cards-region img {
        width: 100%;
        border-radius: 7px;
    }

    .div-cards-region h6 {
        font-size: 1rem;
        color: #fff;
        text-shadow: 1px 6px 8px #000;
        text-transform: capitalize;
    }

    .div-cards-region .color-selected-card {
        background-color: #157347;
        color: #fff;
    }

    .div-cards-region .color-selected-card:hover {
        background-color: #157347;
    }

    .div-cards-region h3 {
        font-weight: bold;
    }
`;
