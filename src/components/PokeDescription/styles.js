import styled from "styled-components";

export const PokeDescription = styled.div`
    margin-bottom: 40px;

    h6 {
        text-transform: uppercase;
        margin-bottom: 20px;
        color: #212529;
        font-weight: bold;
    }

    .div-gender {
        display: flex;
        flex-direction: column;
    }

    .div-gender-percentage {
        display: flex;
        flex-direction: row;
    }

    .div-gender-percentage div {
        margin-right: 30px;
    }

    .div-gender-percentage div i {
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 1.6rem;
        margin-bottom: 5px;
    }

    .div-gender-percentage .bi-gender-female {
        color: #9c27b0;
    }

    .div-gender-percentage .bi-gender-male {
        color: blue;
    }

    .div-gender-percentage div p {
        font-size: 1rem;
        font-weight: bold;
        color: #aaa;
        margin-bottom: 0;
    }

    @media screen and (min-width: 1024px) {
        margin-bottom: 0;
    }
`;
