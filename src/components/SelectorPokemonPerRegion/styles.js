import styled from "styled-components";

export const SelectorPokemonsPerRegion = styled.div`
    .div-cards-region {
        display: grid;
        column-gap: 20px;
        row-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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

    .div-cards-region .card:hover {
        background-color: #6d614f;
    }

    .div-cards-region img {
        width: 150px;
        border-radius: 7px;
    }

    .div-cards-region h5 {
        width: 100px;
        font-size: 1rem;
        color: #fff;
        padding: 6px 10px;
        background-color: red;
        border-radius: 15px;
        box-shadow: 5px 5px #555;
    }

    .div-cards-region h6 {
        font-size: 1.2rem;
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
