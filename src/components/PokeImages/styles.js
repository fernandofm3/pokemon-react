import styled from "styled-components";

export const PokeImages = styled.div`
    margin-bottom: 40px;

    .select-nome-id-pokemon {
        width: 100%;
        text-transform: capitalize;
        padding: 3px;
        border-radius: 7px;
        margin-top: 8px;
        margin-bottom: 15px;
    }

    .div-images {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    img {
        width: 100%;
        margin-bottom: 20px;
    }

    h1 {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: 1.5rem;
        color: #333;
        text-shadow: 1px 2px 6px #ddd;
        border-left: 10px solid #0e5fd5;
        padding-left: 10px;
    }

    h1 .poke-name {
        text-transform: uppercase;
        font-size: 2rem;
        color: #adb5bd;
    }

    .div-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .div-btn button {
        width: 48%;
        height: 40px;
        border: none;
        background-color: #0e5fd5;
        padding: 3px;
        font-size: 1.25rem;
        color: #fff;
        text-align: center;
        position: relative;
        overflow: hidden;
        transition: 0.3s;
    }

    .div-btn .btn-previews::after {
        content: "";
        position: absolute;
        z-index: 2;
        top: -15px;
        left: -15px;
        width: 30px;
        height: 30px;
        transform: rotate(45deg);
        background-color: #fff;
    }

    .div-btn .btn-next::after {
        content: "";
        position: absolute;
        z-index: 2;
        top: -15px;
        right: -15px;
        width: 30px;
        height: 30px;
        transform: rotate(45deg);
        background-color: #fff;
    }

    .div-btn button:hover {
        background-color: #417cd1;
    }

    @media screen and (min-width: 500px) {
        img {
            width: 400px;
        }
    }

    @media screen and (min-width: 768px) {
        img {
            width: 100%;
        }

        h1 {
            font-size: 1.2rem;
        }
    }

    @media screen and (min-width: 900px) {
        h1 {
            font-size: 1.5rem;
        }
    }

    @media screen and (min-width: 1024px) {
        h1 .poke-name {
            font-size: 2rem;
        }

        img {
            width: 380px;
        }
    }
`;
