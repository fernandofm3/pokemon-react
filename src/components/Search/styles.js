import styled from "styled-components";

export const SearchBar = styled.div`
    width: 100%;

    .input-group span,
    .input-group input {
        border-color: #3b64a5;
    }

    .input-group span {
        background-color: #3b64a5;
    }

    .input-group span i {
        color: #fff;
    }

    .search {
        display: none;
    }

    @media screen and (min-width: 1024px) {
        .search {
            display: block;
        }

        .searchMobile {
            display: none;
        }
    }
`;
