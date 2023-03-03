import styled from "styled-components";

export const SelectorPokemonColor = styled.div`
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

    .item-display-none {
        display: none;
    }
`;
