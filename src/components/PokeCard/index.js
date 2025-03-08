import React from "react";
import * as S from "./styles";
import PokeTypes from "../../components/PokeTypes";
import _get from "lodash/get";
import imgPokeball from "../../assets/pokeball.png";
import {
    colorTypeGradients,
    spriteAdapterOfficial,
    zeroLeft,
    splitName,
} from "../../utils/utils";

function PokeCard(props) {
    const spriteOfficial = spriteAdapterOfficial(props.img);

    //Definindo a cor do card com base na cor do tipo
    let finalColor;

    if (props.types.length === 2) {
        finalColor = colorTypeGradients(
            props.types[0].type.name,
            props.types[1].type.name,
            props.types.length
        );
    } else {
        finalColor = colorTypeGradients(
            props.types[0].type.name,
            props.types[0].type.name,
            props.types.length
        );
    }

    return (
        <S.PokeCard>
            <a
                href={`/pokeinfo?id=${props.id}&qtPokemons=${props.TotalPokemon}`} // Link real
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                    if (e.button === 0) {
                        // Evita o comportamento padrão para o clique esquerdo
                        e.preventDefault();

                        // Janela centralizada
                        const width = 1200;
                        const height = 700;
                        const left = (window.screen.width - width) / 2;
                        const top = (window.screen.height - height) / 2;

                        window.open(
                            `/pokeinfo?id=${props.id}&qtPokemons=${props.TotalPokemon}`,
                            "_blank",
                            `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,status=no`
                        );
                    }
                }}
            >
                <div
                    className="card animate__animated animate__fadeIn animate__slow"
                    style={{
                        background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})`,
                    }}
                >
                    <p className="pokeNum">#{zeroLeft(props.id)}</p>
                    <div className="div-img">
                        {!spriteOfficial ? (
                            <img
                                className="opacity-25"
                                src={imgPokeball}
                                alt="Imagem do Pokemon."
                            />
                        ) : (
                            <img
                                src={spriteOfficial}
                                alt="Imagem do Pokemon."
                            />
                        )}
                    </div>

                    <p className="pokeName">{splitName(props.name)}</p>
                </div>
            </a>

            <div className="divPokeTypes animate__animated animate__fadeIn animate__slow">
                <PokeTypes types={props.types} pokeId={props.id} />
            </div>
        </S.PokeCard>
    );
}

export default PokeCard;
