import React from "react";
import * as S from "./styles";

const SearchPokemon = ({ setSearch, search }) => {
    //Ir ao topo da tela com uma diferença de 300PX para apresentar o Pokemon pesquisado.
    function scrollTop() {
        setTimeout(() => {
            window.scrollTo({
                top: 300,
                behavior: "smooth",
            });
        }, 500);
    }

    //Função que verifica se o usuário apertou o Enter.
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            scrollTop();
            setSearch(event.target.value.toLowerCase());
        }
    };

    return (
        <S.SearchBar>
            <input
                className="search"
                type="search"
                placeholder="Enter pokemon name or id"
                value={search}
                onChange={(event) => {
                    setSearch(event.target.value.toLowerCase());
                }}
            />

            <input
                className="searchMobile"
                type="search"
                placeholder="Enter pokemon name or id"
                onKeyDown={handleKeyDown}
                onChange={(event) => {
                    if (event.target.value === "") {
                        setSearch("");
                    }
                }}
            />
        </S.SearchBar>
    );
};

export default SearchPokemon;
