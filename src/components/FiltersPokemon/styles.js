import styled from "styled-components";

export const FiltersPokemon = styled.div`
    .offcanvas-header {
        background-color: #0e5fd5;
    }

    .offcanvas-header h5 {
        color: #fff;
    }

    .offcanvas-header button {
        background-color: #fff;
        transition: 0.3s;
    }

    .offcanvas-body {
        color: #333;
        background-color: #ffb97145;
    }

    .div-filters select {
        //background-color: #6c757d;
        background-color: #fff;
        color: #333;
        border-radius: 7px;
        font-weight: bold;
    }

    .div-filters .div-height,
    .div-filters .div-sort-by-category,
    .div-filters .div-weight,
    .div-filters .div-stats,
    .div-filters .div-types {
        padding: 10px;
        background-color: #fff;
        border-radius: 7px;
    }

    /*#####################################################*/

    .div-filters .div-stats .div-stats-main-checkbox {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .div-filters .div-stats .div-stats-main-checkbox div {
        padding-right: 2px;
    }

    .div-filters .div-stats .div-stats-main-checkbox div h6 {
        font-weight: bold;
        font-size: 0.8rem;
        color: #777;
    }

    .div-filters .div-stats .div-stats-main-checkbox div div input {
        border: 2px solid #e74c3c;
    }

    .div-filters .div-stats .div-stats-main-checkbox .very-low {
        border-color: #e74c3c;
    }

    .div-filters .div-stats .div-stats-main-checkbox .low {
        border-color: #e67e22;
    }

    .div-filters .div-stats .div-stats-main-checkbox .medium {
        border-color: #f1c40f;
    }

    .div-filters .div-stats .div-stats-main-checkbox .high {
        border-color: #0a58ca;
    }

    .div-filters .div-stats .div-stats-main-checkbox .very-high {
        border-color: #8e44ad;
    }

    .div-filters .div-stats .div-stats-main-checkbox .super {
        border-color: #198754;
    }

    .div-filters .div-stats .div-stats-main-checkbox .stats-all {
        border-color: #333;
    }

    /*#####################################################*/

    .div-filters .div-stats .div-stats-main-checkbox .div-stats-label {
        display: flex;
        flex-direction: column;
        padding-top: 27px;
    }

    .div-filters .div-stats .div-stats-main-checkbox .div-stats-label label {
        font-weight: 600;
        font-size: 0.825rem;
        padding: 0 10px;
        border-radius: 7px;
        color: #fff;
        margin-bottom: 8px;
        transition: 0.3s;
    }

    .div-filters .div-stats-main-checkbox .div-stats-label .label-very-low {
        background-color: #e74c3c;
    }

    .div-filters .div-stats-main-checkbox .div-stats-label .label-low {
        background-color: #e67e22;
    }

    .div-filters .div-stats-main-checkbox .div-stats-label .label-medium {
        background-color: #f1c40f;
    }

    .div-filters .div-stats-main-checkbox .div-stats-label .label-high {
        background-color: #0a58ca;
    }

    .div-filters .div-stats-main-checkbox .div-stats-label .label-very-high {
        background-color: #8e44ad;
    }

    .div-filters .div-stats-main-checkbox .div-stats-label .label-super {
        background-color: #198754;
    }

    .div-filters .div-stats-main-checkbox .div-stats-label .label-all {
        background-color: #333;
    }

    /*#####################################################*/

    .div-filters .div-height div,
    .div-filters .div-weight div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .div-filters .div-height div label,
    .div-filters .div-weight div label {
        cursor: pointer;
    }

    .div-filters .div-height div input,
    .div-filters .div-weight div input {
        border: 1px solid #333;
    }

    .div-filters .div-height .div-small-height label img,
    .div-filters .div-weight .div-lightWeight label img {
        width: 30px;
    }

    .div-filters .div-height .div-medium-height label img {
        width: 30px;
    }

    .div-filters .div-weight .div-medium-weight label img {
        width: 45px;
    }

    .div-filters .div-height .div-tall-height label img,
    .div-filters .div-weight .div-heavy-weight label img {
        width: 60px;
    }

    .div-filters .div-height .div-all-height label,
    .div-filters .div-weight .div-all-weight label {
        font-weight: bold;
    }

    .div-filters .div-types select {
        text-transform: capitalize;
    }

    // @media screen and (min-width: 995px) {
    // }
`;
