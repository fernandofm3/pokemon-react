import styled from "styled-components";

export const PokemonTable = styled.div`
    .div-table {
        border: 1px solid #ddd;
        height: 100vh;
        overflow-y: auto;
        padding-top: 214px;
        padding-bottom: 0;
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

    // .div-table table > :not(caption) > * > * {
    //     border-right-width: 1px;
    //     border-bottom-width: 1px;
    // }

    // .div-table table thead {
    //     width: 100%;
    //     background-color: #f5f5f5;
    // }

    .div-table table thead .tr-columns th {
        position: sticky;
        background-color: #ffcc03;
        padding: 14px 16px;
        border-top: 1px solid #ffcc03;
        top: 0;
        border-bottom: 1px solid #ffcc03;
        border-right: 1px solid #dee2e6;
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

    .div-table table tbody > tr:nth-child(2n) {
        background-color: #eaf2ff;
    }

    .div-table table tbody tr {
        transition: 0.3s;
    }

    .div-table table tbody > tr:hover {
        background-color: #fff8da;
    }

    .div-table table tbody tr td {
        padding: 5px 18px;
        border-bottom: 1px solid #dee2e6;
    }

    .selected-row {
        background-color: #fff1b8 !important;
    }

    @media (width > 900px) {
        .div-table {
            padding-top: 156px;
        }
    }
`;
