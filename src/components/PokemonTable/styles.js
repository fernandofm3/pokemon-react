import styled from "styled-components";

export const PokemonTable = styled.div`
    .div-table {
        overflow: visible;
        max-height: calc(100vh - 180px); /* Defina uma altura máxima, ajuste conforme necessário */     
    }

    .div-table table {
        width: 100%;
        margin-left: -1px;
        margin-bottom: 0;
        font-size: 0.8rem;
        border-collapse: separate;
        border-spacing: 0;
        background-color: #fff;
    }   

    .div-table table thead {
        position: sticky;
        top: 0;
    }

    .div-table table thead .tr-columns th {        
        background-color: #ffcc03;
        padding: 5px 10px 0 10px;
        border-top: 1px solid #ffcc03;
        border-bottom: 1px solid #ffcc03;
        border-right: 1px solid #dee2e6;
        font-size: 1rem;
    }

    .div-table table thead .tr-columns th .thead-div-arrow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .div-table table thead .tr-columns th .thead-div-arrow i {
        font-size: 0.6rem;
    }

    .div-table table thead .tr-columns th .div-thead-arrow-up-down {
        display: flex;
        flex-direction: column;
    }

    .div-table table thead .tr-columns th .div-thead-arrow-up-down i {
        margin-bottom: -7px;
    }    
   
    .div-table table tbody tr {
        transition: 0.3s;
    }

    .div-table table tbody > tr:hover {
        background-color: #fff8da;
    }

    .div-table table tbody tr td {
        padding: 5px; 10px;
        border-bottom: 1px solid #dee2e6;
        font-weight: 600;
        font-size: 1rem;
        text-transform: capitalize;
        color: #777;
        text-align: center;
    }

    .div-table table tbody tr td div img {
        width: 65px;
        height: 65px;
    }

    .div-table table tbody tr td div .poke-number {
        color: #555;
        font-weight: bold;
        //text-shadow: 1px 2px 3px #aaa;
    }   

    .div-table table tbody tr td .poke-name {
        width: 100%;
        font-weight: bold;
    }

    .div-table table tbody tr td .div-types > div > div {
        margin-bottom: 0;
    }

    .div-table table tbody tr td .div-types > div > div > img {
        width: 20px;
        height: 20px;;
    }

    .div-table table tbody tr td .total-stats {
        color: #333;
        font-weight: bold;
        font-size: 1.1rem;
    }

    .div-table table tbody tr td .div-abilities span {
        color: #333;
        font-size: 0.825rem;
        font-weight: bold;        
        text-align: left;        
    }

    .selected-row {
        background-color: #fff1b8 !important;
    }

    @media (width <= 500px) {
        .div-table {
            max-height: calc(100vh - 270px); /* Defina uma altura máxima, ajuste conforme necessário */
        }
    }

    @media (width <= 1500px) {
        .div-table {
            overflow: auto;
        }
    }
`;
