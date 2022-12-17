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
        width: 100%;
        background-color: rgba(255,255,255,0.7);
        border-radius: 7px;
        box-shadow: 3px 2px 10px 4px #888;
        padding: 30px;        
    }  
    
    .div-poke-info {
        display: flex;
        flex-direction: column;        
    }

    .div-poke-info .div-images-description {
        width: 100%;        
    }

    @media screen and (min-width: 768px) {
        .div-poke-info {            
            flex-direction: row;            
        }
    }

    @media screen and (min-width: 768px) {
        .div-poke-info .div-images-description {            
            margin-right: 40px;
            width: 40%;
        }
    }


    .div-poke-info .div-type-stats-informations {
        width: 100%;        
    }

    @media screen and (min-width: 768px) {
        .div-poke-info .div-type-stats-informations {            
            width: 60%;
        }
    }

    .div-evolutions {
        display: flex;
        flex-direction: column;
        margin-top: 50px;        
    }

    .div-evolutions h2{
        text-align: center;
        margin-bottom: 50px;       
    }

    .div-evolutions .div-pokemon-evolutions {
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-width: 1024px) {
        .div-evolutions .div-pokemon-evolutions {            
            flex-direction: row;
        }
    }
`