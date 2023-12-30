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
            <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-search"></i>
                </span>
                <input
                    className="search form-control"
                    id="floatingInput"
                    type="search"
                    placeholder="Name or ID"
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value.toLowerCase());
                    }}
                />
            </div>
        </S.SearchBar>
    );
};

export default SearchPokemon;
