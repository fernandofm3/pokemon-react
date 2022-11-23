import styled from 'styled-components';

export const Pagination = styled.div`


    button {        
        padding: 5px;
    }  

    button + button {
        margin-left: 10px;
        padding: 5px;
    }
    
    .pagination__item--active {
        border: none;
    }
    
`