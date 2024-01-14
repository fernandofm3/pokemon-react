import styled from "styled-components";

export const FilterHeight = styled.div`
    .div-weight {
        padding: 10px;
        background-color: #fff;
        border-radius: 7px;
    }

    .div-weight select {
        background-color: #fff;
        color: #333;
        border-radius: 7px;
        font-weight: bold;
    }

    .div-weight div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .div-weight div label {
        cursor: pointer;
    }

    .div-weight div input {
        border: 1px solid #333;
    }

    .div-weight .div-lightWeight label img {
        width: 30px;
    }

    .div-weight .div-medium-weight label img {
        width: 45px;
    }

    .div-weight .div-heavy-weight label img {
        width: 60px;
    }

    .div-weight .div-all-weight label {
        font-weight: bold;
    }
`;
