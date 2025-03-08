import styled from "styled-components";

export const Headder = styled.div`
    .div-nav .navbar {
        padding-bottom: 8px;
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
    .div-nav .btn-types,
    .div-nav .btn-all-pokemon {
        display: flex;
        padding: 5px 10px;
        width: 100%;
        font-weight: 600;
    }

    .div-nav .btn-all-pokemon {
        color: #000;
    }

    .div-nav .btn-all-pokemon:hover {
        color: #fff;
    }

    .div-nav .btn-generation,
    .div-nav .btn-region,
    .div-nav .btn-types,
    .div-nav .btn-header-pokemon {
        display: flex;
        padding: 5px 10px;
        width: 100%;
        font-weight: 600;
    }

    .div-nav .btn-header-pokemon {
        color: #343a40;
    }

    .div-nav .btn-header-pokemon:hover {
        color: #fff;
    }

    .div-nav .btn-filtres {
        font-weight: 600;
    }
`;
