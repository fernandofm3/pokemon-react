import styled from "styled-components";

export const ColumnsOptions = styled.div`
    position: fixed;
    top: 110px;
    width: 100%;
    //background-color: rgb(240, 245, 250);
    background-color: #0d6efd;
    padding: 10.5px 10px;
    //border-left: 1px solid #dee2e6;
    //border-right: 1px solid #dee2e6;

    .div-options {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .div-options .div-search,
    .div-options .div-pagination {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .div-options .div-search {
        width: 100%;
    }

    .div-options .div-pagination {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        width: 100%;
        margin-top: 10px;
    }

    .div-options .div-pagination div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .div-options .div-search .input-search {
        width: 100%;
    }

    .div-options .div-search .selection-lines-per-page {
        width: 120px;
    }

    .div-options .div-pagination .btn-excel {
        min-width: 70px;
    }

    .div-options .div-pagination .number-page {
        color: #fff;
        font-size: 0.72rem;
    }

    @media (width > 900px) {
        .div-options .div-search {
            width: auto;
        }

        .div-options .div-pagination {
            width: auto;
            margin-top: 0;
        }

        .div-options .div-search .input-search {
            width: 300px;
        }

        .div-options .div-pagination .number-page {
            font-size: 1rem;
        }
    }

    @media (width > 992px) {
        top: 98px;
    }
`;
