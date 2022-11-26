import React from "react";
import * as S from './styles';

const SearchPokemon = ({setSearch, search}) => {
    return (
        <S.SearchBar>            
            <input type="search" placeholder="Enter pokemon name or id"
                value={search}
                onChange={(event) => {                                
                    setSearch(event.target.value.toLowerCase());
                }}
            />
        </S.SearchBar>        
    )
}

export default SearchPokemon;