import styled from "styled-components";

export const KeepExploring = styled.div`
    .btn-keep-exploring {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 0%;
        bottom: 0%;
        z-index: 1001;
        background-color: #e67e22;
        padding: 10px 20px;
        color: #fff;
        border-top-left-radius: 20px;
        text-decoration: none;
        font-weight: bold;
        font-size: 1rem;
        transition: 0.3s;
    }

    .btn-keep-exploring:hover {
        background-color: #cf7321;
    }

    .btn-keep-exploring i {
        font-size: 1.5rem;
        margin-right: 8px;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: right;
        position: relative;
        margin-bottom: 15px;
        padding-bottom: 20px;

        .btn-keep-exploring {
            position: initial;
            width: 100%;
            left: auto;
            right: auto;
            bottom: auto;
            top: auto;
            /*border-radius: 20px;*/
            padding: 5px 20px;
        }

        .btn-keep-exploring::after {
            content: "";
            position: absolute;
            z-index: 1002;
            top: -15px;
            left: -15px;
            width: 30px;
            height: 30px;
            transform: rotate(45deg);
            background-color: #fff;
        }

        .btn-keep-exploring::before {
            content: "";
            position: absolute;
            z-index: 1002;
            top: auto;
            left: auto;
            right: -18px;
            bottom: 5px;
            width: 30px;
            height: 30px;
            transform: rotate(45deg);
            background-color: #fff;
        }
    }
`;
