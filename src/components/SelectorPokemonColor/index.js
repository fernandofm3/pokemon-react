import React from "react";
import * as S from './styles';

const SelectorPokemonColor = ({SelectorColor, setSelectorColor, Search, ListNameColor, SelectorType, setRemoveLoading}) => {    
    return (
        <S.SelectorPokemonColor>
            <div className="div-selector-box">
                <label htmlFor='selector-box'>Colors:</label>
                <select
                    id='selector-box' 
                    value={SelectorColor} 
                    onChange={(e)=>{
                        setSelectorColor(e.target.value);
                        setRemoveLoading(false);
                    }}
                    disabled={
                        Search !== ""
                        ? true 
                        :
                        SelectorType !== ""
                        ? true
                        : false 
                    }
                >                    
                    <option value={''}> All </option>

                    {ListNameColor.map((name) => 
                        <option value={name.name} key={name.name}> {name.name} </option>
                    )}
                </select>
            </div>
        </S.SelectorPokemonColor>
    )
}

export default SelectorPokemonColor;