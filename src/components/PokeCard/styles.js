import styled from 'styled-components';

export const PokeCard = styled.div`
    .card {
        background-color: #fff;    
        box-shadow: 3px 2px 10px 4px #888;
        border-radius: 7px;    
        transition: 0.3s;
    }

    .card:hover {
        box-shadow: 4px 4px 12px 6px #888;  
    }

    @media screen and (min-width: 440px) {
        .card {
            max-width: 300px;
        }
    }

    img {        
        background-color: #eee;
        padding: 10px;
        width: 100%;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }

    .pokeNum, .pokeName {
        margin-left: 10px;
        text-transform: capitalize;        
    }

    .pokeNum {       
        font-size: 0.875rem;
        margin-bottom: 10px;
        font-weight: bold;
        color: #777;
    }

    .pokeName {
        font-weight: bold;
        font-size: 1.25rem;
        margin-bottom: 5px;
        color: #333;
    }

    .divPokeTypes {
        display: flex;        
        padding: 0 10px;   
        padding-bottom: 20px;     
    }

    .divPokeTypes span {
        padding: 2px 10px;
        font-size: 0.75rem;
        margin-right: 5px;        
        border-radius: 4px;
        /*background-color: #999;
        color: #fff;*/
        text-transform: capitalize;
        font-weight: bold;
    }
`
