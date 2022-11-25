import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    column-gap: 25px;
    row-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    max-width: 1280px;        
    margin: auto;   
    padding: 20px 30px 20px 30px; 
    
    .item-display-none {
        display: none;
    }   
`

export const DivSearch = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`