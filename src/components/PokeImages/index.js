import React, { useState } from "react";
import * as S from "./styles";
import imgPokeball from "../../assets/pokeball.png";

function PokeImages(props) {
    //controlando a exibição da imagem após ir ao próximo Pokemon ou voltar um Pokemon
    const [ImgPokemon, setImgPokemon] = useState(() => {
        if (props.img) {
            return props.img;
        } else {
            return imgPokeball;
        }
    });

    if (props.img) {
        if (ImgPokemon !== props.img) {
            setImgPokemon(props.img);
        }
    } else {
        if (ImgPokemon !== imgPokeball) {
            setImgPokemon(imgPokeball);
        }
    }

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

        if (name.length > 20) {
            let splitedName = name.split("-");
            newName = splitedName[0];
        } else {
            newName = name.replace(/-/g, " ");
        }
        return newName;
    }

    //Adicionando zero a esqueda no númeoro do Pokemon.
    function zeroLeft(pokeId) {
        if (pokeId < 10) {
            return "000" + pokeId;
        }

        if (pokeId >= 10 && pokeId < 100) {
            return "00" + pokeId;
        }

        if (pokeId >= 100 && pokeId < 1000) {
            return "0" + pokeId;
        }

        if (pokeId >= 1000) {
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

    //Remove a classe de animação Animate CSS
    function removeclassCss() {
        let img = document.querySelector(".imgPokeInfo");
        img.classList.remove("animate__backInLeft");
    }

    // //Adiciona classe  de animação Animate CSS
    function addClassCss() {
        let img = document.querySelector(".imgPokeInfo");
        if (img) {
            //Verificando e comparando a url da imagem atual com a que veio da props.
            if (img.src !== props.img) {
                img.classList.add("animate__backInLeft");
                //img.classList.add("animate__delay-1s");
            }
        }
    }
    addClassCss();

    return (
        <S.PokeImages>
            <div className="div-nome-id-pokemon">
                <h1>
                    <span className="poke-name">
                        {splitNameVarieties(props.name)}
                    </span>
                    <span className="poke-number">
                        #{zeroLeft(idPokemonActual)}
                    </span>{" "}
                </h1>

                {props.varieties.length > 1 && (
                    <select
                        className="select-nome-id-pokemon"
                        //aria-label=".form-select-lg example"
                        onChange={(e) => {
                            getIdVerietieOfUrl(e.target.value);
                            removeclassCss();
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

            <div className="div-images animate__animated animate__fadeIn">
                {ImgPokemon !== null && props.img ? (
                    <img
                        id="imgPokeInfo"
                        className="imgPokeInfo animate__animated animate__backInLeft"
                        src={ImgPokemon}
                        alt="Imagem do Pokemon."
                    />
                ) : (
                    <img
                        id="imgPokeInfo"
                        className="imgPokeInfo animate__animated animate__backInLeft opacity-25"
                        src={ImgPokemon}
                        alt="Imagem do Pokemon."
                    />
                )}
            </div>

            <div className="div-btn">
                {props.id <= props.TotalPokemons ? (
                    <button
                        className="btn-previews"
                        onClick={() => {
                            setImgPokemon(null);
                            props.setPokemonId(previewsPokemon);
                            removeclassCss();
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
                            setImgPokemon(null);
                            props.setPokemonId(nextPokemon);
                            removeclassCss();
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
