import React from "react";
import * as S from "./styles";
import imgLoading from '../../assets/pokeball.png';

function Loading () {
    return (
        <S.Loading>
            <img className="animate__animated animate__headShake animate__infinite" src={imgLoading} alt='Loagind...' />
            <h1>Loading...</h1>
        </S.Loading>
    )
}

export default Loading;