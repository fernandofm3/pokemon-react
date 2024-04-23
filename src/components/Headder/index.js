import React from "react";
import * as S from "./styles";
import SearchName from "../../components/SearchName";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Headder = (props) => {
    return (
        <S.Headder>
            <div className="div-nav fixed-top">
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
                                        // to={
                                        //     "/pokeinfo?id=1&offset=0&limit=12&type=&color=&qtPokemons=" +
                                        //     props.TotalItens
                                        // }
                                    >
                                        Pokeinfo
                                    </Link>
                                </li>

                                {props.page !== "allPokemon" && (
                                    <li className="nav-item dropdown">
                                        {/* <button
                                    className="nav-link dropdown-toggle btn-dropdown"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                > */}
                                        <button
                                            className="nav-link dropdown-toggle btn-dropdown"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="true"
                                            aria-expanded="false"
                                        >
                                            Pokedex
                                        </button>

                                        <ul className="dropdown-menu">
                                            <li>
                                                <button
                                                    className="btn btn-outline-danger btn-generation"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalGeneration"
                                                >
                                                    <span>
                                                        <i className="bi bi-diagram-3-fill me-2"></i>{" "}
                                                        Generation
                                                    </span>
                                                </button>
                                            </li>
                                            {/* <li>
                                                <button
                                                    className="btn btn-outline-success btn-region"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalRegion"
                                                >
                                                    <span>
                                                        <i className="bi bi-geo-fill me-2"></i>{" "}
                                                        Region
                                                    </span>
                                                </button>
                                            </li> */}
                                            <li>
                                                <button
                                                    className="btn btn-outline-success btn-types"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalTypes"
                                                >
                                                    <span>
                                                        <i className="bi bi-fire me-1"></i>{" "}
                                                        Types
                                                    </span>
                                                </button>
                                            </li>
                                            <li>
                                                <Link
                                                    to={"/all-pokemon"}
                                                    className="btn btn-outline-dark btn-all-pokemon"
                                                >
                                                    <span>
                                                        <i className="bi bi-globe me-1"></i>{" "}
                                                        All Pokemon
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                )}
                            </ul>

                            {props.page !== "allPokemon" && (
                                <div className="d-flex" role="search">
                                    <button
                                        className="btn btn-light btn-filtres"
                                        type="button"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#filterpokemon"
                                        aria-controls="offcanvasExample"
                                    >
                                        <i className="bi bi-filter"></i>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
                <SearchName SearchNameApi={props.SearchNameApi} />
            </div>
        </S.Headder>
    );
};

export default Headder;
