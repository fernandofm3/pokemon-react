import styled from "styled-components";

export const FilterHeight = styled.div`
    .div-height {
        padding: 10px;
        background-color: #fff;
        border-radius: 7px;
    }

    .div-height select {
        //background-color: #6c757d;
        background-color: #fff;
        color: #333;
        border-radius: 7px;
        font-weight: bold;
    }

    .div-height div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .div-height div label {
        cursor: pointer;
    }

    .div-height div input {
        border: 1px solid #333;
    }

    .div-height .div-small-height label img {
        width: 30px;
    }

    .div-height .div-medium-height label img {
        width: 30px;
    }

    .div-height .div-tall-height label img {
        width: 60px;
    }

    .div-height .div-all-height label {
        font-weight: bold;
    }

    .div-types select {
        text-transform: capitalize;
    }
`;
