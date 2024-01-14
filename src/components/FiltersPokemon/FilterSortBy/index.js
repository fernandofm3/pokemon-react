import React, { useState, useEffect } from "react";
import * as S from "./styles";

function FilterSortBy({
    filterChangeInput,
    clearFilterForm,
    setClearFilterForm,
}) {
    const [sortByCategory, setSortByCategory] = useState("");

    //Limpar filtros do formulário
    useEffect(() => {
        if (clearFilterForm) {
            setSortByCategory("");
        }
    }, [clearFilterForm]);

    return (
        <S.FilterSortBy>
            <div className="div-sort-by-category mb-3">
                <h5 className="filters-title mb-3">
                    <i className="bi bi-list-columns me-1"></i> Sort by
                </h5>

                <div className="mb-3">
                    <select
                        className="form-select"
                        aria-label=".form-select-lg example"
                        name="sortByCategory"
                        value={sortByCategory}
                        onChange={(e) => {
                            setSortByCategory(e.currentTarget.value);
                            filterChangeInput(e);
                            setClearFilterForm(false);
                        }}
                    >
                        <option value="">Default</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>

                        <option value="smallestNumberFirst">
                            Smallest number first
                        </option>
                        <option value="highestNumberFirst">
                            Highest number first
                        </option>

                        <option value="shorterHeightToGreaterHeight">
                            Height - Shorter to Greater
                        </option>
                        <option value="greaterHeightToShorterHeight">
                            Height - Greater to Shorter
                        </option>

                        <option value="lightWeightToHeavyWeight">
                            Weight - Light to Heavy
                        </option>
                        <option value="heavyWeightToLightWeight">
                            Weight - Heavy to Light
                        </option>

                        <option value="hpWorstToBest">
                            HP - Worst to Best
                        </option>
                        <option value="hpBestToWorst">
                            HP - Best to Worst
                        </option>

                        <option value="attackWorstToBest">
                            Attack - Worst to Best
                        </option>
                        <option value="attackBestToWorst">
                            Attack - Best to Worst
                        </option>

                        <option value="defenseWorstToBest">
                            Defense - Worst to Best
                        </option>
                        <option value="defenseBestToWorst">
                            Defense - Best to Worst
                        </option>

                        <option value="spAtkWorstToBest">
                            Sp. Atk - Worst to Best
                        </option>
                        <option value="spAtkBestToWorst">
                            Sp. Atk - Best to Worst
                        </option>

                        <option value="spDefWorstToBest">
                            Sp. Def - Worst to Best
                        </option>
                        <option value="spDefBestToWorst">
                            Sp. Def - Best to Worst
                        </option>

                        <option value="speedWorstToBest">
                            Speed - Worst to Best
                        </option>
                        <option value="speedBestToWorst">
                            Speed - Best to Worst
                        </option>

                        <option value="weakerToStronger">
                            Total Stats - Worst to Best
                        </option>
                        <option value="strongerToWeaker">
                            Total Stats - Best to Worst
                        </option>
                    </select>
                </div>
            </div>
        </S.FilterSortBy>
    );
}

export default FilterSortBy;
