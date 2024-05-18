import React from "react";
import * as S from "./styles";

function PokeDescription(props) {
    //Dividindo a URL para pegar o ID da Geração
    const splitedUrGeneration = props.generation.split("/");

    return (
        <S.PokeDescription>
            <h6>Description</h6>

            <p>
                <span>{props.name}</span> is a{" "}
                <span>
                    {props.types.map((type) => {
                        return type.type.name + "-";
                    })}
                </span>
                type pokemon and its introduction into the pokemon world was in{" "}
                <span>Generation {splitedUrGeneration[6]}</span>. Its gender is{" "}
                <span>{props.genres}</span>. {props.description}
            </p>
        </S.PokeDescription>
    );
}

export default PokeDescription;
