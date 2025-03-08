import React, { useState } from "react";
import * as S from "./styles";
import PokeTypes from "../../components/PokeTypes";
import imgPokeball from "../../assets/pokeball.png";
import {
    getNumberGenerationOfUrl,
    getIdVerietieOfUrl,
    splitNameVarieties,
    zeroLeft,
    removeclassCss,
} from "../../utils/utils.js";
import { borderColorInfoPokemon } from "../../utils/utils";

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

    return (
        <S.PokeImages className="h-100">
            <div className="row h-100">
                <div className="col-md-8">
                    <div className="div-nome-id-pokemon">
                        <h1>
                            <span
                                className="poke-name"
                                style={{
                                    color: `${borderColorInfoPokemon(
                                        props.pokemonColor
                                    )}`,
                                }}
                            >
                                {splitNameVarieties(props.name)}
                            </span>
                            <span className="poke-number">
                                #{zeroLeft(idPokemonActual)}
                            </span>{" "}
                            {props.pokemonCategory &&
                            props.pokemonCategory.baby === true ? (
                                <div
                                    className="div-title-category-pokemon"
                                    style={{
                                        background:
                                            "linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)",
                                    }}
                                >
                                    <h4>Baby</h4>
                                </div>
                            ) : props.pokemonCategory.legendary === true ? (
                                <div
                                    className="div-title-category-pokemon"
                                    style={{
                                        background:
                                            "radial-gradient(circle at 10% 20%, rgb(228, 118, 0) 0%, rgb(247, 189, 2) 90%)",
                                    }}
                                >
                                    <h4>Legendary</h4>
                                </div>
                            ) : props.pokemonCategory.mythical === true ? (
                                <div
                                    className="div-title-category-pokemon"
                                    style={{
                                        background:
                                            "linear-gradient(109.8deg, rgb(62, 5, 116) -5.2%, rgb(41, 14, 151) -5.2%, rgb(216, 68, 148) 103.3%)",
                                    }}
                                >
                                    <h4>Mythical</h4>
                                </div>
                            ) : (
                                ""
                            )}
                        </h1>
                    </div>

                    <div className="div-image-mobile">
                        {props.pokeComparation ? (
                            ""
                        ) : (
                            <div className="div-select-varietes">
                                {props.varieties.length > 1 && (
                                    <select
                                        className="select-nome-id-pokemon"
                                        onChange={(e) => {
                                            getIdVerietieOfUrl(
                                                e.target.value,
                                                ".imgPokeInfoMobile",
                                                props.setPokemonId,
                                                removeclassCss
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
                        )}

                        <div className="div-image-btn">
                            <div className="div-image animate__animated animate__fadeIn mb-4">
                                {ImgPokemon !== null && props.img ? (
                                    <img
                                        className="imgPokeInfoMobile animate__animated animate__fadeIn"
                                        src={ImgPokemon}
                                        alt="Imagem do Pokemon."
                                    />
                                ) : (
                                    <img
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
                        <span className="me-1">
                            Generation{" "}
                            {props.generation &&
                                getNumberGenerationOfUrl(props.generation)}
                        </span>
                        -
                        <span className="ms-1 text-capitalize">
                            {props.regionName &&
                                props.regionName.name + " region"}
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
                        {props.pokeComparation ? (
                            ""
                        ) : (
                            <div className="div-select-varietes">
                                {props.varieties.length > 1 && (
                                    <select
                                        className="select-nome-id-pokemon"
                                        onChange={(e) => {
                                            getIdVerietieOfUrl(
                                                e.target.value,
                                                ".imgPokeInfo",
                                                props.setPokemonId,
                                                removeclassCss
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
                        )}

                        <div className="div-image-btn">
                            <div className="div-image animate__animated animate__fadeIn mb-4">
                                {ImgPokemon !== null && props.img ? (
                                    <img
                                        className="imgPokeInfo animate__animated animate__fadeIn"
                                        src={ImgPokemon}
                                        alt="Imagem do Pokemon."
                                    />
                                ) : (
                                    <img
                                        className="imgPokeInfo animate__animated animate__fadeIn opacity-25"
                                        src={ImgPokemon}
                                        alt="Imagem do Pokemon."
                                    />
                                )}
                            </div>

                            {props.pokeComparation ? (
                                ""
                            ) : (
                                <div className="div-btn">
                                    {props.id <= props.TotalPokemons ? (
                                        <button
                                            className="btn-previews"
                                            onClick={() => {
                                                setImgPokemon(null);
                                                props.setPokemonId(
                                                    previewsPokemon
                                                );
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </S.PokeImages>
    );
}

export default PokeImages;
