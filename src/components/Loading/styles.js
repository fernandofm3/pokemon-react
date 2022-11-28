import styled from 'styled-components';

export const Loading = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;    
    width: 100%;
    height: 100vh;     
    background-color: rgba(255,255,255,0.1); 
    
    img {
        width: 100px;
        height: 100px;
        margin-top: 50px;        
    }

    h1 {
        color: #777;
    }
`