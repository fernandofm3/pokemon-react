import styled from "styled-components";

export const Headder = styled.div`

    width: 100%;
    background-color: #3b64a5;

    nav {
        width: 1280px;
        margin: auto;
    }
    
    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        padding: 10px 30px 10px 30px;  
    }

    li {
        font-size: 1.25rem;
        font-weight: bold;
        color: #fff;
    }
    
    li + li {
        margin-left: 20px;
    }

    li img {
        width: 150px;
        
    }

`