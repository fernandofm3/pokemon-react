import styled from "styled-components";

export const PokeTypes = styled.div`
    .div-types {
        display: flex;
        flex-direction: row;
    }

    .div-types span {
        margin-right: 10px;
        padding: 5px 20px 5px 20px;
        border-radius: 7px;
        font-weight: bold;
        text-transform: capitalize;
        text-shadow: 2px 2px 2px #aaa;
    }

    @media screen and (min-width: 768px) {
        margin-top: 6px;
    }
`;
