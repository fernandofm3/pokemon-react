import React from "react";
import * as S from "./styles";

const SelectorItemPerPage = ({
    setLimit,
    limit,
    Search,
    SelectorType,
    SelectorColor,
    setRemoveLoading,
    setOffset,
}) => {
    return (
        <S.SelectorItemPerPage>
            <div className="div-selector-box">
                <label htmlFor="selector-box">Display:</label>
                <select
                    id="selector-box"
                    value={limit}
                    onChange={(e) => {
                        setLimit(Number(e.target.value));
                        setOffset(0);
                        setRemoveLoading(false);
                    }}
                    disabled={
                        Search !== ""
                            ? true
                            : SelectorType !== ""
                            ? true
                            : SelectorColor !== ""
                            ? true
                            : false
                    }
                >
                    <option value={20}>20 Pokemons </option>
                    <option value={40}>40 Pokemons </option>
                    <option value={60}>60 Pokemons </option>
                    <option value={80}>80 Pokemons </option>
                    <option value={100}>100 Pokemons </option>
                </select>
            </div>
        </S.SelectorItemPerPage>
    );
};

export default SelectorItemPerPage;
