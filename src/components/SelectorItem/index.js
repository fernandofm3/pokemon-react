import React from "react";
import * as S from './styles';

const SelectorItem = ({setLimit, limit}) => {
    return (
        <S.SelectorBox>
            <div className="div-selector-box">
                <label for='selector-box'>Exibir:</label>
                <select
                    id='selector-box' 
                    value={limit} 
                    onChange={(e)=>{setLimit(Number(e.target.value))}}
                >
                    <option value={12}>12 Pokemons </option>
                    <option value={18}>18 Pokemons </option>
                    <option value={30}>30 Pokemons </option>
                    <option value={42}>42 Pokemons </option>                    
                    <option value={60}>60 Pokemons </option>
                </select>
            </div>
        </S.SelectorBox>
    )
}

export default SelectorItem;