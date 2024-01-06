import React, { useEffect, useState } from "react";
import api from "../../services/api";
import imgRegion from "../../assets/logo.png";
import * as S from "./styles";

const SelectorPokemonsPerRegion = ({
    setRegion,
    Generation,
    setGeneration,
    Types,
    setTypes,
    setRemoveLoading,
    setData,
    setSearchNameApi,
}) => {
    //Pokemons por regiões
    const [PokeRegion, setPokeRegion] = useState([]);

    const [SelectedCard, setSelectedCard] = useState("");

    useEffect(() => {
        api.get(`/pokedex`).then((response) => {
            setPokeRegion(response.data.results);
        });
    }, []);

    //Verifica se o usuário selecionou ourtras consultas.
    //Se o usuário selecionou, a opção ativa com a cor de destaque volta ao normal, mostrando que não tem opção selecionada.
    useEffect(() => {
        if (Generation !== "" || Types !== "") {
            setSelectedCard("");
        }
    }, [Generation, Types]);

    //Pegando o index do card clicado
    const handleCardClick = (index) => {
        setSelectedCard(index);
    };

    return (
        <S.SelectorPokemonsPerRegion>
            <div
                className="modal fade"
                id="modalRegion"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                            >
                                <i className="bi bi-geo-fill me-2"></i> Pokemon
                                Region
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="div-cards-region">
                                {PokeRegion.map((region, index) => {
                                    const splitedNme = region.name.split("-");

                                    return (
                                        <div
                                            data-bs-dismiss="modal"
                                            className={
                                                SelectedCard === index
                                                    ? "card color-selected-card"
                                                    : "card"
                                            }
                                            key={region.name}
                                            onClick={() => {
                                                if (SelectedCard !== index) {
                                                    setData([]);
                                                    setGeneration("");
                                                    setTypes("");
                                                    setRegion(region.name);
                                                    handleCardClick(index);
                                                    setSearchNameApi(
                                                        "Region - " +
                                                            region.name
                                                    );
                                                    setRemoveLoading(false);
                                                }
                                            }}
                                        >
                                            <div className="card-body text-center">
                                                <img
                                                    src={imgRegion}
                                                    alt="Pokemon Region"
                                                />

                                                <h6 className="card-title mt-3">
                                                    {splitedNme[0] &&
                                                    splitedNme[1]
                                                        ? splitedNme[0] +
                                                          " " +
                                                          splitedNme[1]
                                                        : splitedNme[0]}
                                                </h6>
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
        </S.SelectorPokemonsPerRegion>
    );
};

export default SelectorPokemonsPerRegion;
