import React from "react";
import * as S from './styles';

const SelectorItemPerPage = ({setLimit, limit, Search, SelectorType, SelectorColor, setRemoveLoading, setOffset}) => {
    return (
        <S.SelectorItemPerPage>
            <div className="div-selector-box">
                <label htmlFor='selector-box'>Display:</label>
                <select
                    id='selector-box' 
                    value={limit} 
                    onChange={(e)=>{
                        setLimit(Number(e.target.value));
                        setOffset(0);
                        setRemoveLoading(false);
                    }}
                    disabled={
                        Search !== ""
                        ? true 
                        : 
                        SelectorType !== ""
                        ? true
                        : 
                        SelectorColor !== ""
                        ? true 
                        : false
                    }
                >
                    <option value={12}>12 Pokemons </option>
                    <option value={24}>24 Pokemons </option>
                    <option value={36}>36 Pokemons </option>
                    <option value={48}>48 Pokemons </option>                    
                    <option value={60}>60 Pokemons </option>                    
                </select>
            </div>
        </S.SelectorItemPerPage>
    )
}

export default SelectorItemPerPage;