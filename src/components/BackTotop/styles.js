import styled from "styled-components";

export const BackToTopButton = styled.div`
    button {
        position: fixed;
        width: 100%;
        bottom: 0px;
        right: 0px;
        border-top: 3px solid #000;
        padding: 0px;
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        background-color: rgba(222,43,30, 0.9);
        color: #fff;
        font-weight: bold;
        font-size: 1.25rem;
    }
    
    @media screen and (min-width: 768px){
        button {
            display: none;
        }
    }

`