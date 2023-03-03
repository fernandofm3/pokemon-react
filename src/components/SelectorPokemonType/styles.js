import styled from "styled-components";

export const SelectorPokemonType = styled.div`
    margin-bottom: 15px;

    .div-selector-box {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    label {
        margin-right: 8px;
        font-size: 1.1rem;
        font-weight: bold;
        color: #777;
    }

    select {
        padding: 11px;
        border-radius: 7px;
        text-transform: capitalize;
    }

    .span-color {
        width: 15px;
        padding: 10px;
        border-radius: 50%;
        background-color: red;
    }

    .item-display-none {
        display: none;
    }
`;
