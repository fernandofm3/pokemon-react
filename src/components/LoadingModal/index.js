import React from "react";
import * as S from "./styles";
import imgLoading from "../../assets/pikachu-loading.gif";

function LoadingModal() {
    return (
        <S.LoadingModal>
            <img
                className="animate__animated animate__headShake animate__infinite mb-3 img-pikachu-loading"
                src={imgLoading}
                alt="Loading..."
            />
            <h1 className="animate__animated animate__pulse animate__infinite">
                Loading...
            </h1>
        </S.LoadingModal>
    );
}

export default LoadingModal;
