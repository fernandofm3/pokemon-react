import styled from 'styled-components';

export const PokeImages = styled.div` 
    
    .div-images {
        display: flex;
        flez-direction: row;
        justify-content: left;
    }

    img {
        width: 100%;
        margin-bottom: 20px;        
    }

    @media screen and (min-width: 500px) {
        img {
            width: 400px;
        }
    }

    @media screen and (min-width: 768px) {
        img {
            width: 100%;
        }
    }

    h1 {
        color: #aaa;
        font-weight: bold;
        font-size: 1.25rem;
    }

    @media screen and (min-width: 415px) {
        h1 {
            font-size: 1.8rem;
        }
    }

    @media screen and (min-width: 768px) {
        h1 {
            font-size: 1.5rem;
        }
    }

    @media screen and (min-width: 1024px) {
        h1 {
            font-size: 2rem;
        }
    }

    h1 .poke-name {
        color: #777;
    }

    .poke-name {
        text-transform: capitalize;
    }    

    .div-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .div-btn a{
        width: 48%;
        border: none;
        background-color: #3f66a2;
        padding: 3px;
        border-radius: 10Px;
        font-size: 1.25rem;
        color: #fff;
        text-align: center;
        transition: 0.3s;
    }

    .div-btn a:hover {
        background-color: #3f66a2e0;
    }
`