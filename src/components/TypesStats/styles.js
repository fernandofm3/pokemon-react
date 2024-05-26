import styled from "styled-components";

export const TypesStats = styled.div`
    // .div-types-stats h1 {
    //     margin-bottom: 50px;
    //     font-weight: bold;
    //     border-left: 10px solid #c0392b;
    //     padding-left: 10px;
    //     margin-left: 0;
    //     color: #212529;
    // }

    // .div-types-stats .table-responsive-sm {
    //     padding: 20px;
    //     border: 1px solid #000;
    //     border-radius: 7px;
    // }

    .div-types-stats .div-types {
        flex-wrap: wrap;
        justify-content: center;
    }

    .div-types-stats .div-types > div {
        padding: 8px;
    }

    .div-types-stats .div-types > div > div {
        margin-right: 0;
        margin-bottom: 0;
    }

    .div-types-stats .div-types span {
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 2px 8px 2px 8px;
        border-radius: 7px;
        font-weight: bold;
        text-transform: capitalize;
        text-shadow: 2px 2px 2px #aaa;
        font-size: 0.75rem;
    }

    .damage {
        margin-right: -5px !important;
        margin-left: 10px;
        padding: 1px 3px !important;
        border-radius: 2px;
        font-weight: bold;
        text-transform: initial;
        background-color: #fff;
        font-size: 0.875rem !important;
        text-shadow: none !important;
        border: 2px solid #fff;
        color: #fff;
    }

    @media screen and (min-width: 435px) {
        .div-types-stats .div-types {
            justify-content: start;
        }
    }
`;
