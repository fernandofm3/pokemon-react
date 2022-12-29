import styled from 'styled-components';

export const PokeImages = styled.div` 
    margin-bottom: 40px;    

    .div-images {
        display: flex;
        flez-direction: row;
        justify-content: center;
    }

    img {
        width: 100%;
        margin-bottom: 20px;        
    }   

    h1 {
        color: #212529;
        font-weight: bold;
        font-size: 1.25rem;
    }    

    h1 .poke-name {
        color: #aaa;
    }

    .poke-name {
        text-transform: capitalize;
    }    

    .div-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .div-btn button{
        width: 48%;
        height: 40px;
        border: none;
        background-color: #3f66a2;
        padding: 3px;
        font-size: 1.25rem;
        color: #fff;
        text-align: center;
        position: relative;
        overflow: hidden;
        transition: 0.3s;
    }

    .div-btn .btn-previews::after {
        content: "";
        position: absolute;
        z-index: 2;
        top: -15px;
        left: -15px;
        width: 30px;
        height: 30px;
        transform: rotate(45deg);
        background-color: #fff;
    }

    .div-btn .btn-next::after {
        content: "";
        position: absolute;
        z-index: 2;
        top: -15px;
        right: -15px;
        width: 30px;
        height: 30px;
        transform: rotate(45deg);
        background-color: #fff;
    }

    .div-btn button:hover {
        background-color: #3f66a2e0;
    }



    @media screen and (min-width: 415px) {
        h1 {
            font-size: 1.8rem;
        }
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

        h1 {
            font-size: 1.5rem;
        }
    }    

    @media screen and (min-width: 1024px) {
        h1 {
            font-size: 2rem;
        }
    }

    @media screen and (min-width: 1024px) {
        img {
            width: 380px;
        }
    }
`