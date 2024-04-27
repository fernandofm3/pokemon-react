import React from "react";
import PokeTypes from "../../components/PokeTypes";
import imgPokeball from "../../assets/pokeball.png";
import * as S from "./styles";

function PokeEvolutions(props) {
    //Pega apenas o primeiro nome do pokemon.
    function splitName(name) {
        let newName = "";
        if (name.length > 15) {
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
