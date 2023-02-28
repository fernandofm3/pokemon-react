import styled from "styled-components";

export const PokeStats = styled.div`
    margin-bottom: 40px;

    h6 {
        text-transform: uppercase;
        margin-bottom: 20px;
        color: #212529;
        font-weight: bold;
    }

    table {
        width: 100%;
        padding: 0;
        border-collapse: separate;
        background-color: #fff;
        border-radius: 7px;
    }

    td {
        padding: 0 10px 15px 0;
        color: #000;
        text-transform: capitalize;
        font-size: 0.75rem;
    }

    .td-title {
        width: 0;
        font-weight: bold;
        color: #999;
        font-size: 0.8rem;
    }

    .td-value {
        width: 0;
        font-weight: bold;
        color: #555;
        font-size: 0.8rem;
    }

    .td-total {
        font-size: 1.25rem;
        font-weight: bold;
    }
`;
