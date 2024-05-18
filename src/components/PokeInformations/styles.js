import styled from "styled-components";

export const PokeInformations = styled.div`
    margin-bottom: 40px;

    .poke-data {
        display: grid;
        gap: 10px 10px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        margin-bottom: 40px;
    }

    .poke-training {
        margin-bottom: 40px;
    }

    .poke-training .div-main-capture {
        display: flex;
        flex-direction: column;
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
        font-weight: bold;
        color: #aaa;
        margin-bottom: 0;
    }

    @media screen and (min-width: 400px) {
        .td-title {
            width: 120px;
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 768px) {
        .poke-training .div-main-capture {
            flex-direction: row;
            justify-content: space-between;
        }
        .poke-training .div-main-capture .div-select-pokeball {
            width: 180px;
            margin-right: 10px;
        }

        .poke-training .div-main-capture .div-calc-catch-rate {
            width: 100%;
        }

        .poke-training .div-cards-training {
            display: grid;
            gap: 10px 10px;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
    }
`;
