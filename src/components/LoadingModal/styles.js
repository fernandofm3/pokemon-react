import styled from "styled-components";

export const LoadingModal = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1001;

    .img-pikachu-loading {
        width: 120px;
        height: 120px;
    }

    h1 {
        font-size: 2.2rem;
        color: #000;
        //text-shadow: 1px 2px 3px #fff;
    }
`;
