import styled from "styled-components";

export const PokeEvolutions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48%;
    margin: auto;
    margin-bottom: 30px;
    transition: 0.3s;

    :hover .evo-img-pokemon {
        opacity: 0.8;
    }

    .div-evo-name-num {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .evo-num-pokemon {
        color: #777;
        font-weight: bold;
    }

    .evo-name-pokemon {
        color: #333;
        font-weight: bold;
        text-transform: capitalize;
        width: 100px;
        text-align: center;
    }

    .evo-img-pokemon {
        width: 90px;
        transition: 0.3s;
    }

    .evo-type-pokemon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    .evo-type-pokemon span {
        padding: 4px 8px 3px 8px !important;
        font-size: 0.6rem !important;
        border-radius: 4px !important;
        margin-right: 7px !important;
        margin-bottom: 5px !important;
        text-transform: capitalize !important;
        text-shadow: 2px 2px 2px #aaa !important;
    }

    @media screen and (min-width: 500px) {
        .evo-img-pokemon {
            width: 150px;
        }

        .evo-type-pokemon span {
            font-size: 0.875rem !important;
        }
    }

    @media screen and (min-width: 768px) {
        .evo-img-pokemon {
            width: 180px;
        }

        .evo-type-pokemon p {
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 1024px) {
         {
            width: 22%;
        }
    }
`;
