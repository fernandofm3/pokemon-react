import styled from "styled-components";
//import wallpaperEvolution from "../../assets/wallpaper-evolution.png";

export const Container = styled.div`
    max-width: 1280px;
    widht: 100%;
    margin: auto;
    margin-top: 98px;

    .div-main-pokeinfo {
        background-color: #fff;
        padding: 10px;
    }

    .div-image-description {
        display: flex;
        flex-direction: column;
    }

    .div-image-description .div-types-description .div-types {
        width: 100%;
        margin-bottom: 40px;
    }

    .div-image-description .div-types-description .div-types h6 {
        text-transform: uppercase;
        margin-bottom: 20px;
        color: #212529;
        font-weight: bold;
    }

    .div-evolutions {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        border: 1px solid #000;
        padding: 30px 5px;
        border-radius: 7px;
        margin-bottom: 20px;
    }

    .div-evolutions h1 {
        margin-bottom: 50px;
        font-weight: bold;
        border-left: 10px solid #c0392b;
        padding-left: 10px;
        margin-left: 20px;
        color: #212529;
    }

    .text-does-not-evolve {
        margin-top: -35px;
        margin-left: 20px;
    }

    .div-evolutions .div-pokemon-evolutions {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0;
    }

    .div-evolutions .div-pokemon-evolutions li {
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        width: 100%;
    }

    .div-evolutions .div-pokemon-evolutions .middle-evolution {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .div-evolutions .div-pokemon-evolutions li a {
        text-decoration: none;
        width: 100%;
    }

    .div-evolutions .div-pokemon-evolutions .middle-evolution-link {
        width: auto;
    }

    //#####################################################################

    .li-evo-arrow p {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    .li-evo-arrow p i {
        font-size: 4rem;
        color: #212529;
    }

    .arrow-right {
        display: none;
    }

    //#####################################################################

    @media screen and (min-width: 768px) {
        .div-main-pokeinfo {
            padding: 30px;
            border-radius: 7px;
            box-shadow: rgb(209 209 209) 3px 2px 10px 4px;
        }

        .div-image-description {
            flex-direction: row;
            justify-content: space-between;
        }

        .div-image-description .div-image {
            width: 60%;
        }

        .div-image-description .div-types-description {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 38%;
        }

        .div-image-description .div-types-description .div-types {
            margin-bottom: 20px;
        }
    }

    @media screen and (min-width: 1024px) {
        .div-main-cards .div-evolutions h1 {
            text-align: left;
            margin-bottom: 15px;
        }

        .div-main-cards .text-does-not-evolve {
            margin-top: 0px;
            margin-left: 40px;
        }

        .div-main-cards .div-evolutions .div-pokemon-evolutions {
            flex-direction: row;
            justify-content: center;
        }

        .div-main-cards .div-evolutions .div-pokemon-evolutions li {
            flex-direction: column;
            width: auto;
        }

        .div-main-cards .div-evolutions .div-pokemon-evolutions .li-evo-arrow {
            width: 20%;
        }

        .div-main-cards
            .div-evolutions
            .div-pokemon-evolutions
            .li-evo-arrow
            p {
            padding: 130px 0;
        }

        .div-main-cards .arrow-bottom {
            display: none;
        }

        .div-main-cards .arrow-right {
            display: block;
        }

        .div-main-cards
            .div-evolutions
            .div-pokemon-evolutions
            .middle-evolution {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    @media screen and (min-width: 1280px) {
        margin-top: 140px;
    }
`;
