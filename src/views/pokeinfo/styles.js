import styled from 'styled-components';
//import wallpaperEvolution from "../../assets/wallpaper-evolution.png";

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

    .div-poke-info .div-type-stats-informations {
        width: 100%;        
    }

    .div-evolutions {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        background-color: #fff;
        border: 2px solid #000;
        padding: 30px 5px;
        border-radius: 7px;        
    }

    .div-evolutions h1{
        margin-bottom: 50px;
        font-weight: bold;
        border-left: 10px solid #c0392b; 
        padding-left: 10px;
        margin-left: 20px;      
    }

    .div-evolutions .div-pokemon-evolutions {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0;
    }

    .div-evolutions .div-pokemon-evolutions li{
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        width: 100%;
    }

    .div-evolutions .div-pokemon-evolutions .middle-evolution {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .div-evolutions .div-pokemon-evolutions li a{
        text-decoration: none;
        width: 100%;
    }

    .div-evolutions .div-pokemon-evolutions .test {
        width: auto;
    }
    
    .li-evo-arrow p{
        display: flex;
        flex-direction: row;
        justify-content: center;        
        width: 100%;
    }

    .li-evo-arrow p i{
        font-size: 3rem;
        color: #000;
    }

    .arrow-right {            
        display: none;
    }

    @media screen and (min-width: 768px) {
        .div-poke-info {            
            flex-direction: row;            
        }

        .div-poke-info .div-images-description {            
            margin-right: 40px;
            width: 40%;
        }

        .div-poke-info .div-type-stats-informations {            
            width: 60%;
        }
    }

    @media screen and (min-width: 1024px) {

        .div-evolutions h1{
            text-align: left;
            margin-left: 40px;
            margin-bottom: 15px;      
        }

        .div-evolutions .div-pokemon-evolutions {            
            flex-direction: row; 
            justify-content: center;           
        }

        .div-evolutions .div-pokemon-evolutions li{
            flex-direction: column;            
            width: auto;
        }

        .div-evolutions .div-pokemon-evolutions .li-evo-arrow {
            width: 20%;
        }

        .div-evolutions .div-pokemon-evolutions .li-evo-arrow p {
            padding: 130px 0;
        }

        .arrow-bottom {            
            display: none;
        }

        .arrow-right {            
            display: block;            
        }

        .div-evolutions .div-pokemon-evolutions .middle-evolution-wrap {            
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
`