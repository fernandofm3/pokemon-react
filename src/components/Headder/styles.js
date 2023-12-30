import styled from "styled-components";

export const Headder = styled.div`
    .div-nav nav ul li a {
        color: #fff;
        font-weight: bold;
    }

    .div-nav nav ul li button {
        color: #fff;
        font-weight: bold;
    }

    .div-nav nav ul li .dropdown-menu li button {
        color: #000;
        font-weight: bold;
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

    .div-nav .btn-generation span,
    .div-nav .btn-region span,
    .div-nav .btn-types span {
        display: block;
        padding: 5px 0;
        width: 100%;
        border-radius: 7px;
        font-weight: 600;
    }
`;
