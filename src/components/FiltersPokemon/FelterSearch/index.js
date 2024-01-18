import React, { useState, useEffect } from "react";
import * as S from "./styles";

function FilterSearch({
    filterChangeInput,
    clearFilterForm,
    setClearFilterForm,
}) {
    const [sortBySearch, setSortBySearch] = useState("");

    //Limpar filtros do formulário
    useEffect(() => {
        if (clearFilterForm) {
            setSortBySearch("");
        }
    }, [clearFilterForm]);

    return (
        <S.FilterSearch>
            <div className="div-search mb-3">
                <h5 className="filters-title mb-3">
                    <i className="bi bi-search me-1"></i> Search
                </h5>

                <div className="mb-3">
                    <input
                        className="form-control mb-3"
                        type="text"
                        aria-label="default input example"
                        name="sortBySearch"
                        value={sortBySearch}
                        onChange={(e) => {
                            setSortBySearch(
                                e.currentTarget.value.toLowerCase()
                            );
                            filterChangeInput(e);
                            setClearFilterForm(false);
                        }}
                        placeholder="Name or Number"
                    />

                    <div className="alert alert-primary " role="alert">
                        <i className="bi bi-info-circle-fill me-2"></i> This
                        filter must be used alone!
                    </div>
                </div>
            </div>
        </S.FilterSearch>
    );
}

export default FilterSearch;
