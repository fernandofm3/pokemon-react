import styled from "styled-components";
//import wallpaperEvolution from "../../assets/wallpaper-evolution.png";

export const Container = styled.div`
    max-width: 1280px;
    margin: auto;
    padding: 20px 20px 20px 20px;

    .item-display-none {
        display: none;
    }

    .btn-keep-exploring {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 0%;
        bottom: 0%;
        z-index: 1001;
        background-color: #e67e22;
        padding: 10px 20px;
        color: #fff;
        border-top-left-radius: 20px;
        text-decoration: none;
        font-weight: bold;
        font-size: 1rem;
        transition: 0.3s;
    }

    .btn-keep-exploring:hover {
        background-color: #cf7321;
    }

    .btn-keep-exploring i {
        font-size: 1.5rem;
        margin-right: 8px;
    }

    .div-poke-info-main {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 7px;
        box-shadow: 3px 2px 10px 4px #888;
        padding: 30px;
    }

    .div-poke-info {
        display: flex;
        flex-direction: column;
    }

    .div-poke-info .div-images-description {
        width: 100%;
    }

    .div-poke-info .div-type-stats-informations {
        width: 100%;
    }

    .div-poke-info .div-type-stats-informations .div-h6 {
        margin-bottom: 40px;
    }

    .div-poke-info .div-type-stats-informations .div-h6 h6 {
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

    @media screen and (min-width: 768px) {
        .div-poke-info {
            flex-direction: row;
        }

        .div-poke-info .div-images-description {
            margin-right: 40px;
            width: 40%;
        }

        .div-poke-info .div-type-stats-informations {
            width: 60%;
        }

        .div-keep-exploring {
            display: flex;
            flex-direction: row;
            justify-content: right;
            position: relative;
            margin-bottom: 15px;
            /*border-bottom: 2px solid #eee;*/
            padding-bottom: 20px;
        }

        .btn-keep-exploring {
            position: initial;
            width: 100%;
            left: auto;
            right: auto;
            bottom: auto;
            top: auto;
            /*border-radius: 20px;*/
            padding: 5px 20px;
        }

        .btn-keep-exploring::after {
            content: "";
            position: absolute;
            z-index: 1002;
            top: -15px;
            left: -15px;
            width: 30px;
            height: 30px;
            transform: rotate(45deg);
            background-color: #fff;
        }

        .btn-keep-exploring::before {
            content: "";
            position: absolute;
            z-index: 1002;
            top: auto;
            left: auto;
            right: -18px;
            bottom: 5px;
            width: 30px;
            height: 30px;
            transform: rotate(45deg);
            background-color: #fff;
        }
    }

    @media screen and (min-width: 1024px) {
        .div-evolutions h1 {
            text-align: left;
            margin-left: 40px;
            margin-bottom: 15px;
        }

        .text-does-not-evolve {
            margin-top: 0px;
            margin-left: 40px;
        }

        .div-evolutions .div-pokemon-evolutions {
            flex-direction: row;
            justify-content: center;
        }

        .div-evolutions .div-pokemon-evolutions li {
            flex-direction: column;
            width: auto;
        }

        .div-evolutions .div-pokemon-evolutions .li-evo-arrow {
            width: 20%;
        }

        .div-evolutions .div-pokemon-evolutions .li-evo-arrow p {
            padding: 130px 0;
        }

        .arrow-bottom {
            display: none;
        }

        .arrow-right {
            display: block;
        }

        .div-evolutions .div-pokemon-evolutions .middle-evolution-wrap {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
`;
