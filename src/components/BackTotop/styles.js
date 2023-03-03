import styled from "styled-components";

export const BackToTopButton = styled.div`
    .back-to-top-mobile {
        position: fixed;
        width: 100%;
        bottom: 0px;
        right: 0px;
        border-top: 3px solid #000;
        padding: 0px;
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        background-color: rgba(222, 43, 30, 0.9);
        color: #fff;
        font-weight: bold;
        font-size: 1.25rem;
    }

    .back-to-top {
        display: none;
        position: fixed;
        width: 50px;
        bottom: 38px;
        right: 10px;
        border: 2px solid #000;
        padding: 8px;
        border-radius: 50%;
        background-color: rgba(222, 43, 30, 0.9);
        color: #fff;
        font-weight: bold;
        font-size: 1.25rem;
    }

    @media screen and (min-width: 768px) {
        .back-to-top-mobile {
            display: none;
        }

        .back-to-top {
            display: block;
        }
    }

    @media screen and (min-width: 1280px) {
        .back-to-top {
            right: 1%;
        }
    }

    @media screen and (min-width: 1440px) {
        .back-to-top {
            right: 2%;
        }
    }

    @media screen and (min-width: 1600px) {
        .back-to-top {
            right: 4%;
        }
    }

    @media screen and (min-width: 1920px) {
        .back-to-top {
            right: 7%;
        }
    }
`;
