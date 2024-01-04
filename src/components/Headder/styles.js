import styled from "styled-components";

export const Headder = styled.div`
    .div-nav .navbar {
        padding-bottom: 20px;
    }

    .div-nav nav ul li a {
        color: #fff;
        font-weight: bold;
    }

    .div-nav nav ul li > .btn-dropdown {
        color: #fff;
        font-weight: bold;
    }

    .div-nav nav ul li .dropdown-menu li {
        padding: 3px 10px;
    }

    .div-nav .navbar-toggler {
        background-color: #ffcc03;
    }

    .div-nav .navbar-nav .nav-link.show {
        color: #ddd;
    }

    .div-nav img {
        width: 120px;
    }

    .div-nav .btn-generation,
    .div-nav .btn-region,
    .div-nav .btn-types {
        display: flex;
        padding: 5px 10px;
        width: 100%;
        //border: none;
        //border-radius: 7px;
        font-weight: 600;
    }

    .div-nav .btn-search {
        display: flex;
        width: 100%;
        background-color: #0e5fd5;
        color: #bbb;
        font-wight: 600;
        border-color: #bbb;
        transition: 0.3s;
    }

    .div-nav .btn-search:hover {
        background-color: #0d54bb;
        color: #fff;
        border-color: #fff;
    }

    @media screen and (min-width: 995px) {
        .div-nav .navbar {
            padding-bottom: 8px;
        }

        .div-nav .btn-search {
            width: 300px;
        }
    }
`;
