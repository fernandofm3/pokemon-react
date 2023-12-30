import styled from "styled-components";

export const FeaturedPokemon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 30px 20px 40px 20px;
    background: rgb(13, 110, 253);
    background: linear-gradient(
        180deg,
        rgba(13, 110, 253, 1) 0%,
        rgba(13, 110, 253, 1) 0%,
        rgba(254, 252, 246, 0) 100%
    );
    margin-bottom: 40px;
    border-top: 1px solid #fff;

    /******************************************/

    .div-main-featured-pokemon {
        display: flex;
        flex-direction: column;
        width: 100%;
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
        font-size: 2rem;
        text-transform: uppercase;
    }

    .div-featured-pokemon-1 .div-name-pokemon h2 {
        font-size: 1.1rem;
        margin-top: -5px;
    }

    /******************************************/

    .div-featured-pokemon-1 .div-img-pokemon {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .div-featured-pokemon-1 .div-img-pokemon div {
        width: 150px;
        height: 150px;
    }

    .div-featured-pokemon-1 .div-img-pokemon div img {
        width: 150px;
        height: 150px;
    }

    /******************************************/

    .div-featured-pokemon-1 .div-types-pokemon {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /*********************************************************/

    /**** Div 2 **********************************************/

    .div-featured-pokemon-2 div {
        margin-bottom: 0;
    }

    .div-featured-pokemon-2 h6 {
        font-size: 2rem;
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
        color: #000;
    }

    .div-featured-pokemon-2 table .td-value {
        color: #000;
    }

    /*********************************************************/

    /**** Div 3 **********************************************/

    .div-featured-pokemon-3 h1 {
        font-size: 2rem;
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
        font-size: 1.1rem;
        font-weight: 600;
        line-height: 1.6rem;
    }

    .div-featured-pokemon-3 .div-info-pokemon p span {
        text-transform: capitalize;
        color: #fff;
    }

    /******************************************/

    .div-featured-pokemon-3 .div-more-details button {
        width: 100%;
        text-transform: uppercase;
        font-weight: bold;
        color: #fff;
        text-shadow: 1px 2px 6px #000;
    }

    /**********************************************************/

    @media screen and (min-width: 600px) {
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

        .div-featured-pokemon-1 .div-name-pokemon {
            align-items: start;
        }
    }

    @media screen and (min-width: 768px) {
        .div-featured-pokemon-1 .div-img-pokemon div {
            width: 190px;
            height: 190px;
        }

        .div-featured-pokemon-1 .div-img-pokemon div img {
            width: 190px;
            height: 190px;
        }
    }

    @media screen and (min-width: 1920px) {
        .div-featured-pokemon-1 {
            width: 20%;
        }

        .div-featured-pokemon-2 {
            width: 30%;
        }

        .div-featured-pokemon-3 {
            width: 30%;
        }

        .div-featured-pokemon-3 .div-more-details {
            margin-top: 50px;
        }
    }
`;
