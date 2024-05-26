import styled from "styled-components";

export const PokeInformations = styled.div`
    .poke-data {
        display: grid;
        gap: 10px 10px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    .div-select-pokeball {
        display: flex;
        flex-direction: row;
    }

    .div-select-pokeball img {
        width: 35px;
        height: 35px;
        margin-right: 12px;
        background-color: #333;
        border-radius: 50%;
        border: 1px solid #333;
    }

    .div-select-pokeball select {
        border: 1px solid #333;
    }

    .div-calc-catch-rate {
        display: flex;
        flex-direction: row;
    }

    .div-calc-catch-rate i {
        font-size: 1.7rem;
        margin-right: 15px;
        margin-left: 5px;
    }

    .div-calc-catch-rate .progress {
        width: 100%;
    }

    .div-gender {
        display: flex;
        flex-direction: column;
    }

    .div-gender-percentage {
        display: flex;
        flex-direction: row;
    }

    .div-gender-percentage div {
        margin-right: 30px;
    }

    .div-gender-percentage div i {
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 1.6rem;
        margin-bottom: 5px;
    }

    .div-gender-percentage .bi-gender-female {
        color: #9c27b0;
    }

    .div-gender-percentage .bi-gender-male {
        color: blue;
    }

    .div-gender-percentage div p {
        font-size: 1rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 0;
    }

    @media screen and (min-width: 400px) {
        .td-title {
            width: 120px;
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 768px) {
        .div-cards-training {
            display: grid;
            gap: 10px 10px;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
    }
`;
