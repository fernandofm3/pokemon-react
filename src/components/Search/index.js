import React, { useEffect, useState } from "react";
import api from "../../services/api";
import FeaturedPokemon from "../../components/FeaturedPokemon";
import * as S from "./styles";

const SearchPokemon = () => {
    //Função que verifica se o usuário apertou o Enter.
    // const handleKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //         setSearch(event.target.value.toLowerCase());
    //     }
    // };

    const [Search, setSearch] = useState("1");
    const [SearchPokemon, setSearchPokemon] = useState([]);

    useEffect(() => {
        if (Search !== "") {
            api.get(`/pokemon/${Search}`).then((response) => {
                setSearchPokemon([response.data]);
            });
        }
    }, [Search]);

    return (
        <S.SearchBar>
            <div
                className="modal fade div-modal-search"
                id="modalSearch"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="input-group input-group-lg mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <i className="bi bi-search"></i>
                                </span>
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Name or Number"
                                    aria-label="Search"
                                    onChange={(event) => {
                                        setSearch(
                                            event.target.value.toLowerCase()
                                        );
                                    }}
                                    //onKeyDown={handleKeyDown}
                                />
                            </div>

                            {SearchPokemon.length !== 0 && (
                                <div className="div-component-featured-pokemon">
                                    <FeaturedPokemon
                                        pokemon={SearchPokemon[0]}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </S.SearchBar>
    );
};

export default SearchPokemon;
