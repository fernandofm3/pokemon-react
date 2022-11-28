import React from "react";
import * as S from "./styles";
import imgLoading from '../../assets/pikachu-loading.gif';

function Loading () {
    return (
        <S.Loading>
            <img src={imgLoading} alt='Loagind...' />
            <h1>Loading...</h1>
        </S.Loading>
    )
}

export default Loading;