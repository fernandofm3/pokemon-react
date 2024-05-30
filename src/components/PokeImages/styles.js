import styled from "styled-components";

export const PokeImages = styled.div`
    .div-nome-id-pokemon h1 {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: 1.5rem;
        color: #566a7f;
    }

    .div-nome-id-pokemon h1 .poke-name {
        text-transform: uppercase;
        font-size: 2rem;
        color: #0d6efd;
    }

    .div-nome-id-pokemon .div-title-category-pokemon {
        width: fit-content;
        margin-top: 10px;
        border-radius: 20px;
        color: #fff;
        border: 1px solid #999;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
            rgba(0, 0, 0, 0.23) 0px 3px 6px;
        height: 30px;
    }

    .div-nome-id-pokemon .div-title-category-pokemon h4 {
        color: #fff !important;
        font-weight: bold;
        font-size: 0.95rem;
        text-shadow: 2px 1px 3px #000;
        margin-bottom: 0;
        padding: 5px 15px;
        font-family: "Roboto", sans-serif; /* Exemplo de fonte */
        letter-spacing: 0.5px; /* Espaçamento entre as letras */
        text-transform: uppercase;
        text-align: center;
    }

    .text-generation {
        margin-top: 35px;
        color: #0e5fd5 !important;
        font-size: 1.4rem !important;
    }

    .text-description {
        color: #6a7b8e;
        font-weight: 500;
    }

    .dashboard-types {
        margin-top: 40px;
    }

    .div-image-desktop {
        display: none;
    }

    .div-select-varietes {
        height: 50px;
        margin-bottom: 15px;
    }

    .select-nome-id-pokemon {
        width: 100%;
        text-transform: capitalize;
        padding: 3px;
        border-radius: 7px;
        margin-top: 8px;
        margin-bottom: 15px;
        background-color: #fff;
    }

    .div-image-btn .div-image {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .div-image-btn .div-image img {
        width: 200px;
        height: 200px;
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

    @media screen and (min-width: 768px) {
        .div-nome-id-pokemon h1 {
            font-size: 1.2rem;
        }

        .div-image-mobile {
            display: none;
        }

        .div-image-desktop {
            display: block;
        }
    }

    @media screen and (min-width: 900px) {
        padding: 10px 30px;

        .div-nome-id-pokemon h1 {
            font-size: 1.5rem;
        }
    }

    @media screen and (min-width: 1024px) {
        .div-nome-id-pokemon h1 .poke-name {
            font-size: 2rem;
        }

        .text-description {
            height: 40px;
        }
    }
`;
