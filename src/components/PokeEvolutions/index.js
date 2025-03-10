import React from "react";
import PokeTypes from "../../components/PokeTypes";
import imgPokeball from "../../assets/pokeball.png";
import { zeroLeft, splitName } from "../../utils/utils";
import * as S from "./styles";

function PokeEvolutions(props) {
    return (
        <S.PokeEvolutions>
            {props.img ? (
                <img
                    className="evo-img-pokemon"
                    src={props.img}
                    alt="Imagem do Pokemon."
                />
            ) : (
                <img
                    className="evo-img-pokemon opacity-25"
                    src={imgPokeball}
                    alt="Imagem do Pokemon."
                />
            )}

            <div className="evo-type-pokemon">
                <PokeTypes types={props.types} />
            </div>

            <p className="div-evo-name-num">
                <span className="evo-name-pokemon">
                    {splitName(props.name)}
                </span>
                <span className="evo-num-pokemon">#{zeroLeft(props.id)}</span>{" "}
            </p>
        </S.PokeEvolutions>
    );
}

export default PokeEvolutions;
