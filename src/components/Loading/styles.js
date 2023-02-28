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
        width: 100px;
        height: 100px;
    }

    h1 {
        color: #555;
    }
`;
