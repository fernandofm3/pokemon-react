import styled from "styled-components";

export const FeaturedPokemon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 30px 15px 10px 15px;
    background: rgb(13, 110, 253);
    background: linear-gradient(
        180deg,
        rgba(13, 110, 253, 1) 0%,
        rgba(13, 110, 253, 1) 0%,
        rgba(254, 252, 246, 0) 100%
    );
    margin-top: 98px;
    margin-bottom: 40px;

    /******************************************/

    .div-main-featured-pokemon {
        display: flex;
        flex-direction: column;
        width: 1280px;
    }

    /******************************************/

    /**** Div 1 **********************************************/

    .div-featured-pokemon-1 .div-name-pokemon {
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .div-featured-pokemon-1 .div-name-pokemon {
        text-transform: capitalize;
        color: #fff;
        text-shadow: 1px 2px 6px #000;
    }

    .div-featured-pokemon-1 .div-name-pokemon h1 {
        font-size: 2.5rem;
        text-transform: uppercase;
    }

    .div-featured-pokemon-1 .div-name-pokemon h2 {
        font-size: 1.5rem;
        margin-top: -5px;
    }

    /******************************************/

    .div-featured-pokemon-1 .div-img-pokemon {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .div-featured-pokemon-1 .div-img-pokemon div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        background-color: #aaa;
        border-radius: 50%;
    }

    .div-featured-pokemon-1 .div-img-pokemon div img {
        width: 200px;
        height: 200px;
    }

    /******************************************/

    .div-featured-pokemon-1 .div-types-pokemon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .div-featured-pokemon-1 .div-types-pokemon p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 75px;
        padding: 0px;
        border-radius: 50%;
        background-color: #21252973;
        color: #fff;
        font-weight: bold;
        text-shadow: 1px 2px 6px #000;
        transition: 0.3s;
    }

    .div-featured-pokemon-1 .div-types-pokemon p:hover {
        box-shadow: 1px 1px 16px 1px #fff;
    }

    /*********************************************************/

    /**** Div 2 **********************************************/

    .div-featured-pokemon-2 div {
        margin-bottom: 0;
    }

    .div-featured-pokemon-2 h6 {
        font-size: 1.5rem;
        text-transform: capitalize;
        color: #fff;
        text-shadow: 1px 2px 6px #000;
        font-weight: 500;
        text-transform: uppercase;
    }

    .div-featured-pokemon-2 table .td-title,
    .div-featured-pokemon-2 table .td-value {
        font-size: 0.9rem;
        padding: 0 10px 15px 0;
        text-transform: uppercase;
    }

    .div-featured-pokemon-2 table {
        background-color: transparent;
    }

    .div-featured-pokemon-2 table .td-title {
        font-size: 0.9rem;
        color: #000;
    }

    .div-featured-pokemon-2 table .td-value {
        color: #000;
        font-size: 0.9rem;
        font-weight: bold;
    }

    .div-featured-pokemon-2 table .td-total {
        color: #000;
        font-size: 1.1rem;
        font-weight: bold;
    }

    /*********************************************************/

    /**** Div 3 **********************************************/

    .div-featured-pokemon-3 h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        color: #fff;
        text-shadow: 1px 2px 6px #000;
    }

    /******************************************/

    .div-featured-pokemon-3 .div-info-pokemon {
        background-color: rgba(0, 0, 0, 0.4);
        padding: 20px;
        border-radius: 7px;
    }

    .div-featured-pokemon-3 .div-info-pokemon p {
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.6rem;
    }

    .div-featured-pokemon-3 .div-info-pokemon p span {
        text-transform: capitalize;
        color: #fff;
    }

    /******************************************/

    .div-featured-pokemon-3 .div-abilities {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 0 0 5px 0;
        border-bottom: 1px solid #fff;
    }

    .div-featured-pokemon-3 .div-abilities h5 {
        margin: 0;
        color: #fff;
        padding: 0 12px 0 0;
        text-transform: uppercase;
        font-size: 1.4rem;
        margin-right: 15px;
        margin-bottom: 15px;
        text-shadow: 1px 2px 6px #000;
    }

    .div-featured-pokemon-3 .div-abilities div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .div-featured-pokemon-3 .div-abilities div span {
        background-color: #fff;
        border-radius: 7px;
        border: 1px solid #000;
        padding: 2px 10px;
        text-transform: capitalize;
        color: #000;
        font-weight: 600;
        margin-bottom: 8px;
    }

    /******************************************/

    .div-featured-pokemon-3 .div-info-pokemon .div-more-details button {
        text-transform: uppercase;
        font-weight: bold;
        color: #fff;
        text-shadow: 1px 1px 1px #000;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    /**********************************************************/

    @media screen and (min-width: 768px) {
        .div-main-featured-pokemon {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .div-featured-pokemon-1 {
            width: 50%;
        }

        .div-featured-pokemon-2 {
            width: 50%;
        }

        .div-featured-pokemon-3 {
            width: 100%;
        }

        .div-featured-pokemon-1 .div-name-pokemon {
            align-items: start;
        }
    }
`;
