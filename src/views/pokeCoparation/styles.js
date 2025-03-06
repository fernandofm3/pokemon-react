import styled from "styled-components";

export const Container = styled.div`
    .poke-type-comparation .div-types {
        justify-content: center;
    }

    .div-abilities {
        min-height: 168px;
    }

    .div-comparation-main {
        display: block;
    }

    .unsupported-resolution {
        display: none;
    }

    @media (max-width: 767px) {
        .div-comparation-main {
            display: none;
        }

        .unsupported-resolution {
            display: block;
        }
    }
`;
