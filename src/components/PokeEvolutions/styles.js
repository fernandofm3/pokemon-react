import styled from 'styled-components';

export const PokeEvolutions = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;


    .evo-num-pokemon {
        color: #aaa;
    }

    .evo-name-pokemon {
        color: #000;
        text-transform: capitalize;
    }

    .evo-img-pokemon {
        max-width: 150px;
    }

    .evo-type-pokemon {
        display: flex;
        flex-direction: row;
    }

    .evo-type-pokemon p {
        padding: 4px 10px 4px 10px;
        font-size: 0.875rem;
        border-radius: 4px;
        margin-right: 7px;
        text-transform: capitalize;
    }
`