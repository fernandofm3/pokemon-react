import styled from 'styled-components';

export const Pagination = styled.div`

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;        
    }

    button { 
        width: 50px;       
        padding: 10px;
        border: 1px solid #333;
        background-color: #fff;
        font-weight: bold;
        color: #333;
    }  

    li + li {
        margin-left: 10px;
        margin-bottom: 5px;       
    }
    
    .pagination__item--active {
        border: none;
        border: 1px solid #333;
        background-color: #3b64a5;
        color: #fff;

    }

    .item-display-none {
        display: none;
    }
    
`