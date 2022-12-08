import styled from 'styled-components';

export const Container = styled.div`    
    max-width: 1280px;        
    margin: auto;   
    padding: 20px 20px 20px 20px;   
    .item-display-none {
        display: none;
    }  

    .div-poke-info-main {
        display: flex;
        flex-direction: column;
        
    }
    
    .div-poke-img {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;        
    }

    .div-poke-img img {
        width: 200px;
        margin-bottom: 20px;
        margin: auto;
    }

    .div-poke-img h1 {
        color: #aaa;
        margin-bottom: 20px;
        font-weight: bold;
        text-align: center;
    }

    .div-poke-img h1 .poke-name {
        color: #777;
    }

    .poke-name {
        text-transform: capitalize;
    }    

    .div-poke-img .div-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .div-poke-img .div-btn a{
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

    .div-poke-img .div-btn a:hover {
        background-color: #3f66a2e0;
    }

    
    .div-poke-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: rgba(255,255,255,0.7);
        border-radius: 7px;
        box-shadow: 3px 2px 10px 4px #888;
    }

    .div-poke-info .div-information {
        width: 100%;
        padding: 30px;
    }

    .div-poke-info .div-information .div-type, .div-poke-info .div-information .div-description{
        margin-bottom: 40px;
    }
    
    .div-information .div-type h6, .div-information .div-description h6, .div-infos h6, .div-poke-info .div-stats h6 {
        text-transform: uppercase;
        margin-bottom: 20px;
        color: #333;
    }

    .div-information .div-types {
        display: flex;
        flex-direction: row;        
    }

    .div-information .div-types span{        
        margin-right: 10px;
        padding: 5px 20px 5px 20px;
        border-radius: 7px;
        font-weight: bold;
        text-transform: capitalize;
    }

    .div-information p {
        font-size: 1rem;
        color: #555;
    }

    .div-information .div-infos p {
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    .div-information .div-infos p span {
        color: #777;
    }




    .div-poke-info .div-stats {
        width: 100%;
        padding: 30px;
    }
`