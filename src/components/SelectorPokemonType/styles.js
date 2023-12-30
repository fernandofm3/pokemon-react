import styled from "styled-components";

export const SelectorPokemonType = styled.div`
    .div-cards-types {
        display: grid;
        column-gap: 20px;
        row-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    }

    .div-cards-types .card .card-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        cursor: pointer;
        transition: 0.2s;
        padding: 8px;
    }

    .div-cards-types .card:hover {
        background-color: #efefef;
    }

    .div-cards-types .color-selected-card {
        background-color: #ddd;
    }

    .div-cards-types .color-selected-card:hover {
        background-color: #ddd;
    }

    .div-cards-types h6 {
        font-size: 1rem;
        color: #000;
        padding: 6px 10px;
        text-transform: capitalize;
        text-shadow: 2px 2px 3px #aaa;
        margin: 0;
    }

    .div-cards-types h3 {
        font-weight: bold;
    }

    .poke__type__bg > img {
        width: 20px;
        height: 20px;
    }

    .poke__type__bg {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin-bottom: 0;
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

    .unknown {
        background: var(--unknown);
        box-shadow: 0 0 20px var(--unknown);
    }

    .shadow {
        background: var(--shadow);
        box-shadow: 0 0 20px var(--shadow);
    }
`;
