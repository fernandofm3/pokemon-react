import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "../../styles/pokeTypes.css";
import * as S from "./styles";

const SelectorPokemonType = ({
    setTypes,
    Region,
    setRegion,
    Generation,
    setGeneration,
    setRemoveLoading,
    setData,
    setSearchNameApi,
}) => {
    useEffect(() => {
        //Buscando a lista com os nomes do TIPOS de Pokemons
        api.get(`/type`).then((response) => {
            setListNameType(response.data.results);
        });
    }, []);

    //Lista de tipos
    const [ListNameType, setListNameType] = useState([]);

    const [SelectedType, setSelectedType] = useState("");

    //Verifica se o usuário selecionou ourtras consultas.
    //Se o usuário selecionou, a opção ativa com a cor de destaque volta ao normal, mostrando que não tem opção selecionada.
    useEffect(() => {
        if (Generation !== "" || Region !== "") {
            setSelectedType("");
        }
    }, [Generation, Region]);

    //Pegando o index do card clicado
    const handleCardClick = (index) => {
        setSelectedType(index);
    };

    return (
        <S.SelectorPokemonType>
            <div
                className="modal fade"
                id="modalTypes"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                            >
                                <i className="bi bi-lightning-fill me-2"></i>{" "}
                                Pokemon Types
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="div-cards-types">
                                {ListNameType.map((type, index) => {
                                    return (
                                        index < 18 && (
                                            <div
                                                data-bs-dismiss="modal"
                                                className={
                                                    SelectedType === index
                                                        ? "card color-selected-card"
                                                        : "card"
                                                }
                                                key={index}
                                                onClick={() => {
                                                    if (
                                                        SelectedType !== index
                                                    ) {
                                                        setData([]);
                                                        setGeneration("");
                                                        setRegion("");
                                                        handleCardClick(index);
                                                        setTypes(type.name);
                                                        setSearchNameApi(
                                                            type.name +
                                                                "-type Pokemon"
                                                        );
                                                        setRemoveLoading(false);
                                                    }
                                                }}
                                            >
                                                <div className="card-body">
                                                    <div
                                                        className={`poke__type__bg ${type.name}`}
                                                    >
                                                        <img
                                                            src={`${type.name}.png`}
                                                            alt="poke-type"
                                                        ></img>
                                                    </div>

                                                    <h6 className="card-title">
                                                        <span>{type.name}</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        )
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
        </S.SelectorPokemonType>
    );
};

export default SelectorPokemonType;
