import styled from "styled-components";

export const Headder = styled.div`
    width: 100%;
    background-color: #3b64a5;

    nav {
        display: flex;
        flez-direction: row;
        justify-content: space-between;
        max-width: 95%;
        margin: auto;
    }

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        padding: 10px 20px 10px 20px;
        margin: 0;
    }

    li {
        font-size: 1.1rem;
        font-weight: bold;
    }

    a + a {
        margin-left: 20px;
        cursor: pointer;
        text-decoration: none;
        transition: 0.3s;
        color: #fff;
    }

    a:hover {
        color: #eee;
    }

    li img {
        width: 100px;
    }

    .versionApp {
        color: #ddd;
        font-size: 0.725rem;
    }

    @media screen and (min-width: 1024px) {
        li img {
            width: 150px;
        }
    }

    @media screen and (max-width: 390px) {
        .ulVersionApp {
            display: none;
        }
    }
`;
