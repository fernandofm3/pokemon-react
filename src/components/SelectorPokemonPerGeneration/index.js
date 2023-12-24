import React, { useEffect, useState } from "react";
import api from "../../services/api";
import imgPokeball from "../../assets/pokeball.png";
import * as S from "./styles";

const SelectorPokemonsPerGeneration = ({ setRemoveLoading, setGeneration }) => {
    //Pokemons por regiões
    const [PokeGererations, setPokeGenerations] = useState([]);

    const [SelectedCard, setSelectedCard] = useState(0);

    useEffect(() => {
        api.get(`/generation`).then((response) => {
            setPokeGenerations(response.data.results);
        });
    }, []);

    //Pegando o index do card clicado
    const handleCardClick = (index) => {
        setSelectedCard(index);
    };

    return (
        <S.SelectorPokemonsPerGeneration>
            <div
                className="modal fade"
                id="modalGeneration"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                            >
                                <i className="bi bi-boxes me-2"></i> Pokemon
                                Generation
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="div-cards-generation">
                                {PokeGererations.map((generation, index) => {
                                    const splitedUrl =
                                        generation.url.split("/");

                                    return (
                                        <div
                                            className={
                                                SelectedCard === index
                                                    ? "card color-selected-card"
                                                    : "card"
                                            }
                                            key={generation.name}
                                            onClick={() => {
                                                if (SelectedCard !== index) {
                                                    setGeneration(
                                                        splitedUrl[6]
                                                    );
                                                    handleCardClick(index);
                                                    setRemoveLoading(false);
                                                }
                                            }}
                                        >
                                            <div className="card-body text-center">
                                                <img
                                                    className="mb-3"
                                                    src={imgPokeball}
                                                    alt="Pokemon Generation"
                                                />

                                                <h6 className="card-title">
                                                    Generation
                                                </h6>
                                                <h3 className="card-title">
                                                    {splitedUrl[6]}
                                                </h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
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

            {/* <div className="div-selector-box">
               
                <div className="form-floating">
                    <select
                        className="form-select"
                        aria-label="Floating label select example"
                        id="floatingSelect"                        
                        onChange={(e) => {
                            console.log(e.target.value);
                            setRegionName(e.target.value);
                            setRemoveLoading(false);
                        }}
                        
                    >
                        <option selected disabled>
                            Open this select menu
                        </option>
                        {pokeRegion.map((region) => (
                            <option value={region.name} key={region.name}>
                                {" "}
                                {region.name}{" "}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="floatingSelect">Pokemon per Region</label>
                </div>
            </div> */}
        </S.SelectorPokemonsPerGeneration>
    );
};

export default SelectorPokemonsPerGeneration;
