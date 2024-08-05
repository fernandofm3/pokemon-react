import React from "react";
import FeaturedPokemon from "../../components/FeaturedPokemon";
import _get from "lodash/get";
import "../../styles/pokeTypes.css";
import { Link } from "react-router-dom";

import * as S from "./styles";

const PokemonModal = ({ infoPokemon, TotalPokemon }) => {
    return (
        <S.PokemonModal>
            <div
                className="modal fade"
                id={"pokemonDetails" + infoPokemon.id}
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                            >
                                <i className="bi bi-info-circle-fill me-1"></i>{" "}
                                Pokémon
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <FeaturedPokemon
                                pokemon={infoPokemon}
                                TotalPokemon={TotalPokemon}
                            />
                        </div>
                        <div className="modal-footer">
                            <Link
                                to={
                                    "/pokeinfo?id=" +
                                    infoPokemon.id +
                                    "&qtPokemons=" +
                                    TotalPokemon
                                }
                                className="btn btn-primary"
                                target="_blank"
                            >
                                {/* <i className="bi bi-info-circle-fill me-1"></i>{" "} */}
                                More Details
                            </Link>

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
        </S.PokemonModal>
    );
};

export default PokemonModal;
