import React from "react";
import * as S from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Headder = (props) => {
    return (
        <S.Headder>
            <div className="div-nav">
                <nav className="navbar bg-primary navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Imagem do logo." />
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/"
                                        onClick={() => {
                                            props.setOffset(0);
                                        }}
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={
                                            "/pokeinfo?id=1&offset=0&limit=12&type=&color=&qtPokemons=" +
                                            props.TotalItens
                                        }
                                    >
                                        Pokeinfo
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <button
                                        className="nav-link dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Pokedex
                                    </button>

                                    <ul className="dropdown-menu">
                                        <li>
                                            <button
                                                className="dropdown-item btn-generation"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalGeneration"
                                            >
                                                <span>
                                                    <i className="bi bi-boxes me-2"></i>{" "}
                                                    Generation
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item btn-region"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalRegion"
                                            >
                                                <span>
                                                    <i className="bi bi-geo-fill me-2"></i>{" "}
                                                    Region
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item btn-types"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalTypes"
                                            >
                                                <span>
                                                    <i className="bi bi-lightning-fill me-1"></i>{" "}
                                                    Types
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="d-flex" role="search">
                                <button
                                    className="btn btn-light btn-search me-2 "
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalSearch"
                                >
                                    <i className="bi bi-search me-2"></i> Name
                                    or Number
                                </button>
                                <button
                                    className="btn btn-warning"
                                    type="button"
                                >
                                    <i className="bi bi-filter"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </S.Headder>
    );
};

export default Headder;
