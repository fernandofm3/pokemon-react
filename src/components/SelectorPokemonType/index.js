import React from "react";
import * as S from './styles';

const SelectorPokemonType = ({SelectorType, setSelectorType, Search, ListNameType}) => {    
    return (
        <S.SelectorPokemonType
            className={
                Search !== ""
                ? 'item-display-none' 
                : null                            
            }
        >
            <div className="div-selector-box">
                <label htmlFor='selector-box'>Types:</label>
                <select
                    id='selector-box' 
                    value={SelectorType} 
                    onChange={(e)=>{setSelectorType(e.target.value)}}
                >                    
                    <option value={''}> All </option>

                    {ListNameType.map((name) => 
                        <option value={name.name} key={name.name}> {name.name} </option>
                    )}
                </select>
            </div>
        </S.SelectorPokemonType>
    )
}

export default SelectorPokemonType;