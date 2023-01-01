import styled from 'styled-components';

export const TypesStats = styled.div`

    .div-types-stats h6 {
        text-transform: uppercase;
        margin-bottom: 20px;
        color: #212529;
        font-weight: bold;
    }

    .div-types-stats .table-responsive-sm {
        padding: 20px;
        border: 1px solid #000;
        border-radius: 7px;
    }  
    
    .div-types-stats .div-types {
        flex-wrap: wrap;
    }

    .div-types-stats .div-types span{        
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 2px 8px 2px 8px;
        border-radius: 7px;
        font-weight: bold;
        text-transform: capitalize;
        text-shadow: 2px 2px 2px #aaa;
        font-size: 0.75rem
    }

    .damage {
        margin-right: -5px !important;
        margin-left: 10px;
        padding: 1px 3px !important;
        border-radius: 2px;
        font-weight: bold;
        text-transform: initial;
        background-color: #fff;
        font-size: 0.875rem !important;
        text-shadow: none !important;
        border: 2px solid #fff;
        color: #fff;
    }
`