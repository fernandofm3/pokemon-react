import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    widht: 100%;
    margin: auto;
    margin-top: 80px;

    .dashboard {
        padding: 15px;
    }

    .dashboard .row > div {
        padding: 10px;
    }

    .dashboard .row div .card {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-bottom: 5px solid #0d6efd;
        transition: 0.3s;
    }

    .dashboard .row div .card:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .dashboard .row div .card .card-body .data-icon {
        display: flex;
        flex-direction: column;
        padding: 10px;
        background-color: #0d6efd24;
        border-radius: 7px;
        margin-bottom: 30px;
    }

    .dashboard .row div .card .card-body .data-icon i {
        color: #0d6efd;
        font-size: 1.3rem;
    }

    .dashboard .row div .card .card-body h5 {
        color: #7b8a9a;
        font-size: 1.1rem;
        margin-bottom: 10px;
    }

    .dashboard .row div .card .card-body h3 {
        color: #566a7f;
        text-transform: capitalize;
        font-size: 1.6rem;
    }

    .dashboard .row-data div .card {
        height: 210px;
    }

    .dashboard .row-data div .card .card-body {
        padding: 20px;
    }

    .dashboard .row-training div .card .card-body p {
        color: #768597;
    }

    .dashboard .row-training div .card .card-body img {
        width: 35px;
        height: 35px;
    }

    .dashboard .row-training div .card .card-body .div-icon-percent i {
        font-size: 1.7rem;
        margin-left: 5px;
        margin-right: 12px;
    }

    .dashboard .row-training-breeding div .card {
        height: 230px;
    }

    .dashboard
        .row-training-breeding
        .card
        .card-body
        .table-ev-yield
        tbody
        tr
        td,
    th {
        color: #566a7f;
    }

    .dashboard
        .row-training-breeding
        .card
        .card-body
        .table-ev-yield
        tbody
        tr
        th {
        min-width: 150px;
    }

    .dashboard .row-training-breeding .card .card-body .div-gender {
        display: flex;
        flex-direction: row;
    }

    .dashboard .row-training-breeding .card .card-body .div-gender h5 i {
        font-size: 1.4rem;
        padding: 8px;
        border-radius: 15px;
        color: #fff;
    }

    .dashboard
        .row-training-breeding
        .card
        .card-body
        .div-gender
        .gender-female {
        margin-right: 40px;
    }

    .dashboard
        .row-training-breeding
        .card
        .card-body
        .div-gender
        .gender-female
        h5
        i {
        background-color: #8e44ad;
    }

    .dashboard
        .row-training-breeding
        .card
        .card-body
        .div-gender
        .gender-male
        h5
        i {
        background-color: #3498db;
    }

    .dashboard .row-training-breeding .card .card-body .div-gender p {
        font-size: 0.9rem;
        font-weight: 600;
        color: #637588;
        margin-top: 15px;
        padding-left: 3px;
    }

    .dashboard
        .row-training-breeding
        .card
        .card-body
        .div-gender
        .gender-female
        p {
        border-bottom: 2px solid #8e44ad;
    }

    .dashboard
        .row-training-breeding
        .card
        .card-body
        .div-gender
        .gender-male
        p {
        border-bottom: 2px solid #3498db;
    }

    .dashboard .row-stats-Effectiveness div .card .card-body .div-stats {
        padding: 12px;
    }

    .dashboard .row-stats-Effectiveness div .card .card-body .div-stats h3 {
        color: #7b8a9a;
    }

    .dashboard
        .row-stats-Effectiveness
        div
        .card
        .card-body
        .div-effectiveness {
        padding: 12px;
    }

    .dashboard
        .row-stats-Effectiveness
        div
        .card
        .card-body
        .div-effectiveness
        h3 {
        color: #7b8a9a;
    }

    .dashboard
        .row-stats-Effectiveness
        div
        .card
        .card-body
        > div
        > div
        > div
        > h6 {
        display: none;
    }

    //#### Evolution #######################

    .dashboard .row-evolutions div .card .card-body .div-title-evolution {
        padding: 12px;
    }

    .dashboard .row-evolutions div .card .card-body .div-title-evolution h3 {
        color: #7b8a9a;
    }

    .div-evolutions {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    .text-does-not-evolve {
        margin-top: -35px;
        margin-left: 13px;
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

    .div-evolutions .table-evo-details tbody tr td,
    th {
        color: #566a7f;
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

    //#####################################################################

    @media screen and (min-width: 768px) {
        .dashboard .row-training div .card {
            height: 410px;
        }
    }

    @media screen and (min-width: 1024px) {
        .div-evolutions h1 {
            text-align: left;
            margin-bottom: 15px;
        }

        .text-does-not-evolve {
            margin-top: 0px;
            margin-left: 13px;
            color: #566a7f;
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

        .div-evolutions .div-pokemon-evolutions .middle-evolution {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    @media screen and (min-width: 1200px) {
        margin-top: 100px;

        // .dashboard .row-stats-Effectiveness div .card {
        //     height: 780px;
        // }
    }
`;
