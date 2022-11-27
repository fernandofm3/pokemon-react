import React from "react";
import * as S from './styles';

const SelectorPokemonColor = ({SelectorColor, setSelectorColor, Search, ListNameColor}) => {    
    return (
        <S.SelectorPokemonColor
            className={
                Search !== ""
                ? 'item-display-none' 
                : null                            
            }
        >
            <div className="div-selector-box">
                <label htmlFor='selector-box'>Colors:</label>
                <select
                    id='selector-box' 
                    value={SelectorColor} 
                    onChange={(e)=>{setSelectorColor(e.target.value)}}
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