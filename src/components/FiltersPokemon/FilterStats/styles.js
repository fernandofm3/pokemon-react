import styled from "styled-components";

export const FilterStats = styled.div`
    .div-stats {
        padding: 10px;
        background-color: #fff;
        border-radius: 7px;
    }

    .div-stats select {
        background-color: #fff;
        color: #333;
        border-radius: 7px;
        font-weight: bold;
    }

    /*#####################################################*/

    .div-stats .div-stats-main-checkbox {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .div-stats .div-stats-main-checkbox div {
        padding-right: 2px;
    }

    .div-stats .div-stats-main-checkbox div h6 {
        font-weight: bold;
        font-size: 0.725rem;
        color: #000;
    }

    .div-stats .div-stats-main-checkbox div div input {
        border: 2px solid #e74c3c;
    }

    .div-stats .div-stats-main-checkbox .very-low {
        border-color: #e74c3c;
    }

    .div-stats .div-stats-main-checkbox .low {
        border-color: #e67e22;
    }

    .div-stats .div-stats-main-checkbox .medium {
        border-color: #f1c40f;
    }

    .div-stats .div-stats-main-checkbox .high {
        border-color: #a0e515;
    }

    .div-stats .div-stats-main-checkbox .very-high {
        border-color: #23cd5e;
    }

    .div-stats .div-stats-main-checkbox .super {
        border-color: #00c2b8;
    }

    .div-stats .div-stats-main-checkbox .stats-all {
        border-color: #333;
    }

    /*#####################################################*/

    .div-stats .div-stats-main-checkbox .div-stats-label {
        display: flex;
        flex-direction: column;
        padding-top: 27px;
    }

    .div-stats .div-stats-main-checkbox .div-stats-label label {
        font-weight: 600;
        font-size: 0.825rem;
        padding: 0 10px;
        border-radius: 7px;
        color: #fff;
        margin-bottom: 8px;
        transition: 0.3s;
    }

    .div-stats-main-checkbox .div-stats-label .label-very-low {
        background-color: #e74c3c;
    }

    .div-stats-main-checkbox .div-stats-label .label-low {
        background-color: #e67e22;
    }

    .div-stats-main-checkbox .div-stats-label .label-medium {
        background-color: #f1c40f;
    }

    .div-stats-main-checkbox .div-stats-label .label-high {
        background-color: #a0e515;
    }

    .div-stats-main-checkbox .div-stats-label .label-very-high {
        background-color: #23cd5e;
    }

    .div-stats-main-checkbox .div-stats-label .label-super {
        background-color: #00c2b8;
    }

    .div-stats-main-checkbox .div-stats-label .label-all {
        background-color: #333;
    }
`;
