import React from "react";
import * as S from "./styles";
//import { Link } from 'react-router-dom';

function PokeImages(props) {
    //Adicionando zero a esqueda no númeoro do Pokemon.
    function zeroLeft(pokeId) {
        if (pokeId < 10) {
            return "00" + pokeId;
        }

        if (pokeId >= 10 && pokeId < 100) {
            return "0" + pokeId;
        }

        if (pokeId >= 100) {
            return pokeId;
        }
    }

    //Gera o ID do próximo pokemon.
    let nextPokemon = Number(props.id) + 1;
    if (nextPokemon > props.TotalPokemons) {
        nextPokemon = 1;
    }
    //Gera o ID do pokemon anterior.
    let previewsPokemon = Number(props.id) - 1;
    if (previewsPokemon === 0) {
        previewsPokemon = props.TotalPokemons;
    }

    //Remove classe CSS
    function removeclassCss(item, classItem) {
        let element = document.querySelector(item);
        element.classList.remove(classItem);
    }

    //Adiciona Classe CSS
    function addClassCss() {
        let img = document.querySelector("#imgPokeInfo");
        let divImg = document.querySelector(".div-images");

        if (img) {
            //Verificando e comparando a url da imagem atual com a que veio da props.
            if (img.src !== props.img) {
                divImg.classList.add("animate__fadeIn");
            }
        }
    }
    addClassCss();

    return (
        <S.PokeImages>
            <h1>
                <span className="poke-number">Nº {zeroLeft(props.id)}</span> -{" "}
                <span className="poke-name">{props.name}</span>
            </h1>

            <div className="div-images animate__animated animate__fadeIn animate__slow">
                <img
                    id="imgPokeInfo"
                    src={props.img}
                    alt="Imagem do Pokemon."
                />
            </div>

            <div className="div-btn">
                <button
                    className="btn-previews"
                    onClick={() => {
                        //props.setRemoveLoading(false);
                        props.setPokemonId(previewsPokemon);
                        removeclassCss(".div-images", "animate__fadeIn");
                    }}
                >
                    <i className="bi bi-chevron-double-left"></i>
                </button>

                <button
                    className="btn-next"
                    onClick={() => {
                        //props.setRemoveLoading(false);
                        props.setPokemonId(nextPokemon);
                        removeclassCss(".div-images", "animate__fadeIn");
                    }}
                >
                    <i className="bi bi-chevron-double-right"></i>
                </button>
            </div>
        </S.PokeImages>
    );
}

export default PokeImages;
