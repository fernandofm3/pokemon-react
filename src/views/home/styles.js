import styled from 'styled-components';

export const DivPokeCard = styled.div`
    
    h1 {
        font-size: 2.5rem;
        color: #777;
    } 
    
    .poke-search {
        width: 100%;
        padding: 10px;        
        border: 1px solid #000;
        border-radius: 7px;
    }
    
`

export const Container = styled.div`
    display: grid;
    column-gap: 25px;
    row-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    max-width: 1280px;        
    margin: auto;   
    padding: 20px 30px 20px 30px;    
`

export const DivSearch = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`