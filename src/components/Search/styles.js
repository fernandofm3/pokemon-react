import styled from "styled-components";

export const SearchBar = styled.div`
    width: 100%;

    input {
        width: 100%;
        padding: 10px 15px 10px 15px;
        border-radius: 7px;
        border: 1px solid #000;
        margin-bottom: 15px;
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
