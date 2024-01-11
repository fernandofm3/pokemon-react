import styled from "styled-components";

export const SearchBar = styled.div`
    .div-modal-search .modal-body {
        padding: 10px 5px;
    }

    .div-modal-search .modal-body .input-group input {
        border: 2px solid #1070fd;
    }

    .div-modal-search .modal-body .input-group span {
        border: 2px solid #1070fd;
        background-color: #1070fd;
        color: #fff;
    }

    .div-modal-search .modal-body .div-component-featured-pokemon > div {
        border-radius: 7px;
        margin-bottom: 0;
        margin-top: 0;
    }

    @media screen and (min-width: 400px) {
        .div-modal-search .modal-body {
            padding: 20px;
        }
    }
`;
