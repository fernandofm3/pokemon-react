import React from "react";
import * as S from "./styles";

function PokeDescription (props) {
    return (
        <S.PokeDescription>
            <h6>Description</h6>
            <p>{props.description}</p>
        </S.PokeDescription>
    )
}

export default PokeDescription;