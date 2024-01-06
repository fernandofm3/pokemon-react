import React from "react";
import * as S from "./styles";

const SearchName = ({ SearchNameApi }) => {
    return (
        <S.SearchName>
            <h6>{SearchNameApi}</h6>
        </S.SearchName>
    );
};

export default SearchName;
