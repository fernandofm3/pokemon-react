import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import * as S from "./styles";

function FilterTypes({
    filterChangeInput,
    clearFilterForm,
    setClearFilterForm,
}) {
    const [sortByTypes, setSortByTypes] = useState("");

    //Lista de tipos
    const [ListNameType, setListNameType] = useState([]);

    //Limpar filtros do formulário
    useEffect(() => {
        if (clearFilterForm) {
            setSortByTypes("");
        }
    }, [clearFilterForm]);

    //Buscando a lista com os nomes do TIPOS de Pokemons
    useEffect(() => {
        api.get(`/type`).then((response) => {
            setListNameType(response.data.results);
        });
    }, []);

    return (
        <S.FilterTypes>
            <div className="div-types mb-3">
                <h5 className="filters-title mb-3">
                    <i className="bi bi-fire me-1"></i> Types
                </h5>

                <div className="mb-3">
                    <select
                        className="form-select"
                        aria-label=".form-select-lg example"
                        name="sortByTypes"
                        value={sortByTypes}
                        onChange={(e) => {
                            setSortByTypes(e.currentTarget.value);
                            filterChangeInput(e);
                            setClearFilterForm(false);
                        }}
                    >
                        <option value="">All</option>

                        {ListNameType.map((type, index) => {
                            return (
                                index < 18 && (
                                    <option value={type.name} key={index}>
                                        {type.name}
                                    </option>
                                )
                            );
                        })}
                    </select>
                </div>
            </div>
        </S.FilterTypes>
    );
}

export default FilterTypes;
