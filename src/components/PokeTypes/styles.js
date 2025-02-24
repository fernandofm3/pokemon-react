import styled from "styled-components";

export const PokeTypes = styled.div`
    .custom-tooltip {
        padding: 5px 10px;
        background-color: #000;
    }

    .tooltip-content span {
        color: #fff !important;
        text-shadow: none !important;
    }

    .tooltip-content .pokemon-type {
        font-weight: bold;
    }

    .div-types {
        display: flex;
        flex-direction: row;
        /* flex-wrap: wrap; */
        text-transform: capitalize;
    }

    .poke__type__bg {
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .grass {
        background: var(--grass);
        box-shadow: 0 0 20px var(--grass);
    }

    .bug {
        background: var(--bug);
        box-shadow: 0 0 20px var(--bug);
    }

    .dark {
        background: var(--dark);
        box-shadow: 0 0 20px var(--dark);
    }

    .dragon {
        background: var(--dragon);
        box-shadow: 0 0 20px var(--dragon);
    }

    .electric {
        background: var(--electric);
        box-shadow: 0 0 20px #796d26;
    }

    .fairy {
        background: var(--fairy);
        box-shadow: 0 0 20px var(--fairy);
    }

    .fighting {
        background: var(--fighting);
        box-shadow: 0 0 20px var(--fighting);
    }

    .flying {
        background: var(--flying);
        box-shadow: 0 0 20px var(--flying);
    }

    .ghost {
        background: var(--ghost);
        box-shadow: 0 0 20px var(--ghost);
    }

    .ground {
        background: var(--ground);
        box-shadow: 0 0 20px var(--ground);
    }

    .ice {
        background: var(--ice);
        box-shadow: 0 0 20px var(--ice);
    }

    .normal {
        background: var(--normal);
        box-shadow: 0 0 20px var(--normal);
    }

    .poison {
        background: var(--poison);
        box-shadow: 0 0 20px var(--poison);
    }

    .psychic {
        background: var(--psychic);
        box-shadow: 0 0 20px var(--psychic);
    }

    .rock {
        background: var(--rock);
        box-shadow: 0 0 20px var(--rock);
    }

    .steel {
        background: var(--steel);
        box-shadow: 0 0 20px var(--steel);
    }

    .water {
        background: var(--water);
        box-shadow: 0 0 20px var(--water);
    }

    .fire {
        background: var(--fire);
        box-shadow: 0 0 20px var(--fire);
    }

    @media screen and (min-width: 768px) {
        margin-top: 6px;
    }
`;
