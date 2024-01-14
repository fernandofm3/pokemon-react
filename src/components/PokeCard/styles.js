import styled from "styled-components";

export const PokeCard = styled.div`
    a {
        text-decoration: none;
    }

    .card {
        background-color: #fff;
        box-shadow: 1px 1px 16px 6px #ddd;
        border: none;
        border-radius: 7px;
        transition: all 0.3s ease-in-out;
        width: 100%;
        height: 300px;
    }

    .card:hover {
        box-shadow: 1px 1px 14px 10px #ccc;
        transform: scale(1.05);
    }

    .div-img {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    .div-img img {
        padding: 10px 10px 0 10px;
        width: 150px;
        height: 150px;
    }

    .pokeNum,
    .pokeName {
        margin-left: 10px;
        text-transform: capitalize;
    }

    .pokeNum {
        font-size: 1.1rem;
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: bold;
        color: #eee;
        text-shadow: 1px 2px 3px #000;
    }

    .pokeName {
        font-weight: bold;

        font-size: 1rem;
        margin-top: 20px;
        margin-bottom: 5px;
        color: #fff;
        text-shadow: 1px 2px 6px #000;
    }

    .divPokeTypes {
        position: absolute;
        display: flex;
        padding: 0 10px;
        margin-top: -25px;
    }

    @media screen and (min-width: 360px) {
        .card {
            max-width: 220px;
        }
    }

    @media screen and (min-width: 1280px) {
        .pokeNum {
            font-size: 1.2rem;
        }
        .pokeName {
            font-size: 1.4rem;
        }
    }
`;
