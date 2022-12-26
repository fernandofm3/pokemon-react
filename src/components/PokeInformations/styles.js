import styled from 'styled-components';

export const PokeInformations = styled.div`

    h6 {
        text-transform: uppercase;
        margin-bottom: 20px;
        color: #212529;
        font-weight: bold;
    }

    table {
        width: 100%;
        padding: 10px;
        border-collapse: separate;
        border: 1px solid #333;
        border-radius: 7px;
        // background-color: #eee;
        border-radius: 7px;
    }

    td {
        padding: 5px 15px 5px 5px;
        color: #000;
        text-transform: capitalize;
        font-size: 0.75rem;
        font-weight: bold;
    }

    @media screen and (min-width: 400px) {
        td {
            font-size: 0.875rem;
        }
    }

    .td-title {
        width: 100px;
        font-weight: bold;
        color: #999;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 400px) {
        .td-title {
            width: 120px;
            font-size: 1rem;
        }
    }
`