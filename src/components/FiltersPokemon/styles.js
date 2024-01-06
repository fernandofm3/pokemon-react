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
        background-color: #fff;
    }

    .div-filters .div-height,
    .div-filters .div-sort-by-category,
    .div-filters .div-weight {
        padding: 10px;
        background-color: #dee2e6;
        border-radius: 7px;
    }

    .div-filters .div-height div,
    .div-filters .div-weight div {
        display: flex;
        align-items: center;
    }

    .div-filters .div-height div label,
    .div-filters .div-weight div label {
        cursor: pointer;
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

    // @media screen and (min-width: 995px) {
    // }
`;
