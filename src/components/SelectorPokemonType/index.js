import React from "react";
import * as S from './styles';

const SelectorPokemonType = ({SelectorType, setSelectorType, Search, ListNameType, SelectorColor, setRemoveLoading}) => {    
    return (
        <S.SelectorPokemonType>
            <div className="div-selector-box">
                <label htmlFor='selector-box'>Types:</label>
                <select
                    id='selector-box' 
                    value={SelectorType} 
                    onChange={(e)=>{
                        setSelectorType(e.target.value);
                        setRemoveLoading(false);
                    }}
                    disabled={
                        Search !== ""
                        ? true 
                        :
                        SelectorColor !== ""
                        ? true
                        : false 
                    }
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