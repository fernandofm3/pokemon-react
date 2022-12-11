import styled from 'styled-components';

export const PokeTypes = styled.div`    
    margin-bottom: 40px;

    h6 {
        text-transform: uppercase;
        margin-bottom: 20px;
        color: #333;
        font-weight: bold;
    }

    .div-types {
        display: flex;
        flex-direction: row; 
    }

    .div-types span{        
        margin-right: 10px;
        padding: 5px 20px 5px 20px;
        border-radius: 7px;
        font-weight: bold;
        text-transform: capitalize;
    }
`