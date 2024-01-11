import styled from "styled-components";

export const Loading = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #0d6efd;
    z-index: 1060;

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .infinite-rotation {
        animation: rotate 1.5s linear infinite;
    }
`;
