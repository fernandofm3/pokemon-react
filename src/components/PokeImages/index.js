import React from "react";
import * as S from "./styles";

function PokeImages(props) {
    //Verificando se o Pokemon atual é uma variação. Se for uma variação, o id do Pokemon principal será mantido.
    let idPokemonActual;
    if (props.id <= props.TotalPokemons) {
        idPokemonActual = props.id;
    } else {
        let splitedUrl = props.varieties[0].pokemon.url.split("/");
        idPokemonActual = splitedUrl[6];
    }

    //Extrair o ID da url
    function getIdVerietieOfUrl(urlVarietie) {
        const splitedUrl = urlVarietie.split("/");
        //props.setPokemonIdVarieties(splitedUrl[6]);
        props.setPokemonId(splitedUrl[6]);
    }

    //Verrificando o tamanho do NOME do Pokemon, se preciso o nome será dividio e mostrado só o primeiro nome.
    function splitNameVarieties(name) {
        let newName = "";
        if (name.length > 10) {
            let splitedName = name.split("-");
            newName = splitedName[0];
        } else {
            newName = name;
        }
        return newName;
    }

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
    let nextPokemon = 0;
    let previewsPokemon = 0;
    if (props.id <= props.TotalPokemons) {
        nextPokemon = Number(props.id) + 1;
        if (nextPokemon > props.TotalPokemons) {
            nextPokemon = 1;
        }
        //Gera o ID do pokemon anterior.
        previewsPokemon = Number(props.id) - 1;
        if (previewsPokemon === 0) {
            previewsPokemon = props.TotalPokemons;
        }
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
            <div className="div-nome-id-pokemon">
                <h1>
                    <span className="poke-number">
                        Nº {zeroLeft(idPokemonActual)}
                    </span>{" "}
                    -{" "}
                    <span className="poke-name">
                        {splitNameVarieties(props.name)}
                    </span>
                </h1>

                {props.varieties.length > 1 && (
                    <select
                        className="form-select form-select-sm select-nome-id-pokemon"
                        aria-label=".form-select-lg example"
                        onChange={(e) => {
                            getIdVerietieOfUrl(e.target.value);
                            removeclassCss(".div-images", "animate__fadeIn");
                        }}
                    >
                        {props.varieties.map((v) => (
                            <option value={v.pokemon.url} key={v.pokemon.name}>
                                {v.pokemon.name}
                            </option>
                        ))}
                    </select>
                )}
            </div>

            <div className="div-images animate__animated animate__fadeIn animate__slow">
                <img
                    id="imgPokeInfo"
                    src={props.img}
                    alt="Imagem do Pokemon."
                />
            </div>

            <div className="div-btn">
                {props.id <= props.TotalPokemons ? (
                    <button
                        className="btn-previews"
                        onClick={() => {
                            props.setPokemonId(previewsPokemon);
                            removeclassCss(".div-images", "animate__fadeIn");
                        }}
                    >
                        <i className="bi bi-chevron-double-left"></i>
                    </button>
                ) : (
                    <button
                        disabled
                        className="btn-previews"
                        style={{ backgroundColor: "#eee" }}
                    >
                        <i className="bi bi-chevron-double-left"></i>
                    </button>
                )}

                {props.id <= props.TotalPokemons ? (
                    <button
                        className="btn-next"
                        onClick={() => {
                            props.setPokemonId(nextPokemon);
                            removeclassCss(".div-images", "animate__fadeIn");
                        }}
                    >
                        <i className="bi bi-chevron-double-right"></i>
                    </button>
                ) : (
                    <button
                        disabled
                        className="btn-next"
                        style={{ backgroundColor: "#eee" }}
                    >
                        <i className="bi bi-chevron-double-right"></i>
                    </button>
                )}
            </div>
        </S.PokeImages>
    );
}

export default PokeImages;
