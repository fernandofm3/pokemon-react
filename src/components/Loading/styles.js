import styled from "styled-components";

export const Loading = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1001;

    img {
        width: 300px;
        height: 300px;
    }

    h1 {
        font-size: 3rem;
        color: #000;
        text-shadow: 1px 2px 3px #999;
    }
`;
