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
        padding: 10px;
        width: 150px;
        height: 150px;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        transition: 0.3s;
    }

    .pokeNum,
    .pokeName {
        margin-left: 10px;
        text-transform: capitalize;
    }

    .pokeNum {
        font-size: 1.3rem;
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: bold;
        color: #eee;
        text-shadow: 1px 2px 3px #000;
    }

    .pokeName {
        font-weight: bold;
        font-size: 1.5rem;
        margin-top: 20px;
        margin-bottom: 5px;
        color: #fff;
        text-shadow: 1px 2px 6px #000;
    }

    .divPokeTypes {
        display: flex;
        padding: 0 10px;
        padding-bottom: 20px;
    }

    .divPokeTypes span {
        padding: 2px 10px !important;
        font-size: 0.75rem !important;
        margin-right: 5px !important;
        border-radius: 4px !important;
        text-transform: capitalize !important;
        font-weight: bold !important;
        text-shadow: 2px 2px 2px #aaa !important;
    }
`;
