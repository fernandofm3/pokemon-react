import React from "react";
import "../../styles/pokeTypes.css";
import * as S from "./styles";
import { Tooltip as ReactTooltip } from "react-tooltip";

function PokeTypes(props) {
    //Número aliatório
    let randomNumber = Math.floor(Math.random() * 101);
    //Transfora número aliatório em string
    let randomNumberString = randomNumber.toString();

    const generateTooltipContent = (typeName) => {
        if (
            props.pokemonTypes &&
            props.pokemonTypes != 0 &&
            props.AtkDfs === "defense"
        ) {
            return `
                <div class="tooltip-content">
                    <span>${typeName}</span>
                    <span><i class="bi bi-tornado ms-1"></i></span>
                    <span><i class="bi bi-arrow-right me-2 ms-2"></i></span>
                    <span><i class="bi bi-shield me-1"></i></span>
                    <span class="pokemon-type">${props.pokemonTypes.map((t) => {
                        return " " + t.type.name;
                    })}</span>
                    
                </div>
                `;
        } else if (
            props.pokemonTypes &&
            props.pokemonTypes != 0 &&
            props.AtkDfs === "attack"
        ) {
            return `
            <div class="tooltip-content">
                <span class="pokemon-type">${props.pokemonTypes.map((t) => {
                    return " " + t.type.name;
                })}</span>
                <span><i class="bi bi-tornado ms-1"></i></span>
                <span><i class="bi bi-arrow-right me-2 ms-2"></i></span>   
                <span><i class="bi bi-shield me-1"></i></span>             
                <span>${typeName}</span>

            </div>
            `;
        } else {
            return `
            <div class="tooltip-content">
                <span>${typeName}</span>                    
            </div>
            `;
        }
    };

    let imgSize = "20px";
    let bgSize = "40px";

    if (props.imgSize) {
        imgSize = props.imgSize;
    }

    if (props.bgSize) {
        bgSize = props.bgSize;
    }

    const imgStyle = {
        width: imgSize,
        height: imgSize,
    };

    const bgStyle = {
        width: bgSize,
        height: bgSize,
    };

    return (
        <S.PokeTypes>
            <div className="div-types">
                {props.types?.map((t) => (
                    <div
                        className="p-1 pe-2 ps-2 pb-3"
                        key={
                            t.type.name +
                            props.pokeId +
                            t.type.damage +
                            randomNumberString
                        }
                    >
                        <div
                            data-tooltip-id={
                                t.type.name +
                                props.pokeId +
                                t.type.damage +
                                randomNumberString
                            }
                            data-tooltip-html={generateTooltipContent(
                                t.type.name
                            )}
                            className={`poke__type__bg ${t.type.name}`}
                            style={bgStyle}
                        >
                            <img
                                src={`${t.type.name}.png`}
                                alt="poke-type"
                                style={imgStyle}
                            ></img>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            {t.type.damage === 0 && (
                                <span className="badge text-bg-secondary me-0 ms-0">
                                    {t.type.damage}
                                </span>
                            )}
                            {t.type.damage === 0.25 && (
                                <span className="badge text-bg-danger me-0 ms-0">
                                    {t.type.damage}
                                </span>
                            )}
                            {t.type.damage === 0.5 && (
                                <span className="badge text-bg-warning me-0 ms-0">
                                    {t.type.damage}
                                </span>
                            )}
                            {t.type.damage === 2 && (
                                <span className="badge text-bg-primary me-0 ms-0">
                                    {t.type.damage}
                                </span>
                            )}

                            {t.type.damage > 2 && (
                                <span className="badge text-bg-success me-0 ms-0">
                                    {t.type.damage}
                                </span>
                            )}
                        </div>

                        <ReactTooltip
                            id={
                                t.type.name +
                                props.pokeId +
                                t.type.damage +
                                randomNumberString
                            }
                            place="bottom"
                            className="custom-tooltip"
                        />
                    </div>
                ))}
            </div>
        </S.PokeTypes>
    );
}

export default PokeTypes;
