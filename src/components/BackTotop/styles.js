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
        width: 70px;
        height: 70px;
        bottom: 38px;
        right: 2%;
        border: none;
        padding: 8px;
        border-radius: 50%;
        background-color: rgba(222, 43, 30, 0.6);
        color: #fff;
        font-weight: bold;
        font-size: 1.25rem;
        transition: all 0.3s;
    }

    .back-to-top:hover {
        background-color: rgba(222, 43, 30, 0.9);
    }

    @media screen and (min-width: 768px) {
        .back-to-top-mobile {
            display: none;
        }

        .back-to-top {
            display: block;
        }
    }
`;
