import styled from "styled-components";

export const PokeInformations = styled.div`
    margin-bottom: 40px;

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
        border-radius: 7px;
    }

    td {
        padding: 5px 15px 5px 5px;
        color: #333;
        text-transform: capitalize;
        font-size: 1rem;
        font-weight: bold;
    }

    @media screen and (min-width: 400px) {
        td {
            font-size: 0.875rem;
        }
    }

    .td-title {
        width: 115px;
        font-weight: bold;
        color: #999;
        font-size: 1rem;
    }

    @media screen and (min-width: 400px) {
        .td-title {
            width: 120px;
            font-size: 1rem;
        }
    }
`;
