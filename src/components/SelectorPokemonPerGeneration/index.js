import React, { useEffect, useState } from "react";
import api from "../../services/api";
import imgGeneration from "../../assets/logo.png";
import * as S from "./styles";

const SelectorPokemonsPerGeneration = ({
    Generation,
    setGeneration,
    Region,
    setRegion,
    Types,
    setTypes,
    setRemoveLoading,
    setData,
    setSearchNameApi,
}) => {
    //Pokemons por gerações
    const [PokeGererations, setPokeGenerations] = useState([]);

    const [SelectedCard, setSelectedCard] = useState(Number(Generation - 1));

    useEffect(() => {
        api.get(`/generation`).then((response) => {
            setPokeGenerations(response.data.results);
        });
    }, []);

    //Verifica se o usuário selecionou ourtras consultas.
    //Se o usuário selecionou, a opção ativa com a cor de destaque volta ao normal, mostrando que não tem opção selecionada
    useEffect(() => {
        if (Region !== "" || Types !== "") {
            setSelectedCard("");
        }
    }, [Region, Types]);

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
                <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                            >
                                <i className="bi bi-diagram-3-fill me-2"></i>{" "}
                                Pokemon Generation
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
                                            data-bs-dismiss="modal"
                                            className={
                                                SelectedCard === index
                                                    ? "card color-selected-card"
                                                    : "card"
                                            }
                                            key={generation.name}
                                            onClick={() => {
                                                if (SelectedCard !== index) {
                                                    setData([]);
                                                    setRegion("");
                                                    setTypes("");
                                                    setGeneration(
                                                        splitedUrl[6]
                                                    );
                                                    handleCardClick(index);
                                                    setSearchNameApi(
                                                        "Generation " +
                                                            splitedUrl[6]
                                                    );
                                                    setRemoveLoading(false);
                                                }
                                            }}
                                        >
                                            <div className="card-body text-center">
                                                <img
                                                    className="mb-3"
                                                    src={imgGeneration}
                                                    alt="Pokemon Generation"
                                                />

                                                <h6 className="card-title">
                                                    Generation{" "}
                                                    <span>{splitedUrl[6]}</span>
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
