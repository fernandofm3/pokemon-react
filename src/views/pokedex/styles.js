import styled from "styled-components";

export const Container = styled.div`
    max-width: 95%;
    margin: auto;
    padding: 30px 15px 30px 15px;
    .item-display-none {
        display: none;
    }

    .div-pokecard {
        display: grid;
        column-gap: 50px;
        row-gap: 90px;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        margin-bottom: 80px;
    }

    .div-search {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }

    .div-seletors {
        display: flex;
        flex-direction: column;
    }

    .div-seletors .button-generation {
        display: flex;
        flex-direction: row;
    }

    // .div-seletors label {
    //     width: 90px;
    // }

    // .div-seletors select {
    //     width: 100%;
    // }

    @media screen and (min-width: 650px) {
        .div-seletors {
            flex-direction: row;
            justify-content: space-between;
        }

        // .div-seletors label,
        // .div-seletors select {
        //     width: auto;
        // }
    }

    @media screen and (min-width: 900px) {
        .div-search {
            flex-direction: row;
            justify-content: space-between;
        }

        // .div-seletors {
        //     width: 220%;
        //     margin-left: 20px;
        // }
    }

    @media screen and (min-width: 1024px) {
        // .div-seletors {
        //     width: 150%;
        //     margin-left: 20px;
        // }
    }

    @media screen and (min-width: 1280px) {
        // .div-seletors {
        //     width: 100%;
        //     margin-left: 20px;
        // }
    }
`;
