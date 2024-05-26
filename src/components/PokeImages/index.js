import React, { useState } from "react";
import * as S from "./styles";
import PokeTypes from "../../components/PokeTypes";
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

    //Dividindo a URL para pegar o ID da Geração
    function getNumberGenerationOfUrl(url) {
        const splitedUrGeneration = url.split("/");
        return splitedUrGeneration[6];
    }

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
    function getIdVerietieOfUrl(urlVarietie, imgClass) {
        const splitedUrl = urlVarietie.split("/");
        props.setPokemonId(splitedUrl[6]);
        removeclassCss(imgClass);
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
    function removeclassCss(imgClass) {
        let img = document.querySelector(imgClass);
        img.classList.remove("animate__fadeIn");
        img.classList.add("animate__fadeOut");
        img.classList.add("animate__fester");

        setTimeout(() => {
            addClassCss(imgClass);
        }, 300); // 3000 milissegundos = 3 segundos
    }

    // //Adiciona classe  de animação Animate CSS
    function addClassCss(imgClass) {
        let img = document.querySelector(imgClass);

        if (img) {
            //Verificando e comparando a url da imagem atual com a que veio da props.
            if (img.src !== props.img) {
                img.classList.add("animate__fadeIn");
                img.classList.remove("animate__fadeOut");
                //img.classList.add("animate__delay-1s");
            }
        }
    }

    return (
        <S.PokeImages className="h-100">
            <div className="row h-100">
                <div className="col-md-8">
                    <div className="div-nome-id-pokemon">
                        <h1>
                            <span className="poke-name">
                                {splitNameVarieties(props.name)}
                            </span>
                            <span className="poke-number">
                                #{zeroLeft(idPokemonActual)}
                            </span>{" "}
                        </h1>
                    </div>

                    <div className="div-image-mobile">
                        <div className="div-select-varietes">
                            {props.varieties.length > 1 && (
                                <select
                                    className="select-nome-id-pokemon"
                                    onChange={(e) => {
                                        getIdVerietieOfUrl(
                                            e.target.value,
                                            ".imgPokeInfoMobile"
                                        );
                                    }}
                                >
                                    {props.varieties.map((v) => (
                                        <option
                                            value={v.pokemon.url}
                                            key={v.pokemon.name}
                                        >
                                            {v.pokemon.name}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>

                        <div className="div-image-btn">
                            <div className="div-image animate__animated animate__fadeIn mb-4">
                                {ImgPokemon !== null && props.img ? (
                                    <img
                                        //id="imgPokeInfo"
                                        className="imgPokeInfoMobile animate__animated animate__fadeIn"
                                        src={ImgPokemon}
                                        alt="Imagem do Pokemon."
                                    />
                                ) : (
                                    <img
                                        //id="imgPokeInfo"
                                        className="imgPokeInfoMobile animate__animated animate__fadeIn opacity-25"
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
                                            removeclassCss(
                                                ".imgPokeInfoMobile"
                                            );
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
                                            removeclassCss(
                                                ".imgPokeInfoMobile"
                                            );
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
                        </div>
                    </div>

                    <h5 className="text-generation">
                        Pokémon introduced in{" "}
                        <span>
                            Generation{" "}
                            {props.generation &&
                                getNumberGenerationOfUrl(props.generation)}
                        </span>
                    </h5>

                    <p className="text-description">{props.description}</p>

                    <div className="ms-3 dashboard-types">
                        <PokeTypes
                            types={props.types}
                            imgSize={"25px"}
                            bgSize={"50px"}
                        />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="div-image-desktop">
                        <div className="div-select-varietes">
                            {props.varieties.length > 1 && (
                                <select
                                    className="select-nome-id-pokemon"
                                    onChange={(e) => {
                                        getIdVerietieOfUrl(
                                            e.target.value,
                                            ".imgPokeInfo"
                                        );
                                    }}
                                >
                                    {props.varieties.map((v) => (
                                        <option
                                            value={v.pokemon.url}
                                            key={v.pokemon.name}
                                        >
                                            {v.pokemon.name}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>

                        <div className="div-image-btn">
                            <div className="div-image animate__animated animate__fadeIn mb-4">
                                {ImgPokemon !== null && props.img ? (
                                    <img
                                        //id="imgPokeInfo"
                                        className="imgPokeInfo animate__animated animate__fadeIn"
                                        src={ImgPokemon}
                                        alt="Imagem do Pokemon."
                                    />
                                ) : (
                                    <img
                                        //id="imgPokeInfo"
                                        className="imgPokeInfo animate__animated animate__fadeIn opacity-25"
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
                                            removeclassCss(".imgPokeInfo");
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
                                            removeclassCss(".imgPokeInfo");
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
                        </div>
                    </div>
                </div>
            </div>
        </S.PokeImages>
    );
}

export default PokeImages;
